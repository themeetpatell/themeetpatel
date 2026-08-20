import { ImageResponse } from '@vercel/og';
import { supabase } from './_supabase.js';

// Per-article Open Graph image.
//
// Every article previously shared one static /og-image.jpg, so 35 different
// essays produced an identical card in search, social, and AI answer surfaces.
// This renders the article's own title and category instead.
//
// Rendered with the platform's Satori runtime — no headless browser, no fonts
// to ship: `fontFamily` falls back to the runtime's default sans stack.

export const config = { runtime: 'edge' };

const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]{0,199}$/i;
const WIDTH = 1200;
const HEIGHT = 630;

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

const fallbackTitle = (slug) =>
  String(slug)
    .split('-')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ');

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');

    if (!slug || !SLUG_PATTERN.test(slug)) {
      return new Response('Invalid slug', { status: 400 });
    }

    let article = null;
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('title, category, read_time')
        .eq('slug', slug)
        .eq('status', 'published')
        .limit(1)
        .maybeSingle();
      if (error) throw error;
      article = data ?? null;
    } catch (err) {
      // A missing row should still produce a usable card, not a broken image.
      console.error('og-image: article fetch failed, using slug fallback:', err);
    }

    const title = article?.title || fallbackTitle(slug);
    const category = article?.category || 'Essay';
    const readTime = article?.read_time ? ` · ${article.read_time}` : '';

    return new ImageResponse(
      {
        type: 'div',
        props: {
          style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: `linear-gradient(150deg, ${COLORS.bg} 0%, ${COLORS.surface} 55%, ${COLORS.bg} 100%)`,
            padding: '72px 80px',
            fontFamily: 'sans-serif',
          },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  fontSize: 26,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: COLORS.violetLight,
                },
                children: `${category}${readTime}`,
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  fontSize: titleSize(title),
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: COLORS.heading,
                  maxWidth: 1040,
                },
                children: title,
              },
            },
            {
              type: 'div',
              props: {
                style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
                children: [
                  {
                    type: 'div',
                    props: {
                      style: { display: 'flex', fontSize: 30, fontWeight: 700, color: COLORS.heading },
                      children: 'Meet Patel',
                    },
                  },
                  {
                    type: 'div',
                    props: {
                      style: { display: 'flex', fontSize: 26, color: COLORS.body },
                      children: 'themeetpatel.com',
                    },
                  },
                ],
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: WIDTH,
                  height: 8,
                  background: COLORS.violet,
                },
                children: [],
              },
            },
          ],
        },
      },
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
