import React, { useCallback } from 'react';
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
import { common, createLowlight } from 'lowlight';

const lowlight = createLowlight(common);

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
        padding: '5px 8px', borderRadius: 6, border: 'none', cursor: disabled ? 'default' : 'pointer',
        background: active ? C.violetDim : 'transparent',
        color: active ? C.violet : disabled ? C.muted : C.secondary,
        fontSize: 12, fontWeight: 600, fontFamily: 'inherit',
        transition: 'all 0.15s', lineHeight: 1,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 28,
      }}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <div style={{ width: 1, height: 20, background: C.border, margin: '0 4px' }} />;
}

export default function TiptapEditor({ content, onChange, onWordCountChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
        heading: { levels: [1, 2, 3, 4] },
      }),
      Underline,
      Highlight.configure({ multicolor: false }),
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

  if (!editor) return null;

  const words    = editor.storage.characterCount.words();
  const readTime = Math.max(1, Math.ceil(words / 238));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden', background: C.bg }}>
      {/* Toolbar */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2,
        padding: '8px 12px', borderBottom: `1px solid ${C.border}`,
        background: C.surface, position: 'sticky', top: 0, zIndex: 10,
      }}>
        {/* Headings */}
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
        <Divider />

        {/* Inline styles */}
        <ToolbarBtn active={editor.isActive('bold')}      onClick={() => editor.chain().focus().toggleBold().run()}      title="Bold">        <strong>B</strong> </ToolbarBtn>
        <ToolbarBtn active={editor.isActive('italic')}    onClick={() => editor.chain().focus().toggleItalic().run()}    title="Italic">      <em>I</em>          </ToolbarBtn>
        <ToolbarBtn active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()} title="Underline">   <u>U</u>            </ToolbarBtn>
        <ToolbarBtn active={editor.isActive('strike')}    onClick={() => editor.chain().focus().toggleStrike().run()}    title="Strike">      <s>S</s>            </ToolbarBtn>
        <ToolbarBtn active={editor.isActive('highlight')} onClick={() => editor.chain().focus().toggleHighlight().run()} title="Highlight">   ✦                  </ToolbarBtn>
        <Divider />

        {/* Alignment */}
        <ToolbarBtn active={editor.isActive({ textAlign: 'left' })}   onClick={() => editor.chain().focus().setTextAlign('left').run()}   title="Align left">   ≡← </ToolbarBtn>
        <ToolbarBtn active={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()} title="Align center"> ≡↔ </ToolbarBtn>
        <ToolbarBtn active={editor.isActive({ textAlign: 'right' })}  onClick={() => editor.chain().focus().setTextAlign('right').run()}  title="Align right">  ≡→ </ToolbarBtn>
        <Divider />

        {/* Lists */}
        <ToolbarBtn active={editor.isActive('bulletList')}  onClick={() => editor.chain().focus().toggleBulletList().run()}  title="Bullet list">  • </ToolbarBtn>
        <ToolbarBtn active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Ordered list"> 1. </ToolbarBtn>
        <Divider />

        {/* Block elements */}
        <ToolbarBtn active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Blockquote">  ❝ </ToolbarBtn>
        <ToolbarBtn active={editor.isActive('codeBlock')}  onClick={() => editor.chain().focus().toggleCodeBlock().run()}  title="Code block">  ⌨ </ToolbarBtn>
        <ToolbarBtn active={editor.isActive('code')}       onClick={() => editor.chain().focus().toggleCode().run()}       title="Inline code"> ` </ToolbarBtn>
        <Divider />

        {/* Special */}
        <ToolbarBtn active={editor.isActive('link')} onClick={setLink}    title="Link">   🔗 </ToolbarBtn>
        <ToolbarBtn onClick={addImage}               title="Insert image"> 🖼 </ToolbarBtn>
        <ToolbarBtn onClick={insertTable}            title="Insert table"> ⊞ </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal rule"> — </ToolbarBtn>
        <Divider />

        {/* History */}
        <ToolbarBtn onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo"> ↩ </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo"> ↪ </ToolbarBtn>
      </div>

      {/* Editor area */}
      <div style={{ padding: '0 24px', minHeight: 400 }}>
        <EditorContent editor={editor} />
      </div>

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
      `}</style>
    </div>
  );
}
