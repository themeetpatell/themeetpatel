import React, { useState } from 'react';
import { Plus, X, Link2, BarChart2, Quote, Zap, CheckCircle, XCircle, Tag, Globe } from 'lucide-react';

const C = {
  bg:          '#09090e',
  surface:     '#111118',
  elevated:    '#16161f',
  border:      'rgba(255,255,255,0.07)',
  primary:     '#f5f5f7',
  secondary:   '#8e8ea0',
  muted:       '#5a5a6e',
  violet:      '#8b5cf6',
  violetDim:   'rgba(139,92,246,0.10)',
  violetBorder:'rgba(139,92,246,0.22)',
  teal:        '#14b8a6',
  tealDim:     'rgba(20,184,166,0.08)',
  tealBorder:  'rgba(20,184,166,0.22)',
  green:       '#22c55e',
  orange:      '#f97316',
  red:         '#ef4444',
};

const CONTENT_TYPES = [
  { value: 'evergreen',   label: 'Evergreen',                desc: 'Timeless — always relevant' },
  { value: 'tutorial',    label: 'Tutorial / How-To',        desc: 'Step-by-step instructional' },
  { value: 'research',    label: 'Research / Analysis',      desc: 'Data-driven with citations' },
  { value: 'opinion',     label: 'Opinion / Thought Leadership', desc: 'Personal perspective & expertise' },
  { value: 'case-study',  label: 'Case Study',               desc: 'Real-world examples & results' },
  { value: 'news',        label: 'News / Trending',          desc: 'Time-sensitive current events' },
];

const inputStyle = focused => ({
  width: '100%', padding: '9px 12px',
  background: 'rgba(255,255,255,0.03)',
  border: `1px solid ${focused ? C.violetBorder : C.border}`,
  borderRadius: 8, color: C.primary, fontSize: 13,
  outline: 'none', boxSizing: 'border-box',
  transition: 'border-color 0.2s', fontFamily: 'inherit', resize: 'vertical',
});

function SectionHeader({ icon: Icon, label, count, countLabel, onAdd, addLabel = 'Add' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <Icon size={13} color={C.violet} />
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.muted }}>
            {label}
          </span>
        </div>
        {countLabel && (
          <div style={{ fontSize: 11, color: C.muted, marginTop: 3 }}>{count} {countLabel}</div>
        )}
      </div>
      {onAdd && (
        <button
          type="button" onClick={onAdd}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 5, padding: '7px 12px',
            borderRadius: 8, background: C.violetDim, border: `1px solid ${C.violetBorder}`,
            color: C.violet, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
          }}
        >
          <Plus size={12} /> {addLabel}
        </button>
      )}
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div style={{
      textAlign: 'center', padding: '20px 0',
      border: `1px dashed ${C.border}`, borderRadius: 10,
      fontSize: 13, color: C.muted,
    }}>
      {message}
    </div>
  );
}

function computeGeoScore(data, wordCount) {
  const citations    = (data.citations     || []).filter(c => c.url && c.title);
  const keyStats     = (data.key_stats     || []).filter(s => s.stat);
  const quotes       = (data.expert_quotes || []).filter(q => q.quote && q.author);
  const entities     = (data.related_entities || []).filter(Boolean);
  const faqItems     = (data.faq_items     || []).filter(f => f.question && f.answer);
  const aiSummary    = (data.ai_summary    || '').trim();

  const checks = [
    { label: '2+ cited sources included',         pass: citations.length >= 2,       pts: 15 },
    { label: '1+ key statistic included',         pass: keyStats.length >= 1,        pts: 10 },
    { label: 'Content type specified',            pass: !!data.content_type,         pts: 10 },
    { label: '1500+ words (comprehensive depth)', pass: (wordCount||0) >= 1500,      pts: 15 },
    { label: 'Expert quote included',             pass: quotes.length >= 1,          pts: 10 },
    { label: 'Last updated date is set',          pass: !!data.last_updated_at,      pts: 10 },
    { label: '3+ FAQ items (structured Q&A)',     pass: faqItems.length >= 3,        pts: 10 },
    { label: 'Direct AI answer/summary written',  pass: aiSummary.length >= 50,      pts: 10 },
    { label: '2+ related entities tagged',        pass: entities.length >= 2,        pts: 10 },
  ];

  const score = checks.reduce((s, c) => s + (c.pass ? c.pts : 0), 0);
  return { score, checks };
}

