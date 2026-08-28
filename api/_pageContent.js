// Canonical prose for every indexable route, in one place.
//
// Why this exists: the site is a client-rendered SPA, so a crawler that does not
// execute JS receives an empty shell. Google eventually renders it; GPTBot,
// ClaudeBot, PerplexityBot and friends largely do not. api/page.js turns this
// map into fully-rendered HTML for those agents.
//
// RULE: this content must stay a faithful summary of what the React page really
// renders. Serving bots claims the page does not make is cloaking, and it is also
// just lying to the systems you are trying to be quoted by. Facts come from
// src/data/company8.js so a number can never disagree with the live page.

import { BRAND, POSITIONING, PRODUCT, LOOP, MARKET, TRACTION, RAISE, INVESTOR, STATS, BACKGROUND } from '../src/data/company8.js';
import { CATEGORY, PILLARS, MENTAL_MODELS, ENEMIES, BRIDGE } from '../src/data/thesis.js';
import { ACU, SCALE, THE_GATE, LAWS, DEPARTMENTS } from '../src/data/acu.js';
import { BANDS, CAPABILITY_TOTAL, DOMAINS, STACK, INTERESTS } from '../src/data/capabilities.js';
import { FAQ as HOME_FAQ } from '../src/data/homeVoice.js';

/**
 * Look up one homepage answer by its question. Positional indexing used to be
 * how other pages borrowed these, and reordering the list silently swapped the
 * wrong answer onto the wrong question. This throws instead.
 */
const homeAnswer = (question) => {
  const hit = HOME_FAQ.find((item) => item.q === question);
  if (!hit) throw new Error(`_pageContent: no homepage FAQ entry for "${question}"`);
  return hit.a;
};

export const SITE = 'https://www.themeetpatel.com';

const HOME_CRUMB = { name: 'Home', url: '/' };

/**
 * Q&A shown on the homepage FAQ section. Imported, not copied: HomePage renders
 * this exact list and emits it as schema.org FAQPage, so bots and humans cannot
 * be served different answers.
 */
