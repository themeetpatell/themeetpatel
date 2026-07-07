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
  founder: 'Meet Patel',
  founderHandle: 'themeetpatel',
  location: 'Dubai, UAE',
};

/** The narrative spine — pre-seed = founder + insight + early signal. */
export const POSITIONING = {
  // Hero H1 — the product promise, not a greeting.
  tagline: 'Ask your business anything. Get answers that lead to action.',
  // One sentence that must be true on every surface.
  oneLiner:
    'Company 8 is building Dan — the AI that lets any operator ask their business anything and get answers that lead to action.',
  // The earned problem (founder-market-fit, not googled).
  problem:
    "Your answers are trapped — in dashboards nobody reads, spreadsheets, and analysts' queues. Operators don't need another chart. They need to ask a question and know what to do.",
  // Why now.
  whyNow:
    'AI finally lets anyone query their entire business in plain English and get an action, not a chart. That was not possible 18 months ago.',
  // Why me — turns the "day job" into the origin story.
  whyMe:
    'I spent years as the human "Dan" — the operator everyone asked what was happening in the business and what to do about it, as Chief of Staff and interim COO inside a fintech. I lived the problem Dan solves. Now I am going all-in on building it.',
};

/**
 * Traction — you answered "active users / live pilots".
 * Fill the real numbers; keep them here only, so they never contradict again.
 */
export const TRACTION = {
  status: 'live',                    // Dan is live (Product Hunt launched)
  activeUsers: null,                 // NEEDS-CONFIRM: e.g. '120+ active users'
  pilots: null,                      // NEEDS-CONFIRM: e.g. '5 design-partner pilots'
  productHunt: 'Launched on Product Hunt',
  // NEEDS-CONFIRM: any honest retention/usage stat, e.g. 'Users return weekly'.
  usageStat: null,
};

/** The raise. */
export const RAISE = {
  stage: 'Pre-seed',
  isOpen: true,
  // NEEDS-CONFIRM: one-line use of funds, e.g.
  // 'Raising to hire 2 engineers and reach [milestone] over the next 6 months.'
  useOfFunds: null,
  thesis:
    'Backing a technical, operator-founder building the AI layer between a business and its own answers.',
};

/** Investor contact path — the #1 gap today (none existed). */
export const INVESTOR = {
  email: 'meet@company8.dev',
  calendly: 'https://calendly.com/themeetpatell/quick-connect',
  // NEEDS-CONFIRM: link/route to the deck or data room once ready.
  deckUrl: null,
};

/**
 * Canonical résumé stats — reconciled to ONE value each.
 * Picked the more specific / conservative figure where the site disagreed;
 * confirm and adjust. Diligence greps these, so under-claim beats over-claim.
 */
export const STATS = {
  teamLed: '490+',            // cumulative across ventures: Kingstorm 8 + Incsmart 6 + TorchIt 16 + StudentHub/BAWES 270 + Finanshels 190 = 490. (The "270+ at age 26" is the StudentHub/BAWES figure — keep that specific claim as 270+.)
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

export default { BRAND, POSITIONING, TRACTION, RAISE, INVESTOR, STATS, BACKGROUND };
