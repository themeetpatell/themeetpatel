// Launch promo config — useDan by Company8 on Product Hunt.
// Bump `id` to re-show the bar/card to visitors who previously dismissed an
// earlier launch, and flip `enabled` to false to remove the promo site-wide.

export const LAUNCH = {
  enabled: true,
  id: 'usedan-ph-2026-07', // dismissal is scoped to this id

  product: 'useDan',
  company: 'Company 8',
  // Verbatim Product Hunt tagline.
  tagline: 'Ask your business anything. Get answers that lead to action.',
  // Short eyebrow shown in the top bar.
  eyebrow: 'Now on Product Hunt',

  productHuntUrl:
    'https://www.producthunt.com/products/usedan-by-company8?utm_source=themeetpatel&utm_medium=launch_banner',
  // Product Hunt-hosted icon used in the embed the user shared.
  iconUrl:
    'https://ph-files.imgix.net/8961b6e4-848e-40ce-801d-8b199fed5940.png?auto=compress,format&codec=mozjpeg&cs=strip&fit=crop&h=96&w=96',

  // Product Hunt brand orange.
  phOrange: '#FF6154',
  phOrangeDark: '#e5503f',
};

export const BAR_DISMISS_KEY = `launch:bar:dismissed:${LAUNCH.id}`;
export const CARD_DISMISS_KEY = `launch:card:dismissed:${LAUNCH.id}`;

// SSR-safe localStorage helpers (this is a CSR SPA, but guard anyway).
export function isDismissed(key) {
  try {
    return typeof window !== 'undefined' && window.localStorage.getItem(key) === '1';
  } catch {
    return false;
  }
}

export function setDismissed(key) {
  try {
    window.localStorage.setItem(key, '1');
  } catch {
    /* storage unavailable (private mode / quota) — fail open, just hide for the session */
  }
}
