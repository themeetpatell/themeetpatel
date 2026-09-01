import { GLOSSARY } from '../data/glossary.js';

// Links the first mention of each defined term in an article body to its
// glossary page.
//
// Why it exists: the vocabulary currently looks decorative. Seven term pages
// exist and not one article links to them, so nothing on the site demonstrates
// that these words are load-bearing rather than invented for a glossary. One
// link per term, from the essay that actually uses it, is what makes the
// DefinedTermSet read as a real vocabulary to both a person and an engine.
//
// Shared deliberately: src/pages/BlogArticlePage.jsx renders the React version
// and api/og.js renders the crawler version from the same `content_html`. If
// only one of them linked, we would be serving bots a different document from
// humans, which is cloaking — and the reverse, linking only for humans, wastes
// the entire point.
//
// CONSTRAINTS this respects, all of them learned failure modes for auto-linkers:
//   · never links inside an existing <a> — nested anchors are invalid HTML and
//     break the outer link
//   · never links inside a heading, code, pre or blockquote
//   · never touches tag attributes (it only ever rewrites text between tags)
//   · one link per term per article, and a hard cap on the total
//   · matches the term itself only, never the aliases — "decision systems" or
//     "autonomous BI" appear in ordinary prose and would mislink
//   · pure: the input string is never mutated, a new string is returned

/** Contexts where a link must not be introduced. */
const SKIP_TAGS = new Set([
  'a',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'code',
  'pre',
  'blockquote',
  'figcaption',
]);

/**
 * Cap on links added per article. Past this it stops reading as helpful and
 * starts reading as keyword stuffing, which is a real ranking risk and an
 * obvious one to a reader.
 */
const MAX_LINKS = 6;

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Match targets, longest term first so a longer term can never be pre-empted by
 * a shorter one that is a substring of it.
 * @type {ReadonlyArray<{slug: string, pattern: RegExp}>}
 */
const TARGETS = Object.freeze(
  [...GLOSSARY]
    .sort((a, b) => b.term.length - a.term.length)
    .map((entry) => ({
      slug: entry.slug,
      term: entry.term,
      // Word-bounded, case-insensitive, first occurrence only.
      pattern: new RegExp(`\\b(${escapeRegExp(entry.term)})\\b`, 'i'),
    }))
);

/**
 * Link the first mention of each defined term to its glossary page.
 *
 * @param {string|null|undefined} html - article body HTML (admin-authored)
 * @param {{ maxLinks?: number, excludeSlugs?: ReadonlyArray<string> }} [options]
 * @returns {string} a new string; the input is never modified
 */
export const linkGlossaryTerms = (html, options = {}) => {
  if (typeof html !== 'string' || html === '') return '';

  const maxLinks = options.maxLinks ?? MAX_LINKS;
  const excluded = new Set(options.excludeSlugs ?? []);
  const linked = new Set(excluded);

  // Alternating text / tag tokens. Splitting on the capture group keeps the
  // tags in the output, so the document is reassembled byte-identical apart
  // from the anchors we insert.
  const tokens = html.split(/(<[^>]+>)/);

  let skipDepth = 0;
  let added = 0;

  const out = tokens.map((token) => {
    if (token.startsWith('<')) {
      const match = token.match(/^<\s*(\/?)\s*([a-zA-Z][a-zA-Z0-9]*)/);
      if (match) {
        const [, closing, rawName] = match;
        const name = rawName.toLowerCase();
        if (SKIP_TAGS.has(name)) {
          // Self-closing tags open and close in one token, so they never change
          // the depth. None of SKIP_TAGS are void elements, but a malformed
          // `<a ... />` from a rich-text editor would otherwise unbalance this.
          if (!token.endsWith('/>')) {
            if (closing) skipDepth = Math.max(0, skipDepth - 1);
            else skipDepth += 1;
          }
        }
      }
      return token;
    }

    if (skipDepth > 0 || added >= maxLinks || token.trim() === '') return token;

    let text = token;
    for (const target of TARGETS) {
      if (added >= maxLinks) break;
      if (linked.has(target.slug)) continue;
      if (!target.pattern.test(text)) continue;

      // $1 preserves the casing as the author wrote it.
      text = text.replace(
        target.pattern,
        `<a href="/glossary/${target.slug}" data-glossary-term="${target.slug}">$1</a>`
      );
      linked.add(target.slug);
      added += 1;
    }
    return text;
  });

  return out.join('');
};

export default linkGlossaryTerms;
