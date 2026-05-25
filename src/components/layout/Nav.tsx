"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

function MakersCross() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <line x1="3" y1="31" x2="31" y2="3" stroke="#C9FF3B" strokeWidth="6" strokeLinecap="round" />
      <line x1="3" y1="3" x2="31" y2="31" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <>
      {/* ── Sticky top bar ── */}
      <nav
        className="sticky top-0 z-50 flex items-center"
        style={{
          background: "var(--pulse)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          height: "64px",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 w-full flex items-center justify-between">
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
          >
            <MakersCross />
            <span
              style={{
                fontFamily: "var(--font-space)",
                fontWeight: 700,
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "-0.3px",
              }}
            >
              Devixus
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 500,
                  transition: "color 0.15s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              style={{
                background: "var(--glow)",
                color: "var(--ink)",
                padding: "10px 22px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Start a project →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              width: "44px",
              height: "44px",
            }}
          >
            <Menu size={22} color="white" strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* ── Full-screen mobile overlay ── */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--ink)",
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            animation: "fadeInOverlay 0.2s ease-out",
          }}
        >
          {/* Overlay header row */}
          <div
            style={{
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 16px",
              flexShrink: 0,
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <Link
              href="/"
              onClick={close}
              style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
            >
              <MakersCross />
              <span
                style={{
                  fontFamily: "var(--font-space)",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "20px",
                  letterSpacing: "-0.3px",
                }}
              >
                Devixus
              </span>
            </Link>
            <button
              onClick={close}
              aria-label="Close navigation menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={22} color="white" strokeWidth={2} />
            </button>
          </div>

          {/* Nav links */}
          <div style={{ flex: 1, padding: "32px 24px", display: "flex", flexDirection: "column", overflowY: "auto" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                style={{
                  display: "block",
                  fontFamily: "var(--font-bricolage)",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 8vw, 40px)",
                  letterSpacing: "-0.03em",
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--glow)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"; }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={close}
              style={{
                display: "block",
                marginTop: "32px",
                background: "var(--glow)",
                color: "var(--ink)",
                padding: "16px 24px",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                textAlign: "center",
                minHeight: "52px",
                lineHeight: "20px",
              }}
            >
              Start a project →
            </Link>
          </div>

          {/* Bottom secondary links */}
          <div
            style={{
              padding: "20px 24px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              flexShrink: 0,
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", fontWeight: 400 }}>Privacy</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", fontWeight: 400 }}>Terms</span>
          </div>
        </div>
      )}
    </>
  );
}
