// Site-wide promo config — Dan by Company 8, live at usedan.com.
// Brand names and the product promise come from the single source of truth in
// src/data/company8.js; only promo-specific copy lives here.
//
// Bump `id` to re-show the bar/card to visitors who previously dismissed an
// earlier promo, and flip `enabled` to false to remove the promo site-wide.

import { BRAND, signupHref } from '../../data/company8';

export const LAUNCH = {
  enabled: true,
  id: 'dan-live-usedan', // dismissal is scoped to this id

  product: BRAND.product,
  company: BRAND.company,

  // Promo-specific: the product promise with the name stripped, because the
  // bar and card already say "Dan by Company 8" immediately before it.
  promoLine:
    'Monitors your business, investigates what changed, and puts the decision in front of you.',
  // Short eyebrow shown in the top bar.
  eyebrow: 'Now live',
  // Status line under the pulsing dot in the floating card. Dan's own CTA is
  // "Try for free", so the free claim is the product's, not ours.
  status: 'Live · free to try',

  // Dan's real free-signup route. `signup_source` follows Dan's own convention.
  ctaUrl: signupHref('promo'),
  ctaLabel: 'Try Dan free',
  ctaLabelShort: 'Try Dan',
  // Dan's own app icon (Next.js metadata route — stable, no build hash).
  iconUrl: 'https://usedan.com/apple-icon.png',

  // Site violet accent (design system primary / deep).
  accent: '#8b5cf6',
  accentDark: '#7c3aed',
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
