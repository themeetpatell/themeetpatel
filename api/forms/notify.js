/* global process */
import { Resend } from 'resend';
import { captureServerEvent, captureServerError } from '../_posthog.js';

const DESTINATION_EMAIL = 'meet@biggventures.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_xxxxxxxxx';

const sanitize = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const formatFieldLabel = (field) =>
  field
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]/g, ' ')
    .replace(/^./, (char) => char.toUpperCase())
    .trim();

const renderHtmlRows = (formData) => {
  return Object.entries(formData || {})
    .map(([key, value]) => {
      const formattedValue =
        value && typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value ?? '');

      return `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;vertical-align:top;width:200px;">${sanitize(formatFieldLabel(key))}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;white-space:pre-wrap;">${sanitize(formattedValue)}</td>
        </tr>
      `;
    })
    .join('');
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!RESEND_API_KEY || RESEND_API_KEY === 're_xxxxxxxxx') {
    return res.status(500).json({
      error: 'Resend is not configured. Replace re_xxxxxxxxx with your real API key.',
    });
  }

  const resend = new Resend(RESEND_API_KEY);

  let payload = {};
  try {
    payload = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  } catch {
    return res.status(400).json({ error: 'Invalid JSON payload' });
  }
  const formType = payload.formType || 'unknown';
  const formData = payload.formData || {};
  const pagePath = payload.pagePath || '';
  const pageUrl = payload.pageUrl || '';
  const timestamp = new Date().toISOString();

  if (!Object.keys(formData).length) {
    return res.status(400).json({ error: 'formData is required' });
  }

  const sender = formData.email || formData.from || formData.name || 'Anonymous';
  const subject = `New ${formType} form submission from ${sender}`;

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;max-width:760px;">
      <h2 style="margin:0 0 12px;">New Form Submission</h2>
      <p style="margin:0 0 16px;">A new <strong>${sanitize(formType)}</strong> form was submitted.</p>

      <table style="border-collapse:collapse;width:100%;border:1px solid #e5e7eb;margin-bottom:16px;">
        <tbody>
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;width:200px;">Form Type</td>
            <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;">${sanitize(formType)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;">Submitted At</td>
            <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;">${sanitize(timestamp)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;">Page Path</td>
            <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;">${sanitize(pagePath)}</td>
          </tr>
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;">Page URL</td>
            <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;">${sanitize(pageUrl)}</td>
          </tr>
          ${renderHtmlRows(formData)}
        </tbody>
      </table>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: DESTINATION_EMAIL,
      subject,
      html,
      replyTo: formData.email || undefined,
    });

    // Server-side source of truth for the lead — the client event can be lost
    // to ad blockers or a navigation away right after submit.
    await captureServerEvent(
      req,
      'lead_captured',
      {
        form_type: formType,
        page_path: pagePath,
        page_url: pageUrl,
        has_email: Boolean(formData.email),
        email_id: result?.data?.id || null,
      },
      formData.email || undefined,
    );

    return res.status(200).json({ success: true, id: result?.data?.id || null });
  } catch (error) {
    await captureServerEvent(
      req,
      'lead_capture_failed',
      { form_type: formType, page_path: pagePath, error_message: error?.message || 'unknown' },
      formData.email || undefined,
    );
    await captureServerError(req, error, { endpoint: 'forms/notify', form_type: formType });

    return res.status(500).json({
      error: error?.message || 'Failed to send email',
    });
  }
}