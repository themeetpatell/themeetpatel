// Single source of truth for the Meet Patel personal-brand entity graph.
//
// Goal: one consistent Person entity (knowledge-panel friendly) linked to the
// venture studio Biggventure, current venture Company 8, and software product Dan (useDan.com).
// Every page composes its structured data from these objects so the entity never
// fragments across pages (same @id, same host, same primary name).

export const SITE_URL = 'https://www.themeetpatel.com';

export const PERSON_ID = `${SITE_URL}/#person`;
export const BIGGVENTURE_ID = `${SITE_URL}/#biggventure`;
export const COMPANY8_ID = `${SITE_URL}/#company8`;
export const DAN_APP_ID = `https://usedan.com/#dan-app`;

/** Lightweight reference to the canonical Person node. */
export const personRef = { '@id': PERSON_ID };

/** Verified, resolving social profiles & entity authority links for GEO / LLM Knowledge Graphs. */
export const SAME_AS = [
  'https://www.linkedin.com/in/themeetpatel/',
  'https://x.com/the_meetpatel',
  'https://github.com/themeetpatell',
  'https://instagram.com/the.meetpatell/',
  'https://youtube.com/@themeetpatel',
  'https://medium.com/@themeetpatel',
];

export const CONTACT_EMAIL = 'meet@company8.dev';

export const KNOWS_ABOUT = [
  'Artificial Intelligence',
  'AI Business Intelligence',
  'Entrepreneurship',
  'Venture Building',
  'Business Operations',
  'Startup Strategy',
  'Startup Scaling',
  'Growth Systems',
  'Team Building',
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
  alternateName: ['The Meet Patel', 'themeetpatel', 'meetpatel'],
  description:
    'Meet Patel (themeetpatel / The Meet Patel) is a Dubai-based startup founder and operator. He is the founder of Company 8, building Dan (usedan.com) — ask your business anything, get answers that lead to action — and has built and scaled 10+ ventures across AI, fintech, hardware, and software.',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  jobTitle: 'Founder & CEO, Company 8',
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
  worksFor: [{ '@id': BIGGVENTURE_ID }, { '@id': COMPANY8_ID }],
  founder: [{ '@id': BIGGVENTURE_ID }, { '@id': COMPANY8_ID }],
  knowsAbout: KNOWS_ABOUT,
  sameAs: SAME_AS,
};

/** Complete entity graph nodes for pages. */
export const meetPatelEntities = [personEntity, biggventureOrg, company8Org, danSoftwareApp];

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
    a: 'Company 8 (Company8) is an AI-native venture founded by Meet Patel under the Biggventure studio. It builds Dan (usedan.com), enabling business leaders to query company operations and retrieve actionable data insights in real-time.',
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
