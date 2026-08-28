import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Calendar, Mail, FileText } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import {
  SITE_URL,
  personRef,
  meetPatelEntities,
  buildBreadcrumb,
  buildFaqPage,
} from '../lib/seoEntity';
import { BRAND, POSITIONING, LOOP, MARKET, TRACTION, RAISE, INVESTOR } from '../data/company8';
import { trackButtonClick } from '../utils/analytics';
import { capture } from '../lib/posthog';

// Investor-facing surface — the path the audit found missing entirely.
// All copy reads from src/data/company8.js so numbers never drift again.
//
// Everything on this page traces to the Company 8 pre-seed deck (2026).
// Deliberately NOT on this page, by the founder's call:
//   · the raise amount and the use-of-funds split — that conversation happens
//     on the call, not on a crawlable page;
//   · named customers — publishing a logo needs that customer's consent;
//   · the deck itself — "Request the deck" stays a mailto so every view has a
//     name attached to it.
// If any of those should go public later, add them here AND to
// api/_pageContent.js, which renders the crawler-facing version of this page.
//
// DESIGN: the page is paced like a pitch, not set like a document. Each act
// opens on a screenplay slug line, lands one held statement at display size,
// then drops to a 62ch reading measure — the width change is the cut. Violet
// is the question, gold is the resolution; gold appears only where something
// is settled. Numbering is used ONLY for the loop, because LOOP.stages is the
// one place where order genuinely carries information.
//
// CLS: every animation is opacity + transform. Animating top/left with Framer
// Motion is what pushed this site's CLS to 0.184 once.

const C = {
  ink: '#06060a',
  bg: '#09090e',
  surface: '#101018',
  violet: '#8b5cf6',
  violetLight: '#c4b5fd',
  gold: '#d4a847',
  heading: '#f7f7fb',
  subhead: '#cfd0e6',
  body: '#a8a9c3',
  faint: '#6f7189',
  hair: 'rgba(255,255,255,0.09)',
};

const MONO =
  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace';

/**
 * Screenplay slug line: the act label in mono, then a hairline running out to
 * the right. Label-first so it anchors to the heading beneath it. The label
 * wraps rather than overflowing — at 390px the hero's label is long enough to
 * leave the viewport if it is held on one line.
 */
const Slug = ({ children, tone = C.faint }) => (
  <div className="flex items-baseline gap-4">
    <span
      className="text-[10px] font-semibold uppercase sm:text-[11px]"
      style={{ fontFamily: MONO, letterSpacing: '0.2em', color: tone }}
    >
      {children}
    </span>
    <span
      className="hidden h-px flex-1 translate-y-[-3px] sm:block"
      style={{ background: C.hair }}
      aria-hidden="true"
    />
  </div>
);

/** The one statement an act is allowed to say at display size. */
const Held = ({ children, className = '' }) => (
  <p
    className={`mt-8 font-bold text-balance ${className}`}
    style={{
      fontSize: 'clamp(1.6rem, 3.4vw, 2.6rem)',
      lineHeight: 1.12,
      letterSpacing: '-0.025em',
      color: C.heading,
    }}
  >
    {children}
  </p>
);

/** Body prose, always at a reading measure — never the full container width. */
const Prose = ({ children, className = '' }) => (
  <p
    className={`mt-6 max-w-[62ch] ${className}`}
    style={{ fontSize: 'clamp(1rem, 1.1vw, 1.0625rem)', lineHeight: 1.75, color: C.subhead }}
  >
    {children}
  </p>
);

const Act = ({ label, tone, children }) => (
  <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:py-20">
    <Slug tone={tone}>{label}</Slug>
    {children}
  </section>
);

/**
 * The traction figures, as stat tiles. Built from whatever is actually filled
 * in — an empty field disappears rather than shipping a placeholder.
 */
function buildTractionStats() {
  const parse = (raw) => {
    if (!raw) return null;
    const m = String(raw).match(/^([\d.,]+\+?%?)\s+(.*)$/);
    return m ? { value: m[1], label: m[2] } : { value: raw, label: '' };
  };
  return [
    parse(TRACTION.activeUsers),
    parse(TRACTION.signups),
    parse(TRACTION.investigations),
    parse(TRACTION.interviews),
    TRACTION.pilots ? { value: TRACTION.pilots, label: '' } : null,
    TRACTION.usageStat ? { value: TRACTION.usageStat, label: '' } : null,
  ].filter(Boolean);
}

// The stage the whole product argument turns on. LOOP's own comment: order is
// load-bearing, and reconciliation happening before monitoring is what makes
// this a decision layer rather than an alerting tool. Marked in gold for that
// reason, not for emphasis.
const PIVOT_STAGE = 'Reconcile';

