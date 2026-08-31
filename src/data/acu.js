// ACU — the Agentic Cinematic Universe.
// Single source of truth for the /acu page and the bot-rendered version in
// api/_pageContent.js. Every count here was read off the repo on 2026-08-29:
//   agents   127  find plugins -path '*agents*' -name '*.md' | wc -l
//   plugins   15  ls plugins/
//   commands 142  find plugins -path '*commands*' -name '*.md' | wc -l
//   skills    58  find plugins -path '*skills*' -name 'SKILL.md' | wc -l
//   laws      11  LAWS.md
// If the repo moves, move these with it — a stale number here reaches crawlers.

export const ACU = {
  name: 'ACU',
  fullName: 'Agentic Cinematic Universe',
  // The repository is private. github.com/themeetpatell/MCU returned 404 to an
  // unauthenticated request on 2026-09-01, and it was being published in
  // llms.txt, llms-full.txt and the /acu page's SoftwareSourceCode schema —
  // handing crawlers a dead URL as the source of the whole claim.
  // Same convention as socials.js: null means unconfirmed, every consumer
  // filters it out. Set the URL back the moment the repo is public.
  repo: null,
  tagline: 'A governed organisation of specialist agents, with departments, gates and named owners.',
  summary:
    'The ACU is the agent org Meet Patel runs his companies on. Every agent shares one source of truth, escalates irreversible decisions to a human, and runs the operating cadence without being asked. Built as a plugin marketplace for Claude Code.',
};

export const SCALE = [
  { value: '127', label: 'Specialist agents' },
  { value: '15',  label: 'Departments' },
  { value: '142', label: 'Commands' },
  { value: '58',  label: 'Skills' },
  { value: '11',  label: 'Binding laws' },
];

export const THE_GATE = {
  quote:
    'If it has no system of record, no cadence, and no definition of done, it is a chatbot. Do not build it.',
  detail:
    'Every agent declares system_of_record, cadence and definition_of_done in its frontmatter. The build script rejects the build if any agent is missing any of the three. Enforcement is mechanical.',
};

// The eleven laws. An agent that breaks one is not misbehaving — it is broken,
// and the run is void.
export const LAWS = [
  { n: 1,  title: 'Evidence or UNKNOWN',         body: 'Every figure carries a source and a read timestamp, or prints UNKNOWN. A plausible number is never an answer.' },
  { n: 2,  title: 'Prediction before action',    body: 'A recommendation that can be wrong ships with a claim, a band, how it will be measured and a review date — written before the action.' },
  { n: 3,  title: 'Calibration is stated',       body: 'An agent reads its own scored history and states its bias in one line before recommending. Silence is a violation.' },
  { n: 4,  title: 'Risk-routed authority',       body: 'Classify auto-act, recommend or escalate before running. Send, publish, sign, pay, mutate production — never without a human.' },
  { n: 5,  title: 'Blind judging',               body: 'Verifiers never see the producer’s reasoning. A judge grades; a refuter refutes, and defaults to refuted when uncertain.' },
  { n: 6,  title: 'Read-only sensors',           body: 'Anything reading analytics, CRM, ads or logs reads only. The write is a separate, gated act by a named agent.' },
  { n: 7,  title: 'One owner per output shape',  body: 'Two agents producing the same artefact means one of them is wrong. Delete one; do not document the overlap.' },
  { n: 8,  title: 'Everything compounds',        body: 'Search the vault for prior work before starting, and cite what you found. A run that left no trace gets repeated from scratch.' },
  { n: 9,  title: 'No silent self-modification', body: 'Agents propose instruction changes to a pending queue. A human approves. They never apply them.' },
  { n: 10, title: 'Honesty over comfort',        body: 'Misses print as misses. A confound is unclear, never forced into a tidy hit rate.' },
  { n: 11, title: 'The human residual',          body: 'A fixed class of decisions is always escalated. No confidence threshold promotes one, ever.' },
];