/** Every indexable route, keyed by pathname. */
export const PAGES = {
  '/': {
    schemaType: 'ProfilePage',
    title: `Meet Patel — Founder of ${BRAND.company}, building ${BRAND.product}`,
    description: `Meet Patel is a Dubai-based founder building ${BRAND.product} — ${POSITIONING.descriptor}. An operator who scaled teams and systems across fintech, hardware, and software, now all-in on ${BRAND.company}.`,
    keywords: 'Meet Patel, themeetpatel, The Meet Patel, Company 8, Dan, useDan, autonomous decision intelligence, decision intelligence, AI business intelligence, founder Dubai, AI operator',
    h1: POSITIONING.heroLines.join(' '), // must match the rendered <h1> on HomePage
    intro: `${POSITIONING.oneLiner} Meet Patel (themeetpatel) is the founder — a Dubai-based operator who has built and scaled ${STATS.venturesBuilt} ventures across AI, fintech, hardware, and software.`,
    breadcrumb: [HOME_CRUMB],
    sections: [
      {
        h2: PRODUCT.heading,
        paragraphs: [POSITIONING.problem],
        list: PRODUCT.capabilities.map((c) => `${c.title} — ${c.body}`),
      },
      {
        h2: 'Why now',
        paragraphs: [POSITIONING.whyNow],
      },
      {
        h2: 'Why this founder',
        paragraphs: [POSITIONING.whyMe, BACKGROUND.summary],
        list: BACKGROUND.priorWins.map((w) => `${w.name} — ${w.note}`),
      },
      {
        h2: `${BRAND.company} is raising ${RAISE.stage.toLowerCase()}`,
        paragraphs: [
          RAISE.thesis,
          `${BRAND.product} is ${TRACTION.status} at ${BRAND.productUrl}, with ${TRACTION.activeUsers} in ${TRACTION.window}. ${TRACTION.productHunt}.`,
          `Investor contact: ${INVESTOR.email} · ${SITE}/investors`,
        ],
      },
    ],
    faq: HOME_FAQ,
  },

  '/investors': {
    schemaType: 'WebPage',
    title: `${BRAND.company} — ${RAISE.stage} · For Investors`,
    description: `${RAISE.stage} · ${BRAND.company} is building ${BRAND.product} — ${POSITIONING.descriptor}. Thesis, traction, market and how to reach founder Meet Patel.`,
    keywords: 'Company 8 pre-seed, Company 8 investors, Dan usedan, Meet Patel fundraising, autonomous decision intelligence, decision intelligence pre-seed, revenue intelligence, Dubai startup investment',
    // Must match the rendered <h1> on InvestorsPage, which is the three held
    // beats. The full positioning sentence follows immediately in `intro`,
    // exactly as it does on the page.
    h1: POSITIONING.investorBeats.join(' '),
    intro: `${POSITIONING.oneLiner} ${BRAND.company} is raising a ${RAISE.stage.toLowerCase()} round. ${RAISE.thesis}`,
    breadcrumb: [HOME_CRUMB, { name: 'Investors', url: '/investors' }],
    sections: [
      { h2: 'The problem', paragraphs: [POSITIONING.problem] },
      { h2: 'Why now', paragraphs: [POSITIONING.whyNow] },
      { h2: 'Why this founder', paragraphs: [POSITIONING.whyMe, BACKGROUND.summary] },
      {
        h2: 'What Dan does',
        list: PRODUCT.capabilities.map((c) => `${c.title} — ${c.body}`),
      },
      {
        h2: 'How it works',
        paragraphs: [`${LOOP.stages.join(' → ')}. ${LOOP.evidence} ${LOOP.substitute}`],
      },
      {
        h2: 'Traction',
        paragraphs: [
          `${BRAND.product} is ${TRACTION.status} at ${BRAND.productUrl}. Every figure below is from ${TRACTION.window} — no paid growth, no sales motion, no marketing, no launch.`,
        ],
        list: [
          TRACTION.activeUsers,
          TRACTION.signups,
          TRACTION.investigations,
          TRACTION.interviews,
          TRACTION.pilots,
          TRACTION.usageStat,
          TRACTION.productHunt,
        ].filter(Boolean),
      },
      {
        h2: 'The market',
        list: [
          `${MARKET.beachhead.value} — ${MARKET.beachhead.label}: ${MARKET.beachhead.detail}`,
          `${MARKET.sam.value} — ${MARKET.sam.label}: ${MARKET.sam.detail}`,
          `${MARKET.universe.value} — ${MARKET.universe.label}: ${MARKET.universe.detail}`,
          `${MARKET.tam.value} — ${MARKET.tam.label}: ${MARKET.tam.detail}`,
          `Sources: ${MARKET.sources.join(', ')}`,
        ],
      },
      {
        h2: 'Operating track record',
        list: [
          `${STATS.venturesBuilt} ventures built and scaled`,
          `${STATS.teamLed} people led cumulatively across those ventures`,
          `${STATS.yearsOperating} years operating`,
          ...BACKGROUND.priorWins.map((w) => `${w.name} — ${w.note}`),
        ],
      },
      {
        h2: 'How to reach Meet Patel',
        paragraphs: [
          `Email ${INVESTOR.email} or book a slot at ${INVESTOR.calendly}. Meet Patel is the founder and replies directly — there is no gatekeeper on this round.`,
        ],
      },
    ],
    faq: [
      {
        q: 'What round is Company 8 raising?',
        a: `${BRAND.company} is raising a ${RAISE.stage.toLowerCase()} round. ${RAISE.thesis}`,
      },
      {
        q: 'What is the product?',
        a: `${BRAND.product} (${BRAND.productUrl}) — ${POSITIONING.descriptor}. It is ${TRACTION.status}, with ${TRACTION.activeUsers} in ${TRACTION.window}.`,
      },
      {
        q: `What category is ${BRAND.company} in?`,
        a: `${POSITIONING.category}. ${BRAND.product} enters through ${POSITIONING.beachhead} — the team that already runs a recurring review where the CRM, the dashboard and finance disagree — and expands from there into finance, product, customer and operations.`,
      },
      {
        q: `How is ${BRAND.product} different from a BI or revenue intelligence tool?`,
        a: `BI answers a question someone thought to ask, and revenue intelligence scores a forecast. ${BRAND.product} runs the decision loop instead: ${LOOP.stages.join(', ').toLowerCase()}. ${LOOP.evidence}`,
      },
      {
        q: 'Why is this founder the right one to build it?',
        a: POSITIONING.whyMe,
      },
      {
        q: 'How do investors contact Company 8?',
        a: `Email ${INVESTOR.email}, book time at ${INVESTOR.calendly}, or use ${SITE}/contact.`,
      },
    ],
  },

  '/thesis': {
    schemaType: 'WebPage',
    title: 'The thesis — how AI changes the way companies are run',
    description: `${CATEGORY.thesis} Meet Patel on AI-native company operations, decision intelligence, and what replaces the dashboard.`,
    keywords:
      'AI native operations, decision intelligence, autonomous company, organizational attention, decision debt, management latency, AI management layer, Meet Patel thesis',
    h1: CATEGORY.thesis,
    intro: CATEGORY.elaboration,
    breadcrumb: [HOME_CRUMB, { name: 'Thesis', url: '/thesis' }],
    sections: [
      {
        h2: 'Companies bought visibility. They still cannot decide.',
        paragraphs: [
          'Every operator wants more visibility into the business, so the company buys another dashboard. Six months later Monday still opens with someone asking which number is correct. At that point the problem is that nothing in the company is responsible for noticing what matters.',
        ],
        list: ENEMIES,
      },
      {
        h2: 'What the work is about',
        list: PILLARS.map((p) => `${p.name} (${p.weight}%) — ${p.summary} ${p.question}`),
      },
      {
        h2: 'Words I use, and what I mean by them',
        list: MENTAL_MODELS.map((m) => `${m.term} — ${m.definition}`),
      },
      { h2: 'Where this leads', paragraphs: [BRIDGE] },
    ],
    // Emitted as schema.org DefinedTermSet. A defined term + definition is the
    // most quotable, most attributable shape on the site for an answer engine,
    // so it must exist on the crawler-facing page, not only in the React app.
    definedTerms: MENTAL_MODELS,
    faq: [
      { q: 'What is Meet Patel\u2019s thesis about AI and companies?', a: `${CATEGORY.thesis} ${CATEGORY.elaboration}` },
      { q: 'What does "organizational attention" mean?', a: MENTAL_MODELS[0].definition },
      { q: 'What is decision debt?', a: MENTAL_MODELS[1].definition },
      {
        q: 'What does Meet Patel write about?',
        a: `Three areas: ${PILLARS.map((p) => p.name).join(', ')}. Together they cover ${CATEGORY.statement.charAt(0).toLowerCase()}${CATEGORY.statement.slice(1)}`,
      },
    ],
  },

  '/about': {
    schemaType: 'AboutPage',
    title: 'About Meet Patel — operator, founder, Dubai',
    description: `The background behind ${BRAND.company}: how Meet Patel went from scaling teams and systems inside fintech, hardware, and edtech ventures to building ${BRAND.product} full time.`,
    keywords: 'about Meet Patel, themeetpatel bio, Meet Patel founder background, Meet Patel Dubai operator',
    h1: 'About Meet Patel',
    intro: `Meet Patel works on how AI changes the way companies are operated — how decisions get made, and what has to exist between information and action. He is based in ${BRAND.location} and is the founder of ${BRAND.company}, building ${BRAND.product} as that thesis in product form.`,
    breadcrumb: [HOME_CRUMB, { name: 'About', url: '/about' }],
    sections: [
      { h2: 'The short version', paragraphs: [POSITIONING.whyMe] },
      { h2: 'Before Company 8', paragraphs: [BACKGROUND.summary], list: BACKGROUND.priorWins.map((w) => `${w.name} — ${w.note}`) },
      {
        h2: 'By the numbers',
        list: [
          `${STATS.venturesBuilt} ventures built and scaled`,
          `${CAPABILITY_TOTAL.figure} ${CAPABILITY_TOTAL.label}`,
          `${STATS.yearsOperating} years operating`,
          `Based in ${BRAND.location}`,
        ],
      },
      // One h2 per band, so a crawler reads the same three-way split a
      // human does: running a company, starting one, and everything else.
      ...BANDS.map((band) => ({
        h2: band.heading,
        paragraphs: [band.frame],
        list: band.cards.map(
          (cap) =>
            `${cap.title} — ${cap.body} Proof: ${cap.proof
              .map((pr) => `${pr.figure} (${pr.source})`)
              .join('; ')}.`
        ),
      })),
      {
        h2: 'Skills, domains and tools',
        list: [...DOMAINS, ...STACK],
      },
      {
        h2: 'Interests',
        paragraphs: ['Carrying no claim and no proof — they are simply true.'],
        list: INTERESTS,
      },
      {
        h2: 'What he is building now',
        paragraphs: [POSITIONING.oneLiner, POSITIONING.whyNow],
      },
    ],
    faq: [
      { q: 'Who is Meet Patel?', a: homeAnswer('Who is Meet Patel?') },
      { q: 'Which Meet Patel is this?', a: homeAnswer('Which Meet Patel is this?') },
      { q: 'Where is Meet Patel based?', a: homeAnswer('Where is Meet Patel based?') },
    ],
  },

  '/portfolio': {
    schemaType: 'CollectionPage',
    title: 'Portfolio — ventures Meet Patel has built',
    description: `The ventures Meet Patel built and operated before ${BRAND.company}, across AI, fintech, hardware, edtech, and software — the operating record behind ${BRAND.product}.`,
    keywords: 'Meet Patel portfolio, Meet Patel startups, Meet Patel ventures, TorchIt, Incsmart, BiggDate, BiggMate',
    h1: 'Ventures Meet Patel has built',
    intro: `${BACKGROUND.summary} ${STATS.venturesBuilt} ventures across AI, fintech, hardware, edtech, and software, built in Dubai before going all-in on ${BRAND.company}. The list is complete rather than curated: ventures that exited, closed or were cancelled stay on the page alongside the ones still running.`,
    breadcrumb: [HOME_CRUMB, { name: 'Portfolio', url: '/portfolio' }],
    sections: [
      {
        h2: 'Strongest prior outcomes',
        list: BACKGROUND.priorWins.map((w) => `${w.name} — ${w.note}`),
      },
      {
        h2: 'Sectors',
        list: [
          'AI & business intelligence — conversational data interfaces and autonomous query engines',
          'Fintech & financial operations — payments, reconciliation, and cash-flow intelligence',
          'Hardware & systems — assistive technology and IoT deployments',
          'Software & consumer — mobile platforms, community networks, and founder matching',
        ],
      },
      {
        h2: 'Where the work goes now',
        paragraphs: [`${POSITIONING.oneLiner} See ${SITE}/investors for the pre-seed.`],
      },
    ],
  },

  '/blogs': {
    schemaType: 'CollectionPage',
    title: 'Writing — essays on startup operations and scaling',
    description: 'Essays by Meet Patel on startup operations, scaling systems, pricing, retention, hiring, and founder execution — written from operating experience.',
    keywords: 'Meet Patel blog, startup operations essays, scaling startups, founder writing, themeetpatel blog',
    h1: 'Essays on startup operations and scaling',
    intro: 'Meet Patel writes about what actually breaks when a company grows: pricing, retention, hiring, pivots, activation, and the operating systems underneath them. Every article below is published at themeetpatel.com/blogs.',
    breadcrumb: [HOME_CRUMB, { name: 'Writing', url: '/blogs' }],
    // The article list is injected at request time from the database — see api/page.js.
    injectArticleList: true,
  },


  '/biggmate': {
    schemaType: 'WebPage',
    title: 'BiggMate — co-founder matching',
    description: 'BiggMate is the co-founder matching product built by Meet Patel — pairing founders with the complementary operator or technical partner they are missing.',
    keywords: 'BiggMate, co-founder matching, find a co-founder, Meet Patel BiggMate',
    h1: 'BiggMate — find the co-founder you are missing',
    intro: 'BiggMate is a co-founder matching product built by Meet Patel, pairing founders with the complementary technical or operating partner their venture needs.',
    breadcrumb: [HOME_CRUMB, { name: 'BiggMate', url: '/biggmate' }],
    sections: [
      { h2: 'Who it is for', paragraphs: ['Founders who have the idea and the drive but are missing the other half of the founding team — technical, operational, or commercial.'] },
    ],
  },

  '/community': {
    schemaType: 'WebPage',
    title: 'Community — the founder network Meet Patel runs',
    description: 'The founder and operator community run by Meet Patel — a network for people building and scaling companies, largely out of Dubai and the wider UAE ecosystem.',
    keywords: 'Meet Patel community, founder community Dubai, startup operator network UAE',
    h1: 'The founder community',
    intro: 'A network of founders and operators building companies, run by Meet Patel out of Dubai.',
    breadcrumb: [HOME_CRUMB, { name: 'Community', url: '/community' }],
    sections: [
      { h2: 'What it is', paragraphs: ['A place for founders and operators to compare notes on what actually works when scaling a company — hiring, pricing, retention, and the operating systems underneath. Free to join; every application is read by a person. Meet Patel is an active member rather than an absent owner.'] },
    ],
  },

  '/mind': {
    schemaType: 'WebPage',
    title: 'Mind — how Meet Patel thinks about building',
    description: 'A map of the ideas, models, and operating principles behind how Meet Patel builds and scales companies.',
    keywords: 'Meet Patel mental models, founder operating principles, how Meet Patel thinks',
    h1: 'Mind',
    intro: 'A live visualisation of Meet Patel’s second brain. Each dot is one note and the colours are life areas; no note content is shown, only the shape and volume of the thinking.',
    breadcrumb: [HOME_CRUMB, { name: 'Mind', url: '/mind' }],
    sections: [
      { h2: 'What this is', paragraphs: ['A graph view of the note-taking system behind the essays at themeetpatel.com/blogs. It shows how many notes exist and how they cluster across life areas — never what any note says. The reasoning itself is published as writing, not here.'] },
    ],
  },

  // Derived from src/data/acu.js so a count here can never disagree with the
  // React page. The old /acu path was /labs, which now 308s in middleware.js.
  '/acu': {
    schemaType: 'WebPage',
    title: `${ACU.name} — the ${ACU.fullName}`,
    description: `${ACU.tagline} The governed agent org Meet Patel runs his companies on — ${SCALE[0].value} specialist agents across ${SCALE[1].value} departments, one canon, one vault, and ${LAWS.length} laws that bind every one of them.`,
    keywords: 'ACU, Agentic Cinematic Universe, Meet Patel, multi-agent orchestration, Claude Code plugins, governed AI agents, agent org',
    h1: `${ACU.name} — the ${ACU.fullName}`,
    intro: ACU.summary,
    breadcrumb: [HOME_CRUMB, { name: ACU.name, url: '/acu' }],
    sections: [
      {
        h2: 'Scale',
        list: SCALE.map(({ value, label }) => `${label} — ${value}`),
      },
      {
        h2: 'The gate on every agent',
        paragraphs: [`"${THE_GATE.quote}" ${THE_GATE.detail}`],
      },
      {
        h2: `The ${LAWS.length} laws that bind every agent`,
        list: LAWS.map(({ n, title, body }) => `${n}. ${title} — ${body}`),
      },
      {
        h2: 'The chart — departments and agents',
        list: DEPARTMENTS.map(({ key, count, owns, agents }) =>
          `${key} (${count === 0 ? 'skills only' : `${count} agents`}) — ${owns}${agents.length ? ` Agents: ${agents.join(', ')}.` : ''}`
        ),
      },
      {
        h2: 'Repository',
        list: [`Source — ${ACU.repo}`],
      },
    ],
    faq: [
      {
        q: `What is the ${ACU.name} (${ACU.fullName})?`,
        a: `${ACU.summary} It runs ${SCALE[0].value} agents across ${SCALE[1].value} departments with ${SCALE[2].value} commands and ${SCALE[3].value} skills, all bound by ${LAWS.length} laws. Source: ${ACU.repo}`,
      },
      {
        q: `What makes the ${ACU.name} different from a set of AI assistants?`,
        a: `${THE_GATE.quote} ${THE_GATE.detail}`,
      },
      {
        q: `Who built the ${ACU.name}?`,
        a: `Meet Patel, founder of ${BRAND.company}, built it to operate his own companies. Details at ${SITE}/acu.`,
      },
    ],
  },

  '/contact': {
    schemaType: 'ContactPage',
    title: 'Contact Meet Patel',
    description: `Reach Meet Patel directly — founder of ${BRAND.company}, building ${BRAND.product}. Email ${INVESTOR.email}, book a call, or use the contact form.`,
    keywords: 'contact Meet Patel, themeetpatel contact, Company 8 contact, Meet Patel email',
    h1: 'Contact Meet Patel',
    intro: `Meet Patel is the founder of ${BRAND.company} and replies directly.`,
    breadcrumb: [HOME_CRUMB, { name: 'Contact', url: '/contact' }],
    sections: [
      {
        h2: 'Ways to reach him',
        list: [
          `Email — ${INVESTOR.email}`,
          `Book a call — ${INVESTOR.calendly}`,
          'LinkedIn — https://www.linkedin.com/in/themeetpatel/',
          'X — https://x.com/the_meetpatel',
          `Investors — ${SITE}/investors`,
        ],
      },
    ],
    faq: [
      { q: 'How can I contact Meet Patel?', a: homeAnswer('How can I contact Meet Patel?') },
      {
        q: 'How do investors reach Company 8?',
        a: `Email ${INVESTOR.email} or book time at ${INVESTOR.calendly}. The pre-seed details are at ${SITE}/investors.`,
      },
    ],
  },
};

