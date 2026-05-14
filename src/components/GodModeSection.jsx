import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Crown,
  Network,
  BrainCircuit,
  Database,
  Copy,
  Check,
  Terminal,
  ArrowRight,
  Github,
  Workflow,
  Cpu,
  Zap,
  ShieldCheck
} from 'lucide-react';

const ORCHESTRATOR_STEPS = [
  'Clarify the outcome',
  'Break into roadmap phases',
  'Route research to Research Analyst',
  'Route product scope to Product Strategist',
  'Route launch funnel to Growth Architect',
  'Create execution tasks',
  'Generate installable handoff',
  'Save session for continuation'
];

const CAPABILITY_CARDS = [
  {
    title: 'CEO Orchestrator',
    icon: Crown,
    description:
      'Drop in a goal. God Mode breaks it into phases, tasks, owners, context, and execution sequence.',
    badge: 'Strategy → Execution',
    accent: 'rgba(212,168,71,0.45)'
  },
  {
    title: 'Model Router',
    icon: Network,
    description:
      'Cheap tasks go fast. Complex tasks go deep. Every task gets routed by complexity, risk, and output type.',
    badge: 'Haiku · Sonnet · Opus',
    accent: 'rgba(139,92,246,0.55)'
  },
  {
    title: 'Execution Memory',
    icon: Database,
    description:
      'Roadmaps, task status, handoffs, and reusable prompts persist across sessions through the MCP layer.',
    badge: 'MCP-native memory',
    accent: 'rgba(99,102,241,0.55)'
  }
];

const INSTALL_COMMANDS = [
  {
    label: 'Claude Code · Plugin',
    command:
      '/plugin marketplace add /absolute/path/to/themeetpatel\n/plugin install themeetpatel@themeetpatel'
  },
  {
    label: 'MCP Server · Build',
    command: 'cd themeetpatel/mcp-server && npm install && npm run build'
  },
  {
    label: 'MCP Config · claude_desktop_config.json',
    command: `{
  "mcpServers": {
    "themeetpatel-god-mode": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/themeetpatel/mcp-server/dist/index.js"]
    }
  }
}`
  }
];

const HIGHLIGHTS = [
  { icon: Workflow, label: 'Phase-aware planning' },
  { icon: Cpu, label: 'Cost-tiered routing' },
  { icon: Zap, label: 'Installable handoffs' },
  { icon: ShieldCheck, label: 'Session-safe memory' }
];

const GITHUB_URL = 'https://github.com/themeetpatell/god-mode';

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
            New Build · AI Chief of Staff
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
              Full roadmap out.
            </span>{' '}
            Every task routed to the right brain.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#b6b7d2] sm:text-lg">
            God Mode is my AI execution layer for turning messy ideas into structured plans, specialist tasks,
            model routing, installable workflows, and execution-ready outputs across Claude, Cursor, ChatGPT, and
            MCP-compatible tools.
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
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/30 bg-gradient-to-br from-purple-500/30 via-indigo-500/20 to-transparent shadow-lg shadow-purple-900/30">
                    <Icon className="h-6 w-6 text-purple-100" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c4b5fd]">
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
              <CopyButton
                label="god mode command"
                value="/god-mode Build a launch plan for an AI-native startup operating system"
              />
            </div>

            <div className="px-5 py-6 font-mono text-sm leading-relaxed sm:px-7 sm:py-7">
              <div className="flex items-start gap-2 text-[#c4b5fd]">
                <span className="text-[#d4a847]">$</span>
                <span className="break-all text-[#e7e8fb]">
                  /god-mode Build a launch plan for an AI-native startup operating system
                </span>
              </div>

              <div className="mt-5 space-y-2 text-[13px] text-[#cfd0e6]">
                <p className="text-[11px] uppercase tracking-[0.22em] text-purple-300/80">→ Orchestrator plan</p>
                {ORCHESTRATOR_STEPS.map((step, idx) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[3px] inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-purple-400/30 bg-purple-500/15 text-[10px] font-semibold text-purple-200">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4 text-[12px] text-[#8b8da8]">
                <BrainCircuit className="h-4 w-4 text-purple-300" />
                Routed across 7 specialist agents · 3 model tiers · MCP memory enabled
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
                One-liners to install the plugin, build the MCP server, and wire it into any MCP-compatible tool.
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
          className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#god-mode-demo"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/15 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-purple-300/70 hover:bg-purple-500/25 hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.6)]"
          >
            View Demo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
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
        </motion.div>

        <div className="sr-only">
          <h3>God Mode — AI Chief of Staff by Meet Patel (themeetpatel)</h3>
          <p>
            God Mode is an AI orchestration layer and Chief of Staff system built by Meet Patel. It converts a
            single founder goal into a structured roadmap, routes each task to the most cost-efficient AI model
            (Claude Haiku, Sonnet, and Opus), dispatches specialist agents in parallel, and persists session
            memory through the Model Context Protocol (MCP).
          </p>
          <p>
            How does God Mode work? You provide one outcome. God Mode clarifies the goal, decomposes it into
            roadmap phases, routes research, product strategy, and growth tasks to specialist agents, and
            generates an installable handoff. It works with Claude Code, Cursor, ChatGPT, and any
            MCP-compatible developer tool.
          </p>
          <p>
            Who is it for? Founders, operators, and product teams who want fewer prompts, faster execution, and a
            durable execution memory across tools and sessions.
          </p>
          <ul>
            <li>What it does: turns one goal into a full execution roadmap with routed specialist tasks.</li>
            <li>How to install: add the Claude Code plugin, build the MCP server, and register it in your MCP config.</li>
            <li>Why it matters: optimizes AI spend by routing simple tasks to fast cheap models and complex tasks to reasoning models.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GodModeSection;
