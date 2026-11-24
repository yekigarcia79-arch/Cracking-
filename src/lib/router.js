import { reducedMotion } from './dom.js';

// The site is Cracking; Sagacious is the product it ships.
export const SITE_NAME = 'Cracking';

const progress = () => document.getElementById('route-progress');

function matchPath(pattern, pathname) {
  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = pathname.split('/').filter(Boolean);
  if (patternParts.length !== pathParts.length) return null;
  const params = {};
  for (let i = 0; i < patternParts.length; i += 1) {
    const part = patternParts[i];
    if (part.startsWith(':')) params[part.slice(1)] = decodeURIComponent(pathParts[i]);
    else if (part !== pathParts[i]) return null;
  }
  return params;
}

export function createRouter({ routes, notFound, main, onChange, redirects = {} }) {
  let current = null;
  let renderToken = 0;

  // Legacy paths (for example the old misspelt product slug) resolve to the
  // canonical route and are replaced in history rather than pushed.
  function redirectFor(pathname) {
    const clean = pathname.replace(/\/+$/, '') || '/';
    return redirects[clean] || null;
  }

  function resolve(pathname) {
    for (const route of routes) {
      const params = matchPath(route.path, pathname);
      if (params) return { route, params };
    }
    return { route: { path: '*', page: notFound }, params: {} };
  }

  function setMeta(page) {
    const title = page.fullTitle || (page.title ? `${page.title} — ${SITE_NAME}` : SITE_NAME);
    document.title = title;
    const description = document.querySelector('meta[name="description"]');
    if (description && page.description) description.setAttribute('content', page.description);
  }

  function scrollToHash(hash, behavior = 'smooth') {
    if (!hash) return false;
    const target = document.querySelector(hash);
    if (!target) return false;
    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: reducedMotion() ? 'auto' : behavior });
    return true;
  }

  async function render({ pathname, hash, initial = false }) {
    const token = ++renderToken;
    const { route, params } = resolve(pathname);
    const page = route.page;
    const bar = progress();
    if (!initial && bar) {
      bar.classList.add('is-active');
      window.setTimeout(() => bar.classList.remove('is-active'), 620);
    }

    if (current?.page.unmount) {
      try {
        current.page.unmount();
      } catch (error) {
        console.error('Page cleanup failed', error);
      }
    }

    const node = page.render({ params, pathname, hash, initial });
    const swap = () => {
      // Scroll before the new state is captured, so a view transition never
      // snapshots the next page halfway down.
      if (!hash) window.scrollTo({ top: 0, behavior: 'auto' });
      main.replaceChildren(node);
      main.dataset.page = page.id || 'page';
      if (page.mount) page.mount(main, { params, pathname, hash });
      setMeta(page);
      onChange?.(pathname);
    };

    if (!initial && document.startViewTransition && !reducedMotion()) {
      const transition = document.startViewTransition(swap);
      await transition.finished.catch(() => {});
    } else {
      swap();
    }

    if (token !== renderToken) return;

    if (hash) {
      requestAnimationFrame(() => scrollToHash(hash, initial ? 'auto' : 'smooth'));
    }

    current = { page, pathname };
    if (!initial) main.focus({ preventScroll: true });
  }

  function navigate(url, { replace = false } = {}) {
    const target = new URL(url, location.href);
    if (target.origin !== location.origin) {
      location.href = target.href;
      return;
    }
    const redirect = redirectFor(target.pathname);
    if (redirect) {
      target.pathname = redirect;
      history.replaceState({}, '', target.href);
      render({ pathname: target.pathname, hash: target.hash });
      return;
    }
    if (replace) history.replaceState({}, '', target.href);
    else history.pushState({}, '', target.href);
    render({ pathname: target.pathname, hash: target.hash });
  }

  function handleClick(event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    const anchor = event.target.closest('a[href]');
    if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;
    const url = new URL(anchor.href, location.href);
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.hash) {
      event.preventDefault();
      history.pushState({}, '', url.href);
      scrollToHash(url.hash);
      return;
    }
    if (url.pathname === location.pathname && !url.hash) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' });
      return;
    }
    event.preventDefault();
    navigate(url.href);
  }

  function start() {
    document.addEventListener('click', handleClick);
    window.addEventListener('popstate', () => {
      render({ pathname: location.pathname, hash: location.hash });
    });
    const redirect = redirectFor(location.pathname);
    if (redirect) history.replaceState({}, '', `${redirect}${location.hash}`);
    render({ pathname: redirect || location.pathname, hash: location.hash, initial: true });
  }

  return { start, navigate, scrollToHash };
}
