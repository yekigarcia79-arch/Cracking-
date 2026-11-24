// Removes a flat white background from a PNG and writes an RGBA PNG.
//
// A plain luminance threshold is wrong for this logo: it carries a pure-white
// specular highlight inside the shape and light facets around 220. So the
// background is found by flood fill from the border (plus the enclosed diamond
// hole), and only the anti-aliased rim is given partial alpha — with the white
// contribution subtracted so the mark sits on dark surfaces without a halo.
//
//   node brand/trim-bg.mjs <input.png> <output.png> [threshold]

import { readFileSync, writeFileSync } from 'node:fs';
import { inflateSync, deflateSync } from 'node:zlib';

const [, , inPath, outPath, thresholdArg] = process.argv;
if (!inPath || !outPath) {
  console.error('usage: node brand/trim-bg.mjs <input.png> <output.png> [threshold]');
  process.exit(1);
}
const T = Number(thresholdArg || 245);

/* ---------- decode ---------- */

const file = readFileSync(inPath);
let pos = 8;
let width = 0;
let height = 0;
let colorType = 0;
const idat = [];

while (pos < file.length) {
  const length = file.readUInt32BE(pos);
  const type = file.toString('ascii', pos + 4, pos + 8);
  if (type === 'IHDR') {
    width = file.readUInt32BE(pos + 8);
    height = file.readUInt32BE(pos + 12);
    colorType = file[pos + 17];
  }
  if (type === 'IDAT') idat.push(file.subarray(pos + 8, pos + 8 + length));
  pos += 12 + length;
}

if (colorType !== 2 && colorType !== 6) {
  throw new Error(`expected RGB or RGBA input, got colour type ${colorType}`);
}

const bpp = colorType === 6 ? 4 : 3;
const stride = width * bpp;
const raw = inflateSync(Buffer.concat(idat));
const pixels = Buffer.alloc(height * stride);
let rp = 0;

for (let y = 0; y < height; y += 1) {
  const filter = raw[rp];
  rp += 1;
  const line = raw.subarray(rp, rp + stride);
  rp += stride;
  const prev = y ? pixels.subarray((y - 1) * stride, y * stride) : Buffer.alloc(stride);
  const cur = pixels.subarray(y * stride, (y + 1) * stride);
  for (let x = 0; x < stride; x += 1) {
    const a = x >= bpp ? cur[x - bpp] : 0;
    const b = prev[x];
    const c = x >= bpp ? prev[x - bpp] : 0;
    let v = line[x];
    if (filter === 1) v += a;
    else if (filter === 2) v += b;
    else if (filter === 3) v += (a + b) >> 1;
    else if (filter === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a);
      const pb = Math.abs(p - b);
      const pc = Math.abs(p - c);
      v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
    }
    cur[x] = v & 255;
  }
}

/* ---------- background mask ---------- */

const total = width * height;
const luma = new Uint8Array(total);
for (let i = 0; i < total; i += 1) {
  const o = i * bpp;
  luma[i] = Math.round(0.2126 * pixels[o] + 0.7152 * pixels[o + 1] + 0.0722 * pixels[o + 2]);
}

const isBg = new Uint8Array(total);
const stack = [];
const seed = (x, y) => {
  const i = y * width + x;
  if (!isBg[i] && luma[i] >= T) {
    isBg[i] = 1;
    stack.push(i);
  }
};

for (let x = 0; x < width; x += 1) {
  seed(x, 0);
  seed(x, height - 1);
}
for (let y = 0; y < height; y += 1) {
  seed(0, y);
  seed(width - 1, y);
}
// The diamond opening is enclosed by the mark, so it needs its own seed.
seed(width >> 1, height >> 1);

while (stack.length) {
  const i = stack.pop();
  const x = i % width;
  const y = (i / width) | 0;
  if (x > 0) seed(x - 1, y);
  if (x < width - 1) seed(x + 1, y);
  if (y > 0) seed(x, y - 1);
  if (y < height - 1) seed(x, y + 1);
}

/* ---------- alpha ---------- */

const out = Buffer.alloc(total * 4);
let cleared = 0;
let feathered = 0;

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const i = y * width + x;
    const o = i * bpp;
    const q = i * 4;
    let r = pixels[o];
    let g = pixels[o + 1];
    let b = pixels[o + 2];

    if (isBg[i]) {
      cleared += 1;
      continue;
    }

    const onEdge =
      (x > 0 && isBg[i - 1]) ||
      (x < width - 1 && isBg[i + 1]) ||
      (y > 0 && isBg[i - width]) ||
      (y < height - 1 && isBg[i + width]);

    let alpha = 255;
    if (onEdge) {
      // Ramp only the rim: 254 is paper white, 220 is the lightest facet.
      const a = Math.min(1, Math.max(0, (254 - luma[i]) / 34));
      alpha = Math.round(a * 255);
      if (alpha > 0 && alpha < 255) {
        feathered += 1;
        // Unmatte: subtract the white that bled into a partly covered pixel.
        const k = alpha / 255;
        r = Math.min(255, Math.max(0, Math.round((r - (1 - k) * 254) / k)));
        g = Math.min(255, Math.max(0, Math.round((g - (1 - k) * 254) / k)));
        b = Math.min(255, Math.max(0, Math.round((b - (1 - k) * 254) / k)));
      }
    }

    out[q] = r;
    out[q + 1] = g;
    out[q + 2] = b;
    out[q + 3] = alpha;
  }
}

/* ---------- encode ---------- */

const crcTable = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

const crc32 = (buf) => {
  let c = -1;
  for (let i = 0; i < buf.length; i += 1) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
};

const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const name = Buffer.from(type, 'ascii');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([name, data])));
  return Buffer.concat([len, name, data, crc]);
};

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(width, 0);
ihdr.writeUInt32BE(height, 4);
ihdr[8] = 8;
ihdr[9] = 6;
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

const scanlines = Buffer.alloc(height * (width * 4 + 1));
for (let y = 0; y < height; y += 1) {
  const rowStart = y * (width * 4 + 1);
  scanlines[rowStart] = 0;
  out.copy(scanlines, rowStart + 1, y * width * 4, (y + 1) * width * 4);
}

writeFileSync(
  outPath,
  Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(scanlines, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
);

console.log(
  `${width}×${height}: ${cleared} px cleared (${((cleared / total) * 100).toFixed(1)}%), ${feathered} rim px feathered → ${outPath}`
);
