// Single source of truth for the Meet Patel personal-brand entity graph.
//
// Goal: one consistent Person entity (knowledge-panel friendly) linked to the
// company Company 8 and its product Dan (useDan.com). Every page composes its
// structured data from these objects so the entity never fragments across pages
// (same @id, same host, same primary name).
//
// Deliberately a two-node graph: Person → Company 8 → Dan. No studio node sits
// between them. Prior ventures are described as history in prose on /portfolio,
// not asserted as a live organisation in schema.

export const SITE_URL = 'https://www.themeetpatel.com';

export const PERSON_ID = `${SITE_URL}/#person`;
export const COMPANY8_ID = `${SITE_URL}/#company8`;
export const DAN_APP_ID = `https://usedan.com/#dan-app`;

/** Lightweight reference to the canonical Person node. */
export const personRef = { '@id': PERSON_ID };

/**
 * Hosts that are this site. Both apex and www forms are listed, and the .in
 * domain serves the same app, so a canonical_url pointing at any of them is
 * self-canonical — NOT syndication.
 */
export const OWNED_HOSTS = new Set([
  'themeetpatel.com',
  'www.themeetpatel.com',
  'themeetpatel.in',
  'www.themeetpatel.in',
]);

/**
 * Resolve a CMS `canonical_url` into the URL to actually emit, and say whether
 * it points off-site.
 *
 * This exists because a naive `canonical.startsWith(SITE_URL)` check is wrong:
 * every article in the CMS is self-canonical to the NON-www host
 * (https://themeetpatel.com/blogs/...), so a prefix test classifies all of them
 * as syndicated. That silently dropped 35 of 37 articles from the sitemap and
 * pointed each article's canonical at a URL that only 308-redirects.
 *
 * @param {string|null|undefined} value - raw canonical_url from the CMS
 * @param {string} fallbackUrl - absolute URL to use when there is no usable value
 * @returns {{ url: string, isSyndicated: boolean }}
 */
export const resolveCanonical = (value, fallbackUrl) => {
  const raw = typeof value === 'string' ? value.trim() : '';
  if (!raw) return { url: fallbackUrl, isSyndicated: false };

  if (raw.startsWith('/')) return { url: `${SITE_URL}${raw}`, isSyndicated: false };

  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    return { url: fallbackUrl, isSyndicated: false };
  }

  if (OWNED_HOSTS.has(parsed.hostname.toLowerCase())) {
    // Same site — normalise onto the canonical host so the canonical never
    // points at a URL that just redirects.
    return { url: `${SITE_URL}${parsed.pathname}${parsed.search}`, isSyndicated: false };
  }

  return { url: raw, isSyndicated: true };
};

/**
 * Verified, resolving profiles & entity-authority links for GEO / LLM knowledge graphs.
 *
 * `sameAs` is an identity claim, not an agreement claim — listing a profile tells
 * an engine "this record is the same person", which is exactly what resolves the
 * "Meet Patel" name collision. Crunchbase and about.me are listed because they are
 * high-authority entity records that LLMs read; they currently carry stale employer
 * data, which is a content fix on those platforms, not a reason to unlink them.
 */
export const SAME_AS = [
  'https://www.linkedin.com/in/themeetpatel/',
  'https://x.com/the_meetpatel',
  'https://github.com/themeetpatell',
  'https://instagram.com/the.meetpatell/',
  'https://youtube.com/@themeetpatel',
  'https://medium.com/@themeetpatel',
  'https://www.crunchbase.com/person/meet-patel',
  'https://www.producthunt.com/products/usedan-by-company8',
  'https://about.me/themeetpatel',
];

/**
 * Directly answers "which Meet Patel?" — the single highest-leverage GEO field
 * on this site, because the name collides with several other public figures.
 */
export const DISAMBIGUATION =
  'The Meet Patel who founded Company 8 and builds Dan (usedan.com) in Dubai, UAE — handle themeetpatel / @the_meetpatel. Not to be confused with other people named Meet Patel.';

export const CONTACT_EMAIL = 'meet@company8.dev';

/**
 * Ordered by the territory he is claiming, not by generic startup vocabulary.
 * "Entrepreneurship" and "Startup Strategy" are hopelessly crowded; the first
 * six entries are the category — see src/data/thesis.js.
 */
