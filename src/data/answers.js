// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — the answer surface
// ─────────────────────────────────────────────────────────────────────────────
// /glossary answers "what is X". This file answers the other two shapes people
// actually type: "X vs Y" and "why does X happen". Those two carry more query
// intent than definitions do, and comparison queries in particular are asked far
// more often of a model than of a search box.
//
// THE HONESTY RULE, and it is not decorative. Every entry carries `established`,
// `uncertain` and `falsifies`. A page that only states a conclusion is an
// opinion; a page that states what would prove it wrong is an argument, and an
// argument is the thing worth citing. If an entry cannot fill `falsifies` with
// something real, the entry is not ready.
//
// THE PRODUCT RULE. These pages argue a category. They do NOT assert product
// capability — no feature claims, no counts, no traction. Anything about what
// Dan ships lives on usedan.com where it can be kept current.
//
// Read by: /answers and /answers/:slug (React), api/_pageContent.js (the
// crawler-facing render), api/sitemap.js, and public/llms.txt.
// ─────────────────────────────────────────────────────────────────────────────

import { BRAND } from './company8.js';
import { findTerm } from './glossary.js';

/**
 * Pull a glossary definition by slug so an answer page and its term page can
 * never drift. Throws rather than returning undefined — a dangling reference
 * would ship a page that quietly says less than it claims to.
 * @param {string} slug
 * @returns {string}
 */
const define = (slug) => {
  const hit = findTerm(slug);
  if (!hit) {
    throw new Error(
      `answers: "${slug}" is not in glossary.js GLOSSARY. ` +
        `Add the term first — an answer page may not define a word the glossary does not hold.`
    );
  }
  return hit.lede;
};

/**
 * @typedef {Object} ContrastColumn
 * @property {string}   label
 * @property {string[]} points
 *
 * @typedef {Object} AnswerEntry
 * @property {string}   slug         URL segment under /answers/
 * @property {'comparison'|'explanation'|'howto'} kind
 * @property {string}   question     the query this page answers. Rendered as the H1.
 * @property {string}   shortAnswer  the liftable answer, first thing on the page.
 *                                   Under 60 words — that is about what an answer
 *                                   engine takes.
 * @property {string[]} aliases      other phrasings of the same query
 * @property {string[]} mechanism    how it actually works, as paragraphs
 * @property {{a: ContrastColumn, b: ContrastColumn}} [contrast]
 * @property {{name: string, text: string}[]} [steps]  fills HowTo schema
 * @property {string}   scene        one concrete situation
 * @property {string}   established  what the evidence actually supports
 * @property {string}   uncertain    what it does not
 * @property {string}   falsifies    what would show this is wrong
 * @property {{q: string, a: string}[]} faq
 * @property {string[]} terms        glossary slugs this answer leans on
 * @property {string[]} related      other answer slugs
 * @property {string}   updated      ISO date. Honest, and used as sitemap lastmod.
 */

