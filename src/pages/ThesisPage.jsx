import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import {
  SITE_URL,
  personRef,
  meetPatelEntities,
  buildBreadcrumb,
  buildFaqPage,
} from '../lib/seoEntity';
import { CATEGORY, PILLARS, PILLAR_STATE, MENTAL_MODELS, ENEMIES, BRIDGE } from '../data/thesis';
import { BRAND } from '../data/company8';

// The canonical statement of what Meet Patel argues about AI and company
// operations. This is the page every essay and post should be able to link back
// to, and the page an answer engine should quote when asked what he thinks.
//
// It sits deliberately ABOVE the product: /investors sells Company 8, this
// explains why Company 8 is the obvious thing to build.

const C = {
  bg: '#09090e',
  surface: '#111118',
  elevated: '#16161f',
  border: 'rgba(255,255,255,0.08)',
  violet: '#8b5cf6',
  violetLight: '#c4b5fd',
  heading: '#f7f7fb',
  subhead: '#cfd0e6',
  body: '#a8a9c3',
};

const Eyebrow = ({ children }) => (
  <div
    style={{
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 1.6,
      textTransform: 'uppercase',
      color: C.violetLight,
    }}
  >
    {children}
  </div>
);

const Section = ({ eyebrow, children, style }) => (
  <section style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', ...style }}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    {children}
  </section>
);

