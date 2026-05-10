/* global process */
import { createHmac, timingSafeEqual } from 'crypto';

const secret = () => process.env.JWT_SECRET || 'dev-only-secret-change-in-prod';

export function createToken(email) {
  const expiry = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const payload = `${email}:${expiry}`;
  const sig = createHmac('sha256', secret()).update(payload).digest('hex');
  return Buffer.from(`${payload}:${sig}`).toString('base64url');
}

export function verifyToken(token) {
  try {
    const decoded = Buffer.from(token, 'base64url').toString();
    const parts = decoded.split(':');
    if (parts.length < 3) return null;
    const sig = parts.pop();
    const [email, expiry] = parts;
    if (Date.now() > Number(expiry)) return null;
    const payload = `${email}:${expiry}`;
    const expected = createHmac('sha256', secret()).update(payload).digest('hex');
    const sigBuf = Buffer.from(sig, 'hex');
    const expBuf = Buffer.from(expected, 'hex');
    if (sigBuf.length !== expBuf.length) return null;
    if (!timingSafeEqual(sigBuf, expBuf)) return null;
    return { email };
  } catch {
    return null;
  }
}

export function requireAuth(req, res) {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if (!token || !verifyToken(token)) {
    res.status(401).json({ error: 'Unauthorized' });
    return false;
  }
  return true;
}
