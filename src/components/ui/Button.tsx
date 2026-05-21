import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center px-6 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-95";

  const styles =
    variant === "primary"
      ? { background: "var(--glow)", color: "var(--ink)" }
      : {
          border: "2px solid rgba(255,255,255,0.3)",
          color: "#fff",
        };

  return (
    <Link href={href} className={`${base} ${className}`} style={styles}>
      {children}
    </Link>
  );
}
