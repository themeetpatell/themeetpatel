// PostHog product analytics — server-side (Vercel Functions).
//
// Serverless functions can freeze the moment a response is returned, so every
// capture here is flushed before the handler resolves. Like the browser helper,
// this module no-ops when the key is missing instead of failing the request.
import { PostHog } from 'posthog-node';

const POSTHOG_KEY = process.env.POSTHOG_API_KEY || process.env.VITE_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.POSTHOG_HOST || process.env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

const DISTINCT_ID_HEADER = 'x-posthog-distinct-id';
const SESSION_ID_HEADER = 'x-posthog-session-id';

export const isPostHogEnabled = Boolean(POSTHOG_KEY);

let client = null;

const getClient = () => {
  if (!isPostHogEnabled) return null;
  if (!client) {
    // flushAt/flushInterval of 1/0 send on capture — batching across a frozen
    // serverless instance would drop events.
    client = new PostHog(POSTHOG_KEY, {
      host: POSTHOG_HOST,
      flushAt: 1,
      flushInterval: 0,
    });
  }
  return client;
};

/**
 * Read the browser's PostHog identity off the request so client and server
 * events land on the same person and session.
 * @param {import('http').IncomingMessage} req
 * @returns {{ distinctId?: string, sessionId?: string }}
 */
export function getPostHogIdentity(req) {
  const headers = req?.headers || {};
  return {
    distinctId: headers[DISTINCT_ID_HEADER] || undefined,
    sessionId: headers[SESSION_ID_HEADER] || undefined,
  };
}

/**
 * Capture a server-side event and flush it before the function returns.
 * @param {import('http').IncomingMessage} req request the event belongs to
 * @param {string} event snake_case event name
 * @param {Record<string, unknown>} [properties]
 * @param {string} [fallbackDistinctId] used when the browser sent no identity
 */
export async function captureServerEvent(req, event, properties = {}, fallbackDistinctId) {
  const posthog = getClient();
  if (!posthog) return;

  const { distinctId, sessionId } = getPostHogIdentity(req);
  const resolvedDistinctId = distinctId || fallbackDistinctId;

  try {
    posthog.capture({
      distinctId: resolvedDistinctId,
      event,
      properties: {
        ...properties,
        $session_id: sessionId,
        // Anonymous server events shouldn't create person profiles.
        ...(resolvedDistinctId ? {} : { $process_person_profile: false }),
      },
    });
    await posthog.flush();
  } catch {
    // Analytics is best-effort — never fail the request because of it.
  }
}

/**
 * Report a server-side exception to PostHog error tracking.
 * @param {import('http').IncomingMessage} req
 * @param {unknown} error
 * @param {Record<string, unknown>} [context]
 */
export async function captureServerError(req, error, context = {}) {
  const posthog = getClient();
  if (!posthog) return;

  const { distinctId } = getPostHogIdentity(req);
  try {
    posthog.captureException(
      error instanceof Error ? error : new Error(String(error)),
      distinctId,
      context,
    );
    await posthog.flush();
  } catch {
    // Best-effort.
  }
}
