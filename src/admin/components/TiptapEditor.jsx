import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Image } from '@tiptap/extension-image';
import { Link as TiptapLink } from '@tiptap/extension-link';
import { Placeholder } from '@tiptap/extension-placeholder';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableCell } from '@tiptap/extension-table-cell';
import { CharacterCount } from '@tiptap/extension-character-count';
import { Underline } from '@tiptap/extension-underline';
import { TextAlign } from '@tiptap/extension-text-align';
import { Highlight } from '@tiptap/extension-highlight';
import { Superscript } from '@tiptap/extension-superscript';
import { Subscript } from '@tiptap/extension-subscript';
import { Color } from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { Youtube } from '@tiptap/extension-youtube';
import { HardBreak } from '@tiptap/extension-hard-break';
import { Extension } from '@tiptap/react';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { DOMParser as ProseMirrorDOMParser } from '@tiptap/pm/model';
import { common, createLowlight } from 'lowlight';

const lowlight = createLowlight(common);

// Custom extension to handle HTML paste
const HtmlPaste = Extension.create({
  name: 'htmlPaste',
  addProseMirrorPlugins() {
    const { editor } = this;
    return [
      new Plugin({
        key: new PluginKey('htmlPaste'),
        props: {
          handlePaste(view, event) {
            const clipboardData = event.clipboardData;
            if (!clipboardData) return false;

            const html = clipboardData.getData('text/html');
            const text = clipboardData.getData('text/plain');

            // If we got HTML from clipboard, let TipTap handle it natively
            if (html) return false;

            // If plain text looks like HTML (contains tags), parse and insert it
            if (text && /<[a-z][\s\S]*>/i.test(text)) {
              event.preventDefault();
              const wrapper = document.createElement('div');
              wrapper.innerHTML = text;
              const parser = ProseMirrorDOMParser.fromSchema(view.state.schema);
              const slice = parser.parseSlice(wrapper);
              const tr = view.state.tr.replaceSelection(slice);
              view.dispatch(tr);
              return true;
            }

            return false;
          },
        },
      }),
    ];
  },
});

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

function ToolbarBtn({ onClick, active, title, children, disabled }) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      style={{
        padding: '6px 9px', borderRadius: 6, border: 'none', cursor: disabled ? 'default' : 'pointer',
        background: active ? C.violetDim : 'transparent',
        color: active ? C.violet : disabled ? C.muted : C.secondary,
        fontSize: 13, fontWeight: 600, fontFamily: 'inherit',
        transition: 'all 0.15s', lineHeight: 1,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 30, minHeight: 30,
        gap: 4,
      }}
    >
      {children}
    </button>
  );
}

function ToolbarGroup({ label, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 1, position: 'relative' }}>
      {label && (
        <span style={{
          position: 'absolute', top: -13, left: 2,
          fontSize: 9, fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: C.muted, pointerEvents: 'none',
        }}>{label}</span>
      )}
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ width: 1, height: 20, background: C.border, margin: '0 4px' }} />;
}

