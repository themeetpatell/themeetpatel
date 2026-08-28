/**
 * IndexNow submission.
 *
 * The key file has been sitting in public/ since the AEO work went in, but
 * nothing ever pinged the endpoint — so the key was live and unused. IndexNow
 * is how Bing, and therefore Copilot and DuckDuckGo, learn about a URL in
 * minutes instead of waiting for a crawl. Google does not consume it; this is
 * an answer-engine channel, not a Google one.
 *
 * Underscore-prefixed so scripts/check-function-count.mjs treats it as a module
 * rather than a Vercel function — the project is at 11 of a hard ceiling of 13.
 */

const ENDPOINT = 'https://api.indexnow.org/indexnow';
const HOST = 'www.themeetpatel.com';
const KEY = '15df75388c6cbb4224b67d2638046d4a';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

/** IndexNow rejects a batch larger than this outright. */
const MAX_URLS = 10000;
/** Never let a slow third party hold a CMS write open. */
const TIMEOUT_MS = 4000;

/**
 * Submit URLs to IndexNow.
 *
 * Never throws and never rejects: a search-ping failure must not fail the write
 * that triggered it. Failures are logged with the response body, because a
 * silent 403 here is indistinguishable from success and would leave the key
 * looking wired up when it is not.
 *
 * @param {string[]} urls Absolute URLs on HOST.
 * @returns {Promise<{ok: boolean, status: number|null, submitted: number, error?: string}>}
 */
export async function submitToIndexNow(urls) {
  const urlList = [...new Set((urls || []).filter((u) => typeof u === 'string' && u.startsWith(`https://${HOST}/`)))];

  if (urlList.length === 0) return { ok: true, status: null, submitted: 0 };
  if (urlList.length > MAX_URLS) {
    return { ok: false, status: null, submitted: 0, error: `refusing ${urlList.length} URLs; IndexNow caps at ${MAX_URLS}` };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
      signal: controller.signal,
    });

    // 200 accepted, 202 accepted-pending-key-validation. Anything else is a real failure.
    if (res.status !== 200 && res.status !== 202) {
      const body = await res.text().catch(() => '');
      console.error(`indexnow: ${res.status} for ${urlList.length} URL(s):`, body.slice(0, 400));
      return { ok: false, status: res.status, submitted: 0, error: body.slice(0, 400) };
    }

    console.log(`indexnow: ${res.status}, submitted ${urlList.length} URL(s)`);
    return { ok: true, status: res.status, submitted: urlList.length };
  } catch (err) {
    const error = err?.name === 'AbortError' ? `timed out after ${TIMEOUT_MS}ms` : String(err?.message || err);
    console.error('indexnow: submission failed:', error);
    return { ok: false, status: null, submitted: 0, error };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * The URLs that change when an article is published or edited: the article
 * itself, plus the two feed surfaces that list it.
 *
 * @param {string} slug
 */
export const articleUrls = (slug) => [
  `https://${HOST}/blogs/${slug}`,
  `https://${HOST}/blogs`,
  `https://${HOST}/`,
];
