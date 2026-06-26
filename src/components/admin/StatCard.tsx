import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export interface StatCardProps {
  title: string;
  href: string;
  icon: LucideIcon;
  primary: { value: number | string; label: string };
  secondary?: { value: number | string; label: string }[];
}

export function StatCard({
  title,
  href,
  icon: Icon,
  primary,
  secondary = [],
}: StatCardProps) {
  return (
    <Link href={href} className="group block">
      <Card className="h-full gap-0 p-5 transition-colors group-hover:border-[var(--primary)]/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Icon className="size-4 text-[var(--primary)]" />
            {title}
          </div>
          <ArrowUpRight className="size-4 text-muted-foreground/40 transition-colors group-hover:text-[var(--primary)]" />
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-3xl font-semibold tracking-tight text-foreground">
            {primary.value}
          </span>
          <span className="text-sm text-muted-foreground">{primary.label}</span>
        </div>

        {secondary.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            {secondary.map((s) => (
              <span key={s.label}>
                <span className="font-semibold text-foreground">{s.value}</span>{" "}
                {s.label}
              </span>
            ))}
          </div>
        )}
      </Card>
    </Link>
  );
}
