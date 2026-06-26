"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { ADMIN_NAV, type AdminNavItem } from "@/lib/admin/nav";
import { MakersCross } from "./MakersCross";

function isActive(pathname: string, href: string) {
  if (href === "/admin") return pathname === "/admin";
  return pathname === href || pathname.startsWith(href + "/");
}

function NavList({
  pathname,
  newCount,
  onNavigate,
}: {
  pathname: string;
  newCount: number;
  onNavigate?: () => void;
}) {
  return (
    <nav className="flex-1 space-y-1 px-3 py-4">
      {ADMIN_NAV.map((item: AdminNavItem) => {
        const active = isActive(pathname, item.href);
        const Icon = item.icon;
        const showBadge = item.badge === "contactsNew" && newCount > 0;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-md border-l-2 px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "border-[var(--sidebar-active-border)] bg-[var(--sidebar-active-bg)] text-white"
                : "border-transparent text-white/60 hover:bg-white/5 hover:text-white",
            )}
          >
            <Icon className="size-4 shrink-0" />
            <span className="flex-1">{item.label}</span>
            {showBadge && (
              <span className="grid min-w-5 place-items-center rounded-full bg-[var(--accent)] px-1.5 text-xs font-semibold text-[var(--accent-foreground)]">
                {newCount}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export interface SidebarContentProps {
  userEmail: string;
  newCount: number;
  onNavigate?: () => void;
}

export function SidebarContent({
  userEmail,
  newCount,
  onNavigate,
}: SidebarContentProps) {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col bg-[var(--sidebar)] text-[var(--sidebar-foreground)]">
      <div className="flex items-center gap-2 px-5 py-5">
        <span className="grid size-8 place-items-center rounded-lg bg-white/5">
          <MakersCross className="h-4 w-auto" />
        </span>
        <span className="text-base font-semibold tracking-tight">Admin</span>
      </div>

      <NavList pathname={pathname} newCount={newCount} onNavigate={onNavigate} />

      <div className="border-t border-[var(--sidebar-border)] p-3">
        <p className="truncate px-2 pb-2 text-xs text-white/50" title={userEmail}>
          {userEmail}
        </p>
        <form action="/admin/auth/logout" method="post">
          <button
            type="submit"
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            <LogOut className="size-4" />
            Log out
          </button>
        </form>
      </div>
    </div>
  );
}

/** Desktop fixed rail (hidden on mobile). */
export function Sidebar(props: { userEmail: string; newCount: number }) {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-60 border-r border-[var(--sidebar-border)] md:block">
      <SidebarContent {...props} />
    </aside>
  );
}
