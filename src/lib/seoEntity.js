// Single source of truth for the Meet Patel personal-brand entity graph.
//
// Goal: one consistent Person entity (knowledge-panel friendly) linked to the
// venture studio Biggventure and the current venture Company 8. Every page
// composes its structured data from these objects so the entity never
// fragments across pages (same @id, same host, same primary name).
//
// Host is canonical www to match <link rel="canonical"> and the sitemap.

export const SITE_URL = 'https://www.themeetpatel.com';

export const PERSON_ID = `${SITE_URL}/#person`;
export const BIGGVENTURE_ID = `${SITE_URL}/#biggventure`;
export const COMPANY8_ID = `${SITE_URL}/#company8`;

/** Lightweight reference to the canonical Person node. */
export const personRef = { '@id': PERSON_ID };

/** Verified, resolving social profiles only (no dead domains in sameAs). */
export const SAME_AS = [
  'https://www.linkedin.com/in/themeetpatel/',
  'https://x.com/the_meetpatel',
  'https://github.com/themeetpatell',
  'http://instagram.com/the.meetpatell/',
  'https://youtube.com/@themeetpatel',
  'https://medium.com/@themeetpatel',
];

export const CONTACT_EMAIL = 'the.meetpatell@gmail.com';

export const KNOWS_ABOUT = [
  'Entrepreneurship',
  'Venture Building',
  'Business Operations',
  'Startup Strategy',
  'Startup Scaling',
  'Growth Systems',
  'Team Building',
  'Startup Mentoring',
  'Product Development',
  'Operational Excellence',
];

/** Biggventure — the venture-building studio (parent organization). */
export const biggventureOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': BIGGVENTURE_ID,
  name: 'Biggventure',
  alternateName: ['Biggventures', 'Biggventure Studio'],
  description:
    'Biggventure is the venture-building studio founded by Meet Patel. It builds, ships, and scales startups across AI, fintech, hardware, and software.',
  url: SITE_URL,
  foundingDate: '2022',
  foundingLocation: { '@type': 'Place', name: 'Dubai, UAE' },
  founder: personRef,
};

/** Company 8 — the venture Meet Patel is currently building under Biggventure. */
export const company8Org = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': COMPANY8_ID,
  name: 'Company 8',
  alternateName: ['Company8'],
  description:
    'Company 8 is the company Meet Patel is building — an AI-native business intelligence platform and the maker of Dan (usedan.com): ask your business anything, get answers that lead to action.',
  foundingDate: '2025',
  parentOrganization: { '@id': BIGGVENTURE_ID },
  founder: personRef,
};

/** Canonical Person node — Meet Patel. */
export const personEntity = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Meet Patel',
  alternateName: ['The Meet Patel', 'themeetpatel', 'meetpatel'],
  description:
    'Meet Patel (themeetpatel / The Meet Patel) is a Dubai-based startup founder and operator. He is the founder of Company 8, building Dan (usedan.com) — ask your business anything, get answers that lead to action — and has built and scaled 10+ ventures across AI, fintech, hardware, and software.',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  jobTitle: ['Startup Founder', 'Operator', 'Venture Builder'],
  email: CONTACT_EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  worksFor: [{ '@id': BIGGVENTURE_ID }, { '@id': COMPANY8_ID }],
  founder: [{ '@id': BIGGVENTURE_ID }, { '@id': COMPANY8_ID }],
  knowsAbout: KNOWS_ABOUT,
  sameAs: SAME_AS,
};

/** Person + the two organizations, ready to spread into any page's JSON-LD array. */
export const meetPatelEntities = [personEntity, biggventureOrg, company8Org];

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
