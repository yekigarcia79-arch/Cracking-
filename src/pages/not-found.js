import { icon } from '../lib/icons.js';

function page() {
  const el = document.createElement('div');
  el.className = 'page page--notfound';
  el.innerHTML = `
    <section class="notfound">
      <div class="container">
<p class="notfound__code">404</p>
        <h1 class="h2">This route is not in the record.</h1>
        <p class="lead">The page you asked for does not exist, or it has moved. The product and the catalogue are both one click away.</p>
        <div class="btn-row">
          <a class="btn btn--primary" href="/">Back to home ${icon('arrowRight', 16, 'icon--arrow')}</a>
          <a class="btn" href="/products/sagacious">Sagacious</a>
        </div>
      </div>
    </section>`;
  return {
    id: 'notfound',
    title: 'Page not found',
    description: 'The requested page could not be found.',
    render: () => el,
  };
}

export default page();
