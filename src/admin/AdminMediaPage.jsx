import React, { useState, useEffect, useRef } from 'react';
import { toast, Toaster } from 'sonner';
import { Upload, Search, Copy, Trash2, Image, File } from 'lucide-react';
import { uploadMedia, getAllMedia, deleteMedia } from '../lib/articleService';

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
};

function formatSize(bytes) {
  if (!bytes) return '—';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function AdminMediaPage() {
  const [media,     setMedia]     = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [uploading, setUploading] = useState(false);
  const [search,    setSearch]    = useState('');
  const [dragOver,  setDragOver]  = useState(false);
  const fileInputRef = useRef(null);

  const reload = () => {
    setLoading(true);
    getAllMedia()
      .then(setMedia)
      .catch(err => toast.error(`Load failed: ${err.message}`))
      .finally(() => setLoading(false));
  };

  useEffect(() => { reload(); }, []);

  const handleFiles = async (files) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    let uploaded = 0;
    for (const file of Array.from(files)) {
      if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
        toast.error(`${file.name}: only images and video are supported`);
        continue;
      }
      try {
        const item = await uploadMedia(file);
        setMedia(prev => [item, ...prev]);
        uploaded++;
      } catch (err) {
        toast.error(`${file.name}: ${err.message}`);
      }
    }
    if (uploaded > 0) toast.success(`Uploaded ${uploaded} file${uploaded > 1 ? 's' : ''}`);
    setUploading(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`Delete "${item.name}"?`)) return;
    try {
      await deleteMedia(item);
      setMedia(prev => prev.filter(m => m.id !== item.id));
      toast.success('Deleted');
    } catch (err) {
      toast.error(`Delete failed: ${err.message}`);
    }
  };

  const copyURL = (url) => {
    navigator.clipboard.writeText(url);
    toast.success('URL copied!');
  };

  const filtered = media.filter(m =>
    !search || m.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 'clamp(20px, 3vw, 36px)', color: C.primary, background: C.surface, minHeight: '100vh' }}>
      <Toaster theme="dark" position="top-right" />

      <h1 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 24px', letterSpacing: '-0.02em' }}>Media Library</h1>

      {/* Upload zone */}
      <div
        onDrop={handleDrop}
        onDragOver={e => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onClick={() => fileInputRef.current?.click()}
        style={{
          border: `2px dashed ${dragOver ? C.violet : C.border}`,
          borderRadius: 14, padding: '36px 24px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: 12, cursor: 'pointer', marginBottom: 28,
          background: dragOver ? C.violetDim : 'transparent',
          transition: 'all 0.2s',
        }}
      >
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: C.violetDim, border: `1px solid ${C.violetBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Upload size={22} color={C.violet} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.primary, marginBottom: 4 }}>
            {uploading ? 'Uploading…' : 'Drop images here or click to browse'}
          </div>
          <div style={{ fontSize: 12, color: C.muted }}>PNG, JPG, GIF, WebP, SVG supported</div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={e => handleFiles(e.target.files)}
        />
      </div>

      {/* Search */}
      <div style={{ position: 'relative', maxWidth: 360, marginBottom: 20 }}>
        <Search size={13} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: C.muted, pointerEvents: 'none' }} />
        <input
          type="text"
          placeholder="Search by filename…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%', padding: '9px 12px 9px 36px',
            background: C.elevated, border: `1px solid ${C.border}`,
            borderRadius: 9, color: C.primary, fontSize: 13, outline: 'none',
            boxSizing: 'border-box', fontFamily: 'inherit',
          }}
          onFocus={e => e.target.style.borderColor = C.violetBorder}
          onBlur={e => e.target.style.borderColor = C.border}
        />
      </div>

      <div style={{ fontSize: 12, color: C.muted, marginBottom: 16 }}>
        {filtered.length} {filtered.length === 1 ? 'file' : 'files'}
      </div>

      {/* Grid */}
      {loading ? (
        <div style={{ fontSize: 13, color: C.muted }}>Loading…</div>
      ) : filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', fontSize: 14, color: C.muted }}>
          {search ? 'No files match your search.' : 'No media uploaded yet. Drop some images above.'}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 14 }}>
          {filtered.map(item => (
            <div
              key={item.id}
              style={{
                background: C.elevated, border: `1px solid ${C.border}`,
                borderRadius: 10, overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.violetBorder}
              onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
            >
              {/* Thumbnail */}
              <div style={{
                height: 130, background: C.bg, overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {item.mime_type?.startsWith('image/') ? (
                  <img
                    src={item.url}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                ) : (
                  <File size={32} color={C.muted} />
                )}
              </div>

              {/* Info */}
              <div style={{ padding: '10px 12px', flex: 1 }}>
                <div style={{
                  fontSize: 12, fontWeight: 600, color: C.secondary,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  marginBottom: 4,
                }}>
                  {item.name || 'Unnamed'}
                </div>
                <div style={{ fontSize: 11, color: C.muted }}>{formatSize(item.size)}</div>
              </div>

              {/* Actions */}
              <div style={{
                display: 'flex', gap: 4, padding: '8px 12px',
                borderTop: `1px solid ${C.border}`,
              }}>
                <button
                  type="button"
                  onClick={() => copyURL(item.url)}
                  title="Copy URL"
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                    padding: '6px 0', borderRadius: 7,
                    background: C.violetDim, border: `1px solid ${C.violetBorder}`,
                    color: C.violet, fontSize: 11, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  <Copy size={11} /> Copy URL
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(item)}
                  title="Delete"
                  style={{
                    padding: '6px 10px', borderRadius: 7,
                    background: 'transparent', border: `1px solid ${C.border}`,
                    color: C.muted, cursor: 'pointer', display: 'flex', alignItems: 'center',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.08)'; e.currentTarget.style.color = '#ef4444'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; }}
                >
                  <Trash2 size={11} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
