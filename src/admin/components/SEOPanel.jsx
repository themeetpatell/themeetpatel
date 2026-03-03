import React, { useState } from 'react';
import { Plus, X, CheckCircle, XCircle } from 'lucide-react';

const C = {
  bg:           '#09090e',
  surface:      '#111118',
  elevated:     '#16161f',
  border:       'rgba(255,255,255,0.07)',
  primary:      '#f5f5f7',
  secondary:    '#8e8ea0',
  muted:        '#5a5a6e',
  violet:       '#8b5cf6',
  violetDim:    'rgba(139,92,246,0.10)',
  violetBorder: 'rgba(139,92,246,0.22)',
  green:        '#22c55e',
  orange:       '#f97316',
  red:          '#ef4444',
};

function Counter({ value, max, thresholds }) {
  const [lo, hi] = thresholds || [max * 0.75, max];
  const color = value <= lo ? C.green : value <= hi ? C.orange : C.red;
  return <span style={{ fontSize: 11, color, marginLeft: 6 }}>{value}/{max}</span>;
}

function inputStyle(focused) {
  return {
    width: '100%', padding: '9px 12px',
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused ? C.violetBorder : C.border}`,
    borderRadius: 8, color: C.primary, fontSize: 13,
    outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s', fontFamily: 'inherit', resize: 'vertical',
  };
}

function FieldLabel({ children, extra }) {
  return (
    <div style={{
      fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase',
      letterSpacing: '0.08em', marginBottom: 6,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <span>{children}</span>
      {extra}
    </div>
  );
}

function Toggle({ checked, onChange, label, description }) {
  return (
    <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
      <div
        onClick={onChange}
        style={{
          width: 36, height: 20, borderRadius: 10, flexShrink: 0,
          background: checked ? C.violet : 'rgba(255,255,255,0.1)',
          position: 'relative', transition: 'background 0.2s', cursor: 'pointer', marginTop: 1,
        }}
      >
        <div style={{
          position: 'absolute', top: 2, left: checked ? 18 : 2,
          width: 16, height: 16, borderRadius: '50%',
          background: '#fff', transition: 'left 0.2s',
        }} />
      </div>
      <div>
        <div style={{ fontSize: 13, color: checked ? C.primary : C.secondary, fontWeight: checked ? 600 : 400 }}>
          {label}
        </div>
        {description && (
          <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{description}</div>
        )}
      </div>
    </label>
  );
}

function getKeywordDensity(html, keyword) {
  if (!keyword || !html) return null;
  const text = html.replace(/<[^>]+>/g, ' ').toLowerCase();
  const words = text.split(/\s+/).filter(Boolean);
  if (!words.length) return null;
  const kw = keyword.toLowerCase().trim().split(/\s+/);
  let count = 0;
  for (let i = 0; i <= words.length - kw.length; i++) {
    if (kw.every((w, j) => words[i + j] === w)) count++;
  }
  return ((count / words.length) * 100).toFixed(1);
}

function getReadability(html) {
  if (!html) return null;
  const text = html.replace(/<[^>]+>/g, ' ');
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 3);
  const words = text.split(/\s+/).filter(Boolean);
  if (!sentences.length || words.length < 50) return null;
  const avg = words.length / sentences.length;
  if (avg <= 15) return { level: 'Easy',     color: C.green  };
  if (avg <= 22) return { level: 'Moderate', color: C.orange };
  return               { level: 'Complex',   color: C.red    };
}

// 12 checks, total = 100 pts
function computeScore(data, contentHtml, wordCount) {
  const kw      = (data.focus_keyword   || '').toLowerCase().trim();
  const mt      = (data.meta_title      || data.title || '').toLowerCase();
  const md      = (data.meta_description || '').toLowerCase();
  const mdRaw   = data.meta_description  || '';
  const html    = typeof contentHtml === 'string' ? contentHtml : '';
  const lower   = html.toLowerCase();
  const plain   = html.replace(/<[^>]+>/g, ' ').toLowerCase();
  const secondary = (data.secondary_keywords || []).length;

  const checks = [
    { label: 'Focus keyword in meta title',              pass: !!(kw && mt.includes(kw)),                              pts: 12 },
    { label: 'Focus keyword in meta description',        pass: !!(kw && md.includes(kw)),                              pts: 8  },
    { label: 'Focus keyword in opening paragraph',       pass: !!(kw && plain.slice(0, 700).includes(kw)),             pts: 8  },
    { label: 'Article is 800+ words',                    pass: (wordCount || 0) >= 800,                                pts: 10 },
    { label: 'Contains H2 headings',                     pass: lower.includes('<h2'),                                  pts: 8  },
    { label: 'Images present',                           pass: lower.includes('<img'),                                 pts: 6  },
    { label: 'Contains internal/external links',         pass: lower.includes('<a '),                                  pts: 6  },
    { label: 'Meta title is 50–60 characters',           pass: mt.length >= 50 && mt.length <= 60,                    pts: 8  },
    { label: 'Meta description is 120–160 characters',   pass: mdRaw.length >= 120 && mdRaw.length <= 160,            pts: 12 },
    { label: 'OG image URL is set',                      pass: !!(data.og_image),                                     pts: 6  },
    { label: 'Canonical URL is set',                     pass: !!(data.canonical_url),                                pts: 8  },
    { label: '2+ secondary keywords defined',            pass: secondary >= 2,                                         pts: 8  },
  ];

  const score = checks.reduce((sum, c) => sum + (c.pass ? c.pts : 0), 0);
  return { score, checks };
}

function getRichResults(data) {
  const faqs       = (data.faq_items    || []).filter(f => f.question && f.answer).length;
  const howtoSteps = (data.howto_steps  || []).filter(s => s.title).length;
  return [
    { label: 'Article / BlogPosting',   eligible: true,                                         note: 'Always eligible' },
    { label: 'FAQPage Rich Result',      eligible: faqs >= 3,                                    note: faqs >= 3 ? `${faqs} FAQs` : `Need 3+ FAQs (have ${faqs})` },
    { label: 'HowTo Rich Result',        eligible: data.schema_type === 'HowToArticle' && howtoSteps >= 2, note: howtoSteps >= 2 ? `${howtoSteps} steps` : 'Need HowTo schema + 2+ steps' },
  ];
}

export default function SEOPanel({ data, onChange, contentHtml, wordCount, slug }) {
  const [focused, setFocused] = useState('');
  const [kwInput, setKwInput] = useState('');
  const update = (key, val) => onChange({ ...data, [key]: val });

  const { score, checks } = computeScore(data, contentHtml, wordCount);
  const scoreColor = score >= 80 ? C.green : score >= 50 ? C.orange : C.red;

  const previewTitle  = (data.meta_title || data.title || 'Article Title').slice(0, 70);
  const previewDesc   = (data.meta_description || 'Article description will appear here…').slice(0, 160);
  const previewSlug   = slug || 'article-slug';

  const density    = getKeywordDensity(contentHtml, data.focus_keyword);
  const readability = getReadability(contentHtml);
  const richResults = getRichResults(data);

  const secondaryKws = data.secondary_keywords || [];
  const addKw = () => {
    const kw = kwInput.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, '');
    if (kw && !secondaryKws.includes(kw)) update('secondary_keywords', [...secondaryKws, kw]);
    setKwInput('');
  };
  const removeKw = kw => update('secondary_keywords', secondaryKws.filter(k => k !== kw));

  const densityColor = !density ? C.muted
    : parseFloat(density) >= 1 && parseFloat(density) <= 3 ? C.green
    : parseFloat(density) < 0.5 ? C.red
    : C.orange;

  return (
    <div>

      {/* SEO Score ring */}
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
          <text x={30} y={35} textAnchor="middle" fill={scoreColor} fontSize={14} fontWeight={800}>{score}</text>
        </svg>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.primary }}>SEO Score</div>
          <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>
            {score >= 80 ? 'Great! Keep it up.' : score >= 50 ? 'Good. Room to improve.' : 'Needs work.'}
          </div>
          {(density || readability) && (
            <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
              {density !== null && (
                <span style={{ fontSize: 11, color: densityColor }}>
                  Density: {density}% {parseFloat(density) >= 1 && parseFloat(density) <= 3 ? '✓' : ''}
                </span>
              )}
              {readability && (
                <span style={{ fontSize: 11, color: readability.color }}>
                  Readability: {readability.level}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Google SERP Preview */}
      <div style={{
        background: C.elevated, border: `1px solid ${C.border}`,
        borderRadius: 12, padding: '16px 20px', marginBottom: 20,
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          Google SERP Preview
        </div>
        <div style={{ fontSize: 12, color: '#34a853', marginBottom: 4 }}>
          themeetpatel.com › blogs › {previewSlug}
        </div>
        <div
          style={{ fontSize: 17, color: '#8ab4f8', marginBottom: 4, lineHeight: 1.3, fontWeight: 500, cursor: 'pointer' }}
          onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
        >
          {previewTitle}
        </div>
        <div style={{ fontSize: 13, color: '#bdc1c6', lineHeight: 1.55 }}>
          {previewDesc}
        </div>
      </div>

      {/* Twitter Card Preview */}
      <div style={{
        background: C.elevated, border: `1px solid ${C.border}`,
        borderRadius: 12, padding: '16px 20px', marginBottom: 20,
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          Twitter / X Card Preview
        </div>
        {data.twitter_card === 'summary_large_image' ? (
          <div style={{ border: `1px solid rgba(255,255,255,0.1)`, borderRadius: 12, overflow: 'hidden', maxWidth: 400 }}>
            <div style={{
              height: 120, background: data.og_image
                ? `url(${data.og_image}) center/cover`
                : 'linear-gradient(135deg, #111118, #16161f 50%, rgba(139,92,246,0.15))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, color: C.muted,
            }}>
              {!data.og_image && '1200 × 630 image preview'}
            </div>
            <div style={{ padding: '10px 14px', background: '#1a1a1a' }}>
              <div style={{ fontSize: 11, color: '#6e767d', marginBottom: 4 }}>themeetpatel.com</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#e7e9ea', marginBottom: 2 }}>{(data.og_title || data.meta_title || data.title || 'Title').slice(0, 70)}</div>
              <div style={{ fontSize: 12, color: '#71767b' }}>{(data.og_description || data.meta_description || 'Description…').slice(0, 100)}</div>
            </div>
          </div>
        ) : (
          <div style={{ border: `1px solid rgba(255,255,255,0.1)`, borderRadius: 12, overflow: 'hidden', maxWidth: 400 }}>
            <div style={{ display: 'flex', gap: 0, background: '#1a1a1a' }}>
              <div style={{
                width: 80, height: 80, background: data.og_image
                  ? `url(${data.og_image}) center/cover`
                  : '#16161f',
                flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10, color: C.muted,
              }}>
                {!data.og_image && 'img'}
              </div>
              <div style={{ padding: '10px 14px', flex: 1 }}>
                <div style={{ fontSize: 11, color: '#6e767d', marginBottom: 4 }}>themeetpatel.com</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#e7e9ea', marginBottom: 2 }}>{(data.og_title || data.meta_title || data.title || 'Title').slice(0, 50)}</div>
                <div style={{ fontSize: 12, color: '#71767b' }}>{(data.og_description || data.meta_description || '').slice(0, 80)}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Focus Keyword */}
      <div style={{ marginBottom: 14 }}>
        <FieldLabel>Focus Keyword</FieldLabel>
        <input
          value={data.focus_keyword || ''}
          onChange={e => update('focus_keyword', e.target.value)}
          placeholder="Primary keyword to optimize for"
          style={inputStyle(focused === 'fk')}
          onFocus={() => setFocused('fk')} onBlur={() => setFocused('')}
        />
        {density !== null && (
          <div style={{ fontSize: 11, color: densityColor, marginTop: 4 }}>
            Keyword density: {density}%
            <span style={{ color: C.muted, marginLeft: 6 }}>(ideal: 1–3%)</span>
          </div>
        )}
      </div>

      {/* Meta Title */}
      <div style={{ marginBottom: 14 }}>
        <FieldLabel extra={<Counter value={(data.meta_title || '').length} max={70} thresholds={[60, 70]} />}>
          Meta Title
        </FieldLabel>
        <input
          value={data.meta_title || ''}
          onChange={e => update('meta_title', e.target.value)}
          placeholder={data.title || 'Meta title (50–60 chars ideal)'}
          style={inputStyle(focused === 'mt')}
          onFocus={() => setFocused('mt')} onBlur={() => setFocused('')}
        />
      </div>

      {/* Meta Description */}
      <div style={{ marginBottom: 14 }}>
        <FieldLabel extra={<Counter value={(data.meta_description || '').length} max={160} thresholds={[120, 160]} />}>
          Meta Description
        </FieldLabel>
        <textarea
          value={data.meta_description || ''}
          onChange={e => update('meta_description', e.target.value)}
          placeholder="Meta description (120–160 chars ideal)"
          rows={3}
          style={inputStyle(focused === 'md')}
          onFocus={() => setFocused('md')} onBlur={() => setFocused('')}
        />
      </div>

      {/* Secondary Keywords */}
      <div style={{ marginBottom: 14 }}>
        <FieldLabel>Secondary Keywords (LSI)</FieldLabel>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
          {secondaryKws.map(kw => (
            <span key={kw} style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '3px 8px', borderRadius: 100,
              background: C.violetDim, border: `1px solid ${C.violetBorder}`,
              fontSize: 11, color: C.violet, fontWeight: 600,
            }}>
              {kw}
              <button type="button" onClick={() => removeKw(kw)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.violet, padding: 0, lineHeight: 1, display: 'flex' }}>
                <X size={10} />
              </button>
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <input
            value={kwInput}
            onChange={e => setKwInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addKw(); } }}
            placeholder="Add keyword, press Enter"
            style={{ ...inputStyle(focused === 'sk'), flex: 1 }}
            onFocus={() => setFocused('sk')} onBlur={() => setFocused('')}
          />
          <button type="button" onClick={addKw} style={{ padding: '9px 12px', borderRadius: 8, border: 'none', background: C.violetDim, color: C.violet, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Plus size={13} />
          </button>
        </div>
        <div style={{ fontSize: 11, color: C.muted, marginTop: 4 }}>
          Related terms that support your main keyword (need 2+ for SEO score)
        </div>
      </div>

      {/* OG Title */}
      <div style={{ marginBottom: 14 }}>
        <FieldLabel extra={<Counter value={(data.og_title || '').length} max={70} thresholds={[60, 70]} />}>
          OG Title
        </FieldLabel>
        <input
          value={data.og_title || ''}
          onChange={e => update('og_title', e.target.value)}
          placeholder={data.meta_title || data.title || 'Defaults to meta title'}
          style={inputStyle(focused === 'ogt')}
          onFocus={() => setFocused('ogt')} onBlur={() => setFocused('')}
        />
      </div>

      {/* OG Description */}
      <div style={{ marginBottom: 14 }}>
        <FieldLabel extra={<Counter value={(data.og_description || '').length} max={160} thresholds={[120, 160]} />}>
          OG Description
        </FieldLabel>
        <textarea
          value={data.og_description || ''}
          onChange={e => update('og_description', e.target.value)}
          placeholder="Defaults to meta description"
          rows={2}
          style={inputStyle(focused === 'ogd')}
          onFocus={() => setFocused('ogd')} onBlur={() => setFocused('')}
        />
      </div>

      {/* OG Image */}
      <div style={{ marginBottom: 14 }}>
        <FieldLabel>OG Image URL</FieldLabel>
        <input
          value={data.og_image || ''}
          onChange={e => update('og_image', e.target.value)}
          placeholder="https://… (1200×630 recommended)"
          style={inputStyle(focused === 'ogi')}
          onFocus={() => setFocused('ogi')} onBlur={() => setFocused('')}
        />
      </div>

      {/* Canonical URL */}
      <div style={{ marginBottom: 14 }}>
        <FieldLabel>Canonical URL</FieldLabel>
        <input
          value={data.canonical_url || ''}
          onChange={e => update('canonical_url', e.target.value)}
          placeholder={`https://themeetpatel.com/blogs/${previewSlug}`}
          style={inputStyle(focused === 'cu')}
          onFocus={() => setFocused('cu')} onBlur={() => setFocused('')}
        />
      </div>

      {/* Schema Type */}
      <div style={{ marginBottom: 20 }}>
        <FieldLabel>Schema Type</FieldLabel>
        <select
          value={data.schema_type || 'BlogPosting'}
          onChange={e => update('schema_type', e.target.value)}
          style={{ ...inputStyle(focused === 'st'), appearance: 'none', cursor: 'pointer' }}
          onFocus={() => setFocused('st')} onBlur={() => setFocused('')}
        >
          <option value="BlogPosting">BlogPosting</option>
          <option value="Article">Article</option>
          <option value="NewsArticle">NewsArticle</option>
          <option value="HowToArticle">HowToArticle (enables HowTo schema)</option>
        </select>
      </div>

      {/* Twitter Card */}
      <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 12, padding: '16px 20px', marginBottom: 20 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>
          Twitter / X Card
        </div>
        <div style={{ marginBottom: 10 }}>
          <FieldLabel>Card Type</FieldLabel>
          <select
            value={data.twitter_card || 'summary_large_image'}
            onChange={e => update('twitter_card', e.target.value)}
            style={{ ...inputStyle(focused === 'tc'), appearance: 'none', cursor: 'pointer' }}
            onFocus={() => setFocused('tc')} onBlur={() => setFocused('')}
          >
            <option value="summary_large_image">summary_large_image (recommended)</option>
            <option value="summary">summary (small thumbnail)</option>
          </select>
        </div>
        <div>
          <FieldLabel>Twitter Creator Handle</FieldLabel>
          <input
            value={data.twitter_creator || ''}
            onChange={e => update('twitter_creator', e.target.value)}
            placeholder="@your_handle"
            style={inputStyle(focused === 'tch')}
            onFocus={() => setFocused('tch')} onBlur={() => setFocused('')}
          />
        </div>
      </div>

      {/* Robots Meta */}
      <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 12, padding: '16px 20px', marginBottom: 20 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>
          Robots Meta
        </div>
        {data.robots_noindex && (
          <div style={{
            background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
            borderRadius: 8, padding: '8px 12px', marginBottom: 12, fontSize: 12, color: '#ef4444',
          }}>
            ⚠ noindex is ON — this article will not be indexed by search engines
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Toggle
            checked={!!data.robots_noindex}
            onChange={() => update('robots_noindex', !data.robots_noindex)}
            label="noindex"
            description="Prevents search engines from indexing this article"
          />
          <Toggle
            checked={!!data.robots_nofollow}
            onChange={() => update('robots_nofollow', !data.robots_nofollow)}
            label="nofollow"
            description="Prevents crawlers from following links in this article"
          />
        </div>
      </div>

      {/* Rich Results Eligibility */}
      <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 12, padding: '16px 20px', marginBottom: 20 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          Rich Results Eligibility
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {richResults.map(r => (
            <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {r.eligible
                ? <CheckCircle size={13} color={C.green} style={{ flexShrink: 0 }} />
                : <XCircle    size={13} color={C.muted} style={{ flexShrink: 0 }} />
              }
              <div>
                <span style={{ fontSize: 12, color: r.eligible ? C.secondary : C.muted }}>{r.label}</span>
                <span style={{ fontSize: 11, color: r.eligible ? C.green : C.muted, marginLeft: 8 }}>{r.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Checklist */}
      <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 12, padding: '16px 20px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          SEO Checklist
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
