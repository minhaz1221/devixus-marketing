import Link from "next/link";

function MakersCross() {
  return (
    <svg width="28" height="28" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <line x1="3" y1="31" x2="31" y2="3" stroke="#C9FF3B" strokeWidth="6" strokeLinecap="round" />
      <line x1="3" y1="3" x2="31" y2="31" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
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
              fontSize: "18px",
            }}
          >
            Devixus
          </span>
        </Link>

        <p
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "13px",
            fontWeight: 400,
          }}
        >
          © 2025 Devixus · Engineered by Devixus, Chittagong, Bangladesh
        </p>
      </div>
    </footer>
  );
}
