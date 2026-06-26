/** Single source of truth for admin identity + URLs. */

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "";

export const SITE_URL =
  process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Case-insensitive check that an email is THE authorised admin. */
export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email || !ADMIN_EMAIL) return false;
  return email.trim().toLowerCase() === ADMIN_EMAIL.trim().toLowerCase();
}
