import { products } from '../data/products.js';
import { icon } from '../lib/icons.js';
import { productIcon } from '../components/logo.js';
import { initReveals } from '../lib/motion.js';
import { mountWindow } from '../components/window-frame.js';

function page() {
  const product = products[0];
  const el = document.createElement('div');
  el.className = 'page page--products';
  el.innerHTML = `
    <section class="page-head">
      <div class="container">
        <p class="eyebrow" data-reveal>Products</p>
        <h1 class="display page-head__title" data-reveal style="--reveal-delay: 50ms">
          One product.<br /><span class="dim">Built to be used.</span>
        </h1>
        <div class="page-head__row">
          <p class="lead" data-reveal style="--reveal-delay: 100ms">
            Sagacious is Cracking’s first release. The catalogue stays small on purpose: a product
            is listed here when it is finished, documented and supported — not when it is announced.
          </p>
          <dl class="page-head__meta" data-reveal style="--reveal-delay: 140ms">
            <div><dt>Products</dt><dd>${String(products.length).padStart(2, '0')}</dd></div>
            <div><dt>Platform</dt><dd>Windows</dd></div>
            <div><dt>Latest</dt><dd>v1.0.0</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="product-list">
          ${products
            .map(
              (item, index) => `
            <a class="product-entry" href="${item.href}" data-reveal style="--reveal-delay: ${index * 60}ms">
              <div class="product-entry__preview">
                <div class="product-entry__window" data-preview></div>
                <span class="product-entry__index mono">${item.index}</span>
              </div>
              <div class="product-entry__body">
                <div class="product-entry__status">
                  <span class="pill"><i></i>${item.status}</span>
                  <span class="mono">${item.category}</span>
                </div>
                <div class="product-entry__head">
                  ${productIcon('sm')}
                  <h2 class="product-entry__name">${item.name}</h2>
                </div>
                <p class="product-entry__tagline">${item.tagline}</p>
                <p class="product-entry__summary">${item.summary}</p>
                <ul class="product-entry__meta">
                  ${item.meta.map((meta) => `<li>${meta}</li>`).join('')}
                </ul>
                <span class="product-entry__cta">
                  View product ${icon('arrowUpRight', 16)}
                </span>
              </div>
            </a>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div class="section-head__label"><p class="eyebrow">Platform</p></div>
          <div class="section-head__body" data-reveal>
            <h2 class="h2">How the catalogue works.</h2>
            <p class="lead">
              Every product follows the same rules: it runs locally, it ships as one executable,
              and it explains its own behaviour in the interface.
            </p>
          </div>
        </div>
        <div class="platform-notes">
          <article data-reveal>
            <span class="platform-notes__index mono">01</span>
            <h3>Local by default</h3>
            <p>No account, no telemetry pipeline, no cloud dependency. Sagacious makes one optional public-list request that can be skipped entirely.</p>
          </article>
          <article data-reveal style="--reveal-delay: 70ms">
            <span class="platform-notes__index mono">02</span>
            <h3>One executable</h3>
            <p>No installer framework, no runtime to bootstrap, no background service. The command-line front end is a second binary in the same release.</p>
          </article>
          <article data-reveal style="--reveal-delay: 140ms">
            <span class="platform-notes__index mono">03</span>
            <h3>Documented in the UI</h3>
            <p>Counts, volume resets and skipped system files are reported where the action happens — not in a changelog nobody reads.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--cta">
      <div class="container cta">
        <div class="cta__body" data-reveal>
          <p class="eyebrow">Next</p>
          <h2 class="h2 cta__title">See the whole product.</h2>
          <p class="lead">The product page covers the interface, every artifact source, the command line and the specification sheet.</p>
          <div class="btn-row">
            <a class="btn btn--primary" href="/products/sagacious">Open Sagacious ${icon('arrowRight', 16, 'icon--arrow')}</a>
          </div>
        </div>
        <div class="cta__aside" data-reveal style="--reveal-delay: 100ms">
          <div class="cta__spec"><span class="mono">PRODUCTS</span><p>01 — Sagacious</p></div>
          <div class="cta__spec"><span class="mono">PLATFORM</span><p>Windows 10 / 11 · x64</p></div>
          <div class="cta__spec"><span class="mono">RELEASE</span><p>1.0.0</p></div>
        </div>
      </div>
    </section>`;

  let reveals = () => {};
  let view;

  return {
    id: 'products',
    title: 'Products',
    description: 'The Cracking catalogue: Sagacious, one Windows utility, documented and supported.',
    render: () => el,
    mount() {
      reveals = initReveals(el);
      view = mountWindow(el.querySelector('[data-preview]'), { interactive: false });
    },
    unmount() {
      reveals();
      view?.destroy();
      view = null;
    },
  };
}

export default page();
