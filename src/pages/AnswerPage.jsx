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
import { findAnswer } from '../data/answers';
import { findTerm } from '../data/glossary';
import { BRAND } from '../data/company8';

// One question, one page, the answer in the first paragraph.
//
// The section that makes this worth citing rather than scraping is "What this
// establishes / what it does not / what would show it is wrong". A page that
// only states a conclusion is an opinion. Stating the falsifier is what makes
// it an argument, and arguments are what get quoted with attribution.
//
// Schema: WebPage + FAQPage always, HowTo when the entry carries steps. QAPage
// is deliberately not used — Google scopes it to forum-style user-generated
// content, and claiming it for an authored page is the kind of thing that costs
// a rich result later.
//
// An unknown slug renders NotFoundPage, matching middleware's 404 for crawlers.

const C = {
  bg: '#09090e',
  surface: '#111118',
  elevated: '#16161f',
  border: 'rgba(255,255,255,0.08)',
  violet: '#8b5cf6',
  violetLight: '#c4b5fd',
  gold: '#d4a847',
  heading: '#f7f7fb',
  subhead: '#cfd0e6',
  body: '#a8a9c3',
};

const Section = ({ eyebrow, title, children }) => (
  <section style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 56px' }}>
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
          fontWeight: 800,
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

/** The two-column comparison. Stacks on narrow screens via grid auto-fit. */
const Contrast = ({ contrast }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 16,
    }}
  >
    {[contrast.a, contrast.b].map((col, i) => (
      <div
        key={col.label}
        style={{
          background: i === 1 ? C.elevated : C.surface,
          border: `1px solid ${i === 1 ? 'rgba(139,92,246,0.35)' : C.border}`,
          borderRadius: 16,
          padding: 24,
        }}
      >
        <h3
          style={{
            fontSize: 17,
            fontWeight: 800,
            color: i === 1 ? C.violetLight : C.heading,
            margin: '0 0 14px',
            letterSpacing: '-0.01em',
          }}
        >
          {col.label}
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {col.points.map((p) => (
            <li
              key={p}
              style={{
                display: 'flex',
                gap: 10,
                padding: '11px 0',
                borderTop: `1px solid ${C.border}`,
                fontSize: 15.5,
                lineHeight: 1.6,
                color: C.subhead,
              }}
            >
              <span style={{ color: i === 1 ? C.violet : C.body }} aria-hidden="true">
                —
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

/** established / uncertain / falsifies — the house standard, rendered. */
const EvidenceBlock = ({ answer }) => {
  const rows = [
    { label: 'What this establishes', text: answer.established, accent: C.violet },
    { label: 'What it does not', text: answer.uncertain, accent: C.gold },
    { label: 'What would show it is wrong', text: answer.falsifies, accent: '#e05252' },
  ];

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      {rows.map(({ label, text, accent }) => (
        <article
          key={label}
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderLeft: `3px solid ${accent}`,
            borderRadius: 14,
            padding: '22px 24px',
          }}
        >
          <h3
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.4,
              textTransform: 'uppercase',
              color: accent,
              margin: 0,
            }}
          >
            {label}
          </h3>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: C.subhead, margin: '10px 0 0' }}>
            {text}
          </p>
        </article>
      ))}
    </div>
  );
};

