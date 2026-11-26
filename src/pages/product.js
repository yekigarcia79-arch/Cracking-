import { artifacts, specs } from '../data/sagacious.js';
import { icon } from '../lib/icons.js';
import { productIcon } from '../components/logo.js';
import { createDownload } from '../components/download.js';
import { initReveals } from '../lib/motion.js';
import { mountWindow } from '../components/window-frame.js';

const regions = [
  {
    id: 'header',
    index: '01',
    title: 'Header',
    body: 'The state of the list before anything runs: how many traces were found, how many are ticked, and how many match the public list.',
    points: ['Trace, selection and match counts', 'ADMIN badge reflects elevation'],
  },
  {
    id: 'tools',
    index: '02',
    title: 'Filter and SYS',
    body: 'One field matches a path, a file name or an artifact tag. SYS is a scope switch, not a filter menu: lit means system traces are included.',
    points: ['Matches path, name and tag', 'SYS off hides \\Windows\\ rows', 'Filter state is reported in the footer'],
  },
  {
    id: 'list',
    index: '03',
    title: 'Trace rows',
    body: 'Every row carries its store, its file and its full path. Pre-selected rows are the ones the public list tracks; everything else loads unticked.',
    points: ['Stores are labelled, not abbreviated away', 'Click a row to include or exclude it', 'Running deletions dim the list, never freeze it'],
  },
  {
    id: 'actions',
    index: '04',
    title: 'Actions',
    body: 'Wipe the selection, arm file removal, or reload the list. The armed state is visible on the button, not buried in a confirmation dialog.',
    points: ['DELETE FILES arms recursive removal', 'DELETE ALL selects and wipes in one pass', 'Reload restores the list without restarting'],
  },
  {
    id: 'foot',
    index: '05',
    title: 'Status line',
    body: 'The only place results are reported. Volume resets, skipped system files, background sweep finds and list lookups all land here.',
    points: ['Volume count after a journal rebuild', 'Files pending at next boot', 'Public-list state and cache age'],
  },
];

