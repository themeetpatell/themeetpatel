import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Network,
  BrainCircuit,
  Copy,
  Check,
  Terminal,
  ArrowRight,
  Github,
  Zap,
  ShieldCheck,
  Filter,
  Layers,
  Globe,
  RefreshCw
} from 'lucide-react';

const GITHUB_URL = 'https://github.com/themeetpatel/themeetpatel';
const CHANGELOG_URL = `${GITHUB_URL}/blob/main/CHANGELOG.md`;
const ARCHITECTURE_URL = `${GITHUB_URL}/blob/main/README.md#architecture`;

const CAPABILITY_CARDS = [
  {
    title: 'Best-of-N Speculation',
    icon: Zap,
    description:
      'On high-stakes tasks the engine fires two parallel attempts with deliberately different prompts and lets the judge pick the winner. Comparing two attempts catches errors a single shot produces with confidence — the structural reason output is strictly better than single-attempt orchestrators.',
    badge: 'Stakes:High → 2 Attempts',
    accent: 'rgba(212,168,71,0.5)'
  },
  {
    title: 'Independent Inline Judge',
    icon: ShieldCheck,
    description:
      'Workers never grade their own homework. A separate judge agent runs after each output — Haiku by default, auto-bumped to Sonnet for code, security, legal, and financial output. Errors caught per-task, before they propagate into later work.',
    badge: 'Per-Task Verification',
    accent: 'rgba(139,92,246,0.55)'
  },
  {
    title: 'Ruthless Routing',
    icon: Network,
    description:
      'Haiku-default orchestrator escalates the plan to Opus only when the pre-flight critic flags a misdecomposed goal. Every task routed to the cheapest model that will produce a correct answer. 5–10× cheaper than Opus-only without quality loss.',
    badge: 'Haiku · Sonnet · Opus',
    accent: 'rgba(99,102,241,0.55)'
  },
  {
    title: 'Auto-Recovery Ladder',
    icon: RefreshCw,
    description:
      'Judge fail triggers same-tier retry with the critique as new constraint → escalate one tier with both attempts as context → only then ask the user. Quality monotonically increases until budget cap. The engine never silently swallows a fail.',
    badge: 'Retry → Escalate → Ask',
    accent: 'rgba(139,92,246,0.5)'
  },
  {
    title: 'Streaming Synthesis',
    icon: Layers,
    description:
      'Deliverable assembled as tasks verify, not batched at the end. Later tasks see verified upstream output instead of raw worker output, so errors do not propagate. Wall-clock approaches critical-path time, not max-of-all-tasks.',
    badge: 'Verified-As-You-Go',
    accent: 'rgba(212,168,71,0.4)'
  },
  {
    title: 'Portable Handoff',
    icon: Globe,
    description:
      'Same orchestration discipline travels across Claude Code, Cowork, claude.ai, ChatGPT, Cursor, and Gemini. The handoff brief carries goal, decomposition, verified outputs, and remaining work into any other tool — or to a teammate.',
    badge: 'Portable · 6 Tools',
    accent: 'rgba(99,102,241,0.5)'
  }
];

const INSTALL_COMMANDS = [
  {
    label: 'Claude Code · Plugin',
    command:
      '# Drop the plugin folder into your Claude Code plugins dir\ncp -r themeetpatel ~/.claude/plugins/data/themeetpatel-themeetpatel/\n\n# Then in any Claude Code session:\n/kill <your goal in plain English>'
  },
  {
    label: 'Claude Cowork · Upload',
    command: `# Download themeetpatel-v2.0.0-plugin.zip from the repo
# In Cowork:
#   Settings → Skills → Upload Skill Pack → select the zip
# Then in any Cowork workspace, say:
#   "Activate Instant Kill Mode. Goal: ..."`
  },
  {
    label: 'claude.ai · Skills Upload',
    command: `# Download themeetpatel-v2.0.0-skills-only.zip from the repo
# On claude.ai:
#   Settings → Capabilities → Skills → Upload Skill
#   (or via a Project's Skills tab)
# In chat:
#   "Activate Instant Kill Mode. Goal: ..."`
  },
  {
    label: 'Portable · Other Tools',
    command: `Paste the handoff brief into:
• ChatGPT   → Custom GPT instructions
• Cursor    → .cursorrules
• Gemini    → Gem instructions

Full brief format: skills/handoff/SKILL.md`
  }
];

