// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — the glossary / answer-engine surface
// ─────────────────────────────────────────────────────────────────────────────
// /thesis states the argument. This file is the other half: one page per term,
// each one shaped like the answer to a question somebody actually types.
//
// Why it exists: a defined term with a short, quotable definition is the single
// most citable shape on a website for an answer engine. /thesis carries all six
// terms as a list, which is right for a human reading the argument and wrong
// for a model answering "what is decision debt" — that model wants one page,
// one term, the definition in the first sentence.
//
// THE DRIFT RULE. `lede` is NOT written here for the three terms that already
// exist in src/data/thesis.js MENTAL_MODELS. It is looked up from there, by
// term name, at module load. If the term is renamed in thesis.js this file
// throws at build time rather than silently shipping two definitions of the
// same word — which is exactly the failure this site has already paid for.
//
// Read by: /glossary and /glossary/:slug (React), api/_pageContent.js (the
// crawler-facing render), api/sitemap.js, and public/llms.txt.
// ─────────────────────────────────────────────────────────────────────────────

import { MENTAL_MODELS } from './thesis.js';
import { BRAND, POSITIONING } from './company8.js';

/**
 * Pull a definition out of the /thesis vocabulary by term name.
 * Throws rather than returning undefined: a glossary page with no definition is
 * worse than a build failure.
 * @param {string} term
 * @returns {string}
 */
const fromThesis = (term) => {
  const hit = MENTAL_MODELS.find((m) => m.term === term);
  if (!hit) {
    throw new Error(
      `glossary: "${term}" is not in thesis.js MENTAL_MODELS. ` +
        `Rename it in both places or drop the glossary entry — never define it twice.`
    );
  }
  return hit.definition;
};

/**
 * @typedef {Object} GlossaryEntry
 * @property {string}   slug        URL segment under /glossary/
 * @property {string}   term        the term as written in prose
 * @property {string}   lede        the definition. Must fit in 40 words — that
 *                                  is roughly what an answer engine lifts.
 * @property {string[]} aliases     other phrasings a person might search
 * @property {string}   question    the question this page is the answer to
 * @property {string[]} why         why it matters, as paragraphs
 * @property {string}   scene       one concrete situation, not an abstraction
 * @property {string[]} measure     how you would actually put a number on it
 * @property {Array<{claim: string, correction: string}>} notThis
 *                                  the confusions worth pre-empting
 * @property {Array<{q: string, a: string}>} faq
 * @property {string[]} related     slugs of other entries
 * @property {string}   updated     ISO date the copy last changed. Honest, and
 *                                  used as the sitemap lastmod for this URL.
 */