export default function GEOPanel({ data, onChange, wordCount }) {
  const [entityInput, setEntityInput] = useState('');
  const [focused, setFocused] = useState('');

  const update = (key, val) => onChange({ ...data, [key]: val });

  // Citations
  const citations = data.citations || [];
  const addCitation = () => update('citations', [...citations, { title: '', url: '' }]);
  const updateCitation = (i, key, val) =>
    update('citations', citations.map((c, idx) => idx === i ? { ...c, [key]: val } : c));
  const removeCitation = i => update('citations', citations.filter((_, idx) => idx !== i));

  // Key Stats
  const keyStats = data.key_stats || [];
  const addStat = () => update('key_stats', [...keyStats, { stat: '', context: '' }]);
  const updateStat = (i, key, val) =>
    update('key_stats', keyStats.map((s, idx) => idx === i ? { ...s, [key]: val } : s));
  const removeStat = i => update('key_stats', keyStats.filter((_, idx) => idx !== i));

  // Expert Quotes
  const quotes = data.expert_quotes || [];
  const addQuote = () => update('expert_quotes', [...quotes, { quote: '', author: '', role: '' }]);
  const updateQuote = (i, key, val) =>
    update('expert_quotes', quotes.map((q, idx) => idx === i ? { ...q, [key]: val } : q));
  const removeQuote = i => update('expert_quotes', quotes.filter((_, idx) => idx !== i));

  // Related Entities
  const entities = data.related_entities || [];
  const addEntity = () => {
    const e = entityInput.trim();
    if (e && !entities.includes(e)) update('related_entities', [...entities, e]);
    setEntityInput('');
  };
  const removeEntity = e => update('related_entities', entities.filter(x => x !== e));

  const { score, checks } = computeGeoScore(data, wordCount);
  const scoreColor = score >= 80 ? C.green : score >= 50 ? C.orange : C.red;
  const currentContentType = CONTENT_TYPES.find(ct => ct.value === (data.content_type || 'evergreen'));

  return (
    <div>

      {/* GEO Score */}
      <div style={{
        background: C.elevated, border: `1px solid ${C.border}`,
        borderRadius: 12, padding: '16px 20px', marginBottom: 20,
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <svg width={60} height={60} viewBox="0 0 60 60">
          <circle cx={30} cy={30} r={25} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={5} />
          <circle
            cx={30} cy={30} r={25} fill="none"
            stroke={scoreColor} strokeWidth={5}
            strokeDasharray={`${(score / 100) * 157} 157`}
            strokeLinecap="round" transform="rotate(-90 30 30)"
            style={{ transition: 'stroke-dasharray 0.4s ease' }}
          />
          <text x={30} y={35} textAnchor="middle" fill={scoreColor} fontSize={14} fontWeight={800}>
            {score}
          </text>
        </svg>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.primary }}>GEO Score</div>
          <div style={{ fontSize: 11, color: C.teal, marginTop: 2 }}>Generative Engine Optimization</div>
          <div style={{ fontSize: 11, color: C.muted, marginTop: 4 }}>
            {score >= 80 ? 'AI-ready. Excellent!' : score >= 50 ? 'Good. Add more trust signals.' : 'Needs structured data.'}
          </div>
        </div>
      </div>

      {/* GEO Tips */}
      <div style={{
        background: C.tealDim, border: `1px solid ${C.tealBorder}`,
        borderRadius: 12, padding: '14px 16px', marginBottom: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
          <Zap size={13} color={C.teal} />
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.teal }}>
            GEO Tips — Optimized for Perplexity, ChatGPT & Gemini
          </span>
        </div>
        {[
          'Cite external sources — AI engines prioritize well-sourced content',
          'Add specific statistics — numbers boost AI citation likelihood by 40%+',
          'Include expert quotes — signals authoritativeness to AI systems',
          'Tag related entities — helps AI understand content context',
          'Set last updated date — freshness is a key AI ranking signal',
        ].map(tip => (
          <div key={tip} style={{ fontSize: 12, color: C.teal, marginBottom: 4, paddingLeft: 4 }}>
            · {tip}
          </div>
        ))}
      </div>

      {/* Content Type */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
          Content Type
        </div>
        <select
          value={data.content_type || 'evergreen'}
          onChange={e => update('content_type', e.target.value)}
          style={{ ...inputStyle(focused === 'ct'), appearance: 'none', cursor: 'pointer' }}
          onFocus={() => setFocused('ct')} onBlur={() => setFocused('')}
        >
          {CONTENT_TYPES.map(ct => (
            <option key={ct.value} value={ct.value}>{ct.label}</option>
          ))}
        </select>
        {currentContentType && (
          <div style={{ fontSize: 11, color: C.muted, marginTop: 5 }}>{currentContentType.desc}</div>
        )}
      </div>

      {/* Last Updated */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
          Last Updated Date
        </div>
        <input
          type="date"
          value={data.last_updated_at ? data.last_updated_at.slice(0, 10) : ''}
          onChange={e => update('last_updated_at', e.target.value || null)}
          style={inputStyle(focused === 'lu')}
          onFocus={() => setFocused('lu')} onBlur={() => setFocused('')}
        />
        <div style={{ fontSize: 11, color: C.muted, marginTop: 5 }}>
          Adds <code style={{ fontSize: 10, background: C.elevated, padding: '1px 5px', borderRadius: 4, color: '#a78bfa' }}>dateModified</code> to Article schema. Signals freshness to AI engines.
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: `1px solid ${C.border}`, marginBottom: 20 }} />

      {/* Citations */}
      <div style={{ marginBottom: 24 }}>
        <SectionHeader
          icon={Link2}
          label="Citations / Sources"
          count={citations.filter(c => c.url && c.title).length}
          countLabel={`valid · need 2+ for GEO score`}
          onAdd={addCitation}
        />
        {citations.length === 0 && <EmptyState message="No citations yet. Add your sources." />}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {citations.map((c, i) => (
            <div key={i} style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.muted }}>Source #{i + 1}</span>
                <button type="button" onClick={() => removeCitation(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.red, padding: 2, display: 'flex' }}>
                  <X size={13} />
                </button>
              </div>
              <input
                value={c.title}
                onChange={e => updateCitation(i, 'title', e.target.value)}
                placeholder="Source title (e.g. Harvard Business Review)"
                style={{ ...inputStyle(false), marginBottom: 8 }}
              />
              <input
                value={c.url}
                onChange={e => updateCitation(i, 'url', e.target.value)}
                placeholder="https://source-url.com"
                style={inputStyle(false)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Key Statistics */}
      <div style={{ marginBottom: 24 }}>
        <SectionHeader
          icon={BarChart2}
          label="Key Statistics"
          count={keyStats.filter(s => s.stat).length}
          countLabel="stats · numbers AI engines love to quote"
          onAdd={addStat}
        />
        {keyStats.length === 0 && <EmptyState message="No statistics yet. Add key data points from your article." />}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {keyStats.map((s, i) => (
            <div key={i} style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.muted }}>Stat #{i + 1}</span>
                <button type="button" onClick={() => removeStat(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.red, padding: 2, display: 'flex' }}>
                  <X size={13} />
                </button>
              </div>
              <input
                value={s.stat}
                onChange={e => updateStat(i, 'stat', e.target.value)}
                placeholder="e.g. 73% of startups fail within year 1"
                style={{ ...inputStyle(false), marginBottom: 8 }}
              />
              <input
                value={s.context}
                onChange={e => updateStat(i, 'context', e.target.value)}
                placeholder="Source / context (e.g. Harvard Business Review, 2024)"
                style={inputStyle(false)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Expert Quotes */}
      <div style={{ marginBottom: 24 }}>
        <SectionHeader
          icon={Quote}
          label="Expert Quotes"
          count={quotes.filter(q => q.quote && q.author).length}
          countLabel="valid · credibility signals for AI engines"
          onAdd={addQuote}
        />
        {quotes.length === 0 && <EmptyState message="No quotes yet. Add expert quotes from your article." />}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {quotes.map((q, i) => (
            <div key={i} style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.muted }}>Quote #{i + 1}</span>
                <button type="button" onClick={() => removeQuote(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.red, padding: 2, display: 'flex' }}>
                  <X size={13} />
                </button>
              </div>
              <textarea
                value={q.quote}
                onChange={e => updateQuote(i, 'quote', e.target.value)}
                placeholder="The quote text…"
                rows={3}
                style={{ ...inputStyle(false), marginBottom: 8 }}
              />
              <input
                value={q.author}
                onChange={e => updateQuote(i, 'author', e.target.value)}
                placeholder="Author name (e.g. Paul Graham)"
                style={{ ...inputStyle(false), marginBottom: 8 }}
              />
              <input
                value={q.role}
                onChange={e => updateQuote(i, 'role', e.target.value)}
                placeholder="Role / Company (e.g. Co-founder, Y Combinator)"
                style={inputStyle(false)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Related Entities */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
          <Tag size={13} color={C.violet} />
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.muted }}>
            Related Entities
          </span>
        </div>
        <div style={{ fontSize: 11, color: C.muted, marginBottom: 8 }}>
          Tag people, companies, and concepts mentioned (e.g. "Elon Musk", "OpenAI", "SaaS")
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
          {entities.map(e => (
            <span key={e} style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '3px 8px', borderRadius: 100,
              background: C.tealDim, border: `1px solid ${C.tealBorder}`,
              fontSize: 11, color: C.teal, fontWeight: 600,
            }}>
              {e}
              <button type="button" onClick={() => removeEntity(e)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.teal, padding: 0, lineHeight: 1, display: 'flex' }}>
                <X size={10} />
              </button>
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <input
            value={entityInput}
            onChange={e => setEntityInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addEntity(); } }}
            placeholder="Entity name, press Enter"
            style={{ ...inputStyle(focused === 'ent'), flex: 1 }}
            onFocus={() => setFocused('ent')} onBlur={() => setFocused('')}
          />
          <button type="button" onClick={addEntity} style={{ padding: '9px 12px', borderRadius: 8, border: 'none', background: C.violetDim, color: C.violet, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Plus size={13} />
          </button>
        </div>
      </div>

      {/* GEO Checklist */}
      <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 12, padding: '16px 20px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          GEO Checklist
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {checks.map(c => (
            <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              {c.pass
                ? <CheckCircle size={13} color={C.green} style={{ flexShrink: 0, marginTop: 1 }} />
                : <XCircle    size={13} color={C.red}   style={{ flexShrink: 0, marginTop: 1 }} />
              }
              <span style={{ fontSize: 12, color: c.pass ? C.secondary : C.muted }}>
                {c.label}
                <span style={{ marginLeft: 6, fontSize: 10, color: c.pass ? C.green : C.muted }}>+{c.pts}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
