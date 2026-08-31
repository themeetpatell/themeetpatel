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
import { GLOSSARY, GLOSSARY_INTRO } from '../data/glossary';
import { CATEGORY } from '../data/thesis';

// The index of the vocabulary. /thesis argues; this lists, and each entry has
// its own page because "what is decision debt" is a question a person types on
// its own, not a section somebody scrolls to.

const C = {
  bg: '#09090e',
  surface: '#111118',
  border: 'rgba(255,255,255,0.08)',
  violet: '#8b5cf6',
  violetLight: '#c4b5fd',
  heading: '#f7f7fb',
  subhead: '#cfd0e6',
  body: '#a8a9c3',
};

const GlossaryPage = () => {
  const faq = GLOSSARY.map((t) => ({ q: t.question, a: t.lede }));

  const structuredData = [
    ...meetPatelEntities,
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/glossary#webpage`,
      url: `${SITE_URL}/glossary`,
      name: 'Glossary — AI-native company operations',
      description: GLOSSARY_INTRO.standfirst,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: personRef,
      inLanguage: 'en-US',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
    },
    // The set node. Each term page carries its own DefinedTerm pointing back at
    // this @id, so the vocabulary resolves as one set no matter which page an
    // engine landed on first.
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      '@id': `${SITE_URL}/glossary#set`,
      name: 'AI-native company operations — a working vocabulary',
      description: CATEGORY.statement,
      url: `${SITE_URL}/glossary`,
      author: personRef,
      hasDefinedTerm: GLOSSARY.map((t) => ({
        '@type': 'DefinedTerm',
        '@id': `${SITE_URL}/glossary/${t.slug}#term`,
        name: t.term,
        description: t.lede,
        url: `${SITE_URL}/glossary/${t.slug}`,
        inDefinedTermSet: { '@id': `${SITE_URL}/glossary#set` },
      })),
    },
    buildBreadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Glossary', url: '/glossary' },
    ]),
    buildFaqPage(faq),
  ];

  return (
    <main style={{ background: C.bg, minHeight: '100vh', color: C.body }}>
      <SEOHead
        title="Glossary — decision debt, organizational attention, management latency"
        description={GLOSSARY_INTRO.standfirst}
        keywords="decision debt, organizational attention, management latency, autonomous decision intelligence, decision intelligence glossary, AI native operations vocabulary, Meet Patel"
        canonical="/glossary"
        structuredData={structuredData}
      />

      <section style={{ padding: '140px 0 56px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.6,
              textTransform: 'uppercase',
              color: C.violetLight,
            }}
          >
            {GLOSSARY_INTRO.eyebrow}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            style={{
              fontSize: 'clamp(2.1rem, 5vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: C.heading,
              margin: '18px 0 0',
            }}
          >
            {GLOSSARY_INTRO.h1}
          </motion.h1>
          <p style={{ fontSize: 19, lineHeight: 1.65, color: C.subhead, marginTop: 24 }}>
            {GLOSSARY_INTRO.standfirst}
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, marginTop: 16 }}>
            {GLOSSARY_INTRO.bridge}
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 100px' }}>
        <div style={{ display: 'grid', gap: 16 }}>
          {GLOSSARY.map((t) => (
            <Link
              key={t.slug}
              to={`/glossary/${t.slug}`}
              style={{
                display: 'block',
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 16,
                padding: 26,
                textDecoration: 'none',
              }}
            >
              <h2
                style={{
                  fontSize: 21,
                  fontWeight: 700,
                  color: C.heading,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                {t.term}
              </h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.65, color: C.subhead, margin: '12px 0 0' }}>
                {t.lede}
              </p>
              <span
                style={{
                  display: 'inline-block',
                  marginTop: 14,
                  fontSize: 14,
                  fontWeight: 600,
                  color: C.violetLight,
                }}
              >
                {t.question} →
              </span>
            </Link>
          ))}
        </div>

        <p style={{ fontSize: 16, lineHeight: 1.7, marginTop: 36 }}>
          The argument these terms belong to is on{' '}
          <Link to="/thesis" style={{ color: C.violetLight }}>
            the thesis
          </Link>
          .
        </p>
      </section>
    </main>
  );
};

export default GlossaryPage;