/** @type {readonly AnswerEntry[]} */
export const ANSWERS = Object.freeze([
  {
    slug: 'decision-intelligence-vs-business-intelligence',
    kind: 'comparison',
    question: 'Decision intelligence vs business intelligence: what is the difference?',
    shortAnswer:
      'Business intelligence is responsible for the view: it establishes what happened and presents it when asked. Decision intelligence is responsible for the decision: it notices what deserves attention without being asked, reconciles the systems that disagree, and carries a recommendation with its evidence attached. BI produces a chart. Decision intelligence produces a call someone can defend.',
    aliases: [
      'decision intelligence vs business intelligence',
      'difference between decision intelligence and BI',
      'is decision intelligence just BI',
      'decision intelligence vs analytics',
      'autonomous business intelligence vs BI',
    ],
    mechanism: [
      'The distinction is not capability, it is responsibility, and that is why buying a more capable BI tool never closes the gap. A BI stack is accountable for the accuracy of a view. Nothing in it is accountable for whether anyone looked, whether the thing worth looking at was the thing on the dashboard, or whether a decision followed. Those three gaps are where the expensive failures live, and no dashboard refresh rate touches any of them.',
      'The second difference is direction. BI is pull: a person forms a question, and the system answers it well. That model assumes the person already knows what to ask, which holds for the questions a company has learned to ask and fails completely for the ones it has not. The costly quarter is rarely the one where somebody asked the right question and got a bad answer. It is the one where nobody thought to ask.',
      'The third is reconciliation, and it is the one most often skipped in the marketing of both categories. When the CRM, the billing system and the finance model each hold a version of the same number, a reporting tool shows you a fourth. Decision intelligence has to settle which definition is the company’s and say which of the others is therefore wrong, before it reports anything — otherwise the alert fires on a figure half the room does not accept, and the meeting reverts to establishing facts instead of deciding.',
      'None of this makes BI obsolete, and a vendor telling you otherwise is selling. The reporting layer becomes more load-bearing as the decision layer gets built on top of it, because every autonomous conclusion inherits the quality of the source it was drawn from. A decision layer over an unreconciled warehouse produces confident wrong answers faster than a human could produce them.',
    ],
    contrast: {
      a: {
        label: 'Business intelligence',
        points: [
          'Answers when asked. The question originates with a person.',
          'Accountable for the accuracy of a view.',
          'Presents each source faithfully, including when they disagree.',
          'Output is a chart, a report or a table.',
          'Success looks like adoption — how many people opened it.',
          'The thread ends when the dashboard renders.',
        ],
      },
      b: {
        label: 'Decision intelligence',
        points: [
          'Initiates. Surfaces what deserves attention before anyone asks.',
          'Accountable for whether a decision was well made.',
          'Reconciles disagreement into one company definition before reporting.',
          'Output is a recommendation with evidence, lineage and confidence.',
          'Success looks like decision speed and prevented surprises.',
          'The thread continues after the decision, to check whether it worked.',
        ],
      },
    },
    scene:
      'A revenue leader opens Monday’s dashboard and everything is green, because the dashboard was built around the questions that mattered two quarters ago. The thing that will cost the quarter is a change in renewal behaviour in one segment that no existing view slices for. The BI stack is working perfectly. It has no mechanism for noticing that it is answering the wrong question.',
    established:
      'The structural difference is real and observable: BI systems are pull-based and accountable for views, and there is no component in a standard reporting stack that owns noticing, reconciliation or follow-up. That much can be verified by looking at any company’s own stack and asking who owns each of those three.',
    uncertain:
      'Whether a distinct product category wins, or whether the incumbents absorb the decision layer as a feature. Both have precedent. It is also not established how much of the value comes from autonomous noticing versus from reconciliation alone — plausibly reconciliation carries more of it early, because a company that agrees on its numbers makes better decisions even with no new tooling on top.',
    falsifies:
      'If companies that reconcile their systems and add proactive monitoring show no improvement in decision speed or in surprises caught early, the argument is wrong and the bottleneck is somewhere else — most likely in ownership and incentives rather than information. A serious test would compare matched teams over two or three quarters on time-from-change-to-decision, not on tool usage.',
    faq: [
      {
        q: 'Is decision intelligence just business intelligence with AI on top?',
        a: 'No, and the tell is what each is accountable for. Adding a language model to a BI tool makes the view easier to query; it is still pull-based, still waits to be asked, and still reports each source faithfully rather than reconciling them. Decision intelligence changes the responsibility: noticing without being asked, settling which number is the company’s, and staying on the signal after the decision.',
      },
      {
        q: 'Does decision intelligence replace our BI stack?',
        a: 'It sits above it and depends on it. Every autonomous conclusion inherits the quality of the source it was drawn from, so a decision layer over an unreconciled warehouse produces confident wrong answers faster than people could. The reporting layer gets more load-bearing, not less.',
      },
      {
        q: 'What is autonomous decision intelligence?',
        a: define('autonomous-decision-intelligence'),
      },
      {
        q: 'Who is building this?',
        a: `${BRAND.company} is building ${BRAND.product} in this category — presented publicly as autonomous business intelligence, which is the market-facing name for the same system. Details of what is live are on ${BRAND.productUrl}, which is the only place that stays current.`,
      },
    ],
    terms: ['autonomous-decision-intelligence', 'decision-infrastructure', 'organizational-attention'],
    related: [
      'do-ai-agents-replace-business-intelligence',
      'why-crm-and-finance-disagree-about-revenue',
    ],
    updated: '2026-09-01',
  },

  {
    slug: 'why-crm-and-finance-disagree-about-revenue',
    kind: 'explanation',
    question: 'Why do the CRM and the finance system disagree about revenue?',
    shortAnswer:
      'Almost always because they are answering different questions correctly. The CRM holds what was sold, dated when it was signed. Finance holds what was recognised, dated when it was delivered. Add mid-term changes, credits and currency, and two accurate systems produce two different numbers. The disagreement is a definition problem, not a data-quality problem.',
    aliases: [
      'why does CRM revenue not match finance',
      'CRM and finance revenue mismatch',
      'which revenue number is right',
      'ARR vs recognised revenue difference',
      'revenue reconciliation between systems',
    ],
    mechanism: [
      'Timing is the first and largest source. The CRM records a booking on the day the contract is signed. Finance recognises revenue as it is delivered, spread across the term. A strong December of bookings and a flat December of recognised revenue are perfectly consistent with each other, and a company that has not made that explicit will spend the January review arguing about which report is broken. Neither is.',
      'Definition is the second and it is the one that actually costs money, because it hides. ARR, bookings, billings, recognised revenue and cash collected are five different quantities that people say the word "revenue" for. The disagreements that survive longest are the ones inside a single metric — net revenue retention computed with a mid-term downgrade in the denominator versus outside it will differ by several points, and both spreadsheets will be internally correct.',
      'Lifecycle events are the third: mid-term upgrades and downgrades, prorations, credits, refunds, pauses, currency conversion at differing rates and dates. Each of these is handled by a rule that lives in one system and is approximated in the other. The approximation is usually fine until a quarter has enough of them to move the aggregate, which is exactly the quarter somebody notices.',
      'The fourth is ownership, and it is why the first three persist rather than getting fixed. In most companies nobody owns the reconciliation. RevOps owns the CRM, finance owns the ledger, and the gap between them is owned by whoever is asked about it in a meeting. An unowned discrepancy does not converge over time — it gets rediscovered every quarter by a different person, at full cost each time.',
      'The practical consequence is a tax on every decision drawn from either number. Where the first twenty minutes of a review go to establishing which figure is real, the decision that follows is made with the time and attention that survived, which is the mechanism by which good data still produces slow decisions.',
    ],
    scene:
      'Net revenue retention reads 104% in the warehouse, 111% in the CRM and 97% in the finance model. All three are computed correctly. They disagree because they disagree about what a mid-term downgrade does to the denominator. Three teams then spend a week proving their own number rather than deciding what to do about retention.',
    established:
      'That accurate systems routinely produce different revenue figures for definitional and timing reasons is not in dispute — it is a documented, ordinary property of how bookings, billings and recognition work, and any company can confirm it against its own two systems in an afternoon.',
    uncertain:
      'How much of the observed decision delay is caused by the disagreement itself, versus by review cadence and unclear ownership, which are present in the same companies. The honest position is that reconciliation removes one identifiable cost and does not on its own fix cadence or ownership.',
    falsifies:
      'If a company adopts a single written definition per metric, names an owner for the reconciliation, and its reviews still open with a debate about which number is right, then the disagreement was a symptom rather than a cause — and the real constraint is that no one has authority to settle it. That is a governance finding, not a tooling one, and it would mean tooling here is misdirected spend.',
    faq: [
      {
        q: 'Which revenue number is the right one?',
        a: 'The one whose definition the company has written down and agreed to for that specific question. For a board metric that is usually recognised revenue; for pipeline decisions it is usually bookings; for cash planning it is collections. The failure is not picking the wrong one, it is having no written answer, so a different one wins each meeting depending on who is in the room.',
      },
      {
        q: 'How do you reconcile CRM and finance revenue?',
        a: 'Pick one metric. Write the definition down, including how it treats mid-term changes, credits and currency. Compute it from both systems for the same period, then list every line where they differ and classify each as timing, definition or a genuine data error. Most companies find the third category is the smallest, which is the useful surprise.',
      },
      {
        q: 'Is this a data quality problem?',
        a: 'Usually not. Genuine data errors are the smallest of the three buckets. Timing and definition account for the bulk of the gap, and neither is fixed by cleaning data — they are fixed by deciding, in writing, what the company means, and by naming who owns that decision.',
      },
      {
        q: 'What is decision debt?',
        a: define('decision-debt'),
      },
    ],
    terms: ['decision-debt', 'evidence-layer', 'autonomous-decision-intelligence'],
    related: [
      'decision-intelligence-vs-business-intelligence',
      'how-to-measure-management-latency',
    ],
    updated: '2026-09-01',
  },

  {
    slug: 'how-to-measure-management-latency',
    kind: 'howto',
    question: 'How do you measure management latency?',
    shortAnswer:
      'Take ten recent material changes and record four timestamps for each: when it changed, when a person able to act knew, when the decision was made, and when the action shipped. The median gap from changed to acted is your management latency. The widest of the three internal gaps tells you which problem you actually have.',
    aliases: [
      'how to measure management latency',
      'measure decision latency',
      'time from change to decision',
      'decision speed metric',
      'how long does it take our company to decide',
    ],
    mechanism: [
      'The measurement is deliberately crude, because a crude number that exists beats a precise one that does not. Ten incidents and a median is enough to act on. Companies that try to instrument this properly before measuring it once generally never produce the first number.',
      'The reason the four timestamps matter more than the total is that each gap has a different fix, and treating the total as one problem sends the effort to the wrong place. Changed to known is a noticing problem — nothing in the system was watching. Known to decided is a cadence and ownership problem — someone knew and the next forum was Friday, or nobody was sure whose call it was. Decided to acted is an execution problem. A company with a five-day known-to-decided gap will get nothing from better monitoring.',
      'Review cadence sets a hard floor that no amount of data freshness lowers. If a class of decision is only made in a weekly meeting, its latency cannot go below roughly seven days no matter how current the warehouse is. That floor is usually the finding, and it is usually a surprise, because the company has been investing in freshness.',
      'The comparison worth making is internal and over time. There is no credible industry benchmark for this and anyone quoting one is guessing. Measure it once, change one thing, measure it again in a quarter.',
    ],
    steps: [
      {
        name: 'Pick ten recent material changes',
        text: 'Choose things that actually mattered in the last quarter — a deal slipping, a churn signal, a margin move, a spike in support volume. Avoid crises: they get abnormal attention and will flatter the number.',
      },
      {
        name: 'Record when it changed',
        text: 'The timestamp in the source system where the change actually happened, not when it appeared in a report. This is usually the hardest of the four to recover, and how hard it is is itself a finding.',
      },
      {
        name: 'Record when a person able to act knew',
        text: 'Not when it was technically visible somewhere. When a specific person with authority over the response became aware. Slack messages and calendar entries usually settle this.',
      },
      {
        name: 'Record when the decision was made, and when the action shipped',
        text: 'The decision timestamp is when the call was actually made, which is often later than the meeting it was discussed in. The action timestamp is when something changed in the world.',
      },
      {
        name: 'Compute the median and find the widest gap',
        text: 'The median changed-to-acted figure is your management latency. Then look at which of the three internal gaps is widest across the ten — that is the class of problem to fix first, and it is frequently not the one the company assumed.',
      },
      {
        name: 'Re-measure after one change',
        text: 'Change one thing — a monitoring rule, a decision owner, a review cadence — and measure the same way a quarter later. Against your own prior number, not a benchmark.',
      },
    ],
    scene:
      'The deal slips on Tuesday. It surfaces in the forecast call on Friday. The response is agreed the following Monday and ships Wednesday. Management latency: eight days. The same company pages an engineer at three in the morning for four hundred milliseconds of API latency.',
    established:
      'The four-timestamp method is straightforward and reproducible, and companies running it generally can produce the first three numbers with effort and find the fourth easy. The finding that review cadence sets a floor is arithmetic rather than a claim.',
    uncertain:
      'Whether reducing management latency improves outcomes, or whether it mostly produces faster wrong decisions in companies that lack the evidence to decide well. The plausible reading is that latency reduction helps only where the decision quality is already adequate, which would make evidence the prior constraint and speed the second one.',
    falsifies:
      'If a company halves its management latency across a year and its rate of avoidable surprises and its decision reversal rate are unchanged, then latency was not the binding constraint for that company. Reversal rate is the useful control: speed that produces more reversals is not an improvement, and a measurement programme that does not track it can show progress while making things worse.',
    faq: [
      {
        q: 'What is management latency?',
        a: define('management-latency'),
      },
      {
        q: 'What is a good management latency?',
        a: 'There is no benchmark worth quoting and anyone offering one is guessing. The only useful comparison is against your own prior number. Most companies find their first measurement is in days for things they had assumed took hours, and that finding alone is usually worth the afternoon it costs.',
      },
      {
        q: 'Is management latency the same as data freshness?',
        a: 'No. The warehouse can be current to the minute while the person able to act finds out on Friday. Freshness is a property of the pipeline; management latency is a property of the organisation. Companies routinely buy the first while measuring nothing about the second.',
      },
      {
        q: 'How many incidents do I need to measure?',
        a: 'Ten is enough for a median that will change behaviour. The precision you lose is smaller than the precision you lose by never running the measurement, which is what happens to teams that decide to instrument it properly first.',
      },
    ],
    terms: ['management-latency', 'organizational-attention', 'decision-infrastructure'],
    related: [
      'why-crm-and-finance-disagree-about-revenue',
      'decision-intelligence-vs-business-intelligence',
    ],
    updated: '2026-09-01',
  },

  {
    slug: 'do-ai-agents-replace-business-intelligence',
    kind: 'explanation',
    question: 'Do AI agents replace business intelligence?',
    shortAnswer:
      'No. Agents replace the assembly work — collecting, joining, formatting and summarising — which is where most analyst time actually goes. What they do not replace is the layer that establishes what is true. An agent drawing on unreconciled sources produces confident wrong answers faster than a person could, so the reporting layer becomes more load-bearing, not less.',
    aliases: [
      'do AI agents replace BI tools',
      'will AI replace business intelligence',
      'AI agents vs dashboards',
      'does AI replace data analysts',
      'is BI dead because of AI',
    ],
    mechanism: [
      'Separate the two things a BI stack does. It establishes what is true — models the data, applies definitions, reconciles sources — and it presents that to a person. Agents are strong at the second and at everything downstream of it. They are not, on their own, a substitute for the first, because a model asked a question will produce an answer from whatever it was given, including when what it was given disagrees with itself.',
      'The economics change sharply, and this is the part that is real. Most analyst hours in a growing company go on assembly rather than interpretation: pulling the extract, joining it to the other extract, chasing why the two disagree, formatting the result. Taking that cost close to zero is genuinely significant, because it changes which questions are worth asking. Decisions that were deferred purely because the evidence was expensive to assemble become worth making.',
      'The failure mode that arrives with the capability is a specific one and it is worth naming. A human analyst who is unsure hedges, escalates, or says the number looks wrong. An agent that is unsure produces fluent prose at the same confidence as everything else it has written. The organisation loses its most reliable early-warning signal exactly where it is adding throughput fastest, which is why the evidence layer — lineage, reconciliation, stated confidence — stops being a nicety at this point.',
      'What plausibly does get displaced is the dashboard as the default interface. Building a fixed view for every question made sense when assembling an answer was expensive; when it is cheap, a standing dashboard is mostly a cache of last quarter’s questions. The modelling, definitions and reconciliation underneath it survive that shift and matter more afterwards.',
    ],
    scene:
      'An agent is asked why margin fell and answers in nine seconds, citing a figure from a table that has not refreshed since Thursday and a definition of cost that finance stopped using in March. The answer is fluent, specific and wrong. The same question to an analyst would have produced a two-day delay and the sentence "this table looks stale".',
    established:
      'That agents substantially reduce the cost of assembling an answer is demonstrable and already visible in practice. That an unreconciled source produces a confidently wrong answer is not a prediction — it is a mechanical property of asking any system to answer from data that disagrees with itself.',
    uncertain:
      'Whether the dashboard survives as a primary interface, and on what timescale. Also unclear is how much reconciliation can itself be automated, as against how much of it is a judgement call about what the company means, which is not a data problem and will not automate.',
    falsifies:
      'If agents operating directly on unreconciled source systems reach accuracy comparable to a modelled, reconciled stack across a real evaluation set, then the semantic and reconciliation layer is a transitional cost rather than a permanent one, and this argument is wrong. That is a measurable claim, and it is the one to watch: build the evaluation set before forming a view, because both camps are currently asserting the answer rather than testing it.',
    faq: [
      {
        q: 'Will AI replace data analysts?',
        a: 'It replaces the assembly, not the judgement. Most analyst time goes on collecting, joining, reconciling and formatting rather than interpreting, and that portion is genuinely absorbed. What remains — deciding what the company means by a metric, judging whether a result is plausible, knowing which question is worth asking — is the part that was always the job.',
      },
      {
        q: 'Are dashboards obsolete?',
        a: 'The fixed dashboard as a default interface is under real pressure, because building a permanent view for every question only made sense while assembling an answer was expensive. The modelling, definitions and reconciliation underneath survive and become more important, since every AI answer inherits their quality.',
      },
      {
        q: 'What is an evidence layer?',
        a: define('evidence-layer'),
      },
      {
        q: 'What should we build first?',
        a: 'The reconciliation. A company that agrees, in writing, on what its core metrics mean makes better decisions with no new tooling at all — and every agent added afterwards inherits that agreement. Adding an agent on top of unreconciled sources buys speed on answers no one can defend.',
      },
    ],
    terms: ['evidence-layer', 'machine-coworkers', 'autonomous-decision-intelligence'],
    related: [
      'decision-intelligence-vs-business-intelligence',
      'why-crm-and-finance-disagree-about-revenue',
    ],
    updated: '2026-09-01',
  },
]);

/** Copy for the /answers index. */
export const ANSWERS_INTRO = Object.freeze({
  eyebrow: 'The answers',
  h1: 'Questions I get asked, answered properly',
  standfirst:
    'One page per question, the answer in the first paragraph, then the mechanism underneath it. Each one states what the evidence establishes, what it does not, and what would show the conclusion is wrong.',
  bridge:
    'These sit alongside the glossary: the glossary defines the words, these work through the arguments they belong to.',
});

/** @param {string} slug */
export const findAnswer = (slug) => ANSWERS.find((a) => a.slug === slug);

/** Every answer path, for the route registries that need the full list. */
export const ANSWER_PATHS = ANSWERS.map((a) => `/answers/${a.slug}`);

export default { ANSWERS, ANSWERS_INTRO, findAnswer, ANSWER_PATHS };
