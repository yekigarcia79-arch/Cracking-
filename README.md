# Cracking

The website for **Cracking**, a small software studio, and its first product
**Sagacious** — a Windows utility that enumerates the execution traces a machine
leaves behind, removes the ones you select, and rebuilds the NTFS change journal
so the record stays consistent.

The site is written as a product presentation rather than a brochure: the
interface is reconstructed and made interactive, the artifact coverage is listed
store by store, and the claims are the ones the tool can actually keep.

## The pages

| Path | What it presents |
|---|---|
| `/` | Landing — the premise, the fourteen artifact stores, four capabilities, the interface, the details that matter after the first delete |
| `/products` | Catalogue. One product, listed only because it is finished, documented and supported |
| `/products/sagacious` | The product in full — 3D window, interface anatomy by region, coverage table, behaviour, command line, specification |
| `/about` | The studio's principles, technical notes, and the things the product deliberately refuses to do |
| anything else | A designed 404 that stays inside the record metaphor |

The old misspelt slug `/products/sugacious` redirects to the canonical path, so
existing links keep working without leaving a duplicate history entry.

The product page carries the download. The binary ships in `public/Sagacious.exe`,
so it is served from the same origin as the page — that is what makes a real
progress bar possible, because the browser can read its `Content-Length`. A
direct `fetch()` of the GitHub release URL cannot do this: the asset host sends
no `Access-Control-Allow-Origin`. The release link survives only as a fallback
in the button's error state.

## What the site is built from

| Layer | Choice |
|---|---|
| Build | Vite 7 |
| Runtime | Vanilla ES modules, no UI framework |
| 3D | Three.js 0.187 — a WebGL body with the real interface mounted as a CSS3D screen |
| Type | Geist and Geist Mono, self-hosted |
| Server | `server.mjs`, a dependency-free `node:http` server with SPA fallback and real 404 status |

## How it is organised

```
src/
  main.js               shell, route table, redirects
  lib/
    router.js           History API routing, view transitions, titles and meta
    dom.js              element and event helpers
    icons.js            inline 24px stroke icons
    motion.js           reveal and parallax observers, clipboard helper
    download.js         streaming fetch with progress, blob save
  pages/                one module per page (render + mount/unmount)
  components/
    chrome.js           header, mobile menu, footer
    logo.js             the Cracking mark and the product icon
    download.js         download button and its progress states
    app-window.js       the 560x400 interface, reconstructed at 2x
    window-frame.js     physical frame plus ResizeObserver scaling
  data/
    products.js         product registry: slug, index, copy, href
    sagacious.js        product facts: artifacts, capabilities, specs, rows
  three/stage.js        WebGL body, CSS3D screen, drag and parallax camera
  styles/               design tokens, chrome, pages, product, app window, stage
brand/                  logo sources and exported assets
public/                 served as-is: mark, favicon, product icon, Sagacious.exe
```

Two rules hold it together:

- **Copy comes from data.** The interface preview, the coverage table and the
  specification sheet all read from `src/data/sagacious.js`, so a fact changes
  in one place.
- **Pages own their lifecycle.** Each page returns `id`, `title`, `description`,
  `render` and optional `mount` / `unmount`; the router tears the previous page
  down before mounting the next, so observers, 3D stages and listeners are
  released rather than leaked.

## Adding a product

1. Add an entry to `products` in `src/data/products.js` — slug, index, copy, href.
2. Add a page module under `src/pages/` returning the same lifecycle object.
3. Register the route in `src/main.js`, and link it from `chrome.js` if it should
   appear in the navigation.

Catalogue cards and the product page read from that registry. The footer links
are static and still need updating by hand.

## Brand assets

The mark is the faceted gem — a black polygonal ring with a diamond opening. It
is drawn **bare**: no tile, no plate behind it. On the `#08090A` header it reads
through its own facets.

| File | Purpose |
|---|---|
| `brand/cracking-mark.png` | master mark, 640×640, transparent ground |
| `brand/cracking-lockup.png` | 1280×400 lockup for decks and listings |
| `public/cracking-mark.png` | what the site serves |
| `public/favicon.png` | 256×256 tab icon |

The transparent ground was produced with `brand/trim-bg.mjs`, which flood-fills
from the border and the enclosed diamond opening, then un-mattes the
anti-aliased rim. A plain luminance threshold cannot do this job: the gem
carries a pure-white specular highlight *inside* the shape, and a threshold
would punch a hole through it.

## Notes

- **Naming.** Cracking is the site and the studio; Sagacious is the product.
  They are not interchangeable in copy or metadata.
- **Alpha in image viewers.** Previewers paint transparency as white, so a
  transparent PNG can look like it still has a white box. Check the alpha
  channel, not the thumbnail.
- **Contrast.** The mark is black on a near-black page. It is legible through
  its highlights, but it is deliberately low-contrast — if it ever needs to read
  stronger, lift the mark's brightness rather than reintroducing a light plate.
