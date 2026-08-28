import { createToken, authConfigError, safeEqual } from '../_auth.js';
import { enforceRateLimit } from '../_ratelimit.js';
import { captureServerEvent } from '../_posthog.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // Password attempts were unbounded. Applied before the credential check so a
  // throttled caller learns nothing about whether the email exists.
  if (!enforceRateLimit(req, res, { name: 'admin-login', limit: 8, windowMs: 15 * 60 * 1000 })) {
    return;
  }

  // Without these, an empty body used to match the equally-empty env vars and
  // mint a real admin token. Refuse to authenticate at all instead.
  const configError = authConfigError();
  if (configError) {
    console.error(`admin login unavailable: ${configError}`);
    return res.status(503).json({ error: 'Admin authentication is not configured' });
  }

  const { email, password } = req.body || {};
  const emailOk = safeEqual(email, process.env.ADMIN_EMAIL);
  const passwordOk = safeEqual(password, process.env.ADMIN_PASSWORD);

  if (!emailOk || !passwordOk) {
    await captureServerEvent(req, 'admin_login_rejected', {
      attempted_email: email || null,
      reason: 'invalid_credentials',
    });
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  await captureServerEvent(req, 'admin_login_succeeded', { email }, email);
  res.json({ token: createToken(email) });
}
