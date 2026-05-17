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
  Globe
} from 'lucide-react';

const GITHUB_URL = 'https://github.com/themeetpatell/god-mode';
const LAUNCH_PROFILE_URL = `${GITHUB_URL}/blob/main/LAUNCH-PROFILE.md`;
const ROUTER_EVAL_URL = `${GITHUB_URL}/blob/main/evals/routing-eval.jsonl`;

const CAPABILITY_CARDS = [
  {
    title: 'Verifier',
    icon: ShieldCheck,
    description:
      'The flagship primitive. Every roadmap task runs through a separate verifier agent before "done" reaches you — tests run, sources fetched, voice scored, DAGs walked. "Shipped" stops being a claim and becomes a measurement.',
    badge: 'Strategy → Verified Ship',
    accent: 'rgba(212,168,71,0.5)'
  },
  {
    title: 'Learning Router',
    icon: Network,
    description:
      'Weighted multi-signal pattern scoring with per-pattern weights that sharpen from your own ledger. 100% accuracy on 104 stratified eval cases including 41 adversarial keyword traps. The router is the IP and it compounds with use.',
    badge: 'Haiku · Sonnet · Opus · Learned',
    accent: 'rgba(139,92,246,0.55)'
  },
  {
    title: 'Context Curator',
    icon: Filter,
    description:
      'Every worker gets only the files, glossary, and decisions it needs — not the whole conversation. Where the cost savings actually live. Names what to drop and why.',
    badge: 'Smallest Viable Context',
    accent: 'rgba(99,102,241,0.55)'
  },
  {
    title: 'Persistent Brain',
    icon: BrainCircuit,
    description:
      'Memory facts, belief register with revision history, and vector-indexed episodic recall. Session 10 is better than session 1 because the CEO remembers your stack, ICP, voice, past decisions — and can semantically recall similar past work.',
    badge: 'Memory · Beliefs · Episodes',
    accent: 'rgba(139,92,246,0.5)'
  },
  {
    title: 'Domain Packs',
    icon: Layers,
    description:
      'Core engine + opinionated packs for your operator role. Founder-UAE, AI-Builder, Growth-Ops ship in v1.3.1 — with more from the community via the marketplace in v1.5.',
    badge: 'Founder · UAE · AI-Builder · Growth',
    accent: 'rgba(212,168,71,0.4)'
  },
  {
    title: 'Portable',
    icon: Globe,
    description:
      'Same CEO discipline travels across every tool. Start a goal in Claude Code, continue on your phone in ChatGPT, finish in Cursor. The handoff brief takes the state with you.',
    badge: 'Portable · 6 AI Tools',
    accent: 'rgba(99,102,241,0.5)'
  }
];

const INSTALL_COMMANDS = [
  {
    label: 'Claude Code · Plugin',
    command:
      '/plugin marketplace add https://github.com/themeetpatell/god-mode\n/plugin install themeetpatel@themeetpatel'
  },
  {
    label: 'MCP Server · Build',
    command: 'cd mcp-server && npm install && npm run build'
  },
  {
    label: 'MCP Config · claude_desktop_config.json',
    command: `{
  "mcpServers": {
    "themeetpatel-god-mode": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/themeetpatel/mcp-server/dist/index.js"],
      "env": { "THEMEETPATEL_HOME": "$HOME/.themeetpatel" }
    }
  }
}`
  },
  {
    label: 'Portable · Other Tools',
    command: `Paste portable/universal-system-prompt.md into:
• claude.ai  → Project custom instructions
• Cowork     → workspace instructions
• ChatGPT    → Custom GPT instructions
• Cursor     → .cursorrules
• Gemini     → Gem instructions`
  }
];

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: 'Verified deliverables' },
  { icon: Zap, label: '100% router accuracy' },
  { icon: BrainCircuit, label: 'Episodic + belief memory' },
  { icon: Layers, label: 'Domain Packs' },
  { icon: Globe, label: 'Portable across 6 tools' }
];

const PROOF_ITEMS = [
  '23 agents',
  '60 skills · 28 production · 32 preview',
  '104 eval cases · 100% pass · 41 adversarial',
  'MIT licensed · open source forever'
];

const TERMINAL_GOAL =
  '/god-mode Build a Next.js landing page with email signup, ship Vercel-ready';

