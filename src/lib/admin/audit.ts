import "server-only";

import { headers } from "next/headers";
import { createAdminClient } from "@/lib/supabase/admin";
import type { Json } from "@/lib/supabase/database.types";

export type AuditAction =
  | "create"
  | "update"
  | "delete"
  | "publish"
  | "unpublish"
  | "login"
  | "logout";

export type AuditEntity = "case_study" | "blog_post" | "contact" | "auth";

interface WriteAuditArgs {
  adminEmail: string;
  action: AuditAction;
  entityType: AuditEntity;
  entityId?: string | null;
  before?: Json | null;
  after?: Json | null;
  ipAddress?: string | null;
}

/** Best-effort client IP from proxy headers (Vercel sets x-forwarded-for). */
export async function getClientIp(): Promise<string | null> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return h.get("x-real-ip");
}

/**
 * Writes one row to admin_audit_log via the service-role client (RLS bypassed —
 * the table has no insert policy by design). Never throws into the caller; a
 * failed audit write must not break the user-facing action.
 */
export async function writeAuditLog(args: WriteAuditArgs): Promise<void> {
  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from("admin_audit_log").insert({
      admin_email: args.adminEmail,
      action: args.action,
      entity_type: args.entityType,
      entity_id: args.entityId ?? null,
      before_data: args.before ?? null,
      after_data: args.after ?? null,
      ip_address: args.ipAddress ?? (await getClientIp()),
    });
    if (error) console.error("[audit] insert failed:", error.message);
  } catch (err) {
    console.error("[audit] unexpected error:", err);
  }
}
