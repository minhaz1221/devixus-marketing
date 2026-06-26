import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { isAdminEmail } from "@/lib/admin/config";
import { writeAuditLog } from "@/lib/admin/audit";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  const failure = NextResponse.redirect(
    `${origin}/admin/login?error=invalid_link`,
  );

  if (!code) return failure;

  const supabase = await createClient();
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error || !data.user) return failure;

  // Only the configured admin may hold a session.
  if (!isAdminEmail(data.user.email)) {
    await supabase.auth.signOut();
    return failure;
  }

  await writeAuditLog({
    adminEmail: data.user.email!,
    action: "login",
    entityType: "auth",
    entityId: data.user.id,
  });

  return NextResponse.redirect(`${origin}/admin`);
}
