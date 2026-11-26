import { principles } from '../data/sagacious.js';
import { icon } from '../lib/icons.js';
import { initReveals } from '../lib/motion.js';

const technical = [
  ['Runtime', 'Win32 · DirectX 11'],
  ['Interface layer', 'Dear ImGui 1.91.5, vendored'],
  ['Window', '560 × 400, fixed, borderless'],
  ['Privileges', 'Administrator'],
  ['Front ends', 'Sagacious.exe'],
  ['Network', 'One optional request, cached for 24 hours'],
  ['Build', 'MSVC v143 · Windows 10 SDK · x64'],
];

const limits = [
  ['No backup', 'Deleted means deleted. There is no vault, no recycle bin and no undo.'],
  ['No scheduling', 'It runs when you open it and stops when you close it. There is no service or tray agent.'],
  ['No remote control', 'No account, no dashboard, no fleet management. The machine is the boundary.'],
  ['No silent behaviour', 'The header states the trace count, the selection and the list matches before anything runs.'],
];

function page() {
  const el = document.createElement('div');
  el.className = 'page page--about';
  el.innerHTML = `
    <section class="page-head">
      <div class="container">
        <h1 class="display page-head__title" data-reveal style="--reveal-delay: 50ms">
          Software that does<br /><span class="dim">one thing precisely.</span>
        </h1>
        <div class="page-head__row">
          <p class="lead" data-reveal style="--reveal-delay: 100ms">
            Cracking makes small software that does one thing precisely. Sagacious, its first
            release, makes the record Windows keeps legible: it shows what ran, lets you remove
            what you choose, and then reconciles the journal underneath it.
          </p>
          <dl class="page-head__meta" data-reveal style="--reveal-delay: 140ms">
            <div><dt>Platform</dt><dd>Windows</dd></div>
            <div><dt>Interface</dt><dd>GUI</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="section" id="principles">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">Four rules the product is built around.</h2>
            <p class="lead">They are constraints, not values on a wall. Each one removes a feature that would have made the product easier to sell.</p>
          </div>
        </div>
        <div class="principles">
          ${principles
            .map(
              (item, index) => `
            <article class="principle" data-reveal style="--reveal-delay: ${index * 60}ms">
              <span class="principle__index mono">${item.index}</span>
              <h3>${item.title}</h3>
              <p>${item.body}</p>
            </article>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section" id="technical">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">Small stack, stated plainly.</h2>
            <p class="lead">No Electron shell, no bundled browser, no runtime installer. The interface is drawn directly with DirectX 11.</p>
          </div>
        </div>
        <div class="spec-table">
          ${technical
            .map(
              ([key, value], index) => `
            <div class="spec-table__row" data-reveal style="--reveal-delay: ${index * 35}ms">
              <span class="spec-table__key">${key}</span>
              <span class="spec-table__value">${value}</span>
            </div>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section" id="limits">
      <div class="container">
        <div class="section-head">
          <div class="section-head__body" data-reveal>
            <h2 class="h2">What it deliberately does not do.</h2>
            <p class="lead">A tool is defined by its refusals as much as its features. These are the ones that keep Sagacious predictable.</p>
          </div>
        </div>
        <div class="limits">
          ${limits
            .map(
              ([title, body], index) => `
            <div class="limit" data-reveal style="--reveal-delay: ${index * 50}ms">
              <span class="limit__mark">${icon('close', 13)}</span>
              <div>
                <h3>${title}</h3>
                <p>${body}</p>
              </div>
            </div>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section section--cta">
      <div class="container cta">
        <div class="cta__body" data-reveal>
          <h2 class="h2 cta__title">Read the product page.</h2>
          <p class="lead">Interface anatomy, all fourteen artifact sources and the full specification.</p>
          <div class="btn-row">
            <a class="btn btn--primary" href="/products/sagacious">Open Sagacious ${icon('arrowRight', 16, 'icon--arrow')}</a>
            <a class="btn" href="/products">Products</a>
          </div>
        </div>
        <div class="cta__aside" data-reveal style="--reveal-delay: 100ms">
          <div class="cta__spec"><span class="mono">PLATFORM</span><p>Windows 10 / 11 · x64</p></div>
          <div class="cta__spec"><span class="mono">DISTRIBUTION</span><p>Single executable</p></div>
        </div>
      </div>
    </section>`;

  let reveals = () => {};

  return {
    id: 'about',
    title: 'About',
    description: 'The principles, technical notes and deliberate limits behind Cracking and Sagacious, its first release.',
    render: () => el,
    mount() {
      reveals = initReveals(el);
    },
    unmount() {
      reveals();
    },
  };
}

export default page();
