import { artifacts, capabilities, highlights } from '../data/sagacious.js';
import { icon } from '../lib/icons.js';
import { initReveals, initParallax } from '../lib/motion.js';
import { mountWindow } from '../components/window-frame.js';

const annotations = [
  { index: '01', title: 'Header', body: 'Trace count, selection count, public-list matches and administrator state.' },
  { index: '02', title: 'Filter and SYS', body: 'Match a path, a file name or an artifact tag. SYS includes system traces; switch it off for software only.' },
  { index: '03', title: 'Trace rows', body: 'Every row names its store, its file and its path. Pre-selected rows are the ones the public list tracks.' },
  { index: '04', title: 'Actions', body: 'Wipe the selection, arm file removal, or reload the list. The status line reports what happened.' },
];

function page() {
  const el = document.createElement('div');
  el.className = 'page page--home';
  el.innerHTML = `
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__copy">
          <p class="eyebrow" data-reveal>Sagacious · Windows x64</p>
          <h1 class="display hero__title" data-reveal style="--reveal-delay: 60ms">
            Windows remembers.
            <span class="dim">You decide what stays.</span>
          </h1>
          <p class="lead hero__lead" data-reveal style="--reveal-delay: 130ms">
            Sagacious reads the execution records that a Windows machine keeps — registry stores,
            Prefetch files, the NTFS change journal — removes the rows you select, and rebuilds
            the journal so the record stays consistent.
          </p>
          <div class="btn-row" data-reveal style="--reveal-delay: 200ms">
            <a class="btn btn--primary" href="/products/sagacious">
              Explore Sagacious ${icon('arrowRight', 16, 'icon--arrow')}
            </a>
            <a class="btn" href="#capabilities">See how it works</a>
          </div>
          <dl class="hero__meta" data-reveal style="--reveal-delay: 270ms">
            <div><dt>Artifact sources</dt><dd>${artifacts.length}</dd></div>
            <div><dt>Change journal</dt><dd>USN</dd></div>
          </dl>
        </div>
        <div class="hero__stage" data-parallax="0.018">
          <div class="stage-meta">
            <span class="stage-meta__label"><i></i>Interactive preview</span>
            <span class="stage-meta__hint">${icon('reset', 12)}<span>Drag to rotate</span></span>
          </div>
          <div class="hero__stage-inner" id="hero-stage"></div>
        </div>
      </div>
      <div class="container hero__foot">
        <span class="mono">01 — OVERVIEW</span>
        <a class="hero__jump" href="#interface">Interface in detail ${icon('arrowRight', 13)}</a>
        <span class="hero__scroll">Scroll to inspect <i></i></span>
      </div>
    </section>

    <section class="section section--record" id="record">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label">
            <p class="eyebrow">01 — The record</p>
          </div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">A launch is never just a launch.</h2>
            <p class="lead">
              Windows records what ran in more places than most people expect. Each store has its
              own rules, its own format and its own idea of what “deleted” means. Removing a
              registry key is not the same as removing the record.
            </p>
          </div>
          <div class="section-head__aside" data-reveal style="--reveal-delay: 80ms">
            Registry, file system and journal. Read as one list.
          </div>
        </div>

        <div class="record">
          <div class="record__figure" data-reveal>
            <span class="record__number">${artifacts.length}</span>
            <span class="record__caption">artifact stores read on every scan</span>
            <span class="record__rule"></span>
            <p>BAM, shim cache, Amcache, Prefetch, UserAssist, MUICache, recent items, PowerShell history, Defender history, event logs, temp files, driver services, the USN journal and live process state.</p>
          </div>
          <div class="record__table" data-reveal style="--reveal-delay: 90ms">
            <div class="record__head">
              <span>Tag</span><span>Store</span><span>Holds</span>
            </div>
            ${artifacts
              .slice(0, 7)
              .map(
                (item) => `
              <div class="record__row">
                <span class="record__tag">${item.tag}</span>
                <span class="record__name">${item.name}</span>
                <span class="record__note">${item.note}</span>
              </div>`
              )
              .join('')}
            <a class="record__more" href="/products/sagacious#coverage">
              <span>All ${artifacts.length} sources, with locations</span>
              ${icon('arrowRight', 15)}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="capabilities">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label">
            <p class="eyebrow">02 — Capabilities</p>
          </div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">Four steps, no ceremony.</h2>
            <p class="lead">
              The window does one pass: read the stores, show the rows, remove what you tick,
              rebuild the journal. Everything else is a detail of those four steps.
            </p>
          </div>
          <div class="section-head__aside" data-reveal style="--reveal-delay: 80ms">
            Runs as administrator. No service, no tray icon, no account.
          </div>
        </div>

        <div class="capabilities">
          ${capabilities
            .map(
              (item, index) => `
            <article class="capability" data-reveal style="--reveal-delay: ${index * 60}ms">
              <span class="capability__index">${item.index}</span>
              <div class="capability__title">
                <h3 class="h3">${item.title}</h3>
                <p class="capability__lead">${item.lead}</p>
              </div>
              <p class="capability__body">${item.body}</p>
              <p class="capability__detail mono">${item.detail}</p>
            </article>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section section--interface" id="interface">
      <div class="container">
        <div class="interface">
          <div class="interface__preview" data-reveal>
            <div class="interface__window" id="home-interface"></div>
            <div class="interface__caption">
              <span class="mono">SAGACIOUS · 560 × 400</span>
              <span class="mono interface__swipe">SWIPE TO INSPECT</span>
              <span class="mono">RENDERED AT 2×</span>
            </div>
          </div>
          <div class="interface__side">
            <p class="eyebrow" data-reveal>03 — Interface</p>
            <h2 class="h2" data-reveal style="--reveal-delay: 50ms">Everything on one screen.</h2>
            <p class="lead" data-reveal style="--reveal-delay: 90ms">
              A fixed 560 × 400 window. The list is the product: every row names its store, its
              file and its path. Nothing important is behind a menu.
            </p>
            <ul class="annotations">
              ${annotations
                .map(
                  (item, index) => `
                <li class="annotation" data-reveal style="--reveal-delay: ${120 + index * 55}ms">
                  <span class="annotation__index">${item.index}</span>
                  <div>
                    <p class="annotation__title">${item.title}</p>
                    <p class="annotation__body">${item.body}</p>
                  </div>
                </li>`
                )
                .join('')}
            </ul>
            <a class="link-arrow" href="/products/sagacious#interface" data-reveal>
              Full interface anatomy ${icon('arrowUpRight', 15)}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="details">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label">
            <p class="eyebrow">04 — Detail</p>
          </div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">The parts that matter after the first delete.</h2>
          </div>
        </div>
        <div class="highlights">
          ${highlights
            .map(
              (item, index) => `
            <article class="highlight" data-reveal style="--reveal-delay: ${index * 70}ms">
              <span class="highlight__icon">${icon(item.icon, 20)}</span>
              <h3 class="highlight__title">${item.title}</h3>
              <p class="highlight__body">${item.body}</p>
              <span class="highlight__meta mono">${item.meta}</span>
            </article>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section section--cta">
      <div class="container cta">
        <div class="cta__body" data-reveal>
          <p class="eyebrow">05 — Product</p>
          <h2 class="h2 cta__title">Look at the interface,<br />not a screenshot.</h2>
          <p class="lead">
            Rotate the window, tick a row, run a wipe. The preview on the product page is the
            product — same layout, same states, same status line.
          </p>
          <div class="btn-row">
            <a class="btn btn--primary" href="/products/sagacious">
              Open the product page ${icon('arrowRight', 16, 'icon--arrow')}
            </a>
            <a class="btn" href="/products">All products</a>
          </div>
        </div>
        <div class="cta__aside" data-reveal style="--reveal-delay: 100ms">
          <div class="cta__spec">
            <span class="mono">PLATFORM</span>
            <p>Windows 10 / 11 · x64</p>
          </div>
          <div class="cta__spec">
            <span class="mono">DISTRIBUTION</span>
            <p>Single executable</p>
          </div>
          <div class="cta__spec">
            <span class="mono">ACCESS</span>
            <p>Administrator</p>
          </div>
        </div>
      </div>
    </section>`;

  let stage;
  let windowView;
  let disposed = false;
  let cleanupMotion = () => {};

  return {
    id: 'home',
    title: 'Trace hygiene for Windows',
    fullTitle: 'Cracking — Sagacious, trace hygiene for Windows',
    description:
      'Cracking builds Sagacious: it reads fourteen Windows execution-trace stores, removes the rows you select, and rebuilds the change journal so the record stays consistent.',
    render: () => el,
    mount() {
      const reveals = initReveals(el);
      const parallax = initParallax(el);
      cleanupMotion = () => {
        reveals();
        parallax();
      };
      windowView = mountWindow(el.querySelector('#home-interface'), { interactive: false, minWidth: 640 });
      // The 3D bundle loads after the hero has painted.
      import('../three/stage.js').then(({ createStage }) => {
        if (disposed) return;
        stage = createStage(el.querySelector('#hero-stage'), { variant: 'hero' });
      });
    },
    unmount() {
      disposed = true;
      cleanupMotion();
      stage?.destroy();
      windowView?.destroy();
      stage = null;
      windowView = null;
    },
  };
}

export default page();