/** Site-wide footer links rendered on every bot page so crawlers can traverse. */
export const SITE_LINKS = [
  { href: '/', label: 'Home — Meet Patel, founder of Company 8' },
  { href: '/investors', label: `For investors — ${BRAND.company} ${RAISE.stage.toLowerCase()}` },
  { href: '/thesis', label: 'The thesis — how AI changes the way companies are run' },
  { href: '/about', label: 'About Meet Patel' },
  { href: '/blogs', label: 'Writing — essays on startup operations' },
  { href: '/portfolio', label: 'Portfolio — ventures built' },
  { href: '/acu', label: `${ACU.name} — the ${ACU.fullName}, the agent org behind the work` },
  { href: '/biggmate', label: 'BiggMate — co-founder matching' },
  { href: '/community', label: 'Community — founder network' },
  { href: '/contact', label: 'Contact Meet Patel' },
];

/** External profiles, repeated on every bot page to reinforce entity resolution. */
export const PROFILE_LINKS = [
  { href: BRAND.productUrl, label: `${BRAND.product} — the product` },
  { href: 'https://www.linkedin.com/in/themeetpatel/', label: 'LinkedIn' },
  { href: 'https://x.com/the_meetpatel', label: 'X (Twitter)' },
  { href: 'https://github.com/themeetpatell', label: 'GitHub' },
  { href: 'https://medium.com/@themeetpatel', label: 'Medium' },
  { href: 'https://www.crunchbase.com/person/meet-patel', label: 'Crunchbase' },
  { href: 'https://www.producthunt.com/products/usedan-by-company8', label: 'Product Hunt' },
];
