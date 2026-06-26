import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isAdminEmail } from "@/lib/admin/config";
import { Sidebar } from "@/components/admin/Sidebar";
import { Topbar } from "@/components/admin/Topbar";

export default async function AdminAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminEmail(user.email)) {
    redirect("/admin/login");
  }

  const { count } = await supabase
    .from("contact_submissions")
    .select("*", { count: "exact", head: true })
    .eq("status", "new");

  const newCount = count ?? 0;
  const email = user.email!;

  return (
    <>
      <Sidebar userEmail={email} newCount={newCount} />
      <div className="md:pl-60">
        <Topbar userEmail={email} newCount={newCount} />
        <main className="p-6 md:p-8">{children}</main>
      </div>
    </>
  );
}
