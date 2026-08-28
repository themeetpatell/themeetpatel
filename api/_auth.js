import { createHmac, timingSafeEqual } from 'crypto';

/**
 * Admin auth secrets. Every one of these must be present in the environment.
 * They used to fall back to shared defaults, which meant a missing variable
 * silently turned into a valid login and a forgeable token — so this now
 * fails closed and says which variable is absent.
 */
export function authConfigError() {
  const missing = ['ADMIN_EMAIL', 'ADMIN_PASSWORD', 'JWT_SECRET'].filter(
    (key) => !process.env[key]
  );
  return missing.length ? `missing ${missing.join(', ')}` : null;
}

const secret = () => {
  const value = process.env.JWT_SECRET;
  if (!value) throw new Error('JWT_SECRET is not configured');
  return value;
};

/**
 * Constant-time equality for arbitrary strings. Hashing first gives both sides
 * a fixed width, so neither length nor content leaks through comparison time.
 */
export function safeEqual(a, b) {
  const digest = (v) => createHmac('sha256', 'credential-compare').update(String(v ?? '')).digest();
  return timingSafeEqual(digest(a), digest(b));
}

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
    // secret() throws when JWT_SECRET is absent; the catch below turns that
    // into a rejected token rather than an accepted one.
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
