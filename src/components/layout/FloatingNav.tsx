"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const LEFT_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
];

const RIGHT_LINKS = [
  { label: "Widgets", href: "#widgets" },
  { label: "Contact", href: "#contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-[11px] md:text-[15px] px-2 py-2 md:px-[22px] md:py-[13px] rounded-full whitespace-nowrap transition-colors"
      style={{
        color: "rgba(255,255,255,0.8)",
        textDecoration: "none",
        fontWeight: 600,
        background: hovered ? "rgba(255,255,255,0.12)" : "transparent",
        transition: "background 0.15s",
        display: "block",
        minHeight: "36px",
        lineHeight: "20px",
      }}
    >
      {label}
    </Link>
  );
}

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 600;
      setVisible(window.scrollY > heroHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className="fixed z-50 left-1/2 bottom-4 md:bottom-8 flex items-center rounded-full"
      style={{
        transform: `translateX(-50%) translateY(${visible ? "0" : "20px"})`,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
        background: "var(--pulse)",
        border: "1px solid rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px rgba(92,75,255,0.35), 0 2px 8px rgba(0,0,0,0.3)",
        padding: "4px",
        maxWidth: "calc(100vw - 24px)",
        gap: "2px",
      }}
    >
      {LEFT_LINKS.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}

      {/* CTA — Glow background */}
      <div
        className="spinning-border md:block"
        style={{ padding: "2px", borderRadius: "999px", margin: "0 2px", flexShrink: 0 }}
      >
        <Link
          href="#contact"
          className="text-[11px] md:text-[14px] px-3 md:px-5 py-1.5 md:py-[9px] rounded-full font-bold whitespace-nowrap block"
          style={{
            background: "var(--ink-2)",
            color: "var(--glow)",
            textDecoration: "none",
            minHeight: "32px",
            lineHeight: "20px",
          }}
        >
          <span className="hidden md:inline">Start a Project</span>
          <span className="md:hidden">Start →</span>
        </Link>
      </div>

      {RIGHT_LINKS.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </div>
  );
}
