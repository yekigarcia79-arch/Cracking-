const paths = {
  mark: `<rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5" stroke="currentColor" stroke-width="1.4"/>
    <path d="M7.5 8.75h9M7.5 12h6.25M7.5 15.25h3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
  arrowRight: `<path d="M4.5 12h14M13 6.5l5.5 5.5-5.5 5.5"/>`,
  arrowDown: `<path d="M12 4.5v11M7.5 11l4.5 4.5 4.5-4.5M4.5 19.5h15"/>`,
  arrowUpRight: `<path d="M7 17 17 7M8.5 7H17v8.5"/>`,
  reset: `<path d="M4.5 9.5A8 8 0 1 1 4 14"/><path d="M4.2 4.6v5h5"/>`,
  copy: `<rect x="9" y="9" width="10.5" height="10.5" rx="2.2"/><path d="M15 6.2A2.2 2.2 0 0 0 12.8 4H6.2A2.2 2.2 0 0 0 4 6.2v6.6A2.2 2.2 0 0 0 6.2 15"/>`,
  check: `<path d="M4.5 12.5 9.5 17.5 19.5 6.5"/>`,
  menu: `<path d="M4 8h16M4 16h16"/>`,
  close: `<path d="M6 6l12 12M18 6 6 18"/>`,
  layers: `<path d="m12 3.5 8.5 4.6L12 12.7 3.5 8.1 12 3.5Z"/><path d="m4.5 12.4 7.5 4 7.5-4M4.5 16.4l7.5 4 7.5-4"/>`,
  sweep: `<circle cx="12" cy="12" r="2"/><path d="M12 4.5a7.5 7.5 0 0 1 7.5 7.5"/><path d="M12 1.5a10.5 10.5 0 0 1 10.5 10.5"/><path d="M4.5 12A7.5 7.5 0 0 1 12 4.5"/>`,
  terminal: `<rect x="3" y="4.5" width="18" height="15" rx="2.5"/><path d="m7 9.5 3 2.5-3 2.5M12.5 15h4.5"/>`,
  shield: `<path d="M12 3.2 19 6v6.2c0 4-3 6.6-7 8.6-4-2-7-4.6-7-8.6V6l7-2.8Z"/><path d="m9.2 12.1 2 2 3.8-4"/>`,
  command: `<path d="M9 7.5a2.5 2.5 0 1 0-2.5 2.5H9V7.5ZM9 16.5A2.5 2.5 0 1 1 6.5 14H9v2.5ZM15 7.5A2.5 2.5 0 1 1 17.5 10H15V7.5ZM15 16.5a2.5 2.5 0 1 0 2.5-2.5H15v2.5Z"/><rect x="9" y="10" width="6" height="4" rx="0.8"/>`,
  file: `<path d="M13.5 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5.5-5.5Z"/><path d="M13.5 3.5V9H19"/>`,
  clock: `<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 1.8"/>`,
  lock: `<rect x="4.5" y="10" width="15" height="10" rx="2.4"/><path d="M8 10V7.8a4 4 0 0 1 8 0V10"/>`,
  code: `<path d="m8.5 8.5-4 3.5 4 3.5M15.5 8.5l4 3.5-4 3.5M13.5 5l-3 14"/>`,
  grid: `<rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/>`,
};

export function icon(name, size = 20, className = '') {
  const body = paths[name] || '';
  return `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}
