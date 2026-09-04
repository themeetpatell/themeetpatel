import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import NotFoundPage from './NotFoundPage';
import {
  SITE_URL,
  personRef,
  meetPatelEntities,
  buildBreadcrumb,
  buildFaqPage,
} from '../lib/seoEntity';
import { findTerm } from '../data/glossary';
import { BRAND } from '../data/company8';

// One term, one page, definition in the first sentence.
//
// The shape is deliberate and is the whole point of the page existing: an
// answer engine asked "what is decision debt" lifts the first paragraph under
// the H1. Everything below it — why it matters, the scene, how to measure it,
// what it is not — is what makes the page worth citing rather than scraping.
//
// An unknown slug renders NotFoundPage rather than an empty shell, so a bad URL
// is a real 404 for humans and matches middleware's 404 for crawlers.

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

const Section = ({ eyebrow, title, children }) => (
  <section style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px 56px' }}>
    {eyebrow && (
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 1.6,
          textTransform: 'uppercase',
          color: C.violetLight,
        }}
      >
        {eyebrow}
      </div>
    )}
    {title && (
      <h2
        style={{
          fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
          fontWeight: 700,
          color: C.heading,
          margin: '14px 0 18px',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
    )}
    {children}
  </section>
);

const GlossaryTermPage = () => {
  const { slug } = useParams();
  const term = findTerm(slug);

  if (!term) return <NotFoundPage />;

  const url = `${SITE_URL}/glossary/${term.slug}`;
  const related = term.related.map(findTerm).filter(Boolean);

  const structuredData = [
    ...meetPatelEntities,
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTerm',
      '@id': `${url}#term`,
      name: term.term,
      alternateName: term.aliases,
      description: term.lede,
      url,
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        '@id': `${SITE_URL}/glossary#set`,
        name: 'AI-native company operations — a working vocabulary',
        url: `${SITE_URL}/glossary`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: `${term.term} — definition`,
      description: term.lede,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${url}#term` },
      author: personRef,
      dateModified: term.updated,
      inLanguage: 'en-US',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
      mainEntity: { '@id': `${url}#term` },
    },
    buildBreadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Glossary', url: '/glossary' },
      { name: term.term, url: `/glossary/${term.slug}` },
    ]),
    buildFaqPage(term.faq),
  ];

  return (
    <main style={{ background: C.bg, minHeight: '100vh', color: C.body }}>
      <SEOHead
        title={`${term.term} — what it means, and how to measure it`}
        description={term.lede}
        keywords={[...term.aliases, 'Meet Patel', 'decision intelligence', BRAND.company].join(', ')}
        canonical={`/glossary/${term.slug}`}
        structuredData={structuredData}
      />

      {/* ═══ DEFINITION — first thing on the page, on purpose ═══ */}
      <section style={{ padding: '132px 0 48px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <Link
            to="/glossary"
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.6,
              textTransform: 'uppercase',
              color: C.violetLight,
              textDecoration: 'none',
            }}
          >
            ← Glossary
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: C.heading,
              margin: '18px 0 0',
            }}
          >
            {term.term}
          </motion.h1>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              color: C.subhead,
              marginTop: 22,
              paddingLeft: 18,
              borderLeft: `3px solid ${C.violet}`,
            }}
          >
            {term.lede}
          </p>
        </div>
      </section>

      {/* ═══ WHY IT MATTERS ═══ */}
      <Section eyebrow="Why it matters" title="The part that costs money">
        {term.why.map((p) => (
          <p key={p.slice(0, 40)} style={{ fontSize: 17, lineHeight: 1.75, marginBottom: 18 }}>
            {p}
          </p>
        ))}
      </Section>

      {/* ═══ ONE CONCRETE SCENE ═══ */}
      <Section>
        <div
          style={{
            background: C.elevated,
            border: `1px solid ${C.border}`,
            borderRadius: 18,
            padding: 28,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.6,
              textTransform: 'uppercase',
              color: C.violetLight,
            }}
          >
            What it looks like
          </div>
          <p style={{ fontSize: 17.5, lineHeight: 1.72, color: C.subhead, margin: '14px 0 0' }}>
            {term.scene}
          </p>
        </div>
      </Section>

      {/* ═══ HOW TO MEASURE ═══ */}
      <Section eyebrow="Put a number on it" title="How you would actually measure this">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {term.measure.map((m) => (
            <li
              key={m}
              style={{
                display: 'flex',
                gap: 12,
                padding: '14px 0',
                borderTop: `1px solid ${C.border}`,
                fontSize: 16.5,
                lineHeight: 1.6,
                color: C.subhead,
              }}
            >
              <span style={{ color: C.violet, fontWeight: 700 }} aria-hidden="true">
                —
              </span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ═══ WHAT IT IS NOT ═══ */}
      <Section eyebrow="Common confusions" title="What it is not">
        <div style={{ display: 'grid', gap: 14 }}>
          {term.notThis.map(({ claim, correction }) => (
            <article
              key={claim}
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                padding: 22,
              }}
            >
              <h3
                style={{
                  fontSize: 16.5,
                  fontWeight: 700,
                  color: C.heading,
                  margin: 0,
                  lineHeight: 1.45,
                }}
              >
                {claim}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.68, color: C.subhead, margin: '10px 0 0' }}>
                {correction}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ═══ FAQ (mirrors the FAQPage schema above, verbatim) ═══ */}
      <Section eyebrow="Questions">
        <dl style={{ margin: '16px 0 0' }}>
          {term.faq.map(({ q, a }) => (
            <div key={q} style={{ padding: '18px 0', borderTop: `1px solid ${C.border}` }}>
              <dt style={{ fontSize: 17, fontWeight: 700, color: C.heading, lineHeight: 1.45 }}>
                {q}
              </dt>
              <dd style={{ margin: '8px 0 0', fontSize: 16.5, lineHeight: 1.68, color: C.subhead }}>
                {a}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ═══ RELATED + BRIDGE ═══ */}
      <Section eyebrow="Related" title="The terms next to this one">
        <div style={{ display: 'grid', gap: 12 }}>
          {related.map((r) => (
            <Link
              key={r.slug}
              to={`/glossary/${r.slug}`}
              style={{
                display: 'block',
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                padding: 20,
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: 17, fontWeight: 700, color: C.heading }}>{r.term}</span>
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: C.body, margin: '8px 0 0' }}>
                {r.lede}
              </p>
            </Link>
          ))}
        </div>

        <p style={{ fontSize: 16, lineHeight: 1.7, marginTop: 28 }}>
          These terms belong to one argument, set out on{' '}
          <Link to="/thesis" style={{ color: C.violetLight }}>
            the thesis
          </Link>
          . {BRAND.company} is building {BRAND.product} as the product version of it —{' '}
          <a href={BRAND.productUrl} style={{ color: C.violetLight }}>
            {BRAND.productUrl.replace('https://', '')}
          </a>
          .
        </p>
        <p style={{ fontSize: 13.5, color: C.body, marginTop: 20 }}>
          Written by Meet Patel. Last updated {term.updated}.
        </p>
      </Section>

      <div style={{ height: 60 }} />
    </main>
  );
};

export default GlossaryTermPage;
