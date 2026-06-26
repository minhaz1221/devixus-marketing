import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { writeAuditLog } from "@/lib/admin/audit";

export async function POST(request: NextRequest) {
  const { origin } = new URL(request.url);
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.email) {
    await writeAuditLog({
      adminEmail: user.email,
      action: "logout",
      entityType: "auth",
      entityId: user.id,
    });
  }

  await supabase.auth.signOut();

  return NextResponse.redirect(`${origin}/admin/login`, { status: 303 });
}
