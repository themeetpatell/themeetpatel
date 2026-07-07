import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Mail, FileText, Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { BRAND, POSITIONING, TRACTION, RAISE, INVESTOR } from '../data/company8';
import { trackButtonClick } from '../utils/analytics';

// Investor-facing surface — the path the audit found missing entirely.
// All copy reads from src/data/company8.js so numbers never drift again.

const COLORS = {
  bg: '#09090e',
  surface: '#111118',
  elevated: '#16161f',
  violet: '#8b5cf6',
  violetLight: '#c4b5fd',
  heading: '#f7f7fb',
  subhead: '#cfd0e6',
  body: '#a8a9c3',
  border: 'rgba(255,255,255,0.08)',
};

/** Build an honest traction list from whatever real numbers are filled in. */
function buildTraction() {
  const items = [];
  if (TRACTION.activeUsers) items.push(TRACTION.activeUsers);
  if (TRACTION.pilots) items.push(TRACTION.pilots);
  if (TRACTION.usageStat) items.push(TRACTION.usageStat);
  if (TRACTION.productHunt) items.push(TRACTION.productHunt);
  if (TRACTION.status === 'live' && !items.some((i) => /live/i.test(i))) {
    items.unshift('Dan is live and in the hands of real operators');
  }
  return items;
}

const InvestorsPage = () => {
  const traction = buildTraction();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.themeetpatel.com/investors',
    name: `${BRAND.company} — Investor Information`,
    url: 'https://www.themeetpatel.com/investors',
    description: RAISE.thesis,
  };

  const deckHref = INVESTOR.deckUrl
    ? INVESTOR.deckUrl
    : `mailto:${INVESTOR.email}?subject=${encodeURIComponent(
        `${BRAND.company} — deck request`,
      )}&body=${encodeURIComponent(
        `Hi Meet,\n\nI'd like to learn more about ${BRAND.company} (${BRAND.product}) and see the deck.\n\n`,
      )}`;

  return (
    <main style={{ background: COLORS.bg, minHeight: '100vh', color: COLORS.body }}>
      <SEOHead
        title={`${BRAND.company} — For Investors`}
        description={`${RAISE.stage} · ${POSITIONING.oneLiner}`}
        canonical="/investors"
        structuredData={structuredData}
      />

      <section
        style={{
          maxWidth: 860,
          margin: '0 auto',
          padding: '160px 24px 120px',
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 14px',
            borderRadius: 999,
            border: `1px solid ${COLORS.border}`,
            background: COLORS.surface,
            fontSize: 13,
            fontWeight: 600,
            color: COLORS.violetLight,
            letterSpacing: 0.2,
          }}
        >
          <Sparkles size={14} />
          {BRAND.company} · {RAISE.stage}
        </motion.div>

        {/* Thesis */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          style={{
            marginTop: 28,
            fontSize: 'clamp(30px, 5vw, 46px)',
            lineHeight: 1.12,
            fontWeight: 800,
            color: COLORS.heading,
            letterSpacing: '-0.02em',
          }}
        >
          {POSITIONING.oneLiner}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          style={{ marginTop: 22, fontSize: 18, lineHeight: 1.6, color: COLORS.subhead }}
        >
          {POSITIONING.problem}
        </motion.p>

        {/* Traction */}
        {traction.length > 0 && (
          <div style={{ marginTop: 48 }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', color: COLORS.body }}>
              Where we are
            </h2>
            <ul style={{ marginTop: 16, display: 'grid', gap: 12, listStyle: 'none', padding: 0 }}>
              {traction.map((t) => (
                <li
                  key={t}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '14px 18px',
                    borderRadius: 14,
                    background: COLORS.surface,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.subhead,
                    fontSize: 16,
                  }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: COLORS.violet, flexShrink: 0 }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Why me */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', color: COLORS.body }}>
            Why me
          </h2>
          <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.65, color: COLORS.subhead }}>
            {POSITIONING.whyMe}
          </p>
          <p style={{ marginTop: 14, fontSize: 17, lineHeight: 1.65, color: COLORS.subhead }}>
            {POSITIONING.whyNow}
          </p>
        </div>

        {/* Use of funds (only if filled) */}
        {RAISE.useOfFunds && (
          <div style={{ marginTop: 48 }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', color: COLORS.body }}>
              The raise
            </h2>
            <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.65, color: COLORS.subhead }}>
              {RAISE.useOfFunds}
            </p>
          </div>
        )}

        {/* CTAs */}
        <div
          style={{
            marginTop: 56,
            padding: 28,
            borderRadius: 20,
            background: COLORS.elevated,
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <p style={{ fontSize: 18, fontWeight: 700, color: COLORS.heading }}>
            {RAISE.isOpen ? `Raising ${RAISE.stage.toLowerCase()}.` : 'Building toward the raise.'} Let’s talk.
          </p>
          <p style={{ marginTop: 8, fontSize: 15, color: COLORS.body }}>
            If you back technical, operator-founders early, I’d love to show you Dan.
          </p>

          <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href={deckHref}
              target={INVESTOR.deckUrl ? '_blank' : undefined}
              rel="noopener noreferrer"
              onClick={() => trackButtonClick('request_deck', 'investors')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '13px 22px',
                borderRadius: 999,
                background: COLORS.violet,
                color: '#fff',
                fontSize: 15,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <FileText size={16} /> Request the deck
            </a>
            <a
              href={INVESTOR.calendly}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackButtonClick('book_call', 'investors')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '13px 22px',
                borderRadius: 999,
                background: 'transparent',
                color: COLORS.heading,
                border: `1px solid ${COLORS.border}`,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <Calendar size={16} /> Book 20 minutes
            </a>
            <a
              href={`https://usedan.com`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackButtonClick('see_dan', 'investors')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '13px 22px',
                borderRadius: 999,
                background: 'transparent',
                color: COLORS.subhead,
                border: `1px solid ${COLORS.border}`,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              See Dan live <ArrowUpRight size={16} />
            </a>
          </div>

          <p style={{ marginTop: 20, fontSize: 14, color: COLORS.body, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Mail size={14} /> Direct:{' '}
            <a href={`mailto:${INVESTOR.email}`} style={{ color: COLORS.violetLight, textDecoration: 'none' }}>
              {INVESTOR.email}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default InvestorsPage;
