// Streams the Sagacious release asset through this origin.
//
// Why a proxy: GitHub's asset host (release-assets.githubusercontent.com) does
// not send Access-Control-Allow-Origin, so the page cannot fetch() the file and
// therefore cannot read Content-Length or report download progress. Serving it
// from our own origin makes the response same-origin, streamable and measurable.
//
// Used by server.mjs (production) and by the Vite middleware in vite.config.js
// (dev and preview), so both paths behave identically.

import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

export const ASSET_URL =
  'https://github.com/yekigarcia79-arch/Cracking-/releases/download/v1.0.0/Sagacious.exe';

export const ASSET_NAME = 'Sagacious.exe';

export async function handleDownload(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { allow: 'GET, HEAD', 'content-type': 'text/plain' });
    res.end('Method not allowed');
    return;
  }

  try {
    const upstream = await fetch(ASSET_URL, { redirect: 'follow' });
    if (!upstream.ok) throw new Error(`upstream responded ${upstream.status}`);

    const length = upstream.headers.get('content-length');
    const headers = {
      'content-type': 'application/octet-stream',
      'content-disposition': `attachment; filename="${ASSET_NAME}"`,
      'cache-control': 'no-store',
      'x-download-source': 'github-release',
    };
    if (length) headers['content-length'] = length;

    res.writeHead(200, headers);

    if (req.method === 'HEAD' || !upstream.body) {
      res.end();
      return;
    }

    await pipeline(Readable.fromWeb(upstream.body), res);
  } catch (error) {
    if (!res.headersSent) {
      res.writeHead(502, { 'content-type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ error: 'download-unavailable' }));
    } else {
      res.destroy(error);
    }
  }
}
