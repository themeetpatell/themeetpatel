import React from 'react';
import { motion } from 'framer-motion';
import {
  BANDS, CAPABILITY_TOTAL, DOMAINS, STACK, INTERESTS,
} from '../../data/capabilities';

/**
 * The Skills tab on /about. Capabilities, not endorsements.
 *
 * This replaced forty tags ("Communication", "Innovation") that claimed things
 * with nothing behind them, on a site whose own thesis is that a figure carries
 * its source or prints UNKNOWN. Every number rendered here resolves to a named
 * venture; the content lives in src/data/capabilities.js.
 *
 * The one exception is the interests row, which is labelled as carrying no
 * proof — a hobby dressed as an achievement is the failure mode this section
 * exists to avoid.
 *
 * @param {object} props
 * @param {{surface: string, border: string, text: string, sub: string, muted: string, violet: string}} props.T design tokens
 * @param {React.CSSProperties} props.card shared card style
 * @param {string} props.mono figure typeface stack
 */
const CapabilitiesTab = ({ T, card, mono }) => {
  const figureStyle = (accent) => ({
    fontFamily: mono,
    fontSize: '0.8125rem',
    fontWeight: 600,
    color: accent,
    fontVariantNumeric: 'tabular-nums',
    lineHeight: 1.45,
    overflowWrap: 'anywhere',
  });

  const sourceStyle = {
    fontSize: '0.6875rem',
    fontWeight: 700,
    letterSpacing: '0.09em',
    textTransform: 'uppercase',
    color: T.muted,
    marginTop: '3px',
  };

  const groupLabel = {
    fontSize: '0.6875rem',
    fontWeight: 700,
    letterSpacing: '0.09em',
    textTransform: 'uppercase',
    color: T.muted,
  };

  const pill = {
    fontSize: '0.75rem',
    fontWeight: 600,
    padding: '5px 11px',
    borderRadius: '50px',
    background: 'rgba(155,139,255,0.06)',
    color: T.sub,
    border: `1px solid ${T.border}`,
  };

  return (
    <div>
      <div className="mb-12">
        <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.violet }}>
          Capabilities
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, letterSpacing: '-0.025em', color: T.text, marginTop: '8px' }}>
          What I do — and the figure behind it
        </h2>
        <p style={{ fontSize: '1rem', color: T.sub, lineHeight: 1.7, marginTop: '14px', maxWidth: '640px' }}>
          Three different jobs, so they are kept apart. Each capability carries the number that
          proves it and the venture it came from. What I can’t source isn’t here.
        </p>
      </div>

      {BANDS.map((band, bandIndex) => (
        <section key={band.id} className={bandIndex > 0 ? 'mt-14' : ''}>
          <div className="mb-6" style={{ borderTop: `1px solid ${T.border}`, paddingTop: '20px' }}>
            <div className="flex items-center gap-2">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: band.accent }} />
              <span style={{ ...groupLabel, color: band.accent }}>{band.label}</span>
            </div>
            <p style={{ fontSize: '0.9375rem', color: T.sub, lineHeight: 1.65, marginTop: '10px', maxWidth: '620px' }}>
              {band.frame}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {band.cards.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i, 3) * 0.06 }}
                style={{
                  ...card,
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderColor: cap.current ? 'rgba(232,195,106,0.28)' : T.border,
                }}
              >
                {/* Badge sits on the title row, not above it, so every title in
                    the grid shares one baseline. */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: T.text, lineHeight: 1.35 }}>
                    {cap.title}
                  </h3>
                  {cap.current && (
                    <span
                      className="inline-flex flex-shrink-0 items-center gap-1.5 px-2.5 py-1 rounded-full"
                      style={{ ...groupLabel, color: band.accent, background: 'rgba(232,195,106,0.1)', border: '1px solid rgba(232,195,106,0.22)', marginTop: '1px' }}
                    >
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: band.accent }} />
                      Now
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '0.875rem', color: T.sub, lineHeight: 1.65, marginBottom: '18px' }}>
                  {cap.body}
                </p>

                {/* Proof block, pinned to the card floor so every card in a row
                    shares one baseline. */}
                <div style={{ marginTop: 'auto' }}>
                  {cap.proof.map((pr) => (
                    <div key={pr.figure} style={{ borderTop: `1px solid ${T.border}`, paddingTop: '11px', marginTop: '11px' }}>
                      <div style={figureStyle(band.accent)}>{pr.figure}</div>
                      <div style={sourceStyle}>{pr.source}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* The cumulative line closes the band it actually summarises. */}
          {band.id === 'operating' && (
            <div
              style={{ ...card, padding: '22px 26px', marginTop: '16px' }}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1"
            >
              <span style={{ fontFamily: mono, fontSize: '1.75rem', fontWeight: 700, color: band.accent, fontVariantNumeric: 'tabular-nums', lineHeight: 1.1 }}>
                {CAPABILITY_TOTAL.figure}
              </span>
              <span style={{ fontSize: '0.9375rem', color: T.sub }}>{CAPABILITY_TOTAL.label}</span>
              <span className="w-full sm:w-auto sm:ml-auto" style={{ fontSize: '0.8125rem', color: T.muted }}>
                {CAPABILITY_TOTAL.note}
              </span>
            </div>
          )}
        </section>
      ))}

      {/* Reference rows. Demoted on purpose: keywords are context, not the
          claim. Domains read from the Person schema's knowsAbout, so a reader
          and a crawler get the same list. Interests carry no proof and say so. */}
      <div style={{ ...card, padding: '24px' }} className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-7">
        {[
          { label: 'Skills & domains', items: DOMAINS },
          { label: 'Tools the work ran on', items: STACK },
          { label: 'Also true — no proof offered', items: INTERESTS },
        ].map((row) => (
          <div key={row.label}>
            <span style={groupLabel}>{row.label}</span>
            <div className="flex flex-wrap gap-2 mt-4">
              {row.items.map((item) => (
                <span key={item} style={pill}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapabilitiesTab;
