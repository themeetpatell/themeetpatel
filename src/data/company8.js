// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — Company 8 / Dan fundraising narrative
// ─────────────────────────────────────────────────────────────────────────────
// Every public page MUST read brand names, stats, traction and CTAs from here.
// Never hardcode a headline number in a page again — that is how the site ended
// up saying "270+" and "450+" team members on the same visit, "10+" vs "Ten"
// ventures, and "1678%" vs "167.8%" inside one card. One number, one place.
//
// Fields marked `NEEDS-CONFIRM` are the founder-only facts. They ship with a
// conservative / honest default so nothing false goes live; replace the value
// (leave the comment) once confirmed.
// ─────────────────────────────────────────────────────────────────────────────

/** Brand hierarchy — the thing that was inconsistent everywhere. */
export const BRAND = {
  company: 'Company 8',        // the company (what the pre-seed raises into)
  product: 'Dan',              // the product / platform — spoken name is "Dan"
  productUrl: 'https://usedan.com', // usedan.com is only the URL, never the name
  signupUrl: 'https://usedan.com/signup', // the real free-signup route on Dan
  founder: 'Meet Patel',
  founderHandle: 'themeetpatel',
  location: 'Dubai, UAE',
  // Inferred from Dan's positioning (autonomous BI, evidence-backed decisions,
  // built for operators). Adjust if the real ICP is narrower.
  targetUser: 'founders and operators of growing businesses',
};

/**
 * Free-signup link, carrying Dan's own `signup_source` convention plus UTMs so
 * this site's traffic is attributable inside Dan. Use for every "try Dan" CTA.
 * @param {string} placement short slug for where the click came from
 * @returns {string}
 */
export function signupHref(placement) {
  return `${BRAND.signupUrl}?signup_source=themeetpatel_${placement}&utm_source=themeetpatel&utm_medium=site&utm_campaign=try_dan`;
}

/** The narrative spine — pre-seed = founder + insight + early signal. */
export const POSITIONING = {
  // The category Company 8 is building. Taken from the pre-seed deck (2026),
  // which frames Dan as decision intelligence rather than another BI surface.
  category: 'Autonomous Decision Intelligence',
  // The buyer the deck goes to market against first. Broader expansion
  // (finance, product, customer, operations) is the deck's TAM story, not a
  // claim about today — keep it in MARKET, not here.
  beachhead: 'revenue teams',
  // Hero H1, in two lines (the second renders in the violet gradient).
  heroLines: ['What is your business', 'already telling you?'],
  // The /investors hero, as three held beats. A faithful compression of
  // `problem` ("the CRM, the dashboard and finance each report a different
  // number") — no figure is implied and none is invented. Rendered as the H1
  // there and mirrored into api/_pageContent.js, which must match it exactly.
  investorBeats: ['Three systems.', 'One number.', 'Three answers.'],
  // One-line product promise. Used in meta, bios and the site-wide promo.
  tagline:
    'Dan connects your company’s systems, reconciles conflicting data, and tells you what changed, why it matters, and what to do next.',
  // The reusable clause that replaces "ask your business anything" everywhere.
  // Reads as: "building Dan — {descriptor}".
  descriptor:
    'the autonomous decision intelligence layer that reconciles a company’s systems, investigates what changed, and puts an evidence-backed decision in front of the people who run it',
  // One sentence that must be true on every surface.
  oneLiner:
    'Company 8 is building Dan — the autonomous decision intelligence layer that connects a company’s systems, reconciles conflicting data, and tells the people who run it what changed, why it matters, and what to do next.',
  // The earned problem (founder-market-fit, not googled).
  problem:
    'By the time leadership sees the risk, the business has already paid for it. The CRM, the dashboard and finance each report a different number, and a person still has to reconcile the truth across tools, dashboards and spreadsheets — after the signal has already become costly.',
  // Why now.
  whyNow:
    'AI made answers cheap. Acting on the wrong answer became expensive. The valuable layer is no longer producing an answer — it is deciding what to trust, what to do about it, and whether it worked.',
  // Why me — turns the "day job" into the origin story.
  whyMe:
    'I spent years as the human "Dan" — the operator who had to notice what was moving in the business, work out why, and say what to do about it. As interim COO, then Head of COE and now Associate Vice President, I helped scale Finanshels from 17 to 192 people, and from 105 to over 7,000 SMEs served. I lived the problem Dan solves. Now I am going all-in on building it.',
};