const InvestorsPage = () => {
  const reduceMotion = useReducedMotion();
  const tractionStats = buildTractionStats();
  const marketTiles = [MARKET.beachhead, MARKET.sam, MARKET.universe, MARKET.tam];

  // Entrance: transform + opacity only, and nothing moves at all when the
  // viewer has asked for reduced motion.
  const rise = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-70px' },
        transition: { duration: 0.6, ease: 'easeOut' },
      };

  // The investor CTAs are the site's highest-intent conversion — they get their
  // own PostHog event (not just the generic button_clicked mirror) so the
  // fundraising funnel is queryable on its own.
  const trackInvestorCta = (cta, destination) => {
    trackButtonClick(cta, 'investors');
    capture('investor_cta_clicked', {
      cta,
      destination,
      raise_stage: RAISE.stage,
      raise_is_open: RAISE.isOpen,
    });
  };

  // Questions investors actually ask, rendered visibly below and mirrored into
  // FAQPage schema. Both must stay in sync — FAQ markup describing content that
  // isn't on the page is a structured-data policy violation, not a shortcut.
  const investorFaq = [
    {
      q: `What round is ${BRAND.company} raising?`,
      a: `${BRAND.company} is raising a ${RAISE.stage.toLowerCase()} round. ${RAISE.thesis}`,
    },
    {
      q: 'What is the product?',
      a: `${BRAND.product} (${BRAND.productUrl}) — ${POSITIONING.descriptor}.${
        TRACTION.activeUsers ? ` It is live, with ${TRACTION.activeUsers}.` : ''
      }`,
    },
    {
      q: `What category is ${BRAND.company} in?`,
      a: `${POSITIONING.category}. ${BRAND.product} enters through ${POSITIONING.beachhead} — the team that already runs a recurring review where the CRM, the dashboard and finance disagree — and expands from there into finance, product, customer and operations.`,
    },
    {
      q: `How is ${BRAND.product} different from a BI or revenue intelligence tool?`,
      a: `BI answers a question someone thought to ask, and revenue intelligence scores a forecast. ${BRAND.product} runs the decision loop instead: ${LOOP.stages.join(
        ', ',
      ).toLowerCase()}. ${LOOP.evidence}`,
    },
    { q: 'Why is this founder the right one to build it?', a: POSITIONING.whyMe },
    {
      q: `How do investors contact ${BRAND.company}?`,
      a: `Email ${INVESTOR.email} or book time at ${INVESTOR.calendly}. Meet Patel is the founder and replies directly.`,
    },
  ];

  const structuredData = [
    ...meetPatelEntities,
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/investors#webpage`,
      name: `${BRAND.company} — Investor Information`,
      url: `${SITE_URL}/investors`,
      description: RAISE.thesis,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: personRef,
      inLanguage: 'en-US',
    },
    buildBreadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Investors', url: '/investors' },
    ]),
    buildFaqPage(investorFaq),
  ];

  const deckHref = INVESTOR.deckUrl
    ? INVESTOR.deckUrl
    : `mailto:${INVESTOR.email}?subject=${encodeURIComponent(
        `${BRAND.company} — deck request`,
      )}&body=${encodeURIComponent(
        `Hi Meet,\n\nI'd like to learn more about ${BRAND.company} (${BRAND.product}) and see the deck.\n\n`,
      )}`;

  const ctaBase =
    'inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.9375rem] font-semibold no-underline transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c4b5fd]';

  const ctas = (placement) => (
    <div className="mt-10 flex flex-wrap gap-3">
      <a
        href={deckHref}
        target={INVESTOR.deckUrl ? '_blank' : undefined}
        rel="noopener noreferrer"
        onClick={() => trackInvestorCta('request_deck', INVESTOR.deckUrl ? 'deck' : 'email')}
        className={`${ctaBase} text-[#09090e] hover:brightness-110`}
        style={{ background: `linear-gradient(135deg, #f6d98c 0%, ${C.gold} 100%)` }}
        data-placement={placement}
      >
        <FileText size={16} aria-hidden="true" /> Request the deck
      </a>
      <a
        href={INVESTOR.calendly}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackInvestorCta('book_call', 'booking')}
        className={`${ctaBase} border hover:bg-white/[0.06]`}
        style={{ borderColor: C.hair, color: C.heading }}
      >
        <Calendar size={16} aria-hidden="true" /> Book 20 minutes
      </a>
      <a
        href={BRAND.productUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackInvestorCta('see_dan', 'usedan.com')}
        className={`${ctaBase} border hover:bg-white/[0.06]`}
        style={{ borderColor: C.hair, color: C.subhead }}
      >
        See {BRAND.product} live <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>
  );

  return (
    <main style={{ background: C.bg, minHeight: '100vh', color: C.body }}>
      <SEOHead
        title={`${BRAND.company} — For Investors`}
        description={`${RAISE.stage} · ${POSITIONING.oneLiner}`}
        canonical="/investors"
        structuredData={structuredData}
      />

      {/* ── Opening: the inciting image, not the plot summary ─────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
          style={{
            background:
              'radial-gradient(58% 90% at 18% 0%, rgba(139,92,246,0.20) 0%, transparent 68%)',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-5 pt-32 pb-16 sm:px-8 lg:pt-44">
          <Slug tone={C.violetLight}>
            {BRAND.company} — {RAISE.stage} — {POSITIONING.category}
          </Slug>

          <h1
            className="mt-12 font-bold"
            style={{
              fontSize: 'clamp(2.75rem, 8.5vw, 6.25rem)',
              lineHeight: 0.96,
              letterSpacing: '-0.038em',
              color: C.heading,
            }}
          >
            {POSITIONING.investorBeats.map((beat, i) => (
              <motion.span
                key={beat}
                className="block"
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                animate={reduceMotion ? false : { opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                // The resolution line is solid gold. A gold-to-violet gradient
                // interpolates through a muddy brown-grey in sRGB — measured on
                // screen, not assumed — and two hues here would spend the
                // page's one bold move on decoration.
                style={i === POSITIONING.investorBeats.length - 1 ? { color: C.gold } : undefined}
              >
                {beat}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
              <span
                aria-hidden="true"
                className="h-px w-16 flex-shrink-0 sm:mt-3 sm:w-20"
                style={{ background: C.gold }}
              />
              <p
                className="max-w-[58ch]"
                style={{
                  fontSize: 'clamp(1.0625rem, 1.6vw, 1.3125rem)',
                  lineHeight: 1.6,
                  color: C.subhead,
                }}
              >
                {POSITIONING.oneLiner}
              </p>
            </div>
            {ctas('hero')}
          </motion.div>
        </div>
      </section>

      {/* ── The problem ───────────────────────────────────────────────────── */}
      <Act label="The problem">
        <motion.div {...rise}>
          <Held>Leadership sees the risk after the business has paid for it.</Held>
          <Prose>{POSITIONING.problem}</Prose>
        </motion.div>
      </Act>

      {/* ── Why now ───────────────────────────────────────────────────────── */}
      <Act label="Why now">
        <motion.div {...rise}>
          <Held>
            AI made answers cheap.{' '}
            <span style={{ color: C.gold }}>Acting on the wrong answer became expensive.</span>
          </Held>
          <Prose>{POSITIONING.whyNow}</Prose>
        </motion.div>
      </Act>

      {/* ── The loop. The one sequence on this page, so the one place numbers
             are earned. Reconcile is gold because it is the pivot. ────────── */}
      <Act label="How it works">
        <motion.div {...rise}>
          <Held>Six stages. The order is the product.</Held>

          <ol className="mt-12 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: C.hair }}>
            {LOOP.stages.map((stage, i) => {
              const isPivot = stage === PIVOT_STAGE;
              return (
                <li key={stage} className="relative px-6 py-7" style={{ background: C.bg }}>
                  <span
                    className="text-[11px] font-semibold"
                    style={{
                      fontFamily: MONO,
                      letterSpacing: '0.18em',
                      color: isPivot ? C.gold : C.faint,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="mt-3 block text-xl font-semibold"
                    style={{ color: isPivot ? C.gold : C.heading, letterSpacing: '-0.015em' }}
                  >
                    {stage}
                  </span>
                  {isPivot && (
                    <span
                      className="mt-2 block text-[13px] leading-relaxed"
                      style={{ color: C.body }}
                    >
                      The pivot. Reconciling before monitoring is what separates this from an
                      alerting tool.
                    </span>
                  )}
                </li>
              );
            })}
          </ol>

          <Prose>{LOOP.evidence}</Prose>
          <p className="mt-4 max-w-[62ch] text-[0.9375rem] leading-relaxed" style={{ color: C.body }}>
            {LOOP.substitute}
          </p>
        </motion.div>
      </Act>

      {/* ── Traction ──────────────────────────────────────────────────────── */}
      {tractionStats.length > 0 && (
        <Act label="Where we are">
          <motion.div {...rise}>
            <Held>
              {BRAND.product} is live —{' '}
              <span style={{ color: C.gold }}>at zero paid acquisition.</span>
            </Held>
            <Prose>
              Everything below is from {TRACTION.window}. No paid growth, no sales motion, no
              marketing, no launch.
            </Prose>

            <dl className="mt-12 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: C.hair }}>
              {tractionStats.map(({ value, label }) => (
                <div key={`${value}-${label}`} className="px-6 py-8" style={{ background: C.bg }}>
                  <dt
                    className="text-4xl font-bold tabular-nums"
                    style={{ color: C.heading, letterSpacing: '-0.03em', lineHeight: 1 }}
                  >
                    {value}
                  </dt>
                  {label && (
                    <dd className="mt-3 text-[13px] leading-relaxed" style={{ color: C.body }}>
                      {label}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </motion.div>
        </Act>
      )}

      {/* ── Market ────────────────────────────────────────────────────────── */}
      <Act label="The market">
        <motion.div {...rise}>
          <Held>A beachhead that already runs the meeting.</Held>

          <div className="mt-12 grid grid-cols-1 gap-px md:grid-cols-2" style={{ background: C.hair }}>
            {marketTiles.map(({ value, label, detail }) => (
              <div key={label} className="px-6 py-8" style={{ background: C.bg }}>
                <div
                  className="text-3xl font-bold tabular-nums"
                  style={{ color: C.violetLight, letterSpacing: '-0.03em', lineHeight: 1 }}
                >
                  {value}
                </div>
                <div
                  className="mt-4 text-[11px] font-semibold uppercase"
                  style={{ fontFamily: MONO, letterSpacing: '0.18em', color: C.faint }}
                >
                  {label}
                </div>
                <p className="mt-3 text-[0.9375rem] leading-relaxed" style={{ color: C.body }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-6 text-[12px] leading-relaxed"
            style={{ fontFamily: MONO, color: C.faint }}
          >
            SOURCES: {MARKET.sources.join(' · ')}
          </p>
        </motion.div>
      </Act>

      {/* ── Why me ────────────────────────────────────────────────────────── */}
      <Act label="Why me">
        <motion.div {...rise}>
          <Held>I was the human {BRAND.product} before I built the real one.</Held>
          <Prose>{POSITIONING.whyMe}</Prose>
        </motion.div>
      </Act>

      {/* ── FAQ — mirrors the FAQPage schema above, verbatim ──────────────── */}
      <Act label="Questions investors ask">
        <motion.dl {...rise} className="mt-12 grid grid-cols-1 gap-px" style={{ background: C.hair }}>
          {investorFaq.map(({ q, a }) => (
            <div key={q} className="px-6 py-8" style={{ background: C.bg }}>
              <dt
                className="max-w-[52ch] text-lg font-semibold"
                style={{ color: C.heading, lineHeight: 1.4, letterSpacing: '-0.015em' }}
              >
                {q}
              </dt>
              <dd
                className="mt-3 max-w-[62ch] text-[0.9375rem]"
                style={{ color: C.subhead, lineHeight: 1.7 }}
              >
                {a}
              </dd>
            </div>
          ))}
        </motion.dl>
      </Act>

      {/* ── The raise (only if filled) ────────────────────────────────────── */}
      {RAISE.useOfFunds && (
        <Act label="The raise">
          <motion.div {...rise}>
            <Prose>{RAISE.useOfFunds}</Prose>
          </motion.div>
        </Act>
      )}

      {/* ── Closing card ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-5 pb-28 sm:px-8">
        <motion.div
          {...rise}
          className="relative overflow-hidden rounded-3xl border px-7 py-12 sm:px-12"
          style={{ borderColor: 'rgba(212,168,71,0.24)', background: C.surface }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -right-16 h-64 w-64 rounded-full opacity-50 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(212,168,71,0.35) 0%, transparent 70%)' }}
          />
          <div className="relative">
            <Slug tone={C.gold}>{RAISE.isOpen ? 'The round is open' : 'Building toward the raise'}</Slug>
            <p
              className="mt-8 max-w-[24ch] font-bold"
              style={{
                fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.028em',
                color: C.heading,
              }}
            >
              If you back operator-founders early, let’s talk.
            </p>
            <Prose>{RAISE.thesis}</Prose>
            {ctas('closing')}
            <p className="mt-9 flex items-center gap-2 text-sm" style={{ color: C.body }}>
              <Mail size={15} aria-hidden="true" /> Direct:{' '}
              <a
                href={`mailto:${INVESTOR.email}`}
                onClick={() => trackInvestorCta('direct_email', 'mailto')}
                className="no-underline transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4b5fd]"
                style={{ color: C.violetLight }}
              >
                {INVESTOR.email}
              </a>
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default InvestorsPage;
