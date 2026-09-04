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
import { ANSWERS, ANSWERS_INTRO } from '../data/answers';


// The index of the answer surface. /glossary defines the words; this works
// through the arguments. Each entry has its own page because "decision
// intelligence vs business intelligence" is a whole query somebody types, not a
// section of a longer essay they scroll to.

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

const KIND_LABEL = {
  comparison: 'Comparison',
  explanation: 'Explanation',
  howto: 'How to',
};

const AnswersPage = () => {
  const faq = ANSWERS.map((a) => ({ q: a.question, a: a.shortAnswer }));

  const structuredData = [
    ...meetPatelEntities,
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/answers#webpage`,
      url: `${SITE_URL}/answers`,
      name: 'Answers — decision intelligence, reconciliation and management latency',
      description: ANSWERS_INTRO.standfirst,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: personRef,
      inLanguage: 'en-US',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${SITE_URL}/answers#list`,
      itemListElement: ANSWERS.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.question,
        url: `${SITE_URL}/answers/${a.slug}`,
      })),
    },
    buildBreadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Answers', url: '/answers' },
    ]),
    buildFaqPage(faq),
  ];

  return (
    <main style={{ background: C.bg, minHeight: '100vh', color: C.body }}>
      <SEOHead
        title="Answers — decision intelligence vs BI, revenue reconciliation, management latency"
        description={ANSWERS_INTRO.standfirst}
        keywords="decision intelligence vs business intelligence, why CRM and finance disagree about revenue, how to measure management latency, do AI agents replace business intelligence, Meet Patel"
        canonical="/answers"
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
            {ANSWERS_INTRO.eyebrow}
          </div>
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
            {ANSWERS_INTRO.h1}
          </motion.h1>
          <p style={{ fontSize: 19, lineHeight: 1.65, color: C.subhead, margin: '22px 0 0' }}>
            {ANSWERS_INTRO.standfirst}
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px 56px' }}>
        <div style={{ display: 'grid', gap: 14 }}>
          {ANSWERS.map((a) => (
            <Link
              key={a.slug}
              to={`/answers/${a.slug}`}
              style={{
                display: 'block',
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 16,
                padding: 26,
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: 1.4,
                  textTransform: 'uppercase',
                  color: C.violetLight,
                }}
              >
                {KIND_LABEL[a.kind] || 'Answer'}
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.15rem, 2.4vw, 1.4rem)',
                  fontWeight: 700,
                  color: C.heading,
                  margin: '10px 0 0',
                  lineHeight: 1.35,
                  letterSpacing: '-0.02em',
                }}
              >
                {a.question}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.68, color: C.body, margin: '10px 0 0' }}>
                {a.shortAnswer}
              </p>
            </Link>
          ))}
        </div>

        <p style={{ fontSize: 16, lineHeight: 1.7, marginTop: 36 }}>
          {ANSWERS_INTRO.bridge}{' '}
          <Link to="/glossary" style={{ color: C.violetLight }}>
            The glossary
          </Link>{' '}
          carries one page per term, definition first. The whole argument they belong to is on{' '}
          <Link to="/thesis" style={{ color: C.violetLight }}>
            the thesis
          </Link>
          .
        </p>
      </section>

      <div style={{ height: 60 }} />
    </main>
  );
};

export default AnswersPage;
