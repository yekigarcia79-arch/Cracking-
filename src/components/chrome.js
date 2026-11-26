import { icon } from '../lib/icons.js';
import { crackingLogo } from './logo.js';
import { h, on } from '../lib/dom.js';

const links = [
  { href: '/', label: 'Home', match: (path) => path === '/' },
  { href: '/products', label: 'Products', match: (path) => path.startsWith('/products') },
  { href: '/about', label: 'About', match: (path) => path.startsWith('/about') },
];

export function createHeader() {
  const header = h('header', { class: 'site-header', id: 'site-header' });
  header.innerHTML = `
    <div class="nav container">
      <a class="brand" href="/" aria-label="Cracking — home">
        <span class="brand__mark">${crackingLogo(30)}</span>
        <span class="brand__word">Cracking</span>
      </a>
      <nav class="nav__links" aria-label="Primary">
        <span class="nav__indicator" aria-hidden="true"></span>
        ${links.map((link) => `<a class="nav__link" href="${link.href}">${link.label}</a>`).join('')}
      </nav>
      <div class="nav__actions">
        <a class="btn btn--primary btn--sm nav__cta" href="/products/sagacious">
          Explore product
          ${icon('arrowRight', 15, 'icon--arrow')}
        </a>
        <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
          <span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" id="mobile-menu" hidden>
      <div class="mobile-menu__inner">
        <nav aria-label="Mobile">
          ${links.map((link, index) => `<a class="mobile-menu__link" href="${link.href}"><span class="mobile-menu__index">0${index + 1}</span>${link.label}</a>`).join('')}
        </nav>
        <div class="mobile-menu__foot">
          <a class="btn btn--primary" href="/products/sagacious">Explore Sagacious ${icon('arrowRight', 16)}</a>
          <p class="mono">Windows 10 / 11 · x64</p>
        </div>
      </div>
    </div>`;

  const toggle = header.querySelector('.nav__toggle');
  const menu = header.querySelector('.mobile-menu');
  // The menu lives outside the header: the header's backdrop-filter would
  // otherwise become the containing block for a fixed-position child.
  document.body.append(menu);
  const indicator = header.querySelector('.nav__indicator');
  const linkEls = Array.from(header.querySelectorAll('.nav__link'));
  let open = false;
  let lastFocus = null;

  function positionIndicator(activeLink) {
    if (!activeLink || window.matchMedia('(max-width: 900px)').matches) {
      indicator.style.opacity = '0';
      return;
    }
    indicator.style.opacity = '1';
    indicator.style.width = `${activeLink.offsetWidth}px`;
    indicator.style.transform = `translateX(${activeLink.offsetLeft}px)`;
  }

  function setActive(path) {
    let active = null;
    linkEls.forEach((el, index) => {
      const isActive = links[index].match(path);
      el.classList.toggle('is-active', isActive);
      if (isActive) {
        el.setAttribute('aria-current', 'page');
        active = el;
      } else {
        el.removeAttribute('aria-current');
      }
    });
    menu.querySelectorAll('.mobile-menu__link').forEach((el, index) => {
      if (links[index]?.match(path)) el.setAttribute('aria-current', 'page');
      else el.removeAttribute('aria-current');
    });
    requestAnimationFrame(() => positionIndicator(active));
    closeMenu();
  }

  function openMenu() {
    open = true;
    lastFocus = document.activeElement;
    menu.hidden = false;
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    header.classList.add('is-menu-open');
    document.documentElement.classList.add('is-locked');
    menu.querySelector('a')?.focus({ preventScroll: true });
  }

  function closeMenu({ restoreFocus = false } = {}) {
    if (!open) return;
    open = false;
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    header.classList.remove('is-menu-open');
    document.documentElement.classList.remove('is-locked');
    window.setTimeout(() => {
      if (!open) menu.hidden = true;
    }, 320);
    if (restoreFocus) (lastFocus || toggle).focus({ preventScroll: true });
  }

  toggle.addEventListener('click', () => (open ? closeMenu({ restoreFocus: true }) : openMenu()));

  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu({ restoreFocus: true });
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = Array.from(menu.querySelectorAll('a, button')).filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 10);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => positionIndicator(header.querySelector('.nav__link.is-active')), { passive: true });

  on(window, 'keydown', (event) => {
    if (event.key === 'Escape' && open) closeMenu({ restoreFocus: true });
  });

  return { el: header, setActive };
}

export function createFooter() {
  const footer = h('footer', { class: 'site-footer', id: 'site-footer' });
  footer.innerHTML = `
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <a class="brand" href="/" aria-label="Cracking — home">
            <span class="brand__mark">${crackingLogo(30)}</span>
            <span class="brand__word">Cracking</span>
          </a>
          <p class="footer__tagline">Small, precise Windows software.<br />One executable, no account, nothing left behind.</p>
          <span class="footer__status"><i></i>Sagacious · released</span>
        </div>
        <div class="footer__cols">
          <div class="footer__col">
            <p class="footer__heading">Product</p>
            <a href="/products/sagacious">Sagacious</a>
            <a href="/products">All products</a>
            <a href="/products/sagacious#interface">Interface</a>
          </div>
          <div class="footer__col">
            <p class="footer__heading">Reference</p>
            <a href="/products/sagacious#coverage">Artifact coverage</a>
            <a href="/products/sagacious#capabilities">Capabilities</a>
            <a href="/products/sagacious#specs">Specifications</a>
          </div>
          <div class="footer__col">
            <p class="footer__heading">Company</p>
            <a href="/about">About</a>
            <a href="/about#principles">Principles</a>
            <a href="/about#technical">Technical notes</a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>© 2026 Cracking. Windows 10 / 11 · x64.</p>
        <div class="footer__meta">
          <button class="footer__top-link" type="button" data-top>Back to top ${icon('arrowUpRight', 13)}</button>
        </div>
      </div>
    </div>`;

  footer.querySelector('[data-top]').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });

  return footer;
}
