import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';

import './styles/base.css';
import './styles/chrome.css';
import './styles/app-window.css';
import './styles/stage.css';
import './styles/pages.css';
import './styles/product.css';

import { createHeader, createFooter } from './components/chrome.js';
import { createRouter } from './lib/router.js';
import home from './pages/home.js';
import products from './pages/products.js';
import product from './pages/product.js';
import about from './pages/about.js';
import notFound from './pages/not-found.js';

const header = createHeader();
const footer = createFooter();
document.getElementById('site-header').replaceWith(header.el);
document.getElementById('site-footer').replaceWith(footer);

const main = document.getElementById('main');

const router = createRouter({
  main,
  notFound,
  routes: [
    { path: '/', page: home },
    { path: '/products', page: products },
    { path: '/products/sagacious', page: product },
    { path: '/about', page: about },
  ],
  // The product slug was once misspelt; keep old links working.
  redirects: {
    '/products/sugacious': '/products/sagacious',
  },
  onChange: (path) => header.setActive(path),
});

header.setActive(location.pathname);
router.start();

// Keep the initial viewport stable when fonts land.
if (document.fonts?.ready) {
  document.fonts.ready.then(() => document.documentElement.classList.add('fonts-ready'));
}
