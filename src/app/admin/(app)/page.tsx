import type { Metadata } from "next";
import {
  FolderKanban,
  PenLine,
  Inbox,
  Image as ImageIcon,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { StatCard } from "@/components/admin/StatCard";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = { title: "Dashboard" };

function startOfMonthISO(): string {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
}

function formatBytes(bytes: number): string {
  if (bytes <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(
    units.length - 1,
    Math.floor(Math.log(bytes) / Math.log(1024)),
  );
  return `${(bytes / 1024 ** i).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

const relativeTime = (iso: string): string => {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.round(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.round(hrs / 24)}d ago`;
};

export default async function DashboardPage() {
  const supabase = await createClient();

  const [
    csTotal,
    csPublished,
    bpTotal,
    bpPublished,
    contactsNew,
    contactsRead,
    contactsMonth,
    media,
    activity,
  ] = await Promise.all([
    supabase.from("case_studies").select("*", { count: "exact", head: true }),
    supabase
      .from("case_studies")
      .select("*", { count: "exact", head: true })
      .eq("published", true),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
    supabase
      .from("blog_posts")
      .select("*", { count: "exact", head: true })
      .eq("published", true),
    supabase
      .from("contact_submissions")
      .select("*", { count: "exact", head: true })
      .eq("status", "new"),
    supabase
      .from("contact_submissions")
      .select("*", { count: "exact", head: true })
      .eq("status", "read"),
    supabase
      .from("contact_submissions")
      .select("*", { count: "exact", head: true })
      .gte("created_at", startOfMonthISO()),
    supabase.storage.from("admin-media").list("", { limit: 1000 }),
    supabase
      .from("admin_audit_log")
      .select("id, admin_email, action, entity_type, entity_id, created_at")
      .order("created_at", { ascending: false })
      .limit(10),
  ]);

  const caseTotal = csTotal.count ?? 0;
  const casePublished = csPublished.count ?? 0;
  const blogTotal = bpTotal.count ?? 0;
  const blogPublished = bpPublished.count ?? 0;
  const blogDrafts = blogTotal - blogPublished;
  const newCount = contactsNew.count ?? 0;
  const readCount = contactsRead.count ?? 0;
  const monthCount = contactsMonth.count ?? 0;

  const mediaFiles = (media.data ?? []).filter((f) => f.id !== null);
  const mediaCount = mediaFiles.length;
  const mediaBytes = mediaFiles.reduce(
    (sum, f) => sum + (f.metadata?.size ?? 0),
    0,
  );

  const events = activity.data ?? [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Overview of content, contacts, and media.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Case Studies"
          href="/admin/case-studies"
          icon={FolderKanban}
          primary={{ value: caseTotal, label: "total" }}
          secondary={[{ value: casePublished, label: "published" }]}
        />
        <StatCard
          title="Blog Posts"
          href="/admin/blog"
          icon={PenLine}
          primary={{ value: blogTotal, label: "total" }}
          secondary={[
            { value: blogPublished, label: "published" },
            { value: blogDrafts, label: "drafts" },
          ]}
        />
        <StatCard
          title="Contacts"
          href="/admin/contacts"
          icon={Inbox}
          primary={{ value: newCount, label: "new" }}
          secondary={[
            { value: readCount, label: "read" },
            { value: monthCount, label: "this month" },
          ]}
        />
        <StatCard
          title="Media"
          href="/admin/media"
          icon={ImageIcon}
          primary={{ value: mediaCount, label: "files" }}
          secondary={[{ value: formatBytes(mediaBytes), label: "used" }]}
        />
      </div>

      <Card className="p-5">
        <h2 className="text-sm font-semibold text-foreground">Recent activity</h2>
        {events.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">
            No activity yet. Actions you take will be logged here.
          </p>
        ) : (
          <ul className="mt-3 divide-y divide-[var(--border)]">
            {events.map((e) => (
              <li
                key={e.id}
                className="flex items-center justify-between gap-4 py-2.5 text-sm"
              >
                <span className="flex min-w-0 items-center gap-2">
                  <span className="rounded bg-[var(--muted)] px-1.5 py-0.5 text-xs font-medium text-foreground">
                    {e.action}
                  </span>
                  <span className="truncate text-muted-foreground">
                    {e.entity_type}
                    {e.entity_id ? ` · ${e.entity_id}` : ""}
                  </span>
                </span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {relativeTime(e.created_at)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
