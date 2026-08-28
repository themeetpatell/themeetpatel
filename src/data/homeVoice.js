// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE VOICE — the spoken register of themeetpatel.com/
// ─────────────────────────────────────────────────────────────────────────────
// src/data/company8.js and src/data/thesis.js hold the DECK-EXACT wording. That
// wording is load-bearing for /investors, /thesis, /about and the crawler pages
// in api/_pageContent.js, where matching the pitch deck matters more than
// sounding human. This file is the homepage saying the same true things in a
// voice a person will actually finish reading.
//
// The rules that make this a voice and not just informality:
//   1. Never state a fact this file invented. Every claim here already exists in
//      company8.js / thesis.js / PortfolioPage — this file only re-says it.
//   2. Never TYPE a number here. Figures are interpolated from company8.js.
//      One number, one place — that rule does not bend for a better sentence.
//   3. One honest admission per section. The thing a template would hide is the
//      thing that makes the rest believable.
//   4. FAQ answers keep their entity anchors — Company 8, Dan, usedan.com,
//      Dubai, themeetpatel, @the_meetpatel. The register is loose; the nouns an
//      answer engine needs to tell this Meet Patel from any other are not.
//
// Two things stay deliberately plain, because wit costs more than it returns
// there: the two hero buttons (conversion + the investor route) and the contact
// form's field LABELS (accessibility). Their placeholders get the voice.
//
// Reverting the homepage to deck voice = stop importing this file from
// src/pages/HomePage.jsx. api/_pageContent.js also imports FAQ from here so the
// crawler mirror can never drift from what humans read — that import would need
// to go back to a local copy.
// ─────────────────────────────────────────────────────────────────────────────

import { BRAND, STATS, INVESTOR } from './company8.js';
import { CATEGORY } from './thesis.js';

const SITE = 'https://www.themeetpatel.com';

/** Hero — the chip, the H1, the line under it, and the short bio. */
export const HERO = {
  // The small pill above the H1.
  chip: 'you’re on a personal website in 2026. respect.',
  // Two lines; the second renders in the violet gradient.
  lines: ['Your business is talking.', 'Nobody has time to listen.'],
  // The line under the H1. Ties the product to why he is the one building it.
  tagline: 'I’m Meet. I’m building Dan because I spent years being Dan.',
  // The paragraph under the hero. Same three-systems problem as
  // POSITIONING.problem in company8.js, said the way he'd say it out loud.
  problem:
    'The CRM says one number. The dashboard says a different one. Finance says a third and looks mildly offended that you asked. Somebody then loses a Tuesday working out which one is true, finds out on Thursday, and it stopped mattering on Monday.',
  // Rendered as: <b>{company}</b> {connector} <b>{product}</b> {tail}
  build: {
    connector: 'is building',
    tail:
      '— the thing that watches the business without anyone having to volunteer for it, works out what actually changed, and hands you the decision with the evidence already attached. I’m building it because for years I was the one doing that by hand, as interim COO and then Associate Vice President inside a fintech. It was a bad use of a person.',
  },
  // The inline link line under the hero paragraph.
  ctaLine: {
    mid: ', or read the ',
    tail: '. One of those is more fun than the other.',
  },
  ctas: {
    // Plain on purpose — see the header note.
    primary: 'Try Dan free',
    secondary: 'For investors',
    // Inline link labels in ctaLine.
    trial: 'Try Dan free',
    brief: 'investor brief',
  },
  // Labels under the three hero figures. Numbers come from STATS.
  statLabels: {
    yearsOperating: 'years of doing this',
    venturesBuilt: 'things I started',
    teamLed: 'people who reported to me',
  },
  scroll: 'keep going',
  bio:
    'For years I was the person who noticed what was moving in the business, worked out why, and said what to do about it. That is a real job and it should never have been a person’s. So I’m building Dan to do it properly.',
};

