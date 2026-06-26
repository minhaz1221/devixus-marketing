"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { titleForPath } from "@/lib/admin/nav";
import { SidebarContent } from "./Sidebar";

export function Topbar({
  userEmail,
  newCount,
}: {
  userEmail: string;
  newCount: number;
}) {
  const pathname = usePathname();
  const title = titleForPath(pathname);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-[var(--border)] bg-[var(--background)]/80 px-4 backdrop-blur md:px-8">
      {/* Mobile drawer trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          className="grid size-9 place-items-center rounded-md text-foreground hover:bg-[var(--muted)] md:hidden"
          aria-label="Open navigation"
        >
          <Menu className="size-5" />
        </SheetTrigger>
        <SheetContent side="left" className="w-60 border-0 p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SidebarContent
            userEmail={userEmail}
            newCount={newCount}
            onNavigate={() => setOpen(false)}
          />
        </SheetContent>
      </Sheet>

      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Admin</span>
        <span className="text-muted-foreground/40">/</span>
        <span className="font-medium text-foreground">{title}</span>
      </nav>
    </header>
  );
}