export const KNOWS_ABOUT = [
  'AI-native company operations',
  'Decision intelligence',
  'Autonomous organizations',
  'AI agents in management',
  'Organizational design',
  'AI business intelligence',
  'Business operations',
  'Founder economics',
  'SaaS economics',
  'Startup scaling',
  'Product development',
];

/** Company 8 — the company Meet Patel is building, and the root of the venture graph. */
export const company8Org = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': COMPANY8_ID,
  name: 'Company 8',
  alternateName: ['Company8'],
  description:
    'Company 8 is the company Meet Patel is building — an autonomous decision intelligence company and the maker of Dan (usedan.com): it connects the systems a company runs on, reconciles the places they disagree, and tells the people who run it what changed, why it matters and what to do next. Company 8 is raising a pre-seed round.',
  url: 'https://usedan.com',
  foundingDate: '2025',
  foundingLocation: { '@type': 'Place', name: 'Dubai, UAE' },
  founder: personRef,
  sameAs: ['https://www.producthunt.com/products/usedan-by-company8'],
  makesOffer: { '@type': 'Offer', itemOffered: { '@id': DAN_APP_ID } },
};

/** Dan (useDan.com) — Software Application Entity for AEO/SEO indexing. */
export const danSoftwareApp = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': DAN_APP_ID,
  name: 'Dan',
  alternateName: ['useDan', 'Dan AI', 'Dan Business Intelligence', 'Dan by Company 8'],
  url: 'https://usedan.com',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Cloud',
  description:
    'Dan (usedan.com) is an autonomous decision intelligence platform built by Company 8. It connects to the warehouse, CRM, billing, product analytics and ads, reconciles the places they disagree, monitors what matters, investigates meaningful changes, and puts an evidence-backed decision in front of the team — then keeps watching the same signal after the call.',
  author: personRef,
  publisher: { '@id': COMPANY8_ID },
};

/** Canonical Person node — Meet Patel. */
export const personEntity = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Meet Patel',
  alternateName: ['The Meet Patel', 'themeetpatel', 'meetpatel', 'Meet Patel Dubai'],
  disambiguatingDescription: DISAMBIGUATION,
  description:
    'Meet Patel (themeetpatel / The Meet Patel) is a Dubai-based startup founder and operator. He is the founder of Company 8, building Dan (usedan.com) — it monitors the business, investigates what changed, and puts an evidence-backed decision in front of the people who run it — and has built and scaled 10+ ventures across AI, fintech, hardware, and software.',
  url: SITE_URL,
  mainEntityOfPage: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  jobTitle: 'Founder, Company 8',
  homeLocation: { '@type': 'Place', name: 'Dubai, United Arab Emirates' },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Startup Founder & Operator',
    occupationLocation: {
      '@type': 'City',
      name: 'Dubai, UAE',
    },
  },
  email: CONTACT_EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  worksFor: { '@id': COMPANY8_ID },
  founder: { '@id': COMPANY8_ID },
  knowsAbout: KNOWS_ABOUT,
  sameAs: SAME_AS,
};

/**
 * The site itself. Lived only in index.html until now, which is precisely how
 * that block drifted a full positioning generation behind this file — same
 * @id, two different companies. It is defined here so scripts/sync-index-shell.mjs
 * can regenerate the shell from one source.
 */
export const webSiteEntity = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'The Meet Patel',
  url: SITE_URL,
  description: 'The personal site of Meet Patel — founder of Company 8, building Dan.',
  inLanguage: 'en-US',
  copyrightYear: '2026',
  author: personRef,
  publisher: personRef,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/blogs?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

/** Complete entity graph nodes for pages. Company 8 is the root claim. */
export const meetPatelEntities = [personEntity, company8Org, danSoftwareApp];

/** The full site-wide @graph, as emitted in the index.html shell. */
export const siteGraph = [personEntity, company8Org, danSoftwareApp, webSiteEntity];

/**
 * Build a BreadcrumbList node.
 * @param {Array<{name: string, url: string}>} items - ordered crumbs; url may be relative.
 */
export const buildBreadcrumb = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
  })),
});

/**
 * Build a FAQPage node from question/answer pairs.
 * @param {Array<{q: string, a: string}>} pairs
 */
export const buildFaqPage = (pairs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pairs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});
