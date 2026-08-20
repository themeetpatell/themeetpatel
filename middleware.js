import { next, rewrite } from '@vercel/functions';

// Everything that has to happen BEFORE the filesystem:
//   1. themeetpatel.in -> www.themeetpatel.com (308)
//   2. bot traffic -> the server-rendered pages in api/og.js
//   3. bots on unknown paths -> a real 404 instead of a 200 shell
//
// Why middleware and not `rewrite`/`redirect` in vercel.json: those are
// evaluated AFTER the filesystem, so any route backed by a real file silently
// wins. That is why the UA rewrites worked for /about but not for:
//   /      -> served dist/index.html (the empty SPA shell)
//   /mind  -> served public/mind/index.json (188 bytes of graph data)
// Host-based redirects in vercel.json lose the same way: Vercel resolves the
// domain before config redirects, so themeetpatel.in kept returning 200.
//
// Humans are never affected: non-bot user agents fall straight through.
//
// FAIL-SAFE: this now runs on every HTML request, so a throw here would take
// the whole site down. Everything below is wrapped — on any error we fall
// through to next() and the site serves normally.

const CANONICAL_HOST = 'www.themeetpatel.com';

/**
 * Hosts that must 308 to the canonical host. The apex is included so the
 * redirect is a permanent 308 rather than the temporary 307 Vercel's domain
 * layer issues by default; if that layer answers first this is simply a no-op.
 */
const REDIRECT_HOSTS = new Set([
  'themeetpatel.in',
  'www.themeetpatel.in',
  'themeetpatel.com',
]);

const BOT_PATTERN =
  /(bot\b|crawl|spider|GPT|OAI|claude|anthropic|perplexity|mistral|cohere|meta-external|facebookexternalhit|whatsapp|googlebot|google-extended|bingbot|yandex|applebot|amazonbot|duckassist|youbot|ccbot|bytespider|slackbot|twitterbot|linkedinbot|discordbot|telegrambot)/i;

/** Routes with prose in api/_pageContent.js. Must stay in sync with PAGES. */
const PAGE_ROUTES = new Set([
  '/',
  '/about',
  '/thesis',
  '/investors',
  '/portfolio',
  '/blogs',
  '/biggmate',
  '/community',
  '/mind',
  '/contact',
]);

/**
 * Real routes with no bot-rendered version. They must NOT 404 for crawlers —
 * they are noindex by design (legal pages, the /v2 variant, /labs), so the SPA
 * shell is the correct response and the page's own robots meta does the rest.
 */
const KNOWN_NOINDEX_ROUTES = new Set([
  '/labs',
  '/v2',
  '/privacy-policy',
  '/cookie-policy',
  '/terms-of-service',
]);

const ARTICLE_PATTERN = /^\/blogs\/([a-z0-9][a-z0-9-]{0,199})$/i;

// Excludes build assets, public files and anything with a file extension, so
// middleware only ever runs on HTML navigations.
export const config = {
  matcher: [
    '/((?!api/|assets/|_vercel/|mind-data/|.*\\.[a-zA-Z0-9]+$).*)',
  ],
};

export default function middleware(request) {
  try {
    const url = new URL(request.url);

    // 1. Consolidate the .in domain onto the canonical host. Previously it
    //    served a full duplicate of the site at 200; only the canonical tag
    //    was holding the duplicate-content line.
    if (REDIRECT_HOSTS.has(url.hostname.toLowerCase())) {
      return Response.redirect(
        `https://${CANONICAL_HOST}${url.pathname}${url.search}`,
        308
      );
    }

    const userAgent = request.headers.get('user-agent') || '';
    if (!BOT_PATTERN.test(userAgent)) return next();

    // Escape hatch: api/og.js bounces real browsers back to the SPA. If a human
    // is ever misclassified as a bot, that bounce would land here again and
    // loop, so an explicit opt-out param breaks the cycle.
    if (url.searchParams.has('__spa')) return next();

    const path = url.pathname.replace(/\/+$/, '') || '/';

    // 2. Known routes get the server-rendered version.
    const article = path.match(ARTICLE_PATTERN);
    if (article || PAGE_ROUTES.has(path)) {
      const target = new URL('/api/og', url.origin);
      if (article) target.searchParams.set('slug', article[1]);
      else target.searchParams.set('path', path);
      return rewrite(target);
    }

    if (KNOWN_NOINDEX_ROUTES.has(path)) return next();

    // 3. Anything else is not a page. The SPA catch-all would answer 200 with
    //    an empty shell, which reads to a non-JS crawler as a real page —
    //    Googlebot renders the noindex, GPTBot and friends do not.
    return new Response('Not Found', {
      status: 404,
      headers: { 'content-type': 'text/plain; charset=utf-8', 'x-robots-tag': 'noindex' },
    });
  } catch {
    // Never let a routing bug take down the site.
    return next();
  }
}
