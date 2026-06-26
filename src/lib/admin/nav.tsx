import {
  LayoutDashboard,
  FolderKanban,
  Inbox,
  PenLine,
  Image as ImageIcon,
  ScrollText,
  type LucideIcon,
} from "lucide-react";

export interface AdminNavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  /** When set, the sidebar shows the matching count badge. */
  badge?: "contactsNew";
}

export const ADMIN_NAV: AdminNavItem[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Case Studies", href: "/admin/case-studies", icon: FolderKanban },
  { label: "Contacts", href: "/admin/contacts", icon: Inbox, badge: "contactsNew" },
  { label: "Blog", href: "/admin/blog", icon: PenLine },
  { label: "Media", href: "/admin/media", icon: ImageIcon },
  { label: "Audit Log", href: "/admin/audit-log", icon: ScrollText },
];

/** Resolve the human title for the deepest matching nav item. */
export function titleForPath(pathname: string): string {
  const match = [...ADMIN_NAV]
    .filter((i) => pathname === i.href || pathname.startsWith(i.href + "/"))
    .sort((a, b) => b.href.length - a.href.length)[0];
  return match?.label ?? "Admin";
}
