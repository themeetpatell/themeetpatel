// ─────────────────────────────────────────────────────────────────────────────
// CAPABILITIES — what Meet Patel does, and the figure that proves each one.
// ─────────────────────────────────────────────────────────────────────────────
// This replaced a 40-item endorsement tag cloud ("Communication", "Innovation",
// "Problem Solving") that made claims with nothing behind them. On a site whose
// own published thesis is "every figure carries a source or prints UNKNOWN",
// that section was the one place breaking the rule.
//
// The contract: a capability ships with proof, or it does not ship. Every
// `proof` entry carries a `figure` and the `source` it came from — a real
// venture, never "various". Figures that already live in a canonical file are
// imported, never retyped, so a number can only be wrong in one place.
//
// Three bands, because they are three different jobs: running a company that
// already exists, starting one that does not, and the work that is nobody's
// job but his. INTERESTS deliberately carries no proof at all — see below.
//
// Provenance for values written literally here (read 2026-08-29):
//   Finanshels head-count and SME growth ... company8.js POSITIONING.whyMe
//   StudentHub / BAWES, Plugn, TorchIt,
//   Incsmart, Kingstorm figures ............ AboutPage personalInfo.experience
//   Books, speaking, certifications ........ AboutPage personalInfo.*
//   Thesis pillars and mental models ....... thesis.js
// Anything not traceable to one of those does not belong in this file.
// ─────────────────────────────────────────────────────────────────────────────

// Explicit .js extensions: this file is read by both Vite (browser) and the
// Node ESM serverless functions in /api, and Node will not resolve an
// extensionless relative import.
import { STATS, TRACTION, BRAND } from './company8.js';
import { SCALE, LAWS } from './acu.js';
import { PILLARS, MENTAL_MODELS } from './thesis.js';
import { KNOWS_ABOUT } from '../lib/seoEntity.js';

/** Band accents. Violet and gold are the page's own tokens; teal is the third. */
const VIOLET = '#9b8bff';
const GOLD = '#e8c36a';
const TEAL = '#6fd6c9';

/**
 * The three bands. Each holds cards of exactly three, six or nine so the grid
 * never ends on a ragged row. `current: true` marks the one live thing.
 * @type {ReadonlyArray<{
 *   id: string, label: string, heading: string, frame: string, accent: string,
 *   cards: ReadonlyArray<{title: string, body: string, current?: boolean,
 *     proof: ReadonlyArray<{figure: string, source: string}>}>}>}
 */
