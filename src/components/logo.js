// The Cracking mark: the faceted gem, rendered from brand/cracking-mark.png
// with the white ground removed. Drawn bare — no tile, no plate behind it.
export function crackingLogo(size = 30, className = '') {
  return `<img class="logo ${className}" src="/cracking-mark.png" width="${size}" height="${size}" alt="" decoding="async" />`;
}

// The product icon ships as a rendered keycap with a transparent ground, so it
// sits directly on dark surfaces inside a tile. Size comes from a modifier
// class (lg on the product hero, sm in the catalogue) rather than an inline
// value, so the responsive rules can still scale it.
export function productIcon(modifier = 'lg', className = '') {
  return `<span class="product-icon product-icon--${modifier} ${className}" aria-hidden="true"><img src="/sagacious-icon.png" alt="" decoding="async" /></span>`;
}
