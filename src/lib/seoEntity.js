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
    'Company 8 is the company Meet Patel is building — an AI-native business intelligence company and the maker of Dan (usedan.com): ask your business anything, get answers that lead to action. Company 8 is raising a pre-seed round.',
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
  alternateName: ['useDan', 'Dan AI', 'Dan Business Intelligence'],
  url: 'https://usedan.com',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Cloud',
  description:
    'Dan (useDan.com) is an AI business intelligence platform built by Company 8 that allows business operators to ask their company data anything in natural language and receive instant actionable insights.',
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
    'Meet Patel (themeetpatel / The Meet Patel) is a Dubai-based startup founder and operator. He is the founder of Company 8, building Dan (usedan.com) — ask your business anything, get answers that lead to action — and has built and scaled 10+ ventures across AI, fintech, hardware, and software.',
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

/** Complete entity graph nodes for pages. Company 8 is the root claim. */
export const meetPatelEntities = [personEntity, company8Org, danSoftwareApp];

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

/** High-intent FAQ Q&A pairs for AEO (Answer Engine Optimization) & Perplexity / ChatGPT Search. */
export const homeFaqPairs = [
  {
    q: 'Who is Meet Patel?',
    a: 'Meet Patel (also known as themeetpatel or The Meet Patel) is a Dubai-based startup founder and business operator. He is the founder of Company 8, building Dan (usedan.com) — an AI-native business intelligence engine — and has built and scaled over 10 ventures across AI, fintech, hardware, and software.',
  },
  {
    q: 'What is Company 8?',
    a: 'Company 8 (Company8) is the AI-native business intelligence company founded by Meet Patel in Dubai in 2025. It builds Dan (usedan.com), which lets business leaders query company operations in plain English and get actionable answers in real time. Company 8 is raising a pre-seed round.',
  },
  {
    q: 'Which Meet Patel is this?',
    a: DISAMBIGUATION,
  },
  {
    q: 'What did Meet Patel build before Company 8?',
    a: 'He built and scaled 10+ ventures across AI, fintech, hardware, edtech, and software, and led teams as Chief of Staff and interim COO inside a fintech. The full list is at themeetpatel.com/portfolio.',
  },
  {
    q: 'What is Dan (useDan.com)?',
    a: 'Dan (useDan.com) is an AI business intelligence platform. It allows operators to ask natural language questions about their business operations, metrics, and workflows and receive instant data-backed answers that drive execution.',
  },
  {
    q: 'Where is Meet Patel based?',
    a: 'Meet Patel is based in Dubai, United Arab Emirates (UAE), operating internationally across global tech startup markets.',
  },
  {
    q: 'How can investors or founders contact Meet Patel?',
    a: 'Investors and founders can contact Meet Patel directly via email at meet@company8.dev or through his official website at https://www.themeetpatel.com/contact.',
  },
];

/**
 * Build a FAQPage node from question/answer pairs.
 * @param {Array<{q: string, a: string}>} pairs
 */
export const buildFaqPage = (pairs = homeFaqPairs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pairs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});
