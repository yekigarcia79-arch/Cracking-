import { createAppWindow } from './app-window.js';

/** Places the interface in a physical-looking frame and scales it to fit. */
export function mountWindow(container, { minWidth = 0, ...options } = {}) {
  const app = createAppWindow(options);
  const frame = document.createElement('div');
  frame.className = 'window-frame';
  if (minWidth) frame.style.width = `max(100%, ${minWidth}px)`;
  const scaler = document.createElement('div');
  scaler.className = 'window-frame__scaler';
  scaler.style.width = '1120px';
  scaler.style.height = '800px';
  scaler.append(app.el);
  frame.append(scaler);
  container.append(frame);

  let lastWidth = 0;
  const fit = () => {
    const styles = getComputedStyle(frame);
    const padX = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
    const padY = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
    const width = frame.clientWidth - padX;
    if (!width || Math.abs(width - lastWidth) < 0.5) return;
    lastWidth = width;
    const scale = Math.min(1.2, width / 1120);
    scaler.style.transform = `scale(${scale})`;
    frame.style.height = `${Math.round(800 * scale + padY)}px`;
    container.style.setProperty('--window-scale', scale.toFixed(4));
    container.classList.toggle('is-scrollable', minWidth > 0 && frame.clientWidth > container.clientWidth + 1);
  };

  const observer = new ResizeObserver(fit);
  observer.observe(frame);
  fit();

  return {
    app,
    destroy() {
      observer.disconnect();
      app.destroy();
      frame.remove();
    },
  };
}