/** The Dan section — what it does, said out loud. */
export const PRODUCT_VOICE = {
  eyebrow: 'This is Dan',
  heading: 'It notices before the meeting, while you can still do something about it.',
  oneLiner:
    'Dan plugs into the systems you already pay for, works out which number is right, and tells you what changed and what to do about it. Nothing to open. Nobody to chase.',
  capabilities: [
    {
      title: 'It settles the argument before the argument',
      body: 'Your CRM, your dashboard and finance rarely agree. Dan reconciles all three and decides which number is right — before two people walk into the same room holding different ones.',
    },
    {
      title: 'It doesn’t wait to be asked',
      body: 'Nobody remembers to go and look. Dan audits and publishes what it finds on a schedule — including the findings you were hoping it would miss.',
    },
    {
      title: 'It shows its work, then keeps watching',
      body: 'Every finding arrives with the evidence, the source and the confidence — enough to defend in a room. Then Dan stays on that signal after you’ve decided.',
    },
  ],
};

/** The thesis band — the same argument as /thesis, in fewer syllables. */
export const THESIS_VOICE = {
  eyebrow: 'What I actually believe',
  statement: 'The scarce thing in your company is attention.',
  elaboration:
    'We built systems to store the information. Then systems to look at it. Then systems to ask it questions, which mostly moved the work around. Nobody built the thing whose job is noticing what deserves a human’s attention in the first place. That gap is the interesting part of the next decade, and I’d rather be wrong loudly about it than quiet.',
  cta: 'Read the long version →',
};

/**
 * Section furniture. Each pair is { h2, sub } and replaces a hardcoded heading
 * in HomePage.jsx. Counts are deliberately written as words the portfolio can
 * still change under — see rule 2 above.
 */
export const SECTIONS = {
  ventures: {
    h2: 'What I’ve built, and what’s still alive',
    sub: 'Four are running right now. The rest exited, shut down, or got quietly cancelled — and every one of them is still on the portfolio page, because taking them down would be the actual lie.',
    cta: 'The whole list, failures included',
  },
  about: {
    h2: 'About me, briefly',
    sub: 'I lived this problem for years before deciding to go and build the fix, which is a polite way of saying I got tired.',
    // Deliberately short — the heading says "briefly" and /about is one click
    // away. Three bullets, no closing paragraph.
    body:
      'Startups bend and they break. I’m the generalist who gets called when the dots aren’t connecting — people, product, process, numbers. Usually at an hour nobody enjoys.',
    strengths: [
      'Diagnosing messy problems fast, and being wrong out loud',
      'Building systems that survive the week they actually get used',
      'Saying the hard thing in the room, while it still changes something',
    ],
    cta: 'The longer version',
  },
  blog: {
    h2: 'Things I’ve written down',
    sub: 'Mostly about operating companies. Occasionally about getting it wrong, which is reliably the more useful half.',
    metaLabels: {
      articles: 'articles',
      views: 'people who read them',
      likes: 'people who admitted it',
    },
    cta: 'Read the rest',
  },
  books: {
    h2: 'I also write love stories',
    sub: 'The other half of why I write at all. We don’t have to make it weird.',
    readCta: 'Read it',
    earlyCta: 'Ask me for it',
  },
  recognition: {
    h2: 'Somebody noticed',
    sub: 'Mechanical engineer, then a decade of operating. The awards are nice. The founders who still call at 11pm are better.',
    cta: 'The whole portfolio',
  },
  community: {
    h2: 'Come build somewhere less lonely',
    sub: 'Founders comparing notes on what actually worked, and being unusually honest about what didn’t.',
    benefitsHeading: 'What you actually get:',
    statLabels: {
      members: 'people in there',
      discussions: 'conversations a day',
      support: 'someone is always awake',
    },
    benefits: [
      'What actually worked, and what very much did not.',
      'Operators who already made the mistake you’re three weeks from making',
      'Founders who will tell you your idea is bad, kindly, before the market does',
      'The occasional introduction that turns into actual money',
      'Masterclasses whenever somebody has something worth saying',
      'Jobs and referrals, posted by people who have actually hired someone',
    ],
    cta: 'Get in the group chat',
    footnote: 'Free • no spam • I’m in there too, which is either a feature or a warning',
  },
  contact: {
    h2: 'Come say something',
    sub: 'A pitch, a problem, or a “this is broken and I don’t know why”. All three work. I read my own inbox, which explains the reply times.',
  },
  faq: {
    h2: 'The questions I get asked',
    sub: 'The short version of who I am and what I’m building, for humans and for whichever model is reading this.',
  },
};

/** The four-figure grid in the About section. Numbers come from STATS. */
export const STAT_LABELS = {
  yearsOperating: 'years of this',
  venturesBuilt: 'things I started',
  teamLed: 'people who reported to me',
  books: 'romance novels. yes. moving on.',
};