const TERMINAL_LINES = [
  { text: '→ INTAKE  (memory: using your Next.js + Tailwind + Supabase defaults)', tone: 'arrow' },
  { text: '', tone: 'blank' },
  { text: '→ ROADMAP', tone: 'arrow' },
  { text: '   Phase 1: Scope & decisions        [parallel]', tone: 'phase' },
  { text: '     T1.1  Framework + design system     → Opus', tone: 'task' },
  { text: '     T1.2  Hero copy variants (3)        → Haiku', tone: 'task' },
  { text: '', tone: 'blank' },
  { text: '   Phase 2: Build                    [sequential]', tone: 'phase' },
  { text: '     T2.1  Scaffold Next.js + Tailwind   → Sonnet', tone: 'task' },
  { text: '     T2.2  Hero + FAQ + features         → Sonnet', tone: 'task' },
  { text: '     T2.3  Email signup + API route      → Sonnet', tone: 'task' },
  { text: '     T2.4  Playwright tests              → Sonnet', tone: 'task' },
  { text: '', tone: 'blank' },
  { text: '   Phase 3: Polish & ship            [parallel]', tone: 'phase' },
  { text: '     T3.1  SEO meta + JSON-LD            → Haiku', tone: 'task' },
  { text: '     T3.2  Vercel deploy + smoke test    → Sonnet', tone: 'task' },
  { text: '', tone: 'blank' },
  { text: '→ ROUTE + CURATE CONTEXT  (28% input tokens vs naive)', tone: 'arrow' },
  { text: '', tone: 'blank' },
  { text: '→ EXECUTE  (8 tasks across 3 model tiers)', tone: 'arrow' },
  { text: '', tone: 'blank' },
  { text: '→ VERIFY  T1.1 ✓  T1.2 ✓  T2.1 ✓  T2.2 ✓  T2.3 ⚠ (rate-limit missing)', tone: 'verify' },
  { text: '          T2.4 ✓  T3.1 ✓  T3.2 ✓', tone: 'verify' },
  { text: '', tone: 'blank' },
  { text: '✓ DONE: Landing page live at example.com', tone: 'done' },
  { text: 'SHIPPED: 8 files, 1 API route, 4 Playwright tests', tone: 'summary' },
  { text: 'VERIFIED: 7 pass · 1 conditional · 0 fail', tone: 'summary' },
  { text: 'COST: ~$0.41  (Haiku: 2, Sonnet: 5, Opus: 1)  vs all-Opus baseline $1.00', tone: 'summary' },
  { text: 'TIME: 18m 42s', tone: 'summary' },
  { text: 'NEXT: add rate-limit middleware before public launch', tone: 'next' }
];

const TERMINAL_TONES = {
  arrow: 'text-purple-300 font-semibold',
  phase: 'text-[#cfd0e6]',
  task: 'text-[#9ea0bf]',
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

const GodModeSection = () => {
  return (
    <section
      id="god-mode"
      aria-labelledby="god-mode-heading"
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
            v1.3.1 Launch · Open Source
          </span>

          <h2
            id="god-mode-heading"
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
              The AI operating layer for the rest of your work.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#b6b7d2] sm:text-lg">
            God Mode is an open-source Claude Code plugin + MCP server. One CEO orchestrator decomposes
            your goal, routes every task to the right model (100% accuracy on 104 stratified router evals),
            curates minimum context per worker, runs the work in parallel, and a separate verifier agent
            proves the deliverable shipped. Same discipline runs in Claude Code, claude.ai, Cowork, ChatGPT,
            Cursor, and Gemini.
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
            id="god-mode-demo"
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
                  <Terminal className="h-3.5 w-3.5" /> god-mode · live demo
                </span>
              </div>
              <CopyButton label="god mode command" value={TERMINAL_GOAL} />
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
                Routed across 23 specialist agents · Verifier on every task · 100% router accuracy ·
                59% cheaper vs all-Opus
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
                Install God Mode
              </h3>
              <p className="mt-2 text-sm text-[#a8a9c3]">
                One-liners for the Claude Code plugin, the MCP server, and the portable prompt that
                carries the same discipline into every other tool.
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
              Install God Mode
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href={LAUNCH_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/15 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-purple-300/70 hover:bg-purple-500/25 hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.6)]"
            >
              Read the launch profile
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
          <a
            href={ROUTER_EVAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#9ea0bf] transition-colors duration-200 hover:text-purple-200"
          >
            100% router eval
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
          <h3>God Mode v1.3.1 — open-source AI operating layer by Meet Patel (themeetpatel)</h3>
          <p>
            God Mode is an open-source Claude Code plugin and MCP server built by Meet Patel. One CEO
            orchestrator converts a single goal into a structured roadmap, routes each task to the most
            cost-efficient AI model (Claude Haiku, Sonnet, and Opus) with 100% accuracy across 104
            stratified router evaluations, curates the minimum viable context per worker, dispatches
            specialist agents in parallel, and runs a separate verifier agent that proves each
            deliverable shipped before reporting it done.
          </p>
          <p>
            How does God Mode work? You provide one outcome. God Mode clarifies the goal, decomposes it
            into roadmap phases, routes tasks across model tiers, curates context, executes in parallel,
            and verifies every task. It works with Claude Code, claude.ai, Cowork, ChatGPT, Cursor, and
            Gemini through the Model Context Protocol (MCP) and a portable system prompt.
          </p>
          <p>
            Who is it for? Founders, operators, and product teams who want fewer prompts, verified
            execution, and a durable execution memory across tools and sessions.
          </p>
          <ul>
            <li>What it does: turns one goal into a verified deliverable with routed specialist tasks.</li>
            <li>How to install: add the Claude Code plugin, build the MCP server, or paste the portable prompt.</li>
            <li>Why it matters: a separate verifier proves work shipped, and routing is 59% cheaper than all-Opus.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GodModeSection;
