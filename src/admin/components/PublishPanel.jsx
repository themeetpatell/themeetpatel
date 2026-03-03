import React, { useState } from 'react';
import { ChevronDown, X, Plus, Globe, Clock, Star, User, Tag } from 'lucide-react';

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
};

const STATUS_COLORS = {
  published: '#22c55e',
  draft:     '#f97316',
  scheduled: '#8b5cf6',
  archived:  '#5a5a6e',
};

const CATEGORIES = [
  'Entrepreneurship', 'Biggbizz', 'Operations', 'Personal Growth',
  'Business Strategy', 'User-led Growth', 'Design & UX', 'Marketing & Sales',
  'Partnerships', 'Writing & Books', 'Leadership', 'Strategy',
];

const inputStyle = (focused) => ({
  width: '100%', padding: '9px 12px',
  background: 'rgba(255,255,255,0.03)',
  border: `1px solid ${focused ? C.violetBorder : C.border}`,
  borderRadius: 8, color: C.primary, fontSize: 13,
  outline: 'none', boxSizing: 'border-box',
  transition: 'border-color 0.2s', fontFamily: 'inherit',
});

function PanelSection({ title, icon: Icon, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
        <Icon size={13} color={C.violet} />
        <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.muted }}>
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

export default function PublishPanel({ data, onChange, wordCount, onSave, onPrimaryAction, saving }) {
  const [tagInput, setTagInput] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const update = (key, value) => onChange({ ...data, [key]: value });

  const addTag = () => {
    const tag = tagInput.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
    if (tag && !data.tags?.includes(tag)) {
      update('tags', [...(data.tags || []), tag]);
    }
    setTagInput('');
  };

  const removeTag = (tag) => update('tags', (data.tags || []).filter(t => t !== tag));

  const estimatedReadTime = `${Math.max(1, Math.ceil((wordCount || 0) / 238))} min read`;

  const primaryLabel = () => {
    if (data.status === 'published') return 'Unpublish';
    if (data.status === 'scheduled') return 'Update Schedule';
    return 'Publish Now';
  };

  const primaryColor = () => {
    if (data.status === 'published') return 'transparent';
    return C.violet;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {/* Action buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        <button
          type="button"
          onClick={onPrimaryAction}
          disabled={saving}
          style={{
            width: '100%', padding: '10px 0',
            background: primaryColor(),
            border: data.status === 'published' ? `1px solid ${C.border}` : 'none',
            borderRadius: 9, color: data.status === 'published' ? C.secondary : '#fff',
            fontSize: 13, fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer',
            opacity: saving ? 0.6 : 1, fontFamily: 'inherit',
          }}
        >
          {saving ? 'Saving…' : primaryLabel()}
        </button>
        <button
          type="button"
          onClick={onSave}
          disabled={saving}
          style={{
            width: '100%', padding: '9px 0',
            background: 'transparent',
            border: `1px solid ${C.border}`,
            borderRadius: 9, color: C.secondary,
            fontSize: 13, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer',
            opacity: saving ? 0.6 : 1, fontFamily: 'inherit',
          }}
        >
          {saving ? 'Saving…' : 'Save Draft'}
        </button>
      </div>

      {/* Status */}
      <PanelSection title="Status" icon={Globe}>
        <select
          value={data.status || 'draft'}
          onChange={e => update('status', e.target.value)}
          style={{ ...inputStyle(focusedField === 'status'), appearance: 'none', cursor: 'pointer' }}
          onFocus={() => setFocusedField('status')}
          onBlur={() => setFocusedField('')}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="scheduled">Scheduled</option>
          <option value="archived">Archived</option>
        </select>

        {data.status === 'scheduled' && (
          <input
            type="datetime-local"
            value={data.scheduled_at ? data.scheduled_at.slice(0, 16) : ''}
            onChange={e => update('scheduled_at', e.target.value)}
            style={{ ...inputStyle(false), marginTop: 8 }}
          />
        )}
      </PanelSection>

      {/* Category */}
      <PanelSection title="Category" icon={Tag}>
        <select
          value={data.category || ''}
          onChange={e => update('category', e.target.value)}
          style={{ ...inputStyle(focusedField === 'category'), appearance: 'none', cursor: 'pointer' }}
          onFocus={() => setFocusedField('category')}
          onBlur={() => setFocusedField('')}
        >
          <option value="">Select category…</option>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </PanelSection>

      {/* Tags */}
      <PanelSection title="Tags" icon={Tag}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
          {(data.tags || []).map(tag => (
            <span key={tag} style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '3px 8px', borderRadius: 100,
              background: C.violetDim, border: `1px solid ${C.violetBorder}`,
              fontSize: 11, color: C.violet, fontWeight: 600,
            }}>
              #{tag}
              <button type="button" onClick={() => removeTag(tag)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.violet, padding: 0, lineHeight: 1, display: 'flex' }}>
                <X size={10} />
              </button>
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <input
            value={tagInput}
            onChange={e => setTagInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(); } }}
            placeholder="Add tag, press Enter"
            style={{ ...inputStyle(focusedField === 'tag'), flex: 1 }}
            onFocus={() => setFocusedField('tag')}
            onBlur={() => setFocusedField('')}
          />
          <button
            type="button"
            onClick={addTag}
            style={{
              padding: '9px 12px', borderRadius: 8, border: 'none',
              background: C.violetDim, color: C.violet, cursor: 'pointer',
            }}
          >
            <Plus size={13} />
          </button>
        </div>
      </PanelSection>

      {/* Featured toggle */}
      <PanelSection title="Featured" icon={Star}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <div
            onClick={() => update('featured', !data.featured)}
            style={{
              width: 36, height: 20, borderRadius: 10,
              background: data.featured ? C.violet : 'rgba(255,255,255,0.1)',
              position: 'relative', transition: 'background 0.2s', flexShrink: 0,
              cursor: 'pointer',
            }}
          >
            <div style={{
              position: 'absolute', top: 2,
              left: data.featured ? 18 : 2,
              width: 16, height: 16, borderRadius: '50%',
              background: '#fff', transition: 'left 0.2s',
            }} />
          </div>
          <span style={{ fontSize: 13, color: data.featured ? C.primary : C.secondary }}>
            {data.featured ? 'Featured article' : 'Mark as featured'}
          </span>
        </label>
      </PanelSection>

      {/* Author */}
      <PanelSection title="Author" icon={User}>
        <input
          value={data.author || 'Meet Patel'}
          onChange={e => update('author', e.target.value)}
          placeholder="Author name"
          style={inputStyle(focusedField === 'author')}
          onFocus={() => setFocusedField('author')}
          onBlur={() => setFocusedField('')}
        />
      </PanelSection>

      {/* Read time */}
      <PanelSection title="Read Time" icon={Clock}>
        <input
          value={data.read_time || estimatedReadTime}
          onChange={e => update('read_time', e.target.value)}
          placeholder={estimatedReadTime}
          style={inputStyle(focusedField === 'read_time')}
          onFocus={() => setFocusedField('read_time')}
          onBlur={() => setFocusedField('')}
        />
        <div style={{ fontSize: 11, color: C.muted, marginTop: 6 }}>
          Auto-estimated: {estimatedReadTime} ({wordCount || 0} words)
        </div>
      </PanelSection>
    </div>
  );
}