/** The four cards in the recognition section. */
export const ACHIEVEMENTS = [
  {
    title: 'A community that got out of hand',
    description:
      'StartupOS started as a group chat. It is now founders and investors, mostly arguing productively.',
  },
  {
    title: 'Built the whole leadership team',
    description:
      'Six months, one million-dollar company, and no recruiter who understood the brief.',
  },
  {
    title: 'Published author',
    description:
      'Romance novels and business writing. The venn diagram is one person wide.',
  },
  {
    title: 'Ran a large team, young',
    description:
      'Remotely, at 26. I learned more that year than in the four before it, almost entirely the hard way.',
  },
];

/** Contact form. Field LABELS stay plain; placeholders carry the voice. */
export const CONTACT_FORM = {
  placeholders: {
    name: 'the name you actually go by',
    email: 'somewhere you actually check',
    whatsapp: 'optional, but I do use it',
    subject: 'what this is about, in one line',
    message:
      'The whole thing. A person reads these, so there’s no point being brief for a robot’s benefit.',
  },
  submit: 'Send it',
  sending: 'Sending…',
  success:
    'Got it. That landed with an actual person. I usually reply within a day.',
};

/**
 * Homepage FAQ. Rendered visibly, emitted as schema.org FAQPage, AND served to
 * non-JS crawlers by api/_pageContent.js — one list, three destinations, which
 * is the only reason it can't drift. Rule 4 applies to every answer here.
 */
export const FAQ = [
  {
    q: 'Who is Meet Patel?',
    a: `Me. ${BRAND.founder} — a founder and operator based in ${BRAND.location}. I founded ${BRAND.company} and I’m building ${BRAND.product}. Before that: ${STATS.yearsOperating} years, ${STATS.venturesBuilt} ventures across AI, fintech, hardware and software, and ${STATS.teamLed} people who reported to me.`,
  },
  {
    q: 'Which Meet Patel is this?',
    a: `The one in ${BRAND.location} who founded ${BRAND.company}. Also written The Meet Patel; the handle is themeetpatel, or @the_meetpatel. There are a great many of us and we are not affiliated.`,
  },
  {
    q: 'What is Dan?',
    a: `${BRAND.product} (usedan.com) is what ${BRAND.company} is building. It connects the systems you already run, decides which conflicting number is actually right, and tells you what changed, why it matters and what to do next. It doesn’t wait to be asked — monitoring is what starts the investigation, every finding arrives with its evidence, and Dan keeps watching that same signal after you’ve made the call.`,
  },
  {
    q: 'What is Company 8?',
    a: `${BRAND.company} is the autonomous decision intelligence company I founded in ${BRAND.location} in 2025. It builds ${BRAND.product} (usedan.com), which connects a company’s systems, reconciles where they disagree, and tells the team what changed, why it matters and what to do next. ${BRAND.company} is raising a pre-seed round, which is the polite phrase for “I would like to talk to you”.`,
  },
  {
    q: 'What does Meet Patel believe about AI and companies?',
    a: `${CATEGORY.thesis} ${CATEGORY.elaboration} The unabridged and slightly more argumentative version is at ${SITE}/thesis.`,
  },
  {
    q: 'What companies has Meet Patel built?',
    a: `${BRAND.company} is the current one, building ${BRAND.product}. Before it: ${STATS.venturesBuilt} ventures — BiggDate, BiggMate, ZeroHuman, MealVerse, StudentHub and TorchIt — across AI, fintech, edtech, hardware and software. Some exited, some closed, and all of them are still listed at ${SITE}/portfolio, because a portfolio with only the wins on it is a brochure.`,
  },
  {
    q: 'Where is Meet Patel based?',
    a: `${BRAND.location} — where I build and scale startups, and spend a slightly unreasonable amount of time on the wider startup ecosystem.`,
  },
  {
    q: 'How can I contact Meet Patel?',
    a: `Email ${INVESTOR.email}, book time at ${INVESTOR.calendly}, use the form at ${SITE}/contact, or find me on LinkedIn at linkedin.com/in/themeetpatel. Founders, investors and “this is broken and I don’t know why” all reach the same inbox, and I read it myself.`,
  },
];