/**
 * What Dan actually does, taken from usedan.com's own product principles
 * (monitor -> investigate -> decide -> keep watching). Never invent a feature
 * here; if the product page changes, change this file, not the pages.
 */
export const PRODUCT = {
  eyebrow: 'Meet Dan',
  heading: 'The layer that decides what deserves attention.',
  capabilities: [
    {
      title: 'Reconciles before it reports',
      body: 'The CRM, the dashboard and finance rarely agree. Dan connects them, reconciles the conflict, and settles which number is right before anyone walks into the meeting.',
    },
    {
      title: 'Investigates without being asked',
      body: 'Material risks and opportunities are surfaced before someone remembers to look. Agents audit, monitor and publish findings on a schedule.',
    },
    {
      title: 'Shows the work, then stays on it',
      body: 'Every finding carries the evidence, business definition, source lineage and confidence needed to defend the decision — and Dan keeps watching the same signal after the call.',
    },
  ],
};

/**
 * The loop, exactly as the pre-seed deck draws it (slide 8, "How we do it
 * differently"). Order is load-bearing: reconciliation happens before
 * monitoring, which is the difference between this and an alerting tool.
 */
export const LOOP = {
  stages: ['Connect', 'Understand', 'Reconcile', 'Monitor', 'Investigate', 'Recommend'],
  substitute:
    'Today’s substitute is a costly combination of analysts, spreadsheets and executive meetings.',
  evidence:
    'Every finding carries the evidence, business definition, source lineage and confidence needed to defend the decision.',
};

/**
 * Market sizing — read off the pre-seed deck (2026), slide 3, on 2026-08-29.
 * These are the deck's own figures and the deck's own cited sources. If the
 * deck's model changes, change it here; never restate a range from memory.
 */
export const MARKET = {
  universe: {
    value: '423K',
    label: 'Initial market universe',
    detail: 'Target-sized businesses across India, UAE, US, UK, Singapore and Australia.',
  },
  beachhead: {
    value: '85K–127K',
    label: 'Qualified beachhead',
    detail:
      'Companies with fragmented revenue systems, recurring leadership reviews and a clear economic buyer.',
  },
  sam: {
    value: '$1.3B–$1.9B',
    label: 'Revenue intelligence SAM',
    detail: '85K–127K accounts × $15K starting annual contract.',
  },
  tam: {
    value: '$4.2B–$12.7B',
    label: 'Decision platform TAM',
    detail:
      'Expansion into customer, finance, product and operations at $50K–$100K mature ACV.',
  },
  sources: [
    'US Census SUSB',
    'India MSME Annual Report',
    'Australian Bureau of Statistics',
    'UK Government',
    'UAE Ministry of Economy',
    'Singapore Ministry of Manpower',
  ],
};

/**
 * Traction — read off the Company 8 pre-seed deck (2026), slide 12 "Early
 * Traction at zero paid acquisition", on 2026-08-29. Supersedes the earlier
 * "26 early users" figure, which was stale.
 *
 * The window matters as much as the numbers: first 10 weeks, no paid growth,
 * no sales motion, no marketing, no launch. Never quote one of these figures
 * without the window attached — organic pull is the whole claim.
 */
