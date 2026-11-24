import { rafThrottle, reducedMotion } from './dom.js';

export function initReveals(root = document) {
  const items = Array.from(root.querySelectorAll('[data-reveal]'));
  if (!items.length) return () => {};
  if (reducedMotion()) {
    items.forEach((item) => item.classList.add('is-in'));
    return () => {};
  }
  // Anything already on screen is shown immediately: the hero must never wait
  // for an observer callback (or for the 3D scene to finish compiling shaders).
  const viewportHeight = window.innerHeight || 800;
  for (const item of items) {
    if (item.getBoundingClientRect().top < viewportHeight * 0.96) item.classList.add('is-in');
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
  );
  items.forEach((item) => {
    if (!item.classList.contains('is-in')) observer.observe(item);
  });
  return () => observer.disconnect();
}

export function initParallax(root = document) {
  const items = Array.from(root.querySelectorAll('[data-parallax]'));
  if (!items.length || reducedMotion() || window.matchMedia('(max-width: 860px)').matches) {
    return () => {};
  }
  let frame = 0;
  const update = rafThrottle(() => {
    const viewport = window.innerHeight;
    for (const item of items) {
      const rect = item.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > viewport + 200) continue;
      const speed = Number(item.dataset.parallax) || 0.05;
      const offset = (rect.top + rect.height / 2 - viewport / 2) * speed;
      item.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`);
    }
  });
  const onScroll = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(update);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    cancelAnimationFrame(frame);
  };
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.cssText = 'position:fixed;top:-1000px;opacity:0';
    document.body.append(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }
}
