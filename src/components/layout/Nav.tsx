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

export default function Nav() {
  return (
    <nav style={{ background: "var(--pulse)", padding: "20px 0" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
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

        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
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
      </div>
    </nav>
  );
}