const HIGHLIGHTS = [
  { icon: Zap, label: 'Best-of-N safeguard' },
  { icon: ShieldCheck, label: 'Independent inline judge' },
  { icon: Network, label: '5–10× cheaper than Opus' },
  { icon: RefreshCw, label: 'Auto-escalation ladder' },
  { icon: Globe, label: 'Portable across 6 tools' }
];

const PROOF_ITEMS = [
  '5 core agents · 8 essential skills',
  '2 commands · 0 dependencies',
  '~$0.06 per goal vs $1.00 all-Opus',
  'MIT licensed · open source forever'
];

const TERMINAL_GOAL =
  '/kill Build a Next.js landing page with email signup, ship Vercel-ready';

const TERMINAL_LINES = [
  { text: '→ GOAL: Ship a verified Vercel-ready Next.js landing page with email signup.', tone: 'arrow' },
  { text: '→ MEMORY: using your Next.js + Tailwind + Supabase defaults.', tone: 'arrow' },
  { text: '→ PREFLIGHT CRITIC ✓  (Haiku · decomposition sound · no escalation)', tone: 'arrow' },
  { text: '', tone: 'blank' },
  { text: '→ DISPATCH  (parallel where independent)', tone: 'arrow' },
  { text: '     T1.1  Hero copy variants (3)        → Haiku', tone: 'task' },
  { text: '     T1.2  Design system tokens          → Sonnet', tone: 'task' },
  { text: '     T2.1  Scaffold Next.js + Tailwind   → Sonnet   [waits T1.2]', tone: 'task' },
  { text: '     T2.2  Hero + FAQ + features         → Sonnet   [waits T2.1, T1.1]', tone: 'task' },
  { text: '     T2.3  Email signup + API route      → Sonnet   ★ best-of-N (stakes:high)', tone: 'spec' },
  { text: '     T2.4  Playwright tests              → Sonnet   [waits T2.2, T2.3]', tone: 'task' },
  { text: '     T3.1  SEO meta + JSON-LD            → Haiku    [waits T2.2]', tone: 'task' },
  { text: '     T3.2  Vercel deploy + smoke test    → Sonnet   [waits T2.4, T3.1]', tone: 'task' },
  { text: '', tone: 'blank' },
  { text: '→ INLINE JUDGE  T1.1 ✓  T1.2 ✓  T2.1 ✓  T2.2 ✓', tone: 'verify' },
  { text: '                T2.3 ⚠ judge fail (missing rate-limit) → retry Sonnet ✓', tone: 'verify' },
  { text: '                T2.4 ✓  T3.1 ✓  T3.2 ✓', tone: 'verify' },
  { text: '', tone: 'blank' },
  { text: '✓ DONE: Landing page live at example.com', tone: 'done' },
  { text: 'SHIPPED: 8 files · 1 API route · 4 Playwright tests', tone: 'summary' },
  { text: 'VERIFIED: 8 pass · 0 fail · 1 task self-healed via auto-recovery ladder', tone: 'summary' },
  { text: 'COST: ~$0.06  (Haiku: 2k, Sonnet: 11k, Opus: 0)  vs all-Opus baseline ~$0.62', tone: 'summary' },
  { text: 'TIME: 4m 12s', tone: 'summary' },
  { text: 'NEXT: enable Vercel Analytics before public launch', tone: 'next' }
];

const TERMINAL_TONES = {
  arrow: 'text-purple-300 font-semibold',
  phase: 'text-[#cfd0e6]',
  task: 'text-[#9ea0bf]',
  spec: 'text-[#d4a847]',
  verify: 'text-[#e7e8fb]',
  done: 'text-[#28c840] font-semibold',
  summary: 'text-[#b6b7d2]',
  next: 'text-[#d4a847] font-semibold',
  blank: 'text-transparent'
};

