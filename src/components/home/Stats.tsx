import { STATS } from "@/lib/constants";

function StatValue({ value }: { value: string }) {
  const match = value.match(/^([^+★]+)([+★].*)$|^(\$.+[+])(.*)$/);

  if (!match) {
    return (
      <span style={{ fontFamily: "var(--font-space)", fontWeight: 700, fontSize: "64px", color: "#fff", lineHeight: 1 }}>
        {value}
      </span>
    );
  }

  const [, base, suffix, dollarBase, dollarSuffix] = match;

  const mainPart = base ?? dollarBase ?? value;
  const accentPart = suffix ?? dollarSuffix ?? "";

  return (
    <span style={{ fontFamily: "var(--font-space)", fontWeight: 700, fontSize: "clamp(48px, 4vw, 64px)", lineHeight: 1 }}>
      <span style={{ color: "#fff" }}>{mainPart}</span>
      <span style={{ color: "var(--glow)" }}>{accentPart}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section style={{ background: "var(--pulse)", padding: "60px 0" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "32px",
          textAlign: "center",
        }}
      >
        {STATS.map((stat) => (
          <div key={stat.label}>
            <StatValue value={stat.value} />
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "15px",
                fontWeight: 500,
                marginTop: "8px",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
