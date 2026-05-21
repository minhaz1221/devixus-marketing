const TOP_TAGS = [
  "SaaS Dashboard",
  "Mobile Apps",
  "WordPress",
  "Branding",
  "Next.js",
  "WooCommerce",
  "AI Integrations",
  "Voice Agents",
  "NFC Systems",
  "Field Service",
];

const BOTTOM_TAGS = [
  "Supabase",
  "Vercel",
  "Framer",
  "Elementor",
  "Figma",
  "Cloudflare",
  "OpenAI",
  "Anthropic",
  "Twilio",
  "Stripe",
  "Next.js",
  "Resend",
];

const DOT = (
  <span
    aria-hidden
    style={{ color: "var(--g4)", flexShrink: 0, fontSize: "14px" }}
  >
    •
  </span>
);

function TagStrip({
  tags,
  direction,
}: {
  tags: string[];
  direction: "left" | "right";
}) {
  const cls = direction === "left" ? "marquee-22" : "marquee-22-rev";
  const doubled = [...tags, ...tags];

  return (
    <div
      style={{
        overflow: "hidden",
        background: "#fff",
        borderTop: "1px solid var(--g2)",
        borderBottom: "1px solid var(--g2)",
        padding: "14px 0",
      }}
    >
      <div
        className={cls}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "max-content",
        }}
      >
        {doubled.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--ink)",
                whiteSpace: "nowrap",
              }}
            >
              {tag}
            </span>
            {DOT}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <div style={{ overflow: "hidden" }}>
      <TagStrip tags={TOP_TAGS} direction="left" />
      <TagStrip tags={BOTTOM_TAGS} direction="right" />
    </div>
  );
}
