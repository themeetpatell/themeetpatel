// ─────────────────────────────────────────────────────────────────────────────
// PAGE VOICE — the spoken register of every personal surface on themeetpatel.com
// ─────────────────────────────────────────────────────────────────────────────
// Companion to src/data/homeVoice.js, which owns "/". Same four rules:
//   1. Never state a fact this file invented. Everything here already exists on
//      the page it replaces — this file only re-says it.
//   2. Never TYPE a number. Figures stay in the component or in company8.js.
//   3. One honest admission per surface.
//   4. Anything a crawler quotes keeps its entity anchors.
//
// DELIBERATELY NOT IN THIS FILE, and it should stay that way:
//   /investors  — the fundraise. Deck-exact wording is the point.
//   /thesis     — the category claim, emitted as DefinedTermSet. Quoted verbatim.
//   /acu        — a dated factual inventory read off the repo.
//   legal x3    — obviously.
//   /about's CV — dated roles and metric claims are a record, not a voice. Only
//                 the narrative furniture on that page is voiced, and warmly
//                 rather than loudly: it is the page someone reads to decide
//                 whether the homepage was serious.
//
// Field LABELS on forms stay plain everywhere (accessibility, and screen-reader
// users did not ask for jokes). Placeholders carry the voice. Format-hint
// placeholders (you@example.com, +91 98765 43210) stay literal — they are
// instructions, not copy.
// ─────────────────────────────────────────────────────────────────────────────

/** /404 — nobody arrives here on purpose. */
export const NOT_FOUND = {
  h1: 'Well, this is awkward.',
  body:
    'This page doesn’t exist, or it did and I moved it without telling anyone. Either of those is my fault, not yours.',
  cta: 'Take me somewhere real',
};

/** /mind — the second-brain visualisation. */
export const MIND = {
  eyebrow: 'The Mind',
  h1: 'A living map of how I think.',
  body:
    'Every dot is a note in my second brain. The colours are life areas. You can’t read any of it, which is deliberate — you’re seeing the shape of the thinking, not the thinking.',
};

/** /blogs — the list page. Article content itself comes from the CMS. */
export const BLOG = {
  eyebrow: 'Things I wrote down',
  sub:
    'Operating companies, mostly. Occasionally the parts that went badly, which are reliably more useful than the parts that didn’t.',
  statLabels: {
    articles: 'pieces written',
    reach: 'people reached',
    followers: 'followers, allegedly',
    categories: 'categories',
  },
  searchPlaceholder: 'Find something…',
  empty:
    'Nothing matches. Either I haven’t written it yet, or your spelling and mine disagree.',
};

/** /community — StartupOS. */
export const COMMUNITY = {
  sub: 'Founders. Daily arguments. Occasionally useful ones.',
  byline: 'Built by me. I’m in there too, which is either a feature or a warning.',
  statChipLabels: {
    members: 'in the group',
    discussions: 'conversations a day',
    support: 'someone is always awake',
  },
  benefitsHeading: 'Why people stay in it',
  benefitsSub:
    'No growth hacks, no “exclusive insights”. Founders comparing notes, which turns out to be the rare thing.',
  benefits: [
    {
      title: 'What actually worked',
      desc: 'Not curated intelligence you won’t find anywhere else. Just what people tried, and whether it worked.',
    },
    {
      title: 'People who already did it',
      desc: 'Operators and mentors who have built the thing you are about three weeks from breaking.',
    },
    {
      title: 'Founders who will be honest',
      desc: 'They will tell you your idea is bad, kindly, some months before the market tells you rudely.',
    },
    {
      title: 'The occasional warm intro',
      desc: 'Investor introductions and pitch prep. No promises attached — but some of them have turned into money.',
    },
    {
      title: 'Sessions, when there’s something to say',
      desc: 'Live workshops and deep-dive Q&As. Not on a fixed schedule, because a fixed schedule produces filler.',
    },
    {
      title: 'Jobs, posted by people who hire',
      desc: 'Referrals, talent spotlights and co-founder matching, all from inside the network.',
    },
  ],
  faqs: [
    {
      q: 'Who is the StartupOS community for?',
      a: 'Founders, operators and builders who are actually building something. If you want daily startup discussion, operators who have done it before, the occasional investor introduction and people who will be straight with you, it is for you. If you want a feed to lurk in, it will disappoint you.',
    },
    {
      q: 'Is it free to join?',
      a: 'Yes, StartupOS is free. Every application still gets read by a person — not to be precious about it, but because that review is the only reason the group is still worth being in.',
    },
    {
      q: 'Who runs the StartupOS community?',
      a: 'Meet Patel — a founder and operator based in Dubai, and the founder of Company 8, which builds Dan (usedan.com). I read the applications myself.',
    },
  ],
  applyHeading: 'Ask to get in',
  applySub:
    'Every application gets read by a person. That is the whole quality control, and it works.',
  formSub: 'Fill this in and it opens WhatsApp with the message already written.',
  placeholders: {
    business: 'the company, or the idea that’s about to be one',
    role: 'Founder, CEO, CTO, “it varies”',
    reason:
      'What you’re hoping to get out of it. Honest answers do better here than impressive ones.',
  },
};

/** /portfolio — the venture list. Venture descriptions stay factual records. */
export const PORTFOLIO = {
  // Rendered as: {sublineLead} <span gradient>{sublineAccent}</span>
  sublineLead: 'Some of it',
  sublineAccent: 'lasted.',
  sub:
    'Ventures across AI, fintech, edtech, hardware and social. Every one built with conviction. Not every one survived it.',
  // Rendered as: Everything here came before <b>Company 8</b> {midLine} <b>Dan</b>{tail}
  nowLine: {
    lead: 'Everything here came before',
    mid: '— the one I’m all-in on now, building',
    tail: '. The ones that died stayed on this page on purpose.',
  },
  searchPlaceholder: 'Search the list…',
  empty: 'Nothing matches. I’ve built a lot of things, but not that one.',
};

/** /contact */
export const CONTACT = {
  subhead: 'Say the thing.',
  sub:
    'Startups, Company 8, Dan, or “this is broken and I don’t know why”. All three reach the same inbox, and I read it myself.',
  responseNote: 'Usually replies within a day. Occasionally faster, never automated.',
  locationNote: 'Happy to meet in person if you’re here.',
  placeholders: {
    name: 'the name you actually go by',
    subject: 'what this is about, in one line',
    message:
      'The whole thing. A person reads these, so there’s no point being brief for a robot’s benefit.',
  },
  sent: 'Landed.',
};

/**
 * /about — warm, not loud. This page is where someone checks whether the
 * homepage was joking. The CV below it is untouched.
 */
export const ABOUT = {
  sectionTitles: {
    experience: 'Where I’ve worked',
    awards: 'Awards and milestones',
    published: 'Things I’ve published',
    speaking: 'Where I’ve spoken',
  },
  closing: {
    h2: 'Want to talk?',
    sub: 'Building something, stuck on something, or just comparing notes — all three work.',
    cta: 'Say hello',
  },
};