/** @type {readonly GlossaryEntry[]} */
export const GLOSSARY = Object.freeze([
  {
    slug: 'autonomous-decision-intelligence',
    term: 'Autonomous decision intelligence',
    lede:
      'Autonomous decision intelligence is a system that connects a company’s systems, reconciles where they disagree, monitors what matters, investigates what changed, and puts an evidence-backed decision in front of a human — then keeps watching whether the call worked.',
    aliases: [
      'autonomous decision intelligence',
      'decision intelligence platform',
      'autonomous BI',
      'agentic business intelligence',
    ],
    question: 'What is autonomous decision intelligence?',
    why: [
      'Business intelligence answered "what happened". Analytics answered "what happened, sliced the way I asked". The AI layer bolted on top of both answers "what happened, phrased as a sentence". None of the three is responsible for deciding which question was worth asking, and all three wait to be asked.',
      'The word doing the work in the term is autonomous, and it does not mean the software acts alone. It means the noticing is autonomous: the system initiates, rather than waiting for a person to remember to look. The irreversible act — the spend, the send, the price change — still belongs to a human, and a system that takes it away is not more autonomous, it is less accountable.',
      'The second word doing work is reconcile. A tool that reports before it reconciles is producing a fourth number to argue about. Reconciliation has to happen before monitoring, or the alert fires on a figure the CRM does not agree with and the meeting reverts to establishing facts.',
    ],
    scene:
      'Net revenue retention reads 104% in the warehouse, 111% in the CRM, and 97% in the finance model. All three are computed correctly. They disagree because they disagree about what a downgrade mid-term does to the denominator. A BI tool shows you three charts. Autonomous decision intelligence settles which definition is the company’s, says which of the three is therefore wrong, and only then tells you the number moved.',
    measure: [
      'Does it reconcile conflicting sources before it reports, or does it add a fourth number?',
      'Does it initiate — surface something nobody asked about — or does it only answer?',
      'Does every finding carry its evidence, its business definition, its source lineage and a confidence?',
      'Does it stay on the same signal after the decision, or does the thread end at the recommendation?',
      'Does a named human still hold every irreversible act?',
    ],
    notThis: [
      {
        claim: 'It is a chat interface on top of the data warehouse.',
        correction:
          'A chat interface is still question-shaped: it waits for you to know what to ask. The whole premise here is that the expensive failures are the questions nobody thought to ask that week.',
      },
      {
        claim: 'It is alerting with better thresholds.',
        correction:
          'Alerting tells you a number crossed a line. It does not know whether the line mattered this quarter, does not reconcile the number against the other systems that hold it, and does not tell you what to do.',
      },
      {
        claim: 'Autonomous means it acts without a human.',
        correction:
          'The decision is prepared autonomously. The act stays human. A system that both decides and executes an irreversible change has removed the only place accountability could live.',
      },
    ],
    faq: [
      {
        q: 'What is autonomous decision intelligence?',
        a: 'Autonomous decision intelligence is a system that connects a company’s systems, reconciles where they disagree, monitors what matters, investigates what changed, and puts an evidence-backed decision in front of a human — then keeps watching whether the call worked. The noticing is autonomous; the irreversible act stays with a person.',
      },
      {
        q: 'How is decision intelligence different from business intelligence?',
        a: 'Business intelligence reports what happened when you ask it. Decision intelligence is responsible for noticing what deserves attention without being asked, reconciling the systems that disagree about it, and carrying a recommendation with the evidence attached. BI produces a view; decision intelligence produces a decision someone can defend.',
      },
      {
        q: 'Who builds autonomous decision intelligence?',
        a: `${BRAND.company} is building ${BRAND.product} (${BRAND.productUrl}) as an autonomous decision intelligence layer. The company was founded by Meet Patel in ${BRAND.location}. The loop it runs is Connect, Understand, Reconcile, Monitor, Investigate, Recommend.`,
      },
      {
        q: 'Does autonomous decision intelligence replace analysts?',
        a: 'It replaces the assembly, not the judgement. Most analyst time inside a growing company goes on collecting, reconciling and formatting evidence rather than interpreting it. Taking the assembly cost to near zero is what makes the deferred decisions worth making — see decision debt.',
      },
    ],
    related: ['decision-debt', 'organizational-attention', 'management-latency'],
    updated: '2026-09-01',
  },

  {
    slug: 'organizational-attention',
    term: 'Organizational attention',
    lede: fromThesis('Organizational attention'),
    aliases: [
      'organizational attention',
      'organisational attention',
      'attention scarcity in companies',
      'management attention',
    ],
    question: 'What is organizational attention?',
    why: [
      'A company budgets for storage, for compute, for seats and for headcount. It does not budget for the thing all four are spent trying to produce, which is a finite number of moments where a person capable of acting actually notices something. That budget exists whether or not anyone writes it down, and almost every tool a company buys draws against it.',
      'This is why the dashboard count and the clarity of the business move in opposite directions after a point. Each new surface is defensible on its own — someone needed that view once. In aggregate they convert a scarce resource into a browsing problem, and the company ends up with more places to look and no more likelihood of looking at the right one.',
      'The useful reframe is that visibility is not the constraint. Nearly every expensive surprise inside a growing company was visible in a system somebody already paid for. What was missing was anything responsible for noticing it, which is a different job from displaying it.',
    ],
    scene:
      'A company has 41 dashboards. Nineteen have not been opened in 30 days. The churn signal that cost the quarter was on one of the nineteen, correct, for six weeks. Nobody was negligent. Nobody’s week had room.',
    measure: [
      'Dashboards and saved reports with zero views in the last 30 days, as a share of the total.',
      'Number of distinct signals the business generates weekly, against the number a named human actually reviews.',
      'Share of the weekly leadership meeting spent establishing what is true, versus deciding what to do.',
      'Count of recurring reports where the reader cannot say what decision the report would change.',
    ],
    notThis: [
      {
        claim: 'It is the same as focus.',
        correction:
          'Focus is an individual property and largely a discipline problem. Organizational attention is a system property: it can be scarce in a company full of focused people, because no one of them is responsible for the noticing.',
      },
      {
        claim: 'It is the same as bandwidth.',
        correction:
          'Bandwidth is capacity to do work. Attention is capacity to notice that work is warranted. A team can be at full bandwidth and blind at the same time — usually is.',
      },
      {
        claim: 'More dashboards buy more of it.',
        correction:
          'They spend it. Every surface added without something responsible for reading it moves cost from the tool onto the person.',
      },
    ],
    faq: [
      {
        q: 'What is organizational attention?',
        a: fromThesis('Organizational attention'),
      },
      {
        q: 'Why is organizational attention scarce?',
        a: 'Because the supply is fixed by the number of people who can act and the hours they have, while the demand grows with every system, dashboard, alert and report the company adds. Storage and compute scale; the number of things a leadership team can genuinely notice in a week does not.',
      },
      {
        q: 'How do you measure organizational attention?',
        a: 'Start with what is going unread: the share of dashboards and reports with no views in 30 days, the ratio of signals generated to signals reviewed by a named person, and the share of the leadership meeting spent establishing facts rather than deciding. All three are cheap to count and uncomfortable to look at.',
      },
    ],
    related: ['decision-debt', 'management-latency', 'autonomous-decision-intelligence'],
    updated: '2026-09-01',
  },

  {
    slug: 'decision-debt',
    term: 'Decision debt',
    lede: fromThesis('Decision debt'),
    aliases: ['decision debt', 'deferred decisions', 'decision backlog'],
    question: 'What is decision debt?',
    why: [
      'Technical debt is code you chose to write badly because shipping mattered more that week. Decision debt is a decision you chose not to make at all, because assembling the evidence cost more than the decision felt worth that week. The two behave the same way: cheap to take on, invisible on any statement, and repaid at the worst possible moment with interest.',
      'The mechanism is specific and worth naming, because it is not indecisiveness. A question comes up — is this segment actually profitable, is this channel still working, should this contract be renewed. Answering it properly means someone pulls three systems together for a day and a half. The question is not urgent this week. It is deferred, honestly and reasonably. Then it is deferred again.',
      'What makes it compound is that the deferral is never recorded as a cost. The day and a half saved is real and visible. The decision not made is neither. So the ledger only ever shows one side, and the company keeps making the same locally rational trade until a crisis forces every deferred question to be answered at once, badly, under time pressure.',
    ],
    scene:
      'Six months of leadership notes carry the same line: "need to pull the numbers on the mid-market segment". It was correct to defer every single time — the day and a half was always needed elsewhere. The segment turns out to have been unprofitable since the second month.',
    measure: [
      'Items in leadership notes carried across more than two cycles with an evidence-gathering blocker attached.',
      'Median age of open "we should look into" items, measured in cycles rather than days.',
      'Hours to assemble the evidence for a decision the company makes repeatedly — the assembly cost is the interest rate.',
      'After any expensive surprise: how long the signal was available in a system before anyone acted on it.',
    ],
    notThis: [
      {
        claim: 'It is indecisiveness.',
        correction:
          'Indecisiveness is a person seeing the evidence and not choosing. Decision debt is the evidence never being assembled, so there is nothing to be decisive about. Replacing the leader does not clear it.',
      },
      {
        claim: 'It is analysis paralysis.',
        correction:
          'Analysis paralysis is too much deliberation. Decision debt is the absence of deliberation, caused by the input cost. They look similar from outside and have opposite fixes.',
      },
      {
        claim: 'It shows up in the numbers.',
        correction:
          'It shows up in their absence. The saving is visible and the foregone decision is not, which is precisely why the balance grows.',
      },
    ],
    faq: [
      {
        q: 'What is decision debt?',
        a: fromThesis('Decision debt'),
      },
      {
        q: 'How is decision debt different from technical debt?',
        a: 'Technical debt is work done badly on purpose; the artefact exists and can be inspected. Decision debt is work not done at all, because the evidence was expensive to assemble, so there is no artefact and nothing to inspect. Technical debt slows the next build. Decision debt shows up as a surprise.',
      },
      {
        q: 'How do you pay down decision debt?',
        a: 'By attacking the assembly cost rather than the decision. The deferral is rational as long as answering the question takes a day and a half; it stops being rational when the evidence arrives without anyone assembling it. That is the argument for decision infrastructure over another dashboard.',
      },
    ],
    related: ['organizational-attention', 'management-latency', 'autonomous-decision-intelligence'],
    updated: '2026-09-01',
  },

  {
    slug: 'management-latency',
    term: 'Management latency',
    lede: fromThesis('Management latency'),
    aliases: ['management latency', 'decision latency', 'time to decision'],
    question: 'What is management latency?',
    why: [
      'Engineering measures latency to the millisecond and pages a human when it degrades. The same company will let eight days pass between a deal slipping and anyone deciding what to do about it, and no one will call that an outage, because nothing in the management layer is instrumented.',
      'The measurement is four timestamps and most companies can produce none of them: when the thing changed, when a person able to act knew, when a decision was made, and when the action shipped. The gaps between them are where the cost lives, and each gap has a different fix — the first is a noticing problem, the second is a meeting-cadence problem, the third is an ownership problem.',
      'Cadence is the usual culprit and the usual defence. A business that changes continuously is reviewed weekly, which sets a floor on latency that no amount of dashboard freshness can lower. The warehouse being current to the hour does not help if the only moment anyone looks is Friday.',
    ],
    scene:
      'The deal slips on Tuesday. It surfaces in the forecast call on Friday. The response is agreed the following Monday and ships Wednesday. Management latency: eight days. The same company alerts on 400ms of API latency at three in the morning.',
    measure: [
      'The four timestamps, per incident: changed, known, decided, acted. Start with ten recent examples; the median is enough.',
      'Review cadence as a hard floor — a weekly meeting cannot produce latency below about seven days for anything it owns.',
      'Share of material changes first noticed by a person rather than raised by a system.',
      'The gap between data freshness and human freshness, which is usually where the surprise is.',
    ],
    notThis: [
      {
        claim: 'It is the same as data freshness.',
        correction:
          'The warehouse can be current to the minute while the person able to act finds out on Friday. Freshness is a property of the pipeline; management latency is a property of the organisation.',
      },
      {
        claim: 'It is the same as reporting frequency.',
        correction:
          'A weekly report can carry a fact that was already three days old when it was compiled. Frequency sets a floor on latency, it does not measure it.',
      },
      {
        claim: 'Faster meetings fix it.',
        correction:
          'Meeting cadence only addresses the gap between known and decided. If nothing noticed the change in the first place, moving the meeting earlier changes nothing.',
      },
    ],
    faq: [
      {
        q: 'What is management latency?',
        a: fromThesis('Management latency'),
      },
      {
        q: 'How do you measure management latency?',
        a: 'Take ten recent material changes and record four timestamps for each: when it changed, when a person able to act knew, when the decision was made, and when the action shipped. The median gap from changed to acted is your management latency. The gap that is widest tells you whether you have a noticing problem, a cadence problem or an ownership problem.',
      },
      {
        q: 'What is a good management latency?',
        a: 'There is no benchmark worth quoting, and anyone offering one is guessing. The useful comparison is internal: measure it once, then measure whether it fell. Most companies find their first number is measured in days for things they assumed took hours.',
      },
    ],
    related: ['organizational-attention', 'decision-debt', 'autonomous-decision-intelligence'],
    updated: '2026-09-01',
  },
]);

/** Copy for the /glossary index. Voice, not furniture. */
export const GLOSSARY_INTRO = Object.freeze({
  eyebrow: 'The vocabulary',
  h1: 'Words I use, and what I mean by them',
  standfirst:
    'Most of the argument depends on distinctions the usual language flattens. One page per term, definition first, so the meaning does not have to be inferred from an essay.',
  bridge: `The terms below are the working vocabulary behind ${POSITIONING.category.toLowerCase()} — the category ${BRAND.company} is building ${BRAND.product} into.`,
});

/** @param {string} slug */
export const findTerm = (slug) => GLOSSARY.find((t) => t.slug === slug);

/** Every glossary path, for the route registries that need the full list. */
export const GLOSSARY_PATHS = GLOSSARY.map((t) => `/glossary/${t.slug}`);

export default { GLOSSARY, GLOSSARY_INTRO, findTerm, GLOSSARY_PATHS };