function page() {
  const el = document.createElement('div');
  el.className = 'page page--product';
  el.innerHTML = `
    <section class="product-hero">
      <div class="container">
        <div class="product-hero__top">
          <div class="product-hero__id">
            ${productIcon('lg')}
            <div>
              <p class="eyebrow" data-reveal>Cracking · Product 01 — Windows utility</p>
              <h1 class="display product-hero__name" data-reveal style="--reveal-delay: 50ms">Sagacious</h1>
            </div>
          </div>
          <div class="product-hero__tags" data-reveal style="--reveal-delay: 90ms">
            <span class="pill"><i></i>Released</span>
            <span class="chip mono">Windows x64</span>
          </div>
        </div>
        <div class="product-hero__row">
          <p class="lead product-hero__lead" data-reveal style="--reveal-delay: 120ms">
            Sagacious finds the execution traces that a Windows machine keeps, shows them as one
            readable list, and removes the ones you choose. Then it rebuilds the change journal on
            every fixed volume, so the file-deleted records produced by the wipe are gone too.
          </p>
          <dl class="product-hero__meta" data-reveal style="--reveal-delay: 160ms">
            <div><dt>Artifact sources</dt><dd>${artifacts.length}</dd></div>
            <div><dt>Window</dt><dd>560 × 400</dd></div>
            <div><dt>Interface</dt><dd>GUI</dd></div>
          </dl>
        </div>
        <div class="product-hero__download" data-download data-reveal style="--reveal-delay: 200ms"></div>
      </div>
      <div class="container">
        <div class="stage-meta stage-meta--product">
          <span class="stage-meta__label"><i></i>Interactive preview</span>
          <span class="stage-meta__hint">${icon('reset', 12)}<span>Drag to rotate</span></span>
        </div>
        <div class="product-stage" id="product-stage" aria-label="Interactive 3D presentation of the Sagacious window"></div>
        <div class="product-stage__caption">
          <span class="mono">INTERACTIVE · THREE.JS</span>
          <span class="mono">DRAG TO ROTATE · TICK A ROW · RUN A WIPE</span>
        </div>
      </div>
    </section>

    <section class="section section--interface" id="interface">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label"><p class="eyebrow">Interface</p></div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">The window, part by part.</h2>
            <p class="lead">
              Five regions carry every interaction. Select one to outline it in the interface and
              read what it is responsible for.
            </p>
          </div>
          <div class="section-head__aside" data-reveal style="--reveal-delay: 80ms">
            The preview below is live. Rows, filter, SYS and the delete flow all behave.
          </div>
        </div>

        <div class="anatomy">
          <div class="anatomy__window" data-reveal>
            <div class="anatomy__canvas" id="anatomy-window"></div>
            <div class="anatomy__caption">
              <span class="mono">560 × 400 · RENDERED AT 2×</span>
              <span class="mono anatomy__swipe">SWIPE TO INSPECT</span>
              <span class="mono" data-anatomy-state>REGION 01 / 05</span>
            </div>
          </div>
          <div class="anatomy__panel" data-reveal style="--reveal-delay: 90ms">
            <div class="anatomy__tabs" role="tablist" aria-label="Interface regions" aria-orientation="vertical">
              ${regions
                .map(
                  (region, index) => `
                <button class="anatomy__tab${index === 0 ? ' is-active' : ''}" type="button" role="tab"
                  id="tab-${region.id}" aria-controls="panel-region" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}"
                  data-region-tab="${region.id}">
                  <span class="anatomy__tab-index mono">${region.index}</span>
                  <span class="anatomy__tab-label">${region.title}</span>
                  <span class="anatomy__tab-mark" aria-hidden="true"></span>
                </button>`
                )
                .join('')}
            </div>
            <div class="anatomy__detail" id="panel-region" role="tabpanel" aria-labelledby="tab-header" tabindex="0">
              <p class="anatomy__detail-title">${regions[0].title}</p>
              <p class="anatomy__detail-body">${regions[0].body}</p>
              <ul class="anatomy__points">
                ${regions[0].points.map((point) => `<li>${point}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="coverage">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label"><p class="eyebrow">Coverage</p></div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">Fourteen places a launch can hide.</h2>
            <p class="lead">
              Each store is read directly, normalised into rows and — when you delete — rewritten or
              pruned in place. A missing key is not the same as a shorter list.
            </p>
          </div>
          <div class="section-head__aside" data-reveal style="--reveal-delay: 80ms">
            Registry · file system · NTFS journal · live process state
          </div>
        </div>

        <div class="coverage" data-reveal>
          <div class="coverage__head">
            <span>Tag</span><span>Store</span><span>Location</span><span>Holds</span>
          </div>
          ${artifacts
            .map(
              (item) => `
            <div class="coverage__row">
              <span class="coverage__tag">${item.tag}</span>
              <span class="coverage__name">${item.name}</span>
              <span class="coverage__where mono">${item.where}</span>
              <span class="coverage__note">${item.note}</span>
            </div>`
            )
            .join('')}
        </div>
        <p class="coverage__foot" data-reveal>
          ${icon('shield', 15)}
          Shim cache, BAM, Amcache and UserAssist are rewritten or pruned in place — not unlinked —
          so the store stays valid after the edit.
        </p>
      </div>
    </section>

    <section class="section" id="capabilities">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label"><p class="eyebrow">Behaviour</p></div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">Deletion is more than a row disappearing.</h2>
            <p class="lead">
              Two details decide whether a wipe actually holds: what happens to the files behind
              the rows, and what happens to the journal that recorded their removal.
            </p>
          </div>
        </div>

        <div class="dives">
          <article class="dive" data-reveal>
            <div class="dive__text">
              <span class="dive__index mono">01</span>
              <h3 class="h3">Files, not just rows.</h3>
              <p>
                Arm DELETE FILES and every delete also removes the software behind the ticked rows:
                the executable’s folder chain, its data folders, installers, archives, shortcuts and
                loose files that carry the name.
              </p>
              <ul class="dive__list">
                <li>Matching is token-based, so <span class="mono">com.solara.v3</span> goes and <span class="mono">Xenoblade.png</span> stays.</li>
                <li>A running copy is killed first, including WebView2 and Electron children.</li>
                <li>Anything still locked is queued for deletion at the next boot.</li>
              </ul>
            </div>
            <div class="dive__visual">
              <div class="tree">
                <div class="tree__head mono">DELETE FILES · TOKEN MATCH</div>
                <div class="tree__row tree__row--root"><span class="tree__glyph">▾</span>Xeno-v1.3.65\\</div>
                <div class="tree__row tree__row--child"><span class="tree__glyph">├─</span>Xeno.exe<span class="tree__badge">deleted</span></div>
                <div class="tree__row tree__row--child"><span class="tree__glyph">├─</span>Xeno.dll<span class="tree__badge">deleted</span></div>
                <div class="tree__row tree__row--child"><span class="tree__glyph">└─</span>WebView2\\<span class="tree__badge">deleted</span></div>
                <div class="tree__row tree__row--sibling"><span class="tree__glyph">├─</span>Xeno-v1.3.65.rar<span class="tree__badge">deleted</span></div>
                <div class="tree__row tree__row--sibling"><span class="tree__glyph">├─</span>Setup_Xeno.exe<span class="tree__badge">deleted</span></div>
                <div class="tree__row tree__row--keep"><span class="tree__glyph">└─</span>Xenoblade.png<span class="tree__keep">kept</span></div>
                <div class="tree__foot mono">C:\\Users\\Public\\Downloads</div>
              </div>
            </div>
          </article>

          <article class="dive dive--reverse" data-reveal>
            <div class="dive__text">
              <span class="dive__index mono">02</span>
              <h3 class="h3">The journal is rebuilt, not edited.</h3>
              <p>
                Deleting a file writes a new record into the NTFS change journal. Wiping traces and
                leaving those records behind is a half-finished job, so every delete ends with a
                fresh journal on each fixed volume.
              </p>
              <ul class="dive__list">
                <li>The status line reports how many volumes were reset.</li>
                <li>The same pass removes the wipe’s own file-deleted records.</li>
              </ul>
            </div>
            <div class="dive__visual">
              <div class="volumes">
                <div class="volumes__head mono">JOURNAL REBUILD · FIXED VOLUMES</div>
                ${['C:', 'D:', 'E:']
                  .map(
                    (volume, index) => `
                  <div class="volume">
                    <span class="volume__name mono">${volume}</span>
                    <span class="volume__track"><i style="--d:${index * 120}ms"></i></span>
                    <span class="volume__state mono">REBUILT</span>
                  </div>`
                  )
                  .join('')}
                <div class="volumes__foot">
                  <span class="mono">$UsnJrnl</span>
                  <span class="mono">3 / 3 volumes</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="specs">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label"><p class="eyebrow">Specification</p></div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">The whole sheet.</h2>
            <p class="lead">Everything a release note would tell you, in one place.</p>
          </div>
        </div>
        <div class="specs">
          <div class="spec-table">
            ${specs
              .map(
                (spec, index) => `
              <div class="spec-table__row" data-reveal style="--reveal-delay: ${index * 30}ms">
                <span class="spec-table__key">${spec.key}</span>
                <span class="spec-table__value">${spec.value}</span>
              </div>`
              )
              .join('')}
          </div>
          <aside class="specs__aside" data-reveal style="--reveal-delay: 100ms">
            <div class="specs__badge">${icon('lock', 18)}</div>
            <h3>Administrator, by design.</h3>
            <p>
              Reading BAM, Amcache and the SYSTEM hive requires elevation, and so does rewriting
              them. The manifest requests it at launch, so the stores can be read and rewritten.
            </p>
            <div class="specs__note mono">NO SERVICE · NO TRAY ICON · NO ACCOUNT</div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section section--cta">
      <div class="container cta">
        <div class="cta__body" data-reveal>
          <p class="eyebrow">Sagacious</p>
          <h2 class="h2 cta__title">That is the whole product.</h2>
          <p class="lead">One window, fourteen stores, a rebuilt journal.</p>
          <div class="btn-row">
            <a class="btn btn--primary" href="/products">All products ${icon('arrowRight', 16, 'icon--arrow')}</a>
            <a class="btn" href="/about">About the product</a>
          </div>
        </div>
        <div class="cta__aside" data-reveal style="--reveal-delay: 100ms">
          <div class="cta__spec"><span class="mono">PLATFORM</span><p>Windows 10 / 11 · x64</p></div>
          <div class="cta__spec"><span class="mono">PRIVILEGES</span><p>Administrator</p></div>
        </div>
      </div>
    </section>`;

  let stage;
  let view;
  let download;
  let disposed = false;
  let reveals = () => {};
  let tabCleanup = () => {};

  return {
    id: 'product',
    title: 'Sagacious',
    fullTitle: 'Sagacious — Trace hygiene for Windows',
    description:
      'Sagacious by Cracking: fourteen artifact sources, selective removal and a rebuilt change journal. Explore the interface in 3D.',
    render: () => el,
    mount() {
      reveals = initReveals(el);
      view = mountWindow(el.querySelector('#anatomy-window'), { interactive: true, minWidth: 660 });
      download = createDownload();
      el.querySelector('[data-download]').append(download.el);
      import('../three/stage.js').then(({ createStage }) => {
        if (disposed) return;
        stage = createStage(el.querySelector('#product-stage'), { variant: 'product' });
      });

      const tabs = Array.from(el.querySelectorAll('[data-region-tab]'));
      const panel = el.querySelector('#panel-region');
      const state = el.querySelector('[data-anatomy-state]');
      const detailTitle = panel.querySelector('.anatomy__detail-title');
      const detailBody = panel.querySelector('.anatomy__detail-body');
      const detailPoints = panel.querySelector('.anatomy__points');

      function select(id, { focus = false } = {}) {
        const region = regions.find((item) => item.id === id) || regions[0];
        tabs.forEach((tab) => {
          const active = tab.dataset.regionTab === id;
          tab.classList.toggle('is-active', active);
          tab.setAttribute('aria-selected', String(active));
          tab.tabIndex = active ? 0 : -1;
          if (active && focus) tab.focus({ preventScroll: true });
        });
        panel.setAttribute('aria-labelledby', `tab-${region.id}`);
        detailTitle.textContent = region.title;
        detailBody.textContent = region.body;
        detailPoints.innerHTML = region.points.map((point) => `<li>${point}</li>`).join('');
        state.textContent = `REGION ${region.index} / 05`;
        view?.app.setHighlight(region.id);
      }

      const onClick = (event) => {
        const tab = event.target.closest('[data-region-tab]');
        if (tab) select(tab.dataset.regionTab);
      };
      const onKey = (event) => {
        const tab = event.target.closest('[data-region-tab]');
        if (!tab) return;
        const index = tabs.indexOf(tab);
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
          event.preventDefault();
          select(tabs[(index + 1) % tabs.length].dataset.regionTab, { focus: true });
        } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
          event.preventDefault();
          select(tabs[(index - 1 + tabs.length) % tabs.length].dataset.regionTab, { focus: true });
        } else if (event.key === 'Home') {
          event.preventDefault();
          select(tabs[0].dataset.regionTab, { focus: true });
        } else if (event.key === 'End') {
          event.preventDefault();
          select(tabs[tabs.length - 1].dataset.regionTab, { focus: true });
        }
      };
      el.querySelector('.anatomy__tabs').addEventListener('click', onClick);
      el.querySelector('.anatomy__tabs').addEventListener('keydown', onKey);
      tabCleanup = () => {
        el.querySelector('.anatomy__tabs')?.removeEventListener('click', onClick);
        el.querySelector('.anatomy__tabs')?.removeEventListener('keydown', onKey);
      };

      // Start on the list region: the rows are the most legible part of the window.
      select('header');
    },
    unmount() {
      disposed = true;
      reveals();
      tabCleanup();
      stage?.destroy();
      view?.destroy();
      download?.destroy();
      stage = null;
      view = null;
      download = null;
    },
  };
}

export default page();
