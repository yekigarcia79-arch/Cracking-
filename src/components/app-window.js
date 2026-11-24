import { appRows } from '../data/sagacious.js';
import { icon } from '../lib/icons.js';

const number = new Intl.NumberFormat('en-US');

const rowMarkup = (row, index) => `
  <label class="app__row" data-index="${index}">
    <input class="app__check" type="checkbox" ${row.selected ? 'checked' : ''} />
    <span class="app__tag">${row.tag}</span>
    <span class="app__path">${row.path}</span>
  </label>`;

const markup = `
  <div class="app__chrome">
    <span class="app__mark">${icon('mark', 18)}</span>
    <span class="app__name">Sagacious</span>
    <span class="app__build">v1.0.0</span>
    <span class="app__controls" aria-hidden="true">
      <span class="app__control"><svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5h6" stroke="currentColor" stroke-width="1.2"/></svg></span>
      <span class="app__control"><svg width="10" height="10" viewBox="0 0 10 10"><rect x="2.4" y="2.4" width="5.2" height="5.2" fill="none" stroke="currentColor" stroke-width="1.1"/></svg></span>
      <span class="app__control app__control--close"><svg width="10" height="10" viewBox="0 0 10 10"><path d="M2.4 2.4l5.2 5.2M7.6 2.4L2.4 7.6" stroke="currentColor" stroke-width="1.2"/></svg></span>
    </span>
  </div>
  <div class="app__body">
    <header class="app__header" data-region="header">
      <div class="app__title-row">
        <div class="app__brand">Sagacious</div>
        <span class="app__admin"><i></i>Admin</span>
      </div>
      <p class="app__meta" data-meta>
        <b>2,114</b> traces <span aria-hidden="true">·</span> <b>2</b> selected <span aria-hidden="true">·</span> 30 on whatexpsare
      </p>
    </header>
    <div class="app__tools" data-region="tools">
      <div class="app__filter">
        <input type="text" placeholder="filter (path, name, .bam, .pf?)" aria-label="Filter traces" spellcheck="false" autocomplete="off" />
      </div>
      <button class="app__sys is-on" type="button" aria-pressed="true" title="Include system traces">SYS</button>
    </div>
    <div class="app__list" data-region="list" role="group" aria-label="Trace rows">
      ${appRows.map(rowMarkup).join('')}
      <div class="app__empty" hidden>no rows match this filter</div>
      <div class="app__busy" hidden>
        <div class="app__busy-card">
          <span class="app__spinner" aria-hidden="true"></span>
          <div class="app__busy-text"><b>deleting files</b><span>worker thread · 0 of 0</span></div>
        </div>
      </div>
    </div>
    <div class="app__actions" data-region="actions">
      <button class="app__icon-btn" type="button" aria-label="Reload the list" title="Reload the list">${icon('reset', 18)}</button>
      <button class="app__chip" type="button" title="Select every visible row">all</button>
      <span class="app__gap"></span>
      <button class="app__btn" type="button" data-action="files">Delete files</button>
      <button class="app__btn" type="button" data-action="all">Delete all</button>
      <button class="app__btn app__btn--primary" type="button" data-action="selected">Delete selected</button>
    </div>
    <div class="app__foot" data-region="foot">
      <span class="app__status" data-status role="status" aria-live="polite">whatexpsare: 30 known exe name(s), 2 match here</span>
      <span class="app__site">whatexpsare.online</span>
    </div>
  </div>`;

