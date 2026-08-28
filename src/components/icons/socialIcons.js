// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL ICONS — the one icon map for src/data/socials.js, keyed by Social.id.
// ─────────────────────────────────────────────────────────────────────────────
// This lives in one place because it did not, once: the footer, the follow
// bubble and Follow My Journey each kept their own copy. Growing socials.js from
// five channels to eight without updating the footer's copy rendered
// `<undefined />` — and because the footer is in PublicLayout, that white-screened
// every page on the site.
//
// Separate from BrandIcons.jsx on purpose: a file that exports both components
// and helpers breaks React fast refresh, which is what
// react-refresh/only-export-components warns about.
// ─────────────────────────────────────────────────────────────────────────────

import { Linkedin, Twitter, Github, Instagram, Youtube, Building2 } from 'lucide-react';
import { SubstackIcon, MediumIcon } from './BrandIcons';

/** @type {Record<string, import('react').ComponentType<{size?: number}>>} */
export const SOCIAL_ICONS = {
  linkedin: Linkedin,
  'linkedin-company': Building2,
  twitter: Twitter,
  substack: SubstackIcon,
  medium: MediumIcon,
  instagram: Instagram,
  youtube: Youtube,
  github: Github,
};

/**
 * Attach an icon to each social, dropping any the map does not cover.
 * A channel with no icon disappears from that surface; it never renders as an
 * undefined element and takes the page down with it.
 *
 * @template {{ id: string }} T
 * @param {readonly T[]} socials
 * @returns {(T & { icon: import('react').ComponentType<{size?: number}> })[]}
 */
export const socialsWithIcons = (socials) =>
  socials
    .map((s) => ({ ...s, icon: SOCIAL_ICONS[s.id] }))
    .filter((s) => Boolean(s.icon));
