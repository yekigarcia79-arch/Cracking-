// Downloads a same-origin file while reporting how much has arrived.
//
// The response must be same-origin: GitHub's release host sends no CORS
// headers, so a direct cross-origin fetch would fail before the first byte.
// /download/sagacious.exe is proxied by download-endpoint.mjs for that reason.

export async function downloadWithProgress(url, { onProgress, signal } = {}) {
  const response = await fetch(url, { signal, cache: 'no-store' });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  // A static host with an SPA fallback answers a missing asset with index.html
  // and a 200. Saving that as "Sagacious.exe" would be worse than failing.
  const type = response.headers.get('content-type') || '';
  if (type.includes('text/html')) throw new Error('asset-missing');

  const total = Number(response.headers.get('content-length')) || 0;

  if (!response.body) {
    const blob = await response.blob();
    onProgress?.({ loaded: blob.size, total: blob.size });
    return blob;
  }

  const reader = response.body.getReader();
  const chunks = [];
  let loaded = 0;

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    loaded += value.byteLength;
    onProgress?.({ loaded, total });
  }

  return new Blob(chunks, {
    type: response.headers.get('content-type') || 'application/octet-stream',
  });
}

export function saveBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.rel = 'noopener';
  document.body.append(link);
  link.click();
  link.remove();
  // Keep the URL alive long enough for the browser to start writing the file.
  window.setTimeout(() => URL.revokeObjectURL(url), 30000);
}

export const formatSize = (bytes) => {
  if (!bytes) return '0 MB';
  const mb = bytes / (1024 * 1024);
  if (mb >= 0.95) return `${mb.toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
};
