// ─────────────────────────────────────────────────────────────────────────────
// SOCIALS — one owner for every social destination on the site.
// ─────────────────────────────────────────────────────────────────────────────
// Pure data: no icon components live here, so this file stays importable from
// anywhere (including the crawler pages under api/, which cannot render React).
// Consumers map `id` to whatever icon set they already import.
//
// `handle` is what a human reads; `href` is where they go. Keep them in step —
// a handle that no longer matches its URL is worse than showing no handle.
//
// href: null means the destination is not confirmed yet. Every consumer filters
// those out through liveSocials(), so an unconfirmed entry renders nowhere
// rather than shipping a guessed URL. Fill the href in and it appears
// everywhere at once.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} Social
 * @property {string}      id      stable key; consumers map it to an icon
 * @property {string}      label   what the link is called
 * @property {string|null} href    destination, or null when unconfirmed
 * @property {string}      handle  human-readable identity at that destination
 * @property {string}      sub     one line on what lives there
 */

/** @type {readonly Social[]} */
export const SOCIALS = Object.freeze([
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/themeetpatel/',
    handle: 'in/themeetpatel',
    sub: 'Professional network',
  },
  {
    id: 'linkedin-company',
    label: 'Company 8',
    href: 'https://www.linkedin.com/company/companyeight/',
    handle: 'linkedin.com/company/companyeight',
    sub: 'The company page',
  },
  {
    id: 'twitter',
    label: 'X',
    href: 'https://x.com/the_meetpatel',
    handle: '@the_meetpatel',
    sub: 'Thoughts & takes',
  },
  {
    id: 'substack',
    label: 'Substack',
    href: 'https://themeetpatell.substack.com/',
    handle: 'themeetpatell',
    sub: 'The newsletter',
  },
  {
    id: 'medium',
    label: 'Medium',
    href: 'https://medium.com/@themeetpatel',
    handle: '@themeetpatel',
    sub: 'Long-form writing',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/the.meetpatell/',
    handle: '@the.meetpatell',
    sub: 'Behind the scenes',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com/@themeetpatel',
    handle: '@themeetpatel',
    sub: 'Video content',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/themeetpatell',
    handle: 'themeetpatell',
    sub: 'Open source work',
  },
]);

/** Only the destinations that actually have a confirmed URL. */
export const liveSocials = () => SOCIALS.filter((s) => Boolean(s.href));

/** Copy for the floating follow bubble. Voice, not furniture — see pageVoice.js. */
export const FOLLOW_STRIP = Object.freeze({
  openLabel: 'Show where to find me',
  closeLabel: 'Hide the follow links',
  heading: 'Find me',
});
