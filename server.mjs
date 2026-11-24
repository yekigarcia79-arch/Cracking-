// Minimal production server for the built site.
// Serves ./dist and falls back to index.html so client routes resolve on refresh.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve(process.cwd(), 'dist');
const port = Number(process.env.PORT || 4173);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

async function send(file, res) {
  const body = await readFile(file);
  res.writeHead(200, {
    'content-type': types[extname(file)] || 'application/octet-stream',
    'cache-control': extname(file) === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
  });
  res.end(body);
}

createServer(async (req, res) => {
  const url = decodeURIComponent((req.url || '/').split('?')[0]);
  const candidate = normalize(join(root, url));
  try {
    if (!candidate.startsWith(root)) throw new Error('outside root');
    const info = await stat(candidate);
    if (info.isFile()) return await send(candidate, res);
  } catch {
    /* fall through to the app shell */
  }
  try {
    const known = ['/', '/products', '/products/sagacious', '/products/sugacious', '/about'];
    const route = url.replace(/\/+$/, '') || '/';
    const shell = await readFile(join(root, 'index.html'));
    res.writeHead(known.includes(route) ? 200 : 404, {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-cache',
    });
    res.end(shell);
  } catch {
    res.writeHead(500, { 'content-type': 'text/plain' });
    res.end('Run "npm run build" before starting the production server.');
  }
}).listen(port, () => {
  console.log(`Cracking site → http://localhost:${port}`);
});
