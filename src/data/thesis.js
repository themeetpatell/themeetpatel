// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — the category thesis
// ─────────────────────────────────────────────────────────────────────────────
// Company 8 answers "what are you building". This file answers "what do you
// believe", which is the layer above it. Everything here is a stated point of
// view, not a factual claim — keep it that way. Numbers and traction live in
// src/data/company8.js and must never be duplicated here.
//
// Why it exists: the site positioned Meet one layer below the territory he
// wants to own. "Ask your business anything" is a product promise. It does not
// tell a CEO, investor or operator that there is a thesis underneath it.
//
// Read by: /thesis (canonical page), /about, the homepage band, /blogs pillar
// filters, and api/_pageContent.js for the crawler-facing versions.
// ─────────────────────────────────────────────────────────────────────────────

/** The territory. Deliberately broader than "AI agents" and narrower than "AI". */
export const CATEGORY = {
  name: 'AI-native company operations',
  statement:
    'How AI changes the way companies are operated, decisions are made, and management systems are designed.',
  // The one sentence the whole body of work argues toward.
  thesis:
    "The scarce resource inside a modern company is not data. It's organizational attention.",
  elaboration:
    'Companies have built systems for storing information, systems for visualising it, and now systems for querying it. What they still have not built is a system responsible for noticing what deserves management attention. That layer is what becomes interesting over the next decade.',
};

/**
 * The three pillars. Weights describe editorial emphasis, not a promise about
 * what is already published — see PILLAR_STATE below for the honest position.
 */
export const PILLARS = [
  {
    id: 'autonomous-company',
    weight: 40,
    name: 'The Autonomous Company',
    summary:
      'How companies themselves change: management layers, agents as coworkers, human approval, organizational design, and what a smaller AI-native operating model actually looks like.',
    question: 'What happens to an organisation when part of it is software?',
    audience: 'Founders, CEOs, investors and AI leaders',
  },
  {
    id: 'decision-intelligence',
    weight: 40,
    name: 'Decision Intelligence',
    summary:
      'Why businesses still make bad decisions despite having more dashboards, more data and more AI than ever — and what has to exist between information and action.',
    question: 'Why does more information keep producing slower decisions?',
    audience: 'COOs, CFOs, CROs and RevOps leaders',
  },
  {
    id: 'founder-economics',
    weight: 20,
    name: 'Founder Economics & AI-Native Building',
    summary:
      'What AI does to the economics of building: capital requirements, small-team leverage, pricing, and why the next generation of software companies will look strange against traditional benchmarks.',
    question: 'What does it now cost to build something that matters?',
    audience: 'Founders and operators',
  },
];

/**
 * Honest state of the published archive, checked against the CMS.
 * Do NOT retro-label old founder-operations essays as Decision Intelligence to
 * make a pillar look populated — anyone who clicks through sees it immediately,
 * and it costs more credibility than the empty pillar does.
 */
export const PILLAR_STATE = {
  'autonomous-company': 'new',      // where the writing is going
  'decision-intelligence': 'new',   // where the writing is going
  'founder-economics': 'established', // the existing archive lives here
};

/**
 * Coined vocabulary. This is the highest-leverage asset on the site for being
 * cited by answer engines: a defined term with a clear definition is exactly
 * the shape an LLM quotes and attributes. Rendered on /thesis and emitted as
 * schema.org DefinedTermSet.
 *
 * Rule: only add a term that is genuinely used in the writing. A glossary of
 * words nobody uses is decoration.
 */
export const MENTAL_MODELS = [
  {
    term: 'Organizational attention',
    definition:
      'The finite capacity of a company to notice, prioritise and act on what is actually happening inside it. Unlike data, it does not scale by adding storage — and most tools consume it rather than protect it.',
  },
  {
    term: 'Decision debt',
    definition:
      'The accumulated cost of decisions a company deferred because the information required to make them was expensive to assemble. It compounds quietly, and is usually repaid during a crisis.',
  },
  {
    term: 'Management latency',
    definition:
      'The elapsed time between something changing in a business and the person able to act on it knowing about it. Most companies measure system uptime to the second and management latency not at all.',
  },
  {
    term: 'Decision infrastructure',
    definition:
      'The systems, ownership and thresholds that determine how a company moves from information to a decision. Dashboards are reporting infrastructure; they are not this.',
  },
  {
    term: 'Machine coworkers',
    definition:
      'Software agents that hold responsibilities rather than execute tasks — which turns them into a management problem (scope, approval, escalation, review) long before it is a technology problem.',
  },
  {
    term: 'Evidence layer',
    definition:
      'The missing tier between raw company data and a recommendation: what is true, how confident we are, and what it implies. Without it, an AI answer is a confident sentence with no accountability behind it.',
  },
];

/**
 * The recurring problems the writing keeps returning to. Named enemies make a
 * point of view legible — a reader should be able to predict what you object to.
 */
export const ENEMIES = [
  'Dashboard overload — more visibility, no more clarity',
  'Systems that disagree: CRM says one thing, billing says another',
  'The Monday reporting ritual that re-answers last week',
  'Decision latency — the business changed on Tuesday, the meeting is Friday',
  'Information nobody owns, and therefore nobody acts on',
  'AI that answers the question asked, without knowing which question mattered',
];

/**
 * Recurring series. These exist so a reader recognises a piece as yours before
 * they see the name on it.
 */
export const FRANCHISES = [
  { name: 'The Autonomous Company', about: 'Predictions about how organisations change.' },
  { name: "Things dashboards don't tell you", about: 'The gap between reporting and knowing.' },
  {
    name: 'Expensive sentences inside companies',
    about: 'The organizational cost hiding behind an innocent phrase.',
    examples: [
      'Can someone pull the numbers?',
      'Which dashboard should I use?',
      "Let me check with finance.",
      "Why didn't we know this earlier?",
    ],
  },
  { name: 'Companies in 2030', about: 'Specific, falsifiable predictions.' },
  { name: 'Founder Math', about: 'Capital efficiency, hiring, pricing, AI economics.' },
];

/** How the thesis connects to what he is building, stated once, without pitching. */
export const BRIDGE =
  'Dan is what this thesis looks like as a product: not another place to ask questions, but a layer responsible for noticing what deserves attention. The thinking came first, and it is still the more interesting half.';

export default { CATEGORY, PILLARS, PILLAR_STATE, MENTAL_MODELS, ENEMIES, FRANCHISES, BRIDGE };
