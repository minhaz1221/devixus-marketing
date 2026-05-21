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
      style={{
        color: "rgba(255,255,255,0.8)",
        textDecoration: "none",
        fontSize: "15px",
        fontWeight: 600,
        padding: "13px 22px",
        borderRadius: "999px",
        background: hovered ? "rgba(255,255,255,0.12)" : "transparent",
        transition: "background 0.15s",
        whiteSpace: "nowrap",
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
      const heroHeight =
        document.getElementById("hero")?.offsetHeight ?? 600;
      setVisible(window.scrollY > heroHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      style={{
        position: "fixed",
        bottom: "32px",
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? "0" : "20px"})`,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        background: "var(--pulse)",
        borderRadius: "999px",
        padding: "6px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      {LEFT_LINKS.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}

      {/* Spinning border CTA — center */}
      <div
        className="spinning-border"
        style={{
          padding: "2px",
          borderRadius: "999px",
          margin: "0 4px",
          flexShrink: 0,
        }}
      >
        <Link
          href="#contact"
          style={{
            display: "block",
            padding: "9px 20px",
            borderRadius: "999px",
            background: "var(--ink-2)",
            color: "var(--glow)",
            fontSize: "14px",
            fontWeight: 700,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Start a Project
        </Link>
      </div>

      {RIGHT_LINKS.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </div>
  );
}
