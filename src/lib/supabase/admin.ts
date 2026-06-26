import "server-only";

import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

/**
 * Privileged Supabase client using the SERVICE ROLE key — bypasses RLS.
 *
 * ⚠️ SERVER ONLY. Never import this module from a `'use client'` file or any
 * module that reaches the browser bundle. The `server-only` import above turns
 * such a mistake into a build error. Use strictly for trusted server work such
 * as writing the admin audit log.
 */
export function createAdminClient() {
  return createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}
