// PostHog product analytics — browser client.
//
// Every helper here is fail-safe: analytics must never break a page render or a
// form submission. When the key is missing (local dev, preview without env vars)
// the module quietly no-ops instead of throwing.
import posthog from 'posthog-js';

const POSTHOG_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

export const isPostHogEnabled = Boolean(POSTHOG_KEY);

const warnInDev = (message, error) => {
  if (import.meta.env.DEV) {
    console.warn(`[posthog] ${message}`, error ?? '');
  }
};

/**
 * Initialize the browser client. Safe to call more than once.
 * @returns {import('posthog-js').PostHog} the (possibly uninitialized) client
 */
export function initPostHog() {
  if (!isPostHogEnabled) {
    warnInDev('VITE_PUBLIC_POSTHOG_KEY is not set — analytics disabled.');
    return posthog;
  }
  if (posthog.__loaded) return posthog;

  try {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      defaults: '2026-01-30',
      // Attaches X-POSTHOG-DISTINCT-ID / X-POSTHOG-SESSION-ID to same-origin
      // fetches so /api/* server events stitch onto the same person.
      __add_tracing_headers: [window.location.host, 'localhost'],
    });
  } catch (error) {
    warnInDev('init failed', error);
  }
  return posthog;
}

/**
 * Capture a product event.
 * @param {string} event snake_case event name
 * @param {Record<string, unknown>} [properties]
 */
export function capture(event, properties = {}) {
  if (!isPostHogEnabled) return;
  try {
    posthog.capture(event, properties);
  } catch (error) {
    warnInDev(`capture("${event}") failed`, error);
  }
}

/**
 * Associate the current session with a known person.
 * @param {string} distinctId stable id — email for this site
 * @param {Record<string, unknown>} [properties]
 */
export function identifyUser(distinctId, properties = {}) {
  if (!isPostHogEnabled || !distinctId) return;
  try {
    posthog.identify(distinctId, properties);
  } catch (error) {
    warnInDev('identify failed', error);
  }
}

/**
 * Report a handled exception to PostHog error tracking.
 * @param {unknown} error
 * @param {Record<string, unknown>} [context]
 */
export function captureError(error, context = {}) {
  if (!isPostHogEnabled) return;
  try {
    posthog.captureException(error instanceof Error ? error : new Error(String(error)), context);
  } catch (captureFailure) {
    warnInDev('captureException failed', captureFailure);
  }
}

export default posthog;
