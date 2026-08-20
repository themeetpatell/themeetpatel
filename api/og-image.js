import { ImageResponse } from '@vercel/og';

// Per-article Open Graph image.
//
// Every article previously shared one static /og-image.jpg, so 35 different
// essays produced an identical card in search, social, and AI answer surfaces.
// This renders the article's own title and category instead.
//
// Deliberately has NO database dependency: every caller (api/og.js and
// BlogArticlePage) already holds the article record, so it passes the title in.
// Importing @supabase/supabase-js alongside @vercel/og pushed the Edge bundle
// past its size limit and failed the deployment outright — and the DB round-trip
// bought nothing, since this endpoint is only ever called with data in hand.

export const config = { runtime: 'edge' };

const WIDTH = 1200;
const HEIGHT = 630;

// Cap untrusted query input. This endpoint renders whatever title it is given,
// so the length limit is what stops it being used as an image generator for
// arbitrary text on this domain.
const MAX_TITLE = 140;
const MAX_LABEL = 40;

// Matches the site's dark-luxury palette (see src/index.css).
const COLORS = {
  bg: '#09090e',
  surface: '#111118',
  violet: '#8b5cf6',
  violetLight: '#c4b5fd',
  heading: '#f7f7fb',
  body: '#a8a9c3',
};

/** Long titles must shrink, or they overflow the card instead of wrapping into it. */
const titleSize = (title) => {
  const length = title.length;
  if (length <= 40) return 72;
  if (length <= 70) return 60;
  if (length <= 110) return 50;
  return 42;
};

const clean = (value, max) =>
  String(value || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);

const titleFromSlug = (slug) =>
  clean(
    String(slug || '')
      .split('-')
      .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
      .join(' '),
    MAX_TITLE
  );

const box = (style, children) => ({ type: 'div', props: { style, children } });

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url);

    const title = clean(searchParams.get('title'), MAX_TITLE) || titleFromSlug(searchParams.get('slug'));
    if (!title) {
      return new Response('Missing title or slug', { status: 400 });
    }

    const category = clean(searchParams.get('category'), MAX_LABEL) || 'Essay';
    const readTime = clean(searchParams.get('readTime'), MAX_LABEL);
    const eyebrow = readTime ? `${category} · ${readTime}` : category;

    return new ImageResponse(
      box(
        {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: `linear-gradient(150deg, ${COLORS.bg} 0%, ${COLORS.surface} 55%, ${COLORS.bg} 100%)`,
          padding: '72px 80px',
          borderBottom: `8px solid ${COLORS.violet}`,
          fontFamily: 'sans-serif',
        },
        [
          box(
            {
              display: 'flex',
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: COLORS.violetLight,
            },
            eyebrow
          ),
          box(
            {
              display: 'flex',
              fontSize: titleSize(title),
              fontWeight: 800,
              lineHeight: 1.15,
              color: COLORS.heading,
              maxWidth: 1040,
            },
            title
          ),
          box({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, [
            box({ display: 'flex', fontSize: 30, fontWeight: 700, color: COLORS.heading }, 'Meet Patel'),
            box({ display: 'flex', fontSize: 26, color: COLORS.body }, 'themeetpatel.com'),
          ]),
        ]
      ),
      {
        width: WIDTH,
        height: HEIGHT,
        headers: {
          'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
        },
      }
    );
  } catch (err) {
    console.error('og-image: render failed:', err);
    return new Response('Failed to generate image', { status: 500 });
  }
}
