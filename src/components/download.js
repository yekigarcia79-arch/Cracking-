import { icon } from '../lib/icons.js';
import { downloadWithProgress, saveBlob, formatSize } from '../lib/download.js';

// Direct release link, used only if the same-origin proxy is unreachable
// (for example when the site is hosted as static files with no Node process).
const FALLBACK_URL =
  'https://github.com/yekigarcia79-arch/Cracking-/releases/download/v1.0.0/Sagacious.exe';

const IDLE_META = 'Windows 10 / 11 · x64 · v1.0.0';

export function createDownload({
  url = '/Sagacious.exe',
  filename = 'Sagacious.exe',
} = {}) {
  const el = document.createElement('div');
  el.className = 'dl';
  el.dataset.state = 'idle';
  el.innerHTML = `
    <button class="dl__btn" type="button" data-start>
      <span class="dl__fill" data-fill aria-hidden="true"></span>
      <span class="dl__body">
        <span class="dl__icon" data-icon>${icon('arrowDown', 16)}</span>
        <span class="dl__text">
          <span class="dl__label" data-label>Download Sagacious</span>
          <span class="dl__meta" data-meta>${IDLE_META}</span>
        </span>
        <span class="dl__pct" data-pct aria-hidden="true"></span>
      </span>
    </button>
    <p class="dl__status" data-status role="status" aria-live="polite"></p>`;

  const button = el.querySelector('[data-start]');
  const fill = el.querySelector('[data-fill]');
  const iconEl = el.querySelector('[data-icon]');
  const label = el.querySelector('[data-label]');
  const meta = el.querySelector('[data-meta]');
  const pct = el.querySelector('[data-pct]');
  const status = el.querySelector('[data-status]');

  let controller = null;
  let resetTimer = 0;

  function setIdle() {
    el.dataset.state = 'idle';
    fill.style.width = '0%';
    pct.textContent = '';
    label.textContent = 'Download Sagacious';
    meta.textContent = IDLE_META;
    iconEl.innerHTML = icon('arrowDown', 16);
    status.textContent = '';
  }

  function announce(text) {
    // The visible percentage is aria-hidden; state changes are announced once.
    status.textContent = text;
  }

  async function start() {
    if (el.dataset.state === 'busy') return;
    window.clearTimeout(resetTimer);

    el.dataset.state = 'busy';
    fill.style.width = '0%';
    label.textContent = 'Starting download';
    meta.textContent = 'Contacting the release host';
    pct.textContent = '';
    iconEl.innerHTML = icon('arrowDown', 16);
    announce('Download started.');

    controller = new AbortController();

    try {
      const blob = await downloadWithProgress(url, {
        signal: controller.signal,
        onProgress: ({ loaded, total }) => {
          const ratio = total ? Math.min(1, loaded / total) : 0;
          fill.style.width = `${(ratio * 100).toFixed(1)}%`;
          pct.textContent = total ? `${Math.round(ratio * 100)}%` : '';
          label.textContent = 'Downloading Sagacious';
          meta.textContent = total
            ? `${formatSize(loaded)} of ${formatSize(total)}`
            : `${formatSize(loaded)} downloaded`;
        },
      });

      saveBlob(blob, filename);

      el.dataset.state = 'done';
      fill.style.width = '100%';
      pct.textContent = '';
      label.textContent = 'Downloaded';
      meta.textContent = `${formatSize(blob.size)} · saved to your downloads`;
      iconEl.innerHTML = icon('check', 16);
      announce(`Download complete. ${formatSize(blob.size)} saved as ${filename}.`);

      resetTimer = window.setTimeout(() => {
        if (el.dataset.state === 'done') setIdle();
      }, 6000);
    } catch (error) {
      if (error.name === 'AbortError') return;

      el.dataset.state = 'error';
      fill.style.width = '0%';
      pct.textContent = '';
      label.textContent = 'Download failed — try again';
      meta.textContent = 'The file could not be downloaded';
      iconEl.innerHTML = icon('reset', 16);
      status.innerHTML = `If it keeps failing, <a href="${FALLBACK_URL}" target="_blank" rel="noopener">download from GitHub</a>.`;
    }
  }

  button.addEventListener('click', start);

  return {
    el,
    destroy() {
      window.clearTimeout(resetTimer);
      controller?.abort();
      button.removeEventListener('click', start);
    },
  };
}
