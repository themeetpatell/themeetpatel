import { next, rewrite } from '@vercel/functions';

// Routes bot traffic to the server-rendered pages in api/og.js.
//
// Why middleware and not a `rewrite` in vercel.json: rewrites are evaluated
// AFTER the filesystem, so any route backed by a real file silently wins.
// That is why the UA rewrites worked for /about but not for:
//   /      -> served dist/index.html (the empty SPA shell)
//   /mind  -> served public/mind/index.json (188 bytes of graph data)
// Both were verified failing on a preview deployment. Middleware runs before
// the cache and before the filesystem, so it catches every route.
//
// Humans are never affected: non-bot user agents fall straight through.

const BOT_PATTERN =
  /(bot\b|crawl|spider|GPT|OAI|claude|anthropic|perplexity|mistral|cohere|meta-external|facebookexternalhit|whatsapp|googlebot|google-extended|bingbot|yandex|applebot|amazonbot|duckassist|youbot|ccbot|bytespider|slackbot|twitterbot|linkedinbot|discordbot|telegrambot)/i;

/** Routes with prose in api/_pageContent.js. Must stay in sync with PAGES. */
const PAGE_ROUTES = new Set([
  '/',
  '/about',
  '/investors',
  '/portfolio',
  '/blogs',
  '/biggmate',
  '/community',
  '/mind',
  '/contact',
]);

const ARTICLE_PATTERN = /^\/blogs\/([a-z0-9][a-z0-9-]{0,199})$/i;

export const config = {
  matcher: [
    '/',
    '/about',
    '/investors',
    '/portfolio',
    '/blogs',
    '/blogs/:slug*',
    '/biggmate',
    '/community',
    '/mind',
    '/contact',
  ],
};

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  if (!BOT_PATTERN.test(userAgent)) return next();

  const url = new URL(request.url);

  // Escape hatch: api/og.js bounces real browsers back to the SPA. If a human
  // is ever misclassified as a bot, that bounce would land here again and loop,
  // so an explicit opt-out param breaks the cycle.
  if (url.searchParams.has('__spa')) return next();

  const path = url.pathname.replace(/\/+$/, '') || '/';
  const target = new URL('/api/og', url.origin);

  const article = path.match(ARTICLE_PATTERN);
  if (article) {
    target.searchParams.set('slug', article[1]);
  } else if (PAGE_ROUTES.has(path)) {
    target.searchParams.set('path', path);
  } else {
    return next();
  }

  return rewrite(target);
}
