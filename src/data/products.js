// Product registry. Adding a product means adding an entry here and a page
// module that renders it — routing, navigation and cards read from this list.
export const products = [
  {
    slug: 'sagacious',
    index: '01',
    name: 'Sagacious',
    category: 'Windows utility',
    status: 'Released',
    platform: 'Windows 10 / 11 · x64',
    tagline: 'Trace hygiene for Windows.',
    summary:
      'Finds the execution records that a Windows machine keeps, lets you choose which ones go, and rebuilds the change journal so the record stays consistent.',
    href: '/products/sagacious',
    meta: ['Windows x64', 'Local'],
  },
];

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}
