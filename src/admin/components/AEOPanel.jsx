import React, { useState } from 'react';
import { Plus, X, ChevronDown, ChevronUp, Lightbulb, ListOrdered } from 'lucide-react';

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
  amber:        '#f59e0b',
  amberDim:     'rgba(245,158,11,0.10)',
  green:        '#22c55e',
};

const inputStyle = (focused) => ({
  width: '100%', padding: '9px 12px',
  background: 'rgba(255,255,255,0.03)',
  border: `1px solid ${focused ? C.violetBorder : C.border}`,
  borderRadius: 8, color: C.primary, fontSize: 13,
  outline: 'none', boxSizing: 'border-box',
  transition: 'border-color 0.2s', fontFamily: 'inherit', resize: 'vertical',
});

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

function buildFAQSchema(faqItems) {
  if (!faqItems || faqItems.length === 0) return null;
  const valid = faqItems.filter(f => f.question && f.answer);
  if (!valid.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: valid.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

function buildHowToSchema(title, steps) {
  if (!steps || steps.length === 0) return null;
  const valid = steps.filter(s => s.title);
  if (!valid.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title || 'How To',
    step: valid.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.description || s.title,
      ...(s.image ? { image: s.image } : {}),
    })),
  };
}

export default function AEOPanel({ data, onChange }) {
  const [schemaOpen, setSchemaOpen] = useState(false);
  const [howtoSchemaOpen, setHowtoSchemaOpen] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const update = (key, val) => onChange({ ...data, [key]: val });

  // FAQ
  const faqs = data.faq_items || [];
  const addFAQ = () => update('faq_items', [...faqs, { question: '', answer: '' }]);
  const updateFAQ = (i, key, val) =>
    update('faq_items', faqs.map((f, idx) => idx === i ? { ...f, [key]: val } : f));
  const removeFAQ = i => update('faq_items', faqs.filter((_, idx) => idx !== i));
  const moveFAQ = (i, dir) => {
    const arr = [...faqs];
    const j = i + dir;
    if (j < 0 || j >= arr.length) return;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    update('faq_items', arr);
  };

  // HowTo Steps
  const steps = data.howto_steps || [];
  const addStep = () => update('howto_steps', [...steps, { title: '', description: '', image: '' }]);
  const updateStep = (i, key, val) =>
    update('howto_steps', steps.map((s, idx) => idx === i ? { ...s, [key]: val } : s));
  const removeStep = i => update('howto_steps', steps.filter((_, idx) => idx !== i));
  const moveStep = (i, dir) => {
    const arr = [...steps];
    const j = i + dir;
    if (j < 0 || j >= arr.length) return;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    update('howto_steps', arr);
  };

  const faqSchema   = buildFAQSchema(faqs);
  const howtoSchema = buildHowToSchema(data.title, steps);
  const validFAQs   = faqs.filter(f => f.question && f.answer).length;
  const validSteps  = steps.filter(s => s.title).length;

  return (
    <div>

      {/* AEO Tips */}
      <div style={{
        background: C.amberDim, border: `1px solid rgba(245,158,11,0.2)`,
        borderRadius: 12, padding: '14px 16px', marginBottom: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
          <Lightbulb size={13} color={C.amber} />
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.amber }}>
            AEO Tips — Answer Engine Optimization
          </span>
        </div>
        {[
          'Use exact question phrasing that users search for',
          'Keep answers under 50 words for AI snippet eligibility',
          'Add 3+ FAQ items for FAQPage rich result in Google',
          'The Direct Answer is used for featured snippets & AI engines',
          'HowTo steps unlock the HowTo rich result in Google Search',
        ].map(tip => (
          <div key={tip} style={{ fontSize: 12, color: '#d4a847', marginBottom: 4, paddingLeft: 4 }}>
            · {tip}
          </div>
        ))}
      </div>

      {/* AI Summary / Direct Answer */}
      <div style={{ marginBottom: 20 }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase',
          letterSpacing: '0.08em', marginBottom: 6,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          Direct Answer (AI Summary)
          <span style={{ color: (data.ai_summary || '').length > 280 ? '#ef4444' : C.muted, fontSize: 10 }}>
            {(data.ai_summary || '').length}/300
          </span>
        </div>
        <textarea
          value={data.ai_summary || ''}
          onChange={e => update('ai_summary', e.target.value)}
          placeholder="Write 1–2 sentences that directly answer the main question of this article. Google, Perplexity, and ChatGPT use this for featured snippets."
          rows={4}
          maxLength={300}
          style={inputStyle(focusedField === 'ai')}
          onFocus={() => setFocusedField('ai')} onBlur={() => setFocusedField('')}
        />
        <div style={{ fontSize: 11, color: C.muted, marginTop: 4 }}>
          Appears in structured data to help AI engines answer questions directly.
        </div>
      </div>

      {/* Speakable */}
      <div style={{
        background: C.elevated, border: `1px solid ${C.border}`,
        borderRadius: 12, padding: '14px 16px', marginBottom: 24,
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
          Speakable Content
        </div>
        <Toggle
          checked={!!data.speakable}
          onChange={() => update('speakable', !data.speakable)}
          label="Mark article as speakable"
          description="Adds Speakable schema — signals to Google Assistant & voice search that this content is suitable for audio playback"
        />
        {data.speakable && (
          <div style={{ marginTop: 10, padding: '8px 12px', background: 'rgba(139,92,246,0.07)', border: `1px solid ${C.violetBorder}`, borderRadius: 8, fontSize: 11, color: C.violet }}>
            ✓ Speakable schema will be injected. The Direct Answer section will be marked as speakable content.
          </div>
        )}
      </div>

      {/* Divider */}
      <div style={{ borderTop: `1px solid ${C.border}`, marginBottom: 24 }} />

      {/* FAQ Builder */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              FAQ Builder
            </div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>
              {validFAQs} valid {validFAQs === 1 ? 'item' : 'items'}
              {validFAQs >= 3
                ? <span style={{ color: C.green }}> · FAQPage schema active ✓</span>
                : ` · Need 3+ for FAQPage schema`}
            </div>
          </div>
          <button
            type="button" onClick={addFAQ}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '7px 12px', borderRadius: 8,
              background: C.violetDim, border: `1px solid ${C.violetBorder}`,
              color: C.violet, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            <Plus size={12} /> Add FAQ
          </button>
        </div>

        {faqs.length === 0 && (
          <div style={{
            textAlign: 'center', padding: '24px 0',
            border: `1px dashed ${C.border}`, borderRadius: 10,
            fontSize: 13, color: C.muted,
          }}>
            No FAQ items yet. Click "Add FAQ" to start.
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 10, padding: '14px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.muted }}>FAQ #{i + 1}</span>
                <div style={{ display: 'flex', gap: 4 }}>
                  <button type="button" onClick={() => moveFAQ(i, -1)} disabled={i === 0} style={{ background: 'none', border: 'none', cursor: i === 0 ? 'default' : 'pointer', color: i === 0 ? C.border : C.muted, padding: 2 }}>
                    <ChevronUp size={13} />
                  </button>
                  <button type="button" onClick={() => moveFAQ(i, 1)} disabled={i === faqs.length - 1} style={{ background: 'none', border: 'none', cursor: i === faqs.length - 1 ? 'default' : 'pointer', color: i === faqs.length - 1 ? C.border : C.muted, padding: 2 }}>
                    <ChevronDown size={13} />
                  </button>
                  <button type="button" onClick={() => removeFAQ(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', padding: 2 }}>
                    <X size={13} />
                  </button>
                </div>
              </div>
              <input
                value={faq.question}
                onChange={e => updateFAQ(i, 'question', e.target.value)}
                placeholder="Question (use exact phrasing users search for)"
                style={{ ...inputStyle(false), marginBottom: 8 }}
              />
              <textarea
                value={faq.answer}
                onChange={e => updateFAQ(i, 'answer', e.target.value)}
                placeholder="Answer (keep under 50 words for best AI snippet results)"
                rows={3}
                style={inputStyle(false)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Schema Preview */}
      {faqSchema && faqSchema.mainEntity.length > 0 && (
        <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden', marginBottom: 24 }}>
          <button
            type="button" onClick={() => setSchemaOpen(!schemaOpen)}
            style={{
              width: '100%', padding: '14px 16px',
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              color: C.secondary, fontSize: 12, fontWeight: 600, fontFamily: 'inherit',
            }}
          >
            Preview FAQPage JSON-LD
            {schemaOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          {schemaOpen && (
            <pre style={{ margin: 0, padding: '0 16px 16px', fontSize: 11, color: '#a78bfa', overflowX: 'auto', lineHeight: 1.6, fontFamily: '"JetBrains Mono", "Fira Code", monospace' }}>
              {JSON.stringify(faqSchema, null, 2)}
            </pre>
          )}
        </div>
      )}

      {/* Divider */}
      <div style={{ borderTop: `1px solid ${C.border}`, marginBottom: 24 }} />

      {/* HowTo Steps Builder */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <ListOrdered size={13} color={C.violet} />
              <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                HowTo Steps
              </div>
            </div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>
              {validSteps} valid {validSteps === 1 ? 'step' : 'steps'}
              {validSteps >= 2
                ? <span style={{ color: C.green }}> · HowTo schema active ✓</span>
                : ' · Need 2+ steps + HowToArticle schema type'}
            </div>
          </div>
          <button
            type="button" onClick={addStep}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '7px 12px', borderRadius: 8,
              background: C.violetDim, border: `1px solid ${C.violetBorder}`,
              color: C.violet, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            <Plus size={12} /> Add Step
          </button>
        </div>

        {steps.length === 0 && (
          <div style={{
            textAlign: 'center', padding: '24px 0',
            border: `1px dashed ${C.border}`, borderRadius: 10,
            fontSize: 13, color: C.muted,
          }}>
            No steps yet. Use for tutorial / how-to articles.
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {steps.map((step, i) => (
            <div key={i} style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 10, padding: '14px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: C.violetDim, border: `1px solid ${C.violetBorder}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 800, color: C.violet,
                  }}>
                    {i + 1}
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: C.muted }}>Step {i + 1}</span>
                </div>
                <div style={{ display: 'flex', gap: 4 }}>
                  <button type="button" onClick={() => moveStep(i, -1)} disabled={i === 0} style={{ background: 'none', border: 'none', cursor: i === 0 ? 'default' : 'pointer', color: i === 0 ? C.border : C.muted, padding: 2 }}>
                    <ChevronUp size={13} />
                  </button>
                  <button type="button" onClick={() => moveStep(i, 1)} disabled={i === steps.length - 1} style={{ background: 'none', border: 'none', cursor: i === steps.length - 1 ? 'default' : 'pointer', color: i === steps.length - 1 ? C.border : C.muted, padding: 2 }}>
                    <ChevronDown size={13} />
                  </button>
                  <button type="button" onClick={() => removeStep(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', padding: 2 }}>
                    <X size={13} />
                  </button>
                </div>
              </div>
              <input
                value={step.title}
                onChange={e => updateStep(i, 'title', e.target.value)}
                placeholder="Step title (e.g. Install the dependencies)"
                style={{ ...inputStyle(false), marginBottom: 8 }}
              />
              <textarea
                value={step.description}
                onChange={e => updateStep(i, 'description', e.target.value)}
                placeholder="Step description (optional — expanded instructions)"
                rows={2}
                style={{ ...inputStyle(false), marginBottom: 8 }}
              />
              <input
                value={step.image || ''}
                onChange={e => updateStep(i, 'image', e.target.value)}
                placeholder="Step image URL (optional)"
                style={inputStyle(false)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* HowTo Schema Preview */}
      {howtoSchema && howtoSchema.step.length > 0 && (
        <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden' }}>
          <button
            type="button" onClick={() => setHowtoSchemaOpen(!howtoSchemaOpen)}
            style={{
              width: '100%', padding: '14px 16px',
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              color: C.secondary, fontSize: 12, fontWeight: 600, fontFamily: 'inherit',
            }}
          >
            Preview HowTo JSON-LD
            {howtoSchemaOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          {howtoSchemaOpen && (
            <pre style={{ margin: 0, padding: '0 16px 16px', fontSize: 11, color: '#a78bfa', overflowX: 'auto', lineHeight: 1.6, fontFamily: '"JetBrains Mono", "Fira Code", monospace' }}>
              {JSON.stringify(howtoSchema, null, 2)}
            </pre>
          )}
        </div>
      )}

    </div>
  );
}