const AnswerPage = () => {
  const { slug } = useParams();
  const answer = findAnswer(slug);

  if (!answer) return <NotFoundPage />;

  const url = `${SITE_URL}/answers/${answer.slug}`;
  const terms = answer.terms.map(findTerm).filter(Boolean);
  const related = answer.related.map(findAnswer).filter(Boolean);

  // The page's own question leads the FAQ so the short answer lands in schema.
  const faq = [{ q: answer.question, a: answer.shortAnswer }, ...answer.faq];

  const structuredData = [
    ...meetPatelEntities,
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: answer.question,
      description: answer.shortAnswer,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      author: personRef,
      dateModified: answer.updated,
      inLanguage: 'en-US',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.answer-short'] },
      about: terms.map((t) => ({ '@id': `${SITE_URL}/glossary/${t.slug}#term` })),
    },
    buildBreadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Answers', url: '/answers' },
      { name: answer.question, url: `/answers/${answer.slug}` },
    ]),
    buildFaqPage(faq),
    ...(answer.steps
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            '@id': `${url}#howto`,
            name: answer.question,
            description: answer.shortAnswer,
            step: answer.steps.map((s, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: s.name,
              text: s.text,
              url: `${url}#step-${i + 1}`,
            })),
          },
        ]
      : []),
  ];

  return (
    <main style={{ background: C.bg, minHeight: '100vh', color: C.body }}>
      <SEOHead
        title={answer.question}
        description={answer.shortAnswer}
        keywords={[...answer.aliases, 'Meet Patel', BRAND.company].join(', ')}
        canonical={`/answers/${answer.slug}`}
        structuredData={structuredData}
      />

      {/* ═══ QUESTION + THE LIFTABLE ANSWER ═══ */}
      <section style={{ padding: '132px 0 48px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>
          <Link
            to="/answers"
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.6,
              textTransform: 'uppercase',
              color: C.violetLight,
              textDecoration: 'none',
            }}
          >
            ← Answers
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            style={{
              fontSize: 'clamp(1.9rem, 4.4vw, 2.7rem)',
              fontWeight: 800,
              lineHeight: 1.14,
              letterSpacing: '-0.03em',
              color: C.heading,
              margin: '18px 0 0',
            }}
          >
            {answer.question}
          </motion.h1>
          <p
            className="answer-short"
            style={{
              fontSize: 19.5,
              lineHeight: 1.62,
              color: C.subhead,
              marginTop: 22,
              paddingLeft: 18,
              borderLeft: `3px solid ${C.violet}`,
            }}
          >
            {answer.shortAnswer}
          </p>
        </div>
      </section>

      {/* ═══ COMPARISON, WHEN THERE IS ONE ═══ */}
      {answer.contrast && (
        <Section eyebrow="Side by side" title="Where the responsibility differs">
          <Contrast contrast={answer.contrast} />
        </Section>
      )}

      {/* ═══ THE MECHANISM ═══ */}
      <Section eyebrow="The mechanism" title="Why it works this way">
        {answer.mechanism.map((p) => (
          <p key={p.slice(0, 40)} style={{ fontSize: 17, lineHeight: 1.75, marginBottom: 18 }}>
            {p}
          </p>
        ))}
      </Section>

      {/* ═══ STEPS, WHEN IT IS A HOW-TO ═══ */}
      {answer.steps && (
        <Section eyebrow="Do it this way" title="The measurement, step by step">
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, counterReset: 'step' }}>
            {answer.steps.map((s, i) => (
              <li
                key={s.name}
                id={`step-${i + 1}`}
                style={{
                  display: 'flex',
                  gap: 16,
                  padding: '18px 0',
                  borderTop: `1px solid ${C.border}`,
                }}
              >
                <span
                  style={{
                    flex: '0 0 30px',
                    height: 30,
                    borderRadius: 9,
                    background: 'rgba(139,92,246,0.14)',
                    color: C.violetLight,
                    fontSize: 14,
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: C.heading,
                      margin: 0,
                      lineHeight: 1.45,
                    }}
                  >
                    {s.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 16.5,
                      lineHeight: 1.68,
                      color: C.subhead,
                      margin: '8px 0 0',
                    }}
                  >
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      )}

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
            {answer.scene}
          </p>
        </div>
      </Section>

      {/* ═══ THE EVIDENCE STANDARD ═══ */}
      <Section eyebrow="Confidence" title="What this establishes, and what it does not">
        <EvidenceBlock answer={answer} />
      </Section>

      {/* ═══ FAQ (mirrors the FAQPage schema above, verbatim) ═══ */}
      <Section eyebrow="Questions">
        <dl style={{ margin: '16px 0 0' }}>
          {answer.faq.map(({ q, a }) => (
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

      {/* ═══ TERMS THIS LEANS ON ═══ */}
      <Section eyebrow="Defined terms" title="The words this answer uses">
        <div style={{ display: 'grid', gap: 12 }}>
          {terms.map((t) => (
            <Link
              key={t.slug}
              to={`/glossary/${t.slug}`}
              style={{
                display: 'block',
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                padding: 20,
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: 17, fontWeight: 700, color: C.heading }}>{t.term}</span>
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: C.body, margin: '8px 0 0' }}>
                {t.lede}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ═══ RELATED ANSWERS ═══ */}
      {related.length > 0 && (
        <Section eyebrow="Related" title="The questions next to this one">
          <div style={{ display: 'grid', gap: 12 }}>
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/answers/${r.slug}`}
                style={{
                  display: 'block',
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: 20,
                  textDecoration: 'none',
                }}
              >
                <span style={{ fontSize: 17, fontWeight: 700, color: C.heading }}>{r.question}</span>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: C.body, margin: '8px 0 0' }}>
                  {r.shortAnswer}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* ═══ BRIDGE + BYLINE ═══ */}
      {/* Deliberately outside the related block: an entry with no related
          answers must still carry its author and its last-updated date. */}
      <Section>
        <p style={{ fontSize: 16, lineHeight: 1.7 }}>
          These answers belong to one argument, set out on{' '}
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
          Written by Meet Patel. Last updated {answer.updated}.
        </p>
      </Section>

      <div style={{ height: 60 }} />
    </main>
  );
};

export default AnswerPage;
