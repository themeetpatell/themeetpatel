/* global process */
import { createToken } from '../_auth.js';
import { captureServerEvent } from '../_posthog.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body || {};
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    await captureServerEvent(req, 'admin_login_rejected', {
      attempted_email: email || null,
      reason: 'invalid_credentials',
    });
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  await captureServerEvent(req, 'admin_login_succeeded', { email }, email);
  res.json({ token: createToken(email) });
}