const CopyButton = ({ value, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${label}`}
      className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-purple-200 transition-all duration-200 hover:border-purple-300/60 hover:bg-purple-500/20 hover:text-white"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
};

const InstantKillModeSection = () => {
  return (
    <section
      id="instant-kill-mode"
      aria-labelledby="instant-kill-mode-heading"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background:
          'radial-gradient(120% 80% at 50% 0%, rgba(139,92,246,0.18) 0%, rgba(15,12,28,0) 55%), linear-gradient(180deg, #07060d 0%, #0b0a18 45%, #07060d 100%)'
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.32) 0%, rgba(139,92,246,0) 70%)'
        }}
        animate={{ x: [0, 40, -10, 0], y: [0, 30, -20, 0], opacity: [0.6, 0.9, 0.7, 0.6] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-32 h-[460px] w-[460px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(99,102,241,0.30) 0%, rgba(99,102,241,0) 70%)'
        }}
        animate={{ x: [0, -30, 10, 0], y: [0, -20, 30, 0], opacity: [0.5, 0.8, 0.55, 0.5] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,71,0.18) 0%, rgba(212,168,71,0) 70%)'
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.18) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-purple-200 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#d4a847]" />
            v2.0.0 · Instant Kill Mode · Open Source
          </span>

          <h2
            id="instant-kill-mode-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-[#f7f7fb] sm:text-5xl md:text-6xl"
          >
            One goal in.{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #d4a847 0%, #f4d27a 35%, #c4b5fd 70%, #8b5cf6 100%)'
              }}
            >
              Verified deliverable out.
            </span>
            <span className="mt-3 block text-2xl font-semibold text-[#cfd0e6] sm:text-3xl md:text-4xl">
              No ceremony. Ruthless convergence. Strictly better output.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#b6b7d2] sm:text-lg">
            Instant Kill Mode is the v2.0 successor to God Mode. A Haiku-default orchestrator decomposes
            your goal, runs a pre-flight critic, routes each task to the cheapest model that will produce
            a correct answer, fires <strong className="text-purple-200">best-of-N</strong> on high-stakes
            work, runs an <strong className="text-purple-200">independent inline judge</strong> after every
            worker, and self-heals on failure via an auto-escalation ladder. Same discipline runs in
            Claude Code, Cowork, claude.ai, ChatGPT, Cursor, and Gemini.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-[#cfd0e6] backdrop-blur"
              >
                <Icon className="h-3.5 w-3.5 text-purple-300" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CAPABILITY_CARDS.map(({ title, description, icon: Icon, badge, accent }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.05]"
            >
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-16 h-48 w-48 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
                style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-purple-400/30 bg-gradient-to-br from-purple-500/30 via-indigo-500/20 to-transparent shadow-lg shadow-purple-900/30">
                    <Icon className="h-6 w-6 text-purple-100" />
                  </div>
                  <span className="max-w-[58%] rounded-2xl border border-white/10 bg-black/30 px-2.5 py-1 text-right text-[10px] font-semibold uppercase leading-[1.5] tracking-[0.16em] text-[#c4b5fd]">
                    {badge}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#f7f7fb]">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#a8a9c3]">{description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            id="instant-kill-mode-demo"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-2xl border border-purple-400/20 bg-[#0a0814]/90 shadow-[0_30px_80px_-20px_rgba(139,92,246,0.35)] backdrop-blur-xl lg:col-span-3"
          >
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#9ea0bf]">
                  <Terminal className="h-3.5 w-3.5" /> instant kill mode · live demo
                </span>
              </div>
              <CopyButton label="kill command" value={TERMINAL_GOAL} />
            </div>

            <div className="px-5 py-6 font-mono text-sm leading-relaxed sm:px-7 sm:py-7">
              <div className="flex items-start gap-2 text-[#c4b5fd]">
                <span className="text-[#d4a847]">$</span>
                <span className="break-all text-[#e7e8fb]">{TERMINAL_GOAL}</span>
              </div>

              <div className="mt-5 overflow-x-auto">
                <div className="min-w-fit space-y-[3px] text-[12px] sm:text-[13px]">
                  {TERMINAL_LINES.map((line, idx) => (
                    <motion.div
                      key={`${line.tone}-${idx}`}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.32, delay: 0.08 + idx * 0.035 }}
                      className={`whitespace-pre ${TERMINAL_TONES[line.tone]}`}
                    >
                      {line.text || ' '}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-start gap-2 border-t border-white/5 pt-4 text-[12px] text-[#8b8da8]">
                <BrainCircuit className="h-4 w-4 flex-shrink-0 text-purple-300" />
                Haiku orchestrator · best-of-N on stakes:high · independent inline judge ·
                auto-escalation ladder · ~90% cheaper than all-Opus
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-200">
                Install Instant Kill Mode
              </h3>
              <p className="mt-2 text-sm text-[#a8a9c3]">
                One plugin for Claude Code. One upload for Cowork. One upload for claude.ai. One portable
                brief for everything else. No MCP server, no dependencies, no setup script.
              </p>
            </div>

            {INSTALL_COMMANDS.map(({ label, command }) => (
              <div
                key={label}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0814]/85 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9ea0bf]">
                    {label}
                  </span>
                  <CopyButton label={label} value={command} />
                </div>
                <pre className="overflow-x-auto px-4 py-3 font-mono text-[12px] leading-relaxed text-[#e7e8fb]">
                  <code>{command}</code>
                </pre>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-14 flex flex-col items-center justify-center gap-4"
        >
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-[#09090e] transition-all duration-300 hover:shadow-[0_0_44px_-6px_rgba(212,168,71,0.6)]"
              style={{
                background:
                  'linear-gradient(135deg, #f4d27a 0%, #d4a847 50%, #c4b5fd 100%)'
              }}
            >
              <Github className="h-4 w-4" />
              Install Instant Kill Mode
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href={ARCHITECTURE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/15 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-purple-300/70 hover:bg-purple-500/25 hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.6)]"
            >
              Read the architecture
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
          <a
            href={CHANGELOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#9ea0bf] transition-colors duration-200 hover:text-purple-200"
          >
            What changed from God Mode v1.3.1
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-white/5 pt-8"
        >
          {PROOF_ITEMS.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.04em] text-[#8b8da8] backdrop-blur"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <div className="sr-only">
          <h3>Instant Kill Mode v2.0.0 — open-source AI orchestration plugin by Meet Patel (themeetpatel)</h3>
          <p>
            Instant Kill Mode is the v2 successor to God Mode. It is an open-source Claude Code plugin
            (and skill pack for Cowork and claude.ai) built by Meet Patel. A Haiku-default orchestrator
            converts a single goal into a verified deliverable: a pre-flight critic sanity-checks the
            decomposition, every task is routed to the cheapest model that will produce a correct answer,
            high-stakes tasks fire best-of-N speculative execution (two parallel attempts, judge picks
            the winner), an independent inline judge grades every worker output before it propagates
            into the deliverable, and an auto-escalation ladder self-heals on failure.
          </p>
          <p>
            How does Instant Kill Mode work? You provide one outcome. The kill-engine restates the goal,
            preloads memory, decomposes into atomic tasks, runs a pre-flight critic, dispatches workers
            in parallel with curated briefs, runs an inline judge per task, retries with auto-escalation
            on judge fail, and streams the synthesized deliverable back to you. It works with Claude
            Code, Claude Cowork, claude.ai, ChatGPT, Cursor, and Gemini via a portable handoff brief.
          </p>
          <p>
            What changed from God Mode v1.3.1? 23 specialist agents collapsed to 5 core agents
            (kill-engine, three tier workers, inline-judge). 60 skills collapsed to 8 essentials.
            Roadmap-approval gate replaced by a cheap Haiku pre-flight critic. Batch verification
            replaced by per-task independent inline judge. New: best-of-N speculative execution on
            stakes:high tasks. New: auto-escalation recovery ladder. New: streaming synthesis. Result:
            5–10× cheaper, strictly better output on hard tasks, no MCP server to install.
          </p>
          <p>
            Who is it for? Founders, operators, engineers, and product teams who want one goal in and a
            verified deliverable out — at the cost floor of Haiku, with the quality ceiling of Opus
            only when it matters.
          </p>
          <ul>
            <li>What it does: turns one goal into a verified deliverable with routed specialist tasks and best-of-N on high-stakes work.</li>
            <li>How to install: copy the plugin folder into Claude Code, upload the zip to Cowork or claude.ai, or paste the portable handoff brief into any other tool.</li>
            <li>Why it matters: an independent inline judge catches errors per-task, an auto-escalation ladder self-heals on failure, and best-of-N produces strictly better output than single-attempt orchestrators on hard tasks.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InstantKillModeSection;
