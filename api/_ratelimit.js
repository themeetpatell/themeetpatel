/**
 * In-process sliding-window rate limiter.
 *
 * Scope, stated honestly: the counters live in the function instance's memory.
 * Fluid Compute reuses instances across requests, so a limit holds within an
 * instance and resets when one is recycled. This is NOT a distributed limit —
 * an attacker spread across instances gets more attempts than the quota
 * suggests. It exists to make credential stuffing and email flooding
 * expensive, not impossible. The durable version is Vercel Firewall rate
 * limiting, configured on the project; this does not replace it.
 *
 * Why a module and not a function: the project sits at the 13-function
 * ceiling, above which the deploy fails at "Deploying outputs…" with nothing
 * in the build log. Files under api/ prefixed with `_` are modules and are not
 * counted.
 */

/** key -> array of hit timestamps, newest last. */
const buckets = new Map();

/** Above this, sweep expired keys before inserting. Bounds memory per instance. */
const SWEEP_THRESHOLD = 5000;

/**
 * Best-effort client identity. On Vercel the platform sets x-forwarded-for and
 * strips any client-supplied copy, so the first entry is the real edge client.
 */
export function clientKey(req) {
  const forwarded = req.headers?.['x-forwarded-for'];
  const first = (Array.isArray(forwarded) ? forwarded[0] : String(forwarded ?? ''))
    .split(',')[0]
    .trim();
  return first || req.headers?.['x-real-ip'] || req.socket?.remoteAddress || 'unknown';
}

function sweep(cutoffByWindow) {
  for (const [key, hits] of buckets) {
    const fresh = hits.filter((t) => t > cutoffByWindow);
    if (fresh.length) buckets.set(key, fresh);
    else buckets.delete(key);
  }
}

/**
 * Records a hit and reports whether it is within quota.
 * @returns {{allowed: boolean, remaining: number, retryAfter: number}} retryAfter in seconds.
 */
export function rateLimit(req, { name, limit, windowMs }) {
  const now = Date.now();
  const cutoff = now - windowMs;

  if (buckets.size > SWEEP_THRESHOLD) sweep(cutoff);

  const key = `${name}:${clientKey(req)}`;
  const hits = (buckets.get(key) || []).filter((t) => t > cutoff);

  if (hits.length >= limit) {
    buckets.set(key, hits);
    const retryAfter = Math.max(1, Math.ceil((hits[0] + windowMs - now) / 1000));
    return { allowed: false, remaining: 0, retryAfter };
  }

  hits.push(now);
  buckets.set(key, hits);
  return { allowed: true, remaining: limit - hits.length, retryAfter: 0 };
}

/**
 * Applies a limit and writes the 429 itself, mirroring requireAuth's shape:
 * returns false when the caller should stop.
 */
export function enforceRateLimit(req, res, options) {
  const { allowed, remaining, retryAfter } = rateLimit(req, options);

  res.setHeader('X-RateLimit-Limit', String(options.limit));
  res.setHeader('X-RateLimit-Remaining', String(remaining));

  if (!allowed) {
    res.setHeader('Retry-After', String(retryAfter));
    res.status(429).json({ error: 'Too many requests. Please try again shortly.' });
    return false;
  }
  return true;
}

/** Test seam. Never called by a handler. */
export function __resetRateLimits() {
  buckets.clear();
}
