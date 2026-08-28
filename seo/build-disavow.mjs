#!/usr/bin/env node
/**
 * Builds a Google Search Console disavow file from an Ahrefs referring-domains export.
 *
 * Why this exists: as of 2026-08-29 this domain carried ~514 referring domains
 * (416 live) with DR 3.3, zero organic keywords and zero organic traffic. The
 * anchor report showed 207 referring domains sharing one fabricated testimonial
 * for "SEOExpress.org", plus dozens more selling "premium PBN network service".
 * That is a paid link farm pointed at the domain, and it is the most likely
 * reason nothing ranks.
 *
 * The classifier is deliberately conservative in one direction only: anything it
 * cannot confidently classify lands in REVIEW, never in the disavow file. A
 * false positive here costs a real link; a false negative just means one more
 * manual line. Read review.txt before submitting.
 *
 * Usage:
 *   node seo/build-disavow.mjs <refdomains.txt>   # one domain per line
 *
 * Outputs, next to this script:
 *   disavow.txt  — upload at https://search.google.com/search-console/disavow-links
 *   review.txt   — unclassified; decide each by hand, then move the lines
 *   keep.txt     — recognised as legitimate; never disavow these
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT_DIR = dirname(fileURLToPath(import.meta.url));

/**
 * Real assets, verified by hand against Ahrefs traffic_domain and by knowing
 * why the link exists. Everything here is protected from every rule below.
 * Add to this list as genuine links are earned — it is the whitelist of record.
 */
const KEEP = new Set([
  'crunchbase.com',     // DR 91 — company profile
  'za.com',             // DR 90
  'f6s.com',            // DR 83 — founder profile
  'topmate.io',         // DR 81 — booking profile
  'fueler.io',          // DR 67 — portfolio profile
  'writco.in',          // DR 26 — real writing platform, oldest link on record
  'findit.co.in',       // small but real traffic
  'themeetpatel.in',    // own domain, 308s to canonical — never disavow
  'usedan.com',         // own product domain
  'company8.dev',       // own company domain
]);

/**
 * Tokens that only appear in link-farm hostnames. Matched against the hostname
 * with separators stripped, so "seo-express" and "seoexpress" both hit.
 */
const FARM_TOKENS = [
  'seoexpress', 'outrankhq', 'linkbaron', 'rankforge',
  'backlink', 'guestpost', 'guestposting', 'dofollow', 'nofollow',
  'pbn', 'nicheedit', 'linkbuilding', 'linkjuice', 'linkequity',
  'linkvelocity', 'anchortext', 'domainrating', 'highda', 'dapa', 'dr90',
  'tierone', 'tier1', 'serpboost', 'searchrank', 'keywordrank', 'pagerank',
  'rankingsignal', 'authoritylink', 'contextuallink', 'editoriallink',
  'outreachpro', 'trafficsurge', 'crawlbudget', 'spamscore', 'clickthrough',
  'whitehat', 'expireddomain', 'ageddomains', 'agedomain', 'saasseo',
  'edulink', 'pressrelease', 'organictraffic', 'contentmarketing', 'digitalpr',
  'buybacklinks', 'rankongoogle', 'rankinghigh', 'highranking', 'seoagency',
  'seoservices', 'seodomains', 'homepagebacklinks', 'govlinks',
];

/**
 * Hostname prefixes/suffixes that, combined with a throwaway TLD, are the
 * signature of a generated farm domain (rankcart.shop, seogear.shop, ...).
 */
const FARM_STEMS = ['seo', 'rank', 'link', 'serp', 'webrank', 'siterank', 'pageseo', 'toprank', 'domainrank', 'organicrank', 'searchrank', 'googleseo'];

/**
 * TLDs used almost exclusively by throwaway farm registrations.
 *
 * These are disavowed unconditionally, and that is a deliberate call rather
 * than laziness: every single referring domain on one of these TLDs in the
 * 2026-08-29 export reported traffic_domain = 0, and all of them first appeared
 * inside the farm window. If a genuine link ever arrives on one of these, add
 * it to KEEP — the whitelist always wins.
 */
const THROWAWAY_TLDS = new Set([
  'shop', 'store', 'click', 'site', 'icu', 'top', 'art', 'club', 'xyz',
  'party', 'wf', 'sale', 'website', 'space', 'online', 'agency', 'cc', 'lc',
]);

/** Unambiguously unrelated / adult / piracy / gambling — disavow on sight. */
const JUNK = [
  'escorts', 'casino', 'poker', 'psilocybin', 'movies', 'katmovie',
  'kompromat', 'plrdownloads', 'expireddomain', 'sunnysidepbn',
];

/**
 * Scraper and "check your site" tool domains. They auto-generate a page per
 * domain they crawl, so the link is machine-made, carries no editorial intent
 * and appears on thousands of other sites identically.
 */
const SCRAPER_TOOLS = new Set([
  'websiterace.com', 'getwebsiteworth.com', 'bestwebstats.com',
  'domainanalysis.org', 'domainsc.com', 'optimisedwebsites.com',
  'indexaward.com', 'addurl.in', 'allwebsitesdirectory.com',
  'egyptiandirectory.com', 'sitescooponline.com', 'screenshots.wiki',
  'websitescrawl.art', 'pagesearch.net', 'exlinko.org', 'linksnatcher.com',
  'prolinkbox.com', 'linkbox.agency', 'dr70-links.co.uk', 'way2check.cv',
  'seo.am.in', 'seodaro.com', 'seonexi.com', 'seotira.com', 'seoprobox.click',
  'goooogla.com', 'grow-fast.website', 'nexusnext.agency', 'optimizeflow.top',
]);

/**
 * Machine-generated hostnames — consonant strings and digit strings with no
 * meaning in any language. Listed explicitly rather than pattern-matched so the
 * decision stays auditable.
 */
const GIBBERISH = new Set([
  '5913231.cc', 'hzdlpq.com', 'kgzxkf.com', 'dsnylu.com', 'qhtycw.com',
  'bmwyng.com', 'dupurgeniefr.com', 'wonvision.com', 'einzerce.eu',
  'fldh.info', 'ycm.info', 'pudhe.com', 'onvaxs.com', 'sporstcenter.com',
  'this-is-not-what-you-think-it-is-at-all.us', 'what-happens-next.xyz',
  'you-found-the-hidden-link.xyz', 'purple-elephant.us', 'qa-animals.info',
  'selfie-battles-are-for-amateurs-tim--kalin-from-seodomains-here.com',
]);

const normalise = (d) => d.toLowerCase().replace(/^www\./, '');
const stripped = (d) => normalise(d).replace(/[^a-z0-9]/g, '');
const tld = (d) => normalise(d).split('.').pop();

function classify(domain) {
  const d = normalise(domain);
  if (KEEP.has(d)) return 'keep';

  const flat = stripped(d);
  const host = d.split('.').slice(0, -1).join('.');

  if (SCRAPER_TOOLS.has(d) || GIBBERISH.has(d)) return 'disavow';
  if (JUNK.some((j) => flat.includes(j))) return 'disavow';
  if (FARM_TOKENS.some((t) => flat.includes(t))) return 'disavow';

  // Every referring domain on one of these TLDs reported zero traffic and
  // arrived inside the farm window. See THROWAWAY_TLDS for why this is blanket.
  if (THROWAWAY_TLDS.has(tld(d))) return 'disavow';

  // An SEO stem leading the hostname, on any TLD: seodaro, rankpilot, linkfinds.
  if (FARM_STEMS.some((s) => host.replace(/[^a-z0-9]/g, '').startsWith(s))) return 'disavow';

  return 'review';
}

const input = process.argv[2];
if (!input) {
  console.error('usage: node seo/build-disavow.mjs <refdomains.txt>');
  process.exit(1);
}

const domains = [...new Set(
  readFileSync(input, 'utf8')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#') && l.includes('.'))
    .map(normalise)
)].sort();

const buckets = { keep: [], disavow: [], review: [] };
for (const d of domains) buckets[classify(d)].push(d);

const header = [
  '# Disavow file for themeetpatel.com',
  `# Generated ${new Date().toISOString().slice(0, 10)} by seo/build-disavow.mjs`,
  '#',
  '# Source: Ahrefs Site Explorer referring-domains, mode=subdomains.',
  '# Reason: paid link-farm campaign pointed at this domain. The anchor report',
  '# showed 207 referring domains sharing one fabricated "SEOExpress.org"',
  '# testimonial, plus dozens selling "Premium PBN Network Service".',
  '#',
  `# ${buckets.disavow.length} domains disavowed. ${buckets.keep.length} kept. ${buckets.review.length} left for manual review.`,
  '#',
  '# Upload at: https://search.google.com/search-console/disavow-links',
  '# Uploading REPLACES the previous file — always upload the complete list.',
  '',
].join('\n');

writeFileSync(join(OUT_DIR, 'disavow.txt'), header + buckets.disavow.map((d) => `domain:${d}`).join('\n') + '\n');
writeFileSync(
  join(OUT_DIR, 'review.txt'),
  '# Not confidently classified. Decide each by hand.\n' +
    '# If it is a farm, add `domain:<host>` to disavow.txt. If it is real, add it to KEEP in build-disavow.mjs.\n\n' +
    buckets.review.join('\n') + '\n'
);
writeFileSync(join(OUT_DIR, 'keep.txt'), '# Recognised as legitimate. Never disavow.\n\n' + buckets.keep.join('\n') + '\n');

console.log(`domains in:  ${domains.length}`);
console.log(`disavow:     ${buckets.disavow.length}  -> seo/disavow.txt`);
console.log(`review:      ${buckets.review.length}  -> seo/review.txt`);
console.log(`keep:        ${buckets.keep.length}  -> seo/keep.txt`);
