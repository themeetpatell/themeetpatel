import React from 'react';
import { motion } from 'framer-motion';
import { Github, ShieldCheck, Scale, Network, Layers } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { ACU, SCALE, THE_GATE, LAWS, DEPARTMENTS } from '../data/acu';

// ACU — the Agentic Cinematic Universe. Replaces the old /labs page, which
// 308s here. The Instant Kill Mode marketing section that used to live on
// /labs is deleted, along with LabsPage.jsx — this page is the org, and it
// stays that way.
//
// CLS note: every entrance animation is opacity + transform only. Animating
// top/left with Framer Motion is what pushed this site's CLS to 0.184 once.

// Only transform/opacity — never layout properties.
const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: `${ACU.name} — ${ACU.fullName}`,
  abstract: ACU.tagline,
  description: ACU.summary,
  codeRepository: ACU.repo,
  programmingLanguage: 'Markdown',
  runtimePlatform: 'Claude Code',
  author: { '@type': 'Person', name: 'Meet Patel', url: 'https://www.themeetpatel.com' },
  url: 'https://www.themeetpatel.com/acu',
};

const Eyebrow = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c4b5fd]">
    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
    {children}
  </span>
);

const ACUPage = () => (
  <main style={{ background: '#09090e', minHeight: '100vh' }}>
    <SEOHead
      title="ACU — the Agentic Cinematic Universe"
      description="The governed agent org Meet Patel runs his companies on: 127 specialist agents across 15 departments, one canon, one vault, and eleven laws that bind every one of them."
      keywords="ACU, Agentic Cinematic Universe, Meet Patel, multi-agent orchestration, Claude Code plugins, governed AI agents, agent org"
      canonical="/acu"
      structuredData={STRUCTURED_DATA}
    />

    {/* Hero */}
    <section className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 lg:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-60"
        style={{
          background:
            'radial-gradient(60% 100% at 50% 0%, rgba(139,92,246,0.22) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div {...rise} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <Eyebrow icon={Network}>{ACU.fullName}</Eyebrow>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#f7f7fb] sm:text-5xl lg:text-6xl">
            Running a company takes an org chart.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#cfd0e6] sm:text-xl">
            {ACU.tagline} {ACU.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={ACU.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-400/30 bg-gradient-to-br from-purple-500/25 to-indigo-500/10 px-5 py-3 text-sm font-semibold text-[#f7f7fb] transition-colors hover:border-purple-400/60 hover:bg-purple-500/20"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              View the repository
            </a>
            <span className="text-xs text-[#8b8da8]">
              Counts read off the repo.
            </span>
          </div>
        </motion.div>

        {/* Scale strip */}
        <motion.dl
          {...rise}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-3 lg:grid-cols-5"
        >
          {SCALE.map(({ value, label }) => (
            <div key={label} className="bg-[#0c0c14] px-5 py-6">
              <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#8b8da8]">
                {label}
              </dt>
              <dd className="mt-2 text-3xl font-bold tabular-nums text-[#f7f7fb]">{value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>

    {/* The gate */}
    <section className="px-5 py-16 sm:px-8">
      <motion.blockquote
        {...rise}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-4xl rounded-2xl border-l-2 border-[#d4a847] bg-white/[0.03] px-6 py-8 sm:px-10"
      >
        <Eyebrow icon={ShieldCheck}>The gate on every agent</Eyebrow>
        <p className="mt-5 text-xl font-medium leading-relaxed text-[#f7f7fb] sm:text-2xl">
          “{THE_GATE.quote}”
        </p>
        <footer className="mt-5 text-sm leading-relaxed text-[#a8a9c3]">{THE_GATE.detail}</footer>
      </motion.blockquote>
    </section>

    {/* The eleven laws */}
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div {...rise} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <Eyebrow icon={Scale}>The eleven laws</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#f7f7fb] sm:text-4xl">
            They bind every agent, whether or not the file cites them
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#a8a9c3]">
            An agent that breaks one is broken, and the run is void.
          </p>
        </motion.div>

        <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] md:grid-cols-2">
          {LAWS.map(({ n, title, body }) => (
            <li key={n} className="flex gap-4 bg-[#0c0c14] px-6 py-6">
              <span className="mt-0.5 font-mono text-sm tabular-nums text-[#d4a847]">
                {String(n).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-base font-semibold text-[#f7f7fb]">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#a8a9c3]">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* The chart */}
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div {...rise} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <Eyebrow icon={Layers}>The chart</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#f7f7fb] sm:text-4xl">
            Fifteen departments, one hundred and twenty-seven agents
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#a8a9c3]">
            Each department carries its own gates, its own system of record, and a declared
            definition of done. Work routes to exactly one owner.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {DEPARTMENTS.map(({ key, count, owns, agents }, index) => (
            <motion.article
              key={key}
              {...rise}
              transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.05, ease: 'easeOut' }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-purple-400/35 hover:bg-white/[0.05]"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-mono text-sm font-semibold tracking-tight text-[#c4b5fd]">
                  {key}
                </h3>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#8b8da8]">
                  {count === 0 ? 'skills only' : `${count} agents`}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#a8a9c3]">{owns}</p>
              {agents.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {agents.map((name) => (
                    <li
                      key={name}
                      className="rounded-md border border-white/10 bg-black/30 px-2 py-1 text-[11px] font-medium text-[#cfd0e6]"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>

  </main>
);

export default ACUPage;