export default function TiptapEditor({ content, onChange, onWordCountChange }) {
  const [htmlMode, setHtmlMode] = useState(false);
  const [htmlSource, setHtmlSource] = useState('');
  const htmlTextareaRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
        hardBreak: false, // We use our own HardBreak
        heading: { levels: [1, 2, 3, 4] },
      }),
      HardBreak.configure({
        keepMarks: true,
        HTMLAttributes: {},
      }),
      Underline,
      Superscript,
      Subscript,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      TiptapLink.configure({ openOnClick: false }),
      Image.configure({ inline: false, allowBase64: false }),
      Placeholder.configure({ placeholder: 'Start writing your article…' }),
      CodeBlockLowlight.configure({ lowlight }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      CharacterCount,
      Youtube.configure({
        inline: false,
        controls: true,
        nocookie: true,
      }),
      HtmlPaste,
    ],
    content: content || '',
    onUpdate: ({ editor }) => {
      onChange?.({ json: editor.getJSON(), html: editor.getHTML() });
      const words = editor.storage.characterCount.words();
      onWordCountChange?.(words);
    },
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes('link').href;
    const url = window.prompt('URL', prev || 'https://');
    if (url === null) return;
    if (url === '') { editor.chain().focus().extendMarkRange('link').unsetLink().run(); return; }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    const url = window.prompt('Image URL');
    if (url) editor.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  const insertTable = useCallback(() => {
    if (!editor) return;
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  }, [editor]);

  const addYoutube = useCallback(() => {
    if (!editor) return;
    const url = window.prompt('YouTube URL (e.g. https://youtube.com/watch?v=...)');
    if (url) editor.commands.setYoutubeVideo({ src: url, width: 640, height: 360 });
  }, [editor]);

  const setColor = useCallback(() => {
    if (!editor) return;
    const color = window.prompt('Text color (hex, e.g. #ff6600)', '#');
    if (color && color !== '#') editor.chain().focus().setColor(color).run();
  }, [editor]);

  // Toggle HTML source mode
  const toggleHtmlMode = useCallback(() => {
    if (!editor) return;
    if (!htmlMode) {
      // Entering HTML mode — grab current HTML
      setHtmlSource(editor.getHTML());
      setHtmlMode(true);
    } else {
      // Leaving HTML mode — apply HTML back to editor
      editor.commands.setContent(htmlSource, true);
      onChange?.({ json: editor.getJSON(), html: editor.getHTML() });
      setHtmlMode(false);
    }
  }, [editor, htmlMode, htmlSource, onChange]);

  // Paste HTML directly into editor
  const pasteHtmlIntoEditor = useCallback(() => {
    if (!editor) return;
    const html = window.prompt('Paste your HTML content below:');
    if (html) {
      editor.commands.setContent(html, true);
      onChange?.({ json: editor.getJSON(), html: editor.getHTML() });
    }
  }, [editor, onChange]);

  if (!editor) return null;

  const words    = editor.storage.characterCount.words();
  const readTime = Math.max(1, Math.ceil(words / 238));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'visible', background: C.bg }}>
      {/* Toolbar — sticky to viewport top (below admin top bar at 57px) */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6,
        padding: '10px 14px', borderBottom: `1px solid ${C.border}`,
        background: C.surface, position: 'sticky', top: 57, zIndex: 15,
        borderRadius: '12px 12px 0 0',
        boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
      }}>
        {/* Headings */}
        <ToolbarGroup label="Heading">
          {[1, 2, 3, 4].map(l => (
            <ToolbarBtn
              key={l}
              active={editor.isActive('heading', { level: l })}
              onClick={() => editor.chain().focus().toggleHeading({ level: l }).run()}
              title={`Heading ${l}`}
            >
              H{l}
            </ToolbarBtn>
          ))}
        </ToolbarGroup>
        <Divider />

        {/* Format */}
        <ToolbarGroup label="Format">
          <ToolbarBtn active={editor.isActive('bold')}      onClick={() => editor.chain().focus().toggleBold().run()}      title="Bold (Ctrl+B)">        <strong>B</strong> </ToolbarBtn>
          <ToolbarBtn active={editor.isActive('italic')}    onClick={() => editor.chain().focus().toggleItalic().run()}    title="Italic (Ctrl+I)">      <em>I</em>          </ToolbarBtn>
          <ToolbarBtn active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()} title="Underline (Ctrl+U)">   <u>U</u>            </ToolbarBtn>
          <ToolbarBtn active={editor.isActive('strike')}    onClick={() => editor.chain().focus().toggleStrike().run()}    title="Strikethrough">         <s>S</s>            </ToolbarBtn>
          <ToolbarBtn active={editor.isActive('superscript')} onClick={() => editor.chain().focus().toggleSuperscript().run()} title="Superscript">
            <span style={{ fontSize: 11 }}>X<sup style={{ fontSize: 8 }}>²</sup></span>
          </ToolbarBtn>
          <ToolbarBtn active={editor.isActive('subscript')} onClick={() => editor.chain().focus().toggleSubscript().run()} title="Subscript">
            <span style={{ fontSize: 11 }}>X<sub style={{ fontSize: 8 }}>₂</sub></span>
          </ToolbarBtn>
          <ToolbarBtn active={editor.isActive('highlight')} onClick={() => editor.chain().focus().toggleHighlight().run()} title="Highlight">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="m16.5 3.5 2.12 2.12a3 3 0 0 1 0 4.24L8.5 20H4v-4.5L14.38 5.12a3 3 0 0 1 4.12-1.62z"/></svg>
          </ToolbarBtn>
          <ToolbarBtn onClick={setColor} title="Text color">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 20h16"/><path d="m8 4 4 12"/><path d="m16 4-4 12"/><path d="M10 12h4"/></svg>
          </ToolbarBtn>
        </ToolbarGroup>
        <Divider />

        {/* Align */}
        <ToolbarGroup label="Align">
          <ToolbarBtn active={editor.isActive({ textAlign: 'left' })}   onClick={() => editor.chain().focus().setTextAlign('left').run()}   title="Align left">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
          </ToolbarBtn>
          <ToolbarBtn active={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()} title="Align center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="10" x2="6" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="18" y1="18" x2="6" y2="18"/></svg>
          </ToolbarBtn>
          <ToolbarBtn active={editor.isActive({ textAlign: 'right' })}  onClick={() => editor.chain().focus().setTextAlign('right').run()}  title="Align right">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="21" y1="10" x2="7" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="7" y2="18"/></svg>
          </ToolbarBtn>
        </ToolbarGroup>
        <Divider />

        {/* Lists */}
        <ToolbarGroup label="Lists">
          <ToolbarBtn active={editor.isActive('bulletList')}  onClick={() => editor.chain().focus().toggleBulletList().run()}  title="Bullet list">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          </ToolbarBtn>
          <ToolbarBtn active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Numbered list">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>
          </ToolbarBtn>
        </ToolbarGroup>
        <Divider />

        {/* Blocks */}
        <ToolbarGroup label="Blocks">
          <ToolbarBtn active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Blockquote">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3z"/></svg>
          </ToolbarBtn>
          <ToolbarBtn active={editor.isActive('codeBlock')}  onClick={() => editor.chain().focus().toggleCodeBlock().run()}  title="Code block">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </ToolbarBtn>
          <ToolbarBtn active={editor.isActive('code')}       onClick={() => editor.chain().focus().toggleCode().run()}       title="Inline code">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
          </ToolbarBtn>
        </ToolbarGroup>
        <Divider />

        {/* Insert */}
        <ToolbarGroup label="Insert">
          <ToolbarBtn active={editor.isActive('link')} onClick={setLink} title="Insert link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </ToolbarBtn>
          <ToolbarBtn onClick={addImage} title="Insert image">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </ToolbarBtn>
          <ToolbarBtn onClick={addYoutube} title="Embed YouTube video">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
          </ToolbarBtn>
          <ToolbarBtn onClick={insertTable} title="Insert table">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>
          </ToolbarBtn>
          <ToolbarBtn onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal divider">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="2" y1="12" x2="22" y2="12"/></svg>
          </ToolbarBtn>
          <ToolbarBtn onClick={() => editor.chain().focus().setHardBreak().run()} title="Line break (Shift+Enter)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9h9"/></svg>
          </ToolbarBtn>
        </ToolbarGroup>
        <Divider />

        {/* History */}
        <ToolbarGroup label="History">
          <ToolbarBtn onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo (Ctrl+Z)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
          </ToolbarBtn>
          <ToolbarBtn onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo (Ctrl+Shift+Z)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          </ToolbarBtn>
        </ToolbarGroup>
        <Divider />

        {/* HTML Source */}
        <ToolbarGroup label="Source">
          <ToolbarBtn onClick={pasteHtmlIntoEditor} title="Paste HTML content">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
          </ToolbarBtn>
          <ToolbarBtn active={htmlMode} onClick={toggleHtmlMode} title={htmlMode ? 'Apply HTML & return to editor' : 'Edit HTML source'}>
            <span style={{ fontSize: 11, fontFamily: 'monospace', fontWeight: 700 }}>&lt;/&gt;</span>
          </ToolbarBtn>
        </ToolbarGroup>
      </div>

      {/* Editor area */}
      {htmlMode ? (
        <div style={{ padding: '0 24px', minHeight: 500 }}>
          <textarea
            ref={htmlTextareaRef}
            value={htmlSource}
            onChange={e => setHtmlSource(e.target.value)}
            spellCheck={false}
            style={{
              width: '100%',
              minHeight: 500,
              padding: '24px 0',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#a78bfa',
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: 13,
              lineHeight: 1.7,
              resize: 'vertical',
              caretColor: '#8b5cf6',
            }}
          />
          <div style={{
            padding: '8px 0 16px',
            display: 'flex', gap: 8,
          }}>
            <button
              type="button"
              onClick={toggleHtmlMode}
              style={{
                padding: '8px 16px', borderRadius: 8,
                background: C.violet, color: '#fff', border: 'none',
                fontSize: 12, fontWeight: 700, cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Apply HTML
            </button>
            <button
              type="button"
              onClick={() => { setHtmlMode(false); }}
              style={{
                padding: '8px 16px', borderRadius: 8,
                background: 'transparent', color: C.muted,
                border: `1px solid ${C.border}`,
                fontSize: 12, fontWeight: 600, cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div style={{ padding: '0 24px', minHeight: 500 }}>
          <EditorContent editor={editor} />
        </div>
      )}

      {/* Footer */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '10px 16px', borderTop: `1px solid ${C.border}`,
        background: C.surface, fontSize: 12, color: C.muted,
      }}>
        <span>{words} words</span>
        <span>·</span>
        <span>~{readTime} min read</span>
      </div>

      <style>{`
        /* ── Base ── */
        .ProseMirror {
          outline: none;
          padding: 24px 0 32px;
          color: ${C.secondary};
          line-height: 1.85;
          font-size: 15px;
          min-height: 400px;
          caret-color: #8b5cf6;
        }

        /* ── Placeholder ── */
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          color: ${C.muted};
          pointer-events: none;
          float: left;
          height: 0;
        }

        /* ── Headings ── */
        .ProseMirror h1,
        .ProseMirror h2,
        .ProseMirror h3,
        .ProseMirror h4 {
          color: ${C.primary};
          font-weight: 700;
          line-height: 1.3;
          margin: 28px 0 12px;
          letter-spacing: -0.02em;
        }
        .ProseMirror h1 { font-size: 28px; }
        .ProseMirror h2 {
          font-size: 22px;
          border-bottom: 1px solid ${C.border};
          padding-bottom: 8px;
        }
        .ProseMirror h3 { font-size: 18px; color: ${C.primary}; }
        .ProseMirror h4 { font-size: 15px; color: ${C.primary}; text-transform: uppercase; letter-spacing: 0.05em; }

        /* ── Paragraph ── */
        .ProseMirror p { margin: 0 0 14px; }

        /* ── Inline marks ── */
        .ProseMirror strong { color: ${C.primary}; font-weight: 700; }
        .ProseMirror em { font-style: italic; color: ${C.secondary}; }
        .ProseMirror u { text-decoration: underline; text-underline-offset: 3px; }
        .ProseMirror s { text-decoration: line-through; opacity: 0.6; }
        .ProseMirror mark {
          background: rgba(139,92,246,0.22);
          color: ${C.primary};
          padding: 1px 4px;
          border-radius: 3px;
        }

        /* ── Links ── */
        .ProseMirror a {
          color: #8b5cf6;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(139,92,246,0.4);
          transition: text-decoration-color 0.15s;
        }
        .ProseMirror a:hover { text-decoration-color: #8b5cf6; }

        /* ── Unordered lists ── */
        .ProseMirror ul {
          list-style-type: disc;
          list-style-position: outside;
          padding-left: 28px;
          margin: 4px 0 16px;
        }
        .ProseMirror ul ul {
          list-style-type: circle;
          margin: 4px 0 4px;
        }
        .ProseMirror ul ul ul {
          list-style-type: square;
        }

        /* ── Ordered lists ── */
        .ProseMirror ol {
          list-style-type: decimal;
          list-style-position: outside;
          padding-left: 28px;
          margin: 4px 0 16px;
        }
        .ProseMirror ol ol {
          list-style-type: lower-alpha;
          margin: 4px 0 4px;
        }
        .ProseMirror ol ol ol {
          list-style-type: lower-roman;
        }

        /* ── List items ── */
        .ProseMirror li {
          color: ${C.secondary};
          margin-bottom: 5px;
          padding-left: 4px;
          line-height: 1.75;
        }
        .ProseMirror li p {
          margin: 0;
        }
        .ProseMirror li::marker {
          color: #8b5cf6;
          font-weight: 700;
        }
        /* Nested list spacing */
        .ProseMirror li > ul,
        .ProseMirror li > ol {
          margin-top: 4px;
          margin-bottom: 4px;
        }

        /* ── Blockquote ── */
        .ProseMirror blockquote {
          border-left: 3px solid #8b5cf6;
          background: rgba(139,92,246,0.06);
          padding: 14px 20px;
          margin: 20px 0;
          border-radius: 0 10px 10px 0;
        }
        .ProseMirror blockquote p {
          color: ${C.secondary};
          margin: 0;
          font-style: italic;
        }

        /* ── Inline code ── */
        .ProseMirror code {
          background: ${C.elevated};
          color: #a78bfa;
          padding: 2px 7px;
          border-radius: 5px;
          font-size: 13px;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          border: 1px solid rgba(167,139,250,0.15);
        }

        /* ── Code block ── */
        .ProseMirror pre {
          background: ${C.elevated};
          border: 1px solid ${C.border};
          border-radius: 10px;
          padding: 18px 22px;
          margin: 20px 0;
          overflow-x: auto;
        }
        .ProseMirror pre code {
          background: none;
          color: #a78bfa;
          padding: 0;
          font-size: 13px;
          border: none;
          line-height: 1.7;
        }

        /* ── Horizontal rule ── */
        .ProseMirror hr {
          border: none;
          border-top: 1px solid ${C.border};
          margin: 28px 0;
        }

        /* ── Images ── */
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
          margin: 16px 0;
          border: 1px solid ${C.border};
          display: block;
        }
        .ProseMirror img.ProseMirror-selectednode {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
        }

        /* ── Tables ── */
        .ProseMirror table {
          border-collapse: collapse;
          width: 100%;
          margin: 20px 0;
          border-radius: 8px;
          overflow: hidden;
        }
        .ProseMirror th,
        .ProseMirror td {
          border: 1px solid ${C.border};
          padding: 10px 16px;
          font-size: 14px;
          text-align: left;
          vertical-align: top;
        }
        .ProseMirror th {
          background: ${C.elevated};
          color: ${C.primary};
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .ProseMirror td { color: ${C.secondary}; }
        .ProseMirror tr:nth-child(even) td { background: rgba(255,255,255,0.02); }
        /* Selected cell highlight */
        .ProseMirror .selectedCell::after {
          background: rgba(139,92,246,0.12);
          content: "";
          left: 0; right: 0; top: 0; bottom: 0;
          pointer-events: none;
          position: absolute;
          z-index: 2;
        }
        .ProseMirror .column-resize-handle {
          background-color: #8b5cf6;
          bottom: -2px;
          pointer-events: none;
          position: absolute;
          right: -1px;
          top: 0;
          width: 2px;
        }
        .tableWrapper { overflow-x: auto; }

        /* ── Text alignment ── */
        .ProseMirror [style*="text-align: center"] { text-align: center; }
        .ProseMirror [style*="text-align: right"]  { text-align: right; }
        .ProseMirror [style*="text-align: justify"] { text-align: justify; }

        /* ── Superscript / Subscript ── */
        .ProseMirror sup { font-size: 0.75em; vertical-align: super; }
        .ProseMirror sub { font-size: 0.75em; vertical-align: sub; }

        /* ── YouTube embeds ── */
        .ProseMirror div[data-youtube-video] {
          margin: 20px 0;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid ${C.border};
        }
        .ProseMirror div[data-youtube-video] iframe {
          width: 100%;
          aspect-ratio: 16/9;
          height: auto;
          display: block;
        }

        /* ── Hard break spacing ── */
        .ProseMirror br.ProseMirror-trailingBreak:not(:first-child) {
          display: block;
        }
      `}</style>
    </div>
  );
}