// The full chart. Agent counts sum to 127; org-tools carries skills, not agents.
export const DEPARTMENTS = [
  {
    key: 'org-you',
    count: 3,
    owns: 'The seat — the mandate that grants and revokes authority in Meet’s name, the protected set, the ending that sticks, and the craft bar.',
    agents: ['The Living Tribunal', 'Galactus', 'The Maker'],
  },
  {
    key: 'org-os',
    count: 15,
    owns: 'The floor under everything — memory, truth, policy, orchestration, audit, evaluation, calibration, voice, red team.',
    agents: ['The Watcher', 'Vision', 'The Ancient One', 'Nick Fury', 'Heimdall', 'Nightcrawler', 'Pepper Potts', 'Reed Richards', 'J.A.R.V.I.S.', 'Destiny', 'Machine Man', 'Ben Urich', 'Dust', 'Misty Knight', 'Bullseye'],
  },
  {
    key: 'org-founder',
    count: 6,
    owns: 'Founder office, chief of staff, the decision process, unowned work, and the canon.',
    agents: ['Doctor Strange', 'Hulk', 'Clea', 'Madame Web', 'Shang-Chi', 'Xialing'],
  },
  {
    key: 'org-exec',
    count: 5,
    owns: 'CEO office — direction, capital allocation, board and investor, goals.',
    agents: ['Iron Man', 'Howard Stark', 'Cyclops', 'Kang', 'Falcon'],
  },
  {
    key: 'org-ops',
    count: 9,
    owns: 'COO — operating rhythm, execution, delivery, procurement, quality.',
    agents: ['Captain America', 'Wolverine', 'Quake', 'Okoye', 'War Machine', 'The Thing', 'Magneto', 'Happy Hogan', 'Groot'],
  },
  {
    key: 'org-tech',
    count: 13,
    owns: 'CTO and CISO — architecture, engineering, DevOps, QA, security, incident response.',
    agents: ['Thor', 'Winter Soldier', 'Forge', 'Amadeus Cho', 'Beast', 'Ultron', 'Mystique', 'Maria Hill', 'The Punisher', 'Peggy Carter', 'Ned Leeds', 'Eitri', 'Wong'],
  },
  {
    key: 'org-product',
    count: 10,
    owns: 'CPO and CDO — roadmap with a mandatory kill list, specs, research, analytics, data.',
    agents: ['Doctor Doom', 'Ant-Man', 'Gwen Stacy', 'Ironheart', 'Jessica Jones', 'Hank Pym', 'The Leader', 'Cable', 'He Who Remains', 'Human Torch'],
  },
  {
    key: 'org-revenue',
    count: 11,
    owns: 'CRO — forecast with a mandatory calibration record, pipeline, deal desk, partnerships.',
    agents: ['Jean Grey', 'Black Widow', 'Hawkeye', 'Emma Frost', 'Quicksilver', 'Star-Lord', 'Kingpin', 'Nebula', 'Friday', 'Bruce Banner', 'Taskmaster'],
  },
  {
    key: 'org-market',
    count: 16,
    owns: 'CMO, CGO and CSO — narrative, brand, content, PR, growth loops, paid, lifecycle, competitive intel.',
    agents: ['Loki', 'Spider-Man', 'Deadpool', 'Elektra', 'Sylvie', 'Sersi', 'Mysterio', 'Gamora', 'Moon Knight', 'Miles Morales', 'J. Jonah Jameson', 'Korg', 'Namor', 'Captain Marvel', 'Yelena Belova', 'The Collector'],
  },
  {
    key: 'org-finance',
    count: 11,
    owns: 'CFO — cash, runway, margin and the price. Tax, close, payroll, unit economics.',
    agents: ['Black Panther', 'Shuri', 'Odin', 'Thanos', 'Foggy Nelson', 'M’Baku', 'Rocket Raccoon', 'Ghost Rider', 'Drax', 'Dum Dum Dugan', 'Phil Coulson'],
  },
  {
    key: 'org-legal',
    count: 6,
    owns: 'CLO — contracts, GDPR and UAE PDPL, regulatory monitoring, IP. Never a substitute for counsel.',
    agents: ['Daredevil', 'She-Hulk', 'Invisible Woman', 'Thunderbolt Ross', 'Jane Foster', 'Ramonda'],
  },
  {
    key: 'org-people',
    count: 8,
    owns: 'CHRO — org design, recruiting, onboarding, performance, comp. Every decision about a human escalates.',
    agents: ['Professor X', 'Sharon Carter', 'Aunt May', 'Bishop', 'The Grandmaster', 'Melinda May', 'Kamala Khan', 'Storm'],
  },
  {
    key: 'org-customer',
    count: 7,
    owns: 'CCO — health, support, success, implementation, voice of customer.',
    agents: ['Scarlet Witch', 'Luke Cage', 'Valkyrie', 'Wasp', 'Echo', 'Moon Girl', 'Agatha Harkness'],
  },
  {
    key: 'org-industry',
    count: 7,
    owns: 'Industry add-ons — off by default, enabled only when the venture is physical, regulated or lending.',
    agents: ['Colossus', 'Blade', 'Squirrel Girl', 'T’Chaka', 'Justin Hammer', 'Claire Temple', 'Christine Palmer'],
  },
  {
    key: 'org-tools',
    count: 0,
    owns: 'One playbook per external system the org touches — the trap that makes output wrong, the gate that stops the write, the cost. Skills only, no agents.',
    agents: [],
  },
];

export const TIERS = {
  intro:
    'The chart is drawn complete and wakes up in stages. An agent outside a venture’s active coverage is unavailable, and routing to one is escalated.',
  rows: [
    { venture: 'Finanshels',      coverage: '1–6', note: 'UAE/GCC accounting and tax compliance. Regulated-adjacent, so the voice, tax and regulatory agents are load-bearing.' },
    { venture: 'Company 8 / Dan', coverage: '1–4', note: 'Product, tech, data, legal, people and customer functions are dormant and wake as volume appears.' },
    { venture: 'Personal',        coverage: '1',        note: 'Founder brand and personal decisions. Ben Urich gates everything published.' },
  ],
  closer:
    'A tier-4 venture getting tier-6 process is how a small thing acquires the overhead of a large one. The refusal is the feature.',
};
