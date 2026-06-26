import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { Database } from "./database.types";

/**
 * Refreshes the Supabase auth session on every matched request and writes the
 * rotated cookies onto the response. Follows the official @supabase/ssr Next.js
 * pattern: the `supabaseResponse` object must be returned as-is to keep the
 * browser and server sessions in sync.
 *
 * Route protection itself lives in src/app/admin/layout.tsx — this helper only
 * keeps the session fresh.
 */
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Fail safe: if Supabase env is not configured (e.g. before Vercel envs are
  // set), skip session refresh rather than throwing — the public site keeps
  // working and only the admin (which needs auth) is affected.
  if (!url || !anonKey) return supabaseResponse;

  const supabase = createServerClient<Database>(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value),
        );
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options),
        );
      },
    },
  });

  // IMPORTANT: do not run code between createServerClient and getUser() —
  // it refreshes the session and a gap can cause random logouts.
  await supabase.auth.getUser();

  return supabaseResponse;
}
