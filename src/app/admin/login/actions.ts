"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { isAdminEmail, SITE_URL } from "@/lib/admin/config";
import { rateLimit, sweepExpired } from "@/lib/admin/rate-limit";

const GENERIC_OK =
  "If that email is authorized, a sign-in link is on the way. Check your inbox.";

const schema = z.object({
  email: z.string().email(),
});

export interface LoginState {
  status: "idle" | "sent" | "error";
  message: string;
}

async function clientIp(): Promise<string> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return h.get("x-real-ip") ?? "unknown";
}

export async function requestMagicLink(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  sweepExpired();

  // 5 attempts / 15 minutes / IP.
  const ip = await clientIp();
  const limit = rateLimit(`login:${ip}`, 5, 15 * 60 * 1000);
  if (!limit.ok) {
    return {
      status: "error",
      message: "Too many attempts. Please try again in a little while.",
    };
  }

  const parsed = schema.safeParse({ email: formData.get("email") });
  if (!parsed.success) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  const email = parsed.data.email.trim().toLowerCase();

  // Authorise BEFORE touching Supabase. Always return the generic message so we
  // never leak whether an email is the admin / exists.
  if (!isAdminEmail(email)) {
    return { status: "sent", message: GENERIC_OK };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: `${SITE_URL}/admin/auth/callback` },
  });

  if (error) {
    console.error("[login] signInWithOtp failed:", error.message);
    return {
      status: "error",
      message: "Something went wrong sending the link. Please try again.",
    };
  }

  return { status: "sent", message: GENERIC_OK };
}