export const BANDS = [
  {
    id: 'operating',
    label: 'Inside a company',
    heading: 'Inside a company — the operating record',
    frame: 'Eight years of running companies other people started — the work that shows up on a P&L.',
    accent: VIOLET,
    cards: [
      {
        title: 'One rhythm for a whole company',
        body: 'The integrator work: an owner behind every number, a KPI per department, and a cadence that holds through a bad quarter.',
        proof: [
          { figure: '17 → 192 people', source: 'Finanshels' },
          { figure: '105 → 7,000+ SMEs served', source: 'Finanshels' },
        ],
      },
      {
        title: 'Turning a P&L around',
        body: 'Taking cost out without cutting the part that earns, then holding the margin once the pressure comes off.',
        proof: [
          { figure: 'Loss-making → profitable', source: 'StudentHub, BAWES' },
          { figure: '35% cost reduction', source: 'StudentHub, BAWES' },
        ],
      },
      {
        title: 'Building a team that stays',
        body: 'Hiring, onboarding and payroll run as a system, so the second year of a hire is better than the first.',
        proof: [
          { figure: 'Retention up 25%', source: 'StudentHub, BAWES' },
          { figure: 'Onboarding time down 30%', source: 'StudentHub, BAWES' },
        ],
      },
      {
        title: 'Product that reaches a market',
        body: 'Roadmap, spec and release under one owner, plus enough time with customers to know when it is the spec that is wrong.',
        proof: [
          { figure: '11 products led', source: 'StudentHub, BAWES' },
          { figure: `70+ customers interviewed to shape ${BRAND.product}`, source: BRAND.company },
        ],
      },
      {
        title: 'Automating the work away',
        body: 'Policy, tooling and integrations aimed at the repeat work, so the headcount curve stops tracking the revenue curve.',
        proof: [
          { figure: 'Customer inquiries down 40%', source: 'Plugn' },
          { figure: '10+ policies and KPIs, efficiency up 30%', source: 'Plugn' },
        ],
      },
      {
        title: 'Scale in hardware',
        body: 'Hardware, three sites and a real supply chain — the constraint nobody who has only shipped software has had to feel.',
        proof: [
          { figure: '45 → 800 units/day across 3 sites', source: 'TorchIt' },
          { figure: '100,000 smart canes distributed', source: 'TorchIt' },
        ],
      },
    ],
  },
  {
    id: 'founder',
    label: 'From nothing',
    heading: 'From nothing — the founder work',
    frame: 'What the job is before there is a company to run: no team, no budget, and nobody to tell you the bet is wrong.',
    accent: GOLD,
    cards: [
      {
        title: 'Starting from nothing',
        body: 'Two companies co-founded, staffed and taken to revenue.',
        proof: [
          { figure: '3 → 14 people, revenue +150% in year one', source: 'Incsmart' },
          { figure: 'Team of 8, concept to market', source: 'Kingstorm' },
        ],
      },
      {
        title: 'First users without a budget',
        body: `${BRAND.product} went live and found its first users in ${TRACTION.window} — distribution earned.`,
        proof: [
          { figure: TRACTION.signups, source: BRAND.product },
          { figure: TRACTION.activeUsers, source: BRAND.product },
        ],
      },
      {
        title: 'Systems that run without me',
        body: 'The operating layer I now build: a governed agent organisation where every recommendation carries a review date, and the product it turned into.',
        current: true,
        proof: [
          { figure: `${SCALE[0].value} agents, ${SCALE[1].value} departments, ${LAWS.length} binding laws`, source: 'ACU' },
          { figure: TRACTION.investigations, source: BRAND.product },
        ],
      },
    ],
  },
  {
    id: 'personal',
    label: 'Outside the work',
    heading: 'Outside the work — writing, speaking and study',
    frame: 'Things nobody asked for and no employer paid for. They are on the record anyway.',
    accent: TEAL,
    cards: [
      {
        title: 'Writing after hours',
        body: 'Two novels, written at night over several years, because the operating job was never going to use that part.',
        proof: [
          { figure: 'The Eternal Love — published', source: 'Independent, 2025' },
          { figure: 'The Endless Devotion — Part II', source: 'Independent, early access' },
        ],
      },
      {
        title: 'An argument worth publishing',
        body: 'A standing thesis on AI-native company operations, argued in public and revised when it turns out to be wrong.',
        proof: [
          { figure: `${PILLARS.length} pillars, ${MENTAL_MODELS.length} mental models`, source: 'themeetpatel.com/thesis' },
          { figure: 'IIM Ahmedabad Startup Summit', source: 'Speaking, 2019' },
        ],
      },
      {
        title: 'Still doing the reps',
        body: 'Formal study kept up alongside the job, mostly in the areas the next role was going to need before it needed them.',
        proof: [
          { figure: '30 certifications — LinkedIn, PMI, IIBA', source: '2023–2025' },
          { figure: 'National-level winner', source: 'Nirma University, 2014' },
        ],
      },
    ],
  },
];

/** Flat view, for anything that wants every card without the banding. */
export const CAPABILITIES = BANDS.flatMap((band) => band.cards);

/**
 * The cumulative figure that closes the operating band. Reads from STATS so the
 * page can never disagree with the rest of the site about how many people.
 */
export const CAPABILITY_TOTAL = {
  figure: STATS.teamLed,
  label: 'people led across those ventures',
  note: `${STATS.venturesBuilt} ventures, ${STATS.yearsOperating} years operating`,
};

/**
 * Subject areas, taken verbatim from the Person schema's `knowsAbout`. Same
 * list to a reader and to a crawler — the old visible tags said "Zapier" while
 * the schema already said "Decision intelligence".
 */
export const DOMAINS = KNOWS_ABOUT;

/**
 * Tools the work actually ran on. Named systems only, no claim attached to any
 * of them. Every entry is traceable: the first five come from the StudentHub /
 * BAWES tool-stack achievement, Claude Code from acu.js (the ACU ships as a
 * plugin marketplace for it), and the last three are what this site itself is
 * built and measured on. A tool that cannot be traced does not get listed.
 */
export const STACK = [
  'Jira', 'Slack', 'Zapier', 'Mixpanel', 'CRM systems',
  'Claude Code', 'Supabase', 'Vercel', 'PostHog',
];

/**
 * The only list on the page with no proof behind it, and it is labelled that
 * way. Dressing a hobby as an achievement is exactly the move this section was
 * rebuilt to stop, so these stay what they are: true, and unevidenced.
 */
export const INTERESTS = [
  'Travelling & hiking', 'Cricket & football', 'Philosophy & psychology',
  'Music & photography', 'Writing fiction', 'Burgers & chocolate',
];

export default { BANDS, CAPABILITIES, CAPABILITY_TOTAL, DOMAINS, STACK, INTERESTS };