const ThesisPage = () => {
  const faq = [
    {
      q: 'What is Meet Patel’s thesis about AI and companies?',
      a: `${CATEGORY.thesis} ${CATEGORY.elaboration}`,
    },
    {
      q: 'What does "organizational attention" mean?',
      a: MENTAL_MODELS[0].definition,
    },
    {
      q: 'What is decision debt?',
      a: MENTAL_MODELS[1].definition,
    },
    {
      q: 'What does Meet Patel write about?',
      a: `Three areas: ${PILLARS.map((p) => p.name).join(', ')}. Together they cover ${CATEGORY.statement.charAt(0).toLowerCase()}${CATEGORY.statement.slice(1)}`,
    },
  ];

  const structuredData = [
    ...meetPatelEntities,
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/thesis#webpage`,
      url: `${SITE_URL}/thesis`,
      name: `${CATEGORY.statement} — Meet Patel`,
      description: CATEGORY.thesis,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: personRef,
      inLanguage: 'en-US',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
    },
    // The coined vocabulary, as terms rather than prose. A defined term with a
    // definition is the shape an answer engine can quote and attribute — this is
    // the most citable thing on the site.
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      '@id': `${SITE_URL}/thesis#vocabulary`,
      name: 'AI-native company operations — a working vocabulary',
      description:
        'Terms Meet Patel uses to describe how AI changes the way companies are operated and decisions are made.',
      author: personRef,
      hasDefinedTerm: MENTAL_MODELS.map((m) => ({
        '@type': 'DefinedTerm',
        '@id': `${SITE_URL}/thesis#${m.term.toLowerCase().replace(/\s+/g, '-')}`,
        name: m.term,
        description: m.definition,
        inDefinedTermSet: { '@id': `${SITE_URL}/thesis#vocabulary` },
      })),
    },
    buildBreadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Thesis', url: '/thesis' },
    ]),
    buildFaqPage(faq),
  ];

  return (
    <main style={{ background: C.bg, minHeight: '100vh', color: C.body }}>
      <SEOHead
        title="The thesis — how AI changes the way companies are run"
        description={`${CATEGORY.thesis} Meet Patel on AI-native company operations, decision intelligence, and what replaces the dashboard.`}
        keywords="AI native operations, decision intelligence, autonomous company, organizational attention, decision debt, management latency, AI management layer, Meet Patel thesis"
        canonical="/thesis"
        structuredData={structuredData}
      />

      {/* ═══ HERO ═══ */}
      <section style={{ padding: '140px 0 72px' }}>
        <Section eyebrow="The thesis">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            style={{
              fontSize: 'clamp(2.1rem, 5vw, 3.4rem)',
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: C.heading,
              margin: '18px 0 0',
            }}
          >
            {CATEGORY.thesis}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{ fontSize: 19, lineHeight: 1.65, color: C.subhead, marginTop: 24 }}
          >
            {CATEGORY.elaboration}
          </motion.p>
        </Section>
      </section>

      {/* ═══ THE PROBLEM, NAMED ═══ */}
      <Section eyebrow="What I keep arguing with" style={{ paddingBottom: 72 }}>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 600,
            color: C.heading,
            margin: '14px 0 20px',
            letterSpacing: '-0.02em',
          }}
        >
          Companies bought visibility. They still can’t decide.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 22 }}>
          Every operator I meet wants more visibility into the business, so the company buys another
          dashboard. Six months later Monday still opens with someone asking which number is
          correct. At that point the problem is that nothing in the company is
          responsible for noticing what matters.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {ENEMIES.map((e) => (
            <li
              key={e}
              style={{
                display: 'flex',
                gap: 12,
                padding: '13px 0',
                borderTop: `1px solid ${C.border}`,
                fontSize: 16,
                lineHeight: 1.55,
                color: C.subhead,
              }}
            >
              <span style={{ color: C.violet, fontWeight: 700 }} aria-hidden="true">
                —
              </span>
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ═══ PILLARS ═══ */}
      <Section eyebrow="Three questions" style={{ paddingBottom: 72 }}>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 600,
            color: C.heading,
            margin: '14px 0 24px',
            letterSpacing: '-0.02em',
          }}
        >
          What the work is about
        </h2>
        <div style={{ display: 'grid', gap: 16 }}>
          {PILLARS.map((p) => (
            <article
              key={p.id}
              id={p.id}
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 16,
                padding: 26,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: C.heading, margin: 0 }}>
                  {p.name}
                </h3>
                {PILLAR_STATE[p.id] === 'new' && (
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      color: C.violetLight,
                      border: `1px solid ${C.border}`,
                      borderRadius: 999,
                      padding: '3px 9px',
                    }}
                  >
                    Where the writing is going
                  </span>
                )}
              </div>
              <p style={{ fontSize: 16.5, lineHeight: 1.65, color: C.subhead, margin: '12px 0 0' }}>
                {p.summary}
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: C.body, margin: '12px 0 0', fontStyle: 'italic' }}>
                {p.question}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ═══ VOCABULARY ═══ */}
      <Section eyebrow="A working vocabulary" style={{ paddingBottom: 72 }}>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 600,
            color: C.heading,
            margin: '14px 0 12px',
            letterSpacing: '-0.02em',
          }}
        >
          Words I use, and what I mean by them
        </h2>
        <p style={{ fontSize: 16.5, lineHeight: 1.65, marginBottom: 24 }}>
          Most of the argument depends on distinctions the usual language flattens. These are the
          terms the essays keep returning to.
        </p>
        <dl style={{ margin: 0 }}>
          {MENTAL_MODELS.map((m) => (
            <div
              key={m.term}
              id={m.term.toLowerCase().replace(/\s+/g, '-')}
              style={{ padding: '18px 0', borderTop: `1px solid ${C.border}` }}
            >
              <dt style={{ fontSize: 17.5, fontWeight: 700, color: C.heading, lineHeight: 1.4 }}>
                {m.term}
              </dt>
              <dd style={{ margin: '8px 0 0', fontSize: 16.5, lineHeight: 1.65, color: C.subhead }}>
                {m.definition}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ═══ BRIDGE TO THE PRODUCT ═══ */}
      <Section style={{ paddingBottom: 110 }}>
        <div
          style={{
            background: C.elevated,
            border: `1px solid ${C.border}`,
            borderRadius: 20,
            padding: 30,
          }}
        >
          <Eyebrow>Where this leads</Eyebrow>
          <p style={{ fontSize: 17.5, lineHeight: 1.7, color: C.subhead, margin: '14px 0 0' }}>
            {BRIDGE}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 22 }}>
            <Link
              to="/blogs"
              style={{
                background: C.violet,
                color: '#fff',
                borderRadius: 11,
                padding: '11px 22px',
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Read the essays
            </Link>
            <a
              href={BRAND.productUrl}
              style={{
                border: `1px solid ${C.border}`,
                color: C.heading,
                borderRadius: 11,
                padding: '11px 22px',
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              See {BRAND.product}
            </a>
          </div>
        </div>
      </Section>

      {/* ═══ FAQ (mirrors the FAQPage schema above, verbatim) ═══ */}
      <Section style={{ paddingBottom: 120 }}>
        <Eyebrow>Questions</Eyebrow>
        <dl style={{ margin: '16px 0 0' }}>
          {faq.map(({ q, a }) => (
            <div key={q} style={{ padding: '18px 0', borderTop: `1px solid ${C.border}` }}>
              <dt style={{ fontSize: 17, fontWeight: 700, color: C.heading, lineHeight: 1.45 }}>{q}</dt>
              <dd style={{ margin: '8px 0 0', fontSize: 16.5, lineHeight: 1.65, color: C.subhead }}>
                {a}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </main>
  );
};

export default ThesisPage;
