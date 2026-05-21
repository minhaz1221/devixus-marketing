import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { headers } from "next/headers";

// ── Rate limiter (in-memory, resets hourly per IP) ──────────────────────────
interface RateEntry { count: number; resetAt: number }
const rateLimitMap = new Map<string, RateEntry>();

function isAllowed(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 3_600_000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

// ── Validation schema ────────────────────────────────────────────────────────
const schema = z.object({
  name:    z.string().min(1, "Name is required").max(100),
  email:   z.string().email("Invalid email address"),
  whatsapp: z.string().max(30).optional(),
  budget:  z.string().max(50).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  website: z.string().optional(), // honeypot — bots fill this in
});

// ── HTML builders ────────────────────────────────────────────────────────────
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function notificationHtml(data: {
  name: string;
  email: string;
  whatsapp?: string;
  budget?: string;
  message: string;
}): string {
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f5f5;">
<div style="max-width:600px;margin:32px auto;">
  <div style="background:#5C4BFF;padding:28px 32px;border-radius:10px 10px 0 0;">
    <h1 style="color:#C9FF3B;margin:0;font-size:22px;font-weight:700;">New project brief</h1>
    <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:14px;">from devixus.com contact form</p>
  </div>
  <div style="background:#fff;padding:32px;border:1px solid #E4E4E7;border-top:none;border-radius:0 0 10px 10px;">
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <tr><td style="padding:10px 0;color:#71717A;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;width:130px;border-bottom:1px solid #f0f0f0;">Name</td>
          <td style="padding:10px 0;color:#0A0A0B;font-size:15px;border-bottom:1px solid #f0f0f0;">${esc(data.name)}</td></tr>
      <tr><td style="padding:10px 0;color:#71717A;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid #f0f0f0;">Email</td>
          <td style="padding:10px 0;color:#0A0A0B;font-size:15px;border-bottom:1px solid #f0f0f0;"><a href="mailto:${esc(data.email)}" style="color:#5C4BFF;">${esc(data.email)}</a></td></tr>
      ${data.whatsapp ? `<tr><td style="padding:10px 0;color:#71717A;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid #f0f0f0;">WhatsApp</td>
          <td style="padding:10px 0;color:#0A0A0B;font-size:15px;border-bottom:1px solid #f0f0f0;">${esc(data.whatsapp)}</td></tr>` : ""}
      ${data.budget ? `<tr><td style="padding:10px 0;color:#71717A;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;">Budget</td>
          <td style="padding:10px 0;color:#5C4BFF;font-size:15px;font-weight:700;">${esc(data.budget)}</td></tr>` : ""}
    </table>
    <div style="background:#F5F4F0;border-left:4px solid #5C4BFF;border-radius:0 8px 8px 0;padding:20px 24px;">
      <p style="margin:0 0 8px;color:#71717A;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;">Project Details</p>
      <p style="margin:0;color:#0A0A0B;font-size:15px;line-height:1.65;white-space:pre-wrap;">${esc(data.message)}</p>
    </div>
  </div>
</div>
</body></html>`;
}

function confirmationHtml(data: { name: string }): string {
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f5f5;">
<div style="max-width:600px;margin:32px auto;">
  <div style="background:#5C4BFF;padding:28px 32px;border-radius:10px 10px 0 0;">
    <h1 style="color:#C9FF3B;margin:0;font-size:22px;font-weight:700;">Got it, ${esc(data.name)} ✓</h1>
    <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:14px;">We've received your project brief.</p>
  </div>
  <div style="background:#fff;padding:32px;border:1px solid #E4E4E7;border-top:none;border-radius:0 0 10px 10px;">
    <p style="color:#0A0A0B;font-size:16px;line-height:1.65;margin:0 0 20px;">
      Thanks for reaching out. Every brief gets read personally — you'll hear back within <strong>24 hours</strong>.
    </p>
    <p style="color:#71717A;font-size:14px;line-height:1.65;margin:0 0 28px;">
      In the meantime, browse our work at <a href="https://devixus.com" style="color:#5C4BFF;">devixus.com</a>
      or try our drop-in widgets at <a href="https://widgets.devixus.com" style="color:#5C4BFF;">widgets.devixus.com</a>.
    </p>
    <div style="border-top:1px solid #E4E4E7;padding-top:24px;display:flex;align-items:center;gap:12px;">
      <div style="width:40px;height:40px;border-radius:50%;background:#5C4BFF;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="color:#C9FF3B;font-weight:700;font-size:16px;">D</span>
      </div>
      <div>
        <p style="margin:0;color:#0A0A0B;font-size:14px;font-weight:600;">Devixus Team</p>
        <p style="margin:0;color:#71717A;font-size:13px;">Chittagong, Bangladesh · <a href="mailto:contact@devixus.com" style="color:#5C4BFF;">contact@devixus.com</a></p>
      </div>
    </div>
  </div>
</div>
</body></html>`;
}

// ── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 503 }
    );
  }

  // Parse body
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Validate
  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Validation failed." },
      { status: 422 }
    );
  }

  const { name, email, whatsapp, budget, message, website } = parsed.data;

  // Honeypot — silent discard
  if (website) {
    return NextResponse.json({ success: true });
  }

  // IP-based rate limit
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!isAllowed(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait an hour and try again." },
      { status: 429 }
    );
  }

  // Send emails
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await Promise.all([
      resend.emails.send({
        // Update `from` to a verified domain in production
        from: "Devixus <contact@devixus.com>",
        to: "contact@devixus.com",
        subject: `New project brief from ${name}`,
        html: notificationHtml({ name, email, whatsapp, budget, message }),
      }),
      resend.emails.send({
        from: "Devixus <contact@devixus.com>",
        to: email,
        subject: `We got your brief, ${name}`,
        html: confirmationHtml({ name }),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please email us at contact@devixus.com." },
      { status: 500 }
    );
  }
}