export const TRACTION = {
  status: 'live',                    // Dan is live at usedan.com (free signup open)
  window: 'the first 10 weeks, at zero paid acquisition',
  // ── The as-of stamp. Not optional. ──────────────────────────────────────────
  // Standing rule: traction, ROI, retention, accuracy, ARR and customer counts
  // are never restated as current without evidence carrying a read date. These
  // figures were read once, off a deck, on the date below. A number published
  // without its date reads as today's number, and quietly becomes a false claim
  // the day after it stops being true.
  //
  // Every surface that renders a figure from this object MUST also render
  // `attribution` (or `asOf` + `source`). llms.txt and llms-full.txt are
  // surfaces — an answer engine restating an undated figure is the exact
  // failure this guards.
  asOf: '2026-08-29',
  source: 'Company 8 pre-seed deck (2026), slide 12 “Early Traction at zero paid acquisition”',
  attribution:
    'Figures as of 29 August 2026, read from the Company 8 pre-seed deck (slide 12), covering the first 10 weeks at zero paid acquisition. Not restated as current.',
  activeUsers: '43 weekly active users in the last 30 days',
  signups: '64 signups, 12.05% of visitors',
  investigations: '134 AI investigations run in-product',
  interviews: '70+ customers interviewed to shape the product',
  pilots: null,                      // add design-partner pilots here when live
  productHunt: 'Launched on Product Hunt',  // historical fact — no longer the live promo
  usageStat: null,                   // add an honest retention/usage stat when available
  // Short forms of the SAME figures above, for metric chips that have no room
  // for a sentence. Surfaces using these MUST also show the window, because
  // organic pull is the claim — see `window` above.
  chips: {
    'WAU': '43',                  // last 30 days
    'Signups': '64',              // 12.05% of visitors
    'Interviews': '70+',          // customers interviewed to shape the product
    'Investigations': '134',      // AI investigations run in-product
  },
};

/** The raise. */
export const RAISE = {
  stage: 'Pre-seed',
  isOpen: true,
  // NEEDS-CONFIRM: one-line use of funds, e.g.
  // 'Raising to hire 2 engineers and reach [milestone] over the next 6 months.'
  useOfFunds: null,
  thesis:
    'Backing an operator-founder building the decision layer between a business and its own answers — the layer that says which number is right, what changed, and what to do about it.',
};

/** Investor contact path — the #1 gap today (none existed). */
export const INVESTOR = {
  email: 'meet@company8.dev',
  // Booking link. The key name is historical — the provider moved off Calendly
  // to Google Calendar appointment scheduling. Every surface reads this value,
  // so the URL lives here and nowhere else.
  calendly: 'https://calendar.app.google/Cc1ugo4Ffx5bqguP9',
  // NEEDS-CONFIRM: link/route to the deck or data room once ready.
  deckUrl: null,
};

/**
 * Canonical résumé stats — reconciled to ONE value each.
 * Picked the more specific / conservative figure where the site disagreed;
 * confirm and adjust. Diligence greps these, so under-claim beats over-claim.
 */
export const STATS = {
  teamLed: '490+',            // cumulative across ventures: Kingstorm 8 + Incsmart 6 + TorchIt 16 + StudentHub/BAWES 270 + Finanshels 192 = 492, published as the conservative "490+". (The "270+ at age 26" is the StudentHub/BAWES figure — keep that specific claim as 270+. Finanshels is 192 per the pre-seed deck, slide 15.)
  venturesBuilt: '10+',       // NEEDS-CONFIRM: portfolio holds 11 cards; "10+" is the safe public figure.
  yearsOperating: '8+',       // NEEDS-CONFIRM: copy says "8 years"; résumé starts 2012. Confirm the anchor.
};

/** Founder credibility — real prior wins to keep, everything else = background. */
export const BACKGROUND = {
  // The ONE line that replaces the 11-venture sprawl on the homepage.
  summary:
    'Previously built and scaled ventures across edtech, hardware, and fintech.',
  // 2–3 strongest, verifiable prior credentials (honest outcomes only).
  priorWins: [
    { name: 'TorchIt', note: 'Assistive-tech hardware, scaled production' },
    { name: 'Incsmart', note: 'Energy venture, exited' },
  ],
  portfolioHref: '/portfolio', // full list still lives here (moved, not deleted)
};

export default { BRAND, POSITIONING, PRODUCT, LOOP, MARKET, TRACTION, RAISE, INVESTOR, STATS, BACKGROUND, signupHref };