export function createAppWindow({ density = 'full', interactive = true, presentation = false } = {}) {
  const el = document.createElement('div');
  el.className = 'app';
  el.dataset.density = density;
  el.setAttribute('role', 'group');
  el.setAttribute('aria-label', 'Sagacious application interface');
  el.innerHTML = markup;

  const q = (selector) => el.querySelector(selector);
  const rows = Array.from(el.querySelectorAll('.app__row'));
  const checks = rows.map((row) => row.querySelector('.app__check'));
  const meta = q('[data-meta]');
  const status = q('[data-status]');
  const list = q('.app__list');
  const empty = q('.app__empty');
  const busy = q('.app__busy');
  const busyTitle = busy.querySelector('b');
  const busyNote = busy.querySelector('.app__busy-text span');
  const sysBtn = q('.app__sys');
  const filterInput = q('.app__filter input');
  const filesBtn = q('[data-action="files"]');
  const allBtn = q('[data-action="all"]');
  const selectedBtn = q('[data-action="selected"]');
  const reloadBtn = q('.app__icon-btn');
  const chip = q('.app__chip');
  const timers = new Set();

  const state = {
    traces: 2114,
    selected: new Set(appRows.map((row, i) => (row.selected ? i : -1)).filter((i) => i >= 0)),
    matches: 2,
    sys: true,
    files: false,
    filter: '',
    busy: false,
    removed: new Set(),
  };

  const later = (fn, ms) => {
    const id = window.setTimeout(() => {
      timers.delete(id);
      fn();
    }, ms);
    timers.add(id);
    return id;
  };

  function visibleIndices() {
    const needle = state.filter.trim().toLowerCase();
    return rows
      .map((_, index) => index)
      .filter((index) => {
        if (state.removed.has(index)) return false;
        if (!state.sys && /microsoft windows\\|\\windows\\/i.test(appRows[index].path)) return false;
        if (!needle) return true;
        return `${appRows[index].tag} ${appRows[index].path}`.toLowerCase().includes(needle);
      });
  }

  function applyVisibility() {
    const visible = new Set(visibleIndices());
    rows.forEach((row, index) => {
      row.hidden = !visible.has(index);
    });
    empty.hidden = visible.size > 0 || state.busy;
  }

  function updateMeta() {
    meta.innerHTML = `<b>${number.format(state.traces)}</b> traces <span aria-hidden="true">·</span> <b>${state.selected.size}</b> selected <span aria-hidden="true">·</span> 30 on whatexpsare`;
  }

  function setStatus(text) {
    status.textContent = text;
  }

  function defaultStatus() {
    if (state.files) return 'files armed · folders, archives and shortcuts are included';
    if (!state.sys) return 'software only · \\Windows\\ rows hidden';
    if (state.filter.trim()) {
      const count = visibleIndices().length;
      return `filter “${state.filter.trim()}” · ${count} match${count === 1 ? '' : 'es'}`;
    }
    return `whatexpsare: 30 known exe name(s), ${state.matches} match here`;
  }

  function refresh() {
    applyVisibility();
    updateMeta();
    sysBtn.classList.toggle('is-on', state.sys);
    sysBtn.setAttribute('aria-pressed', String(state.sys));
    filesBtn.classList.toggle('is-armed', state.files);
    const visibleCount = visibleIndices().length;
    chip.classList.toggle('is-on', visibleCount > 0 && visibleCount === state.selected.size);
    setStatus(defaultStatus());
  }

  function onCheck(index) {
    if (checks[index].checked) state.selected.add(index);
    else state.selected.delete(index);
    refresh();
  }

  checks.forEach((check, index) => {
    check.addEventListener('change', () => onCheck(index));
  });

  filterInput.addEventListener('input', () => {
    state.filter = filterInput.value;
    refresh();
  });

  sysBtn.addEventListener('click', () => {
    state.sys = !state.sys;
    refresh();
  });

  filesBtn.addEventListener('click', () => {
    state.files = !state.files;
    refresh();
  });

  chip.addEventListener('click', () => {
    const visible = visibleIndices();
    const allSelected = visible.every((index) => state.selected.has(index));
    visible.forEach((index) => {
      if (allSelected) state.selected.delete(index);
      else state.selected.add(index);
      checks[index].checked = !allSelected;
    });
    refresh();
  });

  function runWipe(indices) {
    if (state.busy) return;
    if (!indices.length) {
      setStatus('nothing to do: tick a row or type a name');
      return;
    }
    state.busy = true;
    busy.hidden = false;
    list.classList.add('is-busy');
    const stages = [
      ['deleting files', `${indices.length} target(s) · worker thread`],
      ['wiping traces', 'rewriting stores in place'],
      ['resetting journal', 'rebuilding on fixed volumes'],
    ];
    let stage = 0;
    busyTitle.textContent = stages[0][0];
    busyNote.textContent = stages[0][1];
    const step = () => {
      stage += 1;
      if (stage < stages.length) {
        busyTitle.textContent = stages[stage][0];
        busyNote.textContent = stages[stage][1];
        later(step, 420);
        return;
      }
      finishWipe(indices);
    };
    later(step, 460);
  }

  function finishWipe(indices) {
    indices.forEach((index) => {
      state.removed.add(index);
      state.selected.delete(index);
      rows[index].classList.add('is-removed');
    });
    state.traces = Math.max(0, state.traces - indices.length);
    state.matches = Math.max(0, state.matches - indices.length);
    later(() => {
      state.busy = false;
      busy.hidden = true;
      list.classList.remove('is-busy');
      applyVisibility();
      updateMeta();
      const volumes = 3;
      setStatus(`${indices.length} trace${indices.length === 1 ? '' : 's'} removed · journal rebuilt on ${volumes} volume(s)`);
      chip.classList.remove('is-on');
    }, 220);
  }

  selectedBtn.addEventListener('click', () => {
    runWipe(Array.from(state.selected).filter((index) => !state.removed.has(index)));
  });

  allBtn.addEventListener('click', () => {
    const visible = visibleIndices();
    visible.forEach((index) => {
      state.selected.add(index);
      checks[index].checked = true;
    });
    updateMeta();
    runWipe(visible);
  });

  reloadBtn.addEventListener('click', () => {
    timers.forEach((id) => window.clearTimeout(id));
    timers.clear();
    state.selected = new Set(appRows.map((row, i) => (row.selected ? i : -1)).filter((i) => i >= 0));
    state.removed.clear();
    state.traces = 2114;
    state.matches = 2;
    state.busy = false;
    state.filter = '';
    filterInput.value = '';
    checks.forEach((check, index) => {
      check.checked = Boolean(appRows[index].selected);
    });
    rows.forEach((row) => row.classList.remove('is-removed'));
    busy.hidden = true;
    list.classList.remove('is-busy');
    refresh();
  });

  if (!interactive) {
    el.setAttribute('inert', '');
    el.setAttribute('aria-hidden', 'true');
    el.classList.add('is-static');
    el.querySelectorAll('input, button').forEach((control) => {
      control.tabIndex = -1;
    });
  }

  // Presentation instances stay pointer-interactive but are removed from the
  // accessibility tree and the tab order; the anatomy section below offers the
  // same controls in a fully keyboard-accessible form.
  if (presentation) {
    el.setAttribute('aria-hidden', 'true');
    el.querySelectorAll('input, button').forEach((control) => {
      control.tabIndex = -1;
    });
  }

  function setHighlight(region) {
    if (region) el.dataset.highlight = region;
    else delete el.dataset.highlight;
  }

  function destroy() {
    timers.forEach((id) => window.clearTimeout(id));
    timers.clear();
  }

  refresh();
  return { el, setHighlight, destroy, reset: () => reloadBtn.click() };
}
