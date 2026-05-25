"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

function MakersCross() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="3"
        y1="31"
        x2="31"
        y2="3"
        stroke="#C9FF3B"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line
        x1="3"
        y1="3"
        x2="31"
        y2="31"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {open ? (
        <>
          <line x1="3" y1="3" x2="19" y2="19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="19" y1="3" x2="3" y2="19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="19" y2="6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="3" y1="11" x2="19" y2="11" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="3" y1="16" x2="19" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: "var(--pulse)", position: "relative", zIndex: 100 }}>
      <div
        className="max-w-[1280px] mx-auto px-4 md:px-6 flex items-center justify-between"
        style={{ padding: "20px 0" }}
      >
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

        {/* Desktop nav links */}
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
              transition: "transform 0.15s",
              display: "inline-block",
            }}
          >
            Start a project →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            minWidth: "44px",
            minHeight: "44px",
            padding: "8px",
          }}
        >
          <HamburgerIcon open={open} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div
          style={{
            background: "var(--pulse-deep)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "16px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: 500,
                padding: "14px 8px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              marginTop: "16px",
              background: "var(--glow)",
              color: "var(--ink)",
              padding: "14px 22px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Start a project →
          </Link>
        </div>
      )}
    </nav>
  );
}
