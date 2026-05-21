"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
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
        minWidth: "580px",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        background: "var(--pulse)",
        borderRadius: "999px",
        padding: "6px 6px 6px 20px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      {NAV_LINKS.filter((l) => l.label !== "Contact").map((link) => (
        <Link
          key={link.href}
          href={link.href}
          style={{
            color: "rgba(255,255,255,0.75)",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
            padding: "6px 14px",
            borderRadius: "999px",
            transition: "color 0.15s, background 0.15s",
          }}
        >
          {link.label}
        </Link>
      ))}

      {/* Spinning border CTA */}
      <div
        className="spinning-border"
        style={{
          padding: "2px",
          borderRadius: "999px",
          marginLeft: "4px",
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
    </div>
  );
}
