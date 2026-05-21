import SectionHeader from "@/components/ui/SectionHeader";

interface TitlePart {
  text: string;
  italic?: boolean;
}

interface HubCardData {
  titleParts: TitlePart[];
  body: string;
  chips: string[];
  chipColor: string;
}

const HUB_CARDS: HubCardData[] = [
  {
    titleParts: [{ text: "Next.js That " }, { text: "Ships", italic: true }],
    body: "Full-stack apps on Next.js 15, Supabase, and Vercel. Production deployments — not prototypes.",
    chips: ["Next.js 15", "Supabase", "Vercel"],
    chipColor: "rgba(92,75,255,0.6)",
  },
  {
    titleParts: [{ text: "WordPress Done " }, { text: "Right", italic: true }],
    body: "Custom plugins, WooCommerce extensions, and full rebuilds. We fix what others walk away from.",
    chips: ["WooCommerce", "Elementor", "REST API"],
    chipColor: "rgba(201,255,59,0.5)",
  },
  {
    titleParts: [{ text: "AI In " }, { text: "Production", italic: true }],
    body: "RAG pipelines, vision models, and agent automations wired into real workflows — not demos.",
    chips: ["Anthropic", "OpenAI", "pgvector"],
    chipColor: "rgba(92,75,255,0.6)",
  },
  {
    titleParts: [
      { text: "Voice Agents That " },
      { text: "Work", italic: true },
    ],
    body: "Inbound, outbound, qualify, schedule. Real telephony with real conversation quality.",
    chips: ["Vapi", "ElevenLabs", "Twilio"],
    chipColor: "rgba(201,255,59,0.5)",
  },
  {
    titleParts: [
      { text: "Security " },
      { text: "First", italic: true },
      { text: " Always" },
    ],
    body: "RLS, rate limiting, audit logs, security reviews. We've caught production vulnerabilities others missed.",
    chips: ["Supabase RLS", "Rate Limiting", "Audits"],
    chipColor: "rgba(92,75,255,0.6)",
  },
  {
    titleParts: [{ text: "SaaS Built to " }, { text: "Scale", italic: true }],
    body: "Auth, billing, email, error tracking — the full production stack wired from day one.",
    chips: ["Lemon Squeezy", "Sentry", "Resend"],
    chipColor: "rgba(201,255,59,0.5)",
  },
];

function CardTitle({ parts }: { parts: TitlePart[] }) {
  return (
    <h3
      style={{
        fontFamily: "var(--font-bricolage)",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: 1.25,
        color: "#fff",
        marginBottom: "10px",
      }}
    >
      {parts.map((part, i) =>
        part.italic ? (
          <em
            key={i}
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              color: "var(--glow)",
            }}
          >
            {part.text}
          </em>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </h3>
  );
}

function HubCard({ card }: { card: HubCardData }) {
  return (
    <article
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <CardTitle parts={card.titleParts} />
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.65,
          color: "rgba(255,255,255,0.5)",
          flex: 1,
        }}
      >
        {card.body}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
        {card.chips.map((chip) => (
          <span
            key={chip}
            style={{
              padding: "4px 10px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: 600,
              fontFamily: "var(--font-space)",
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {chip}
          </span>
        ))}
      </div>
    </article>
  );
}

function MakersCrossGlow() {
  return (
    <svg width="28" height="28" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <line x1="3" y1="31" x2="31" y2="3" stroke="#C9FF3B" strokeWidth="6" strokeLinecap="round" />
      <line x1="3" y1="3" x2="31" y2="31" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function AiConnected() {
  return (
    <section
      style={{ background: "var(--ink)", padding: "120px 0" }}
      aria-label="How Devixus builds"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <SectionHeader
            eyebrow="How we build"
            title="Built with AI, delivered by humans."
            dark
            className="items-center"
          />
        </div>

        {/* Grid with SVG connecting lines overlay */}
        <div style={{ position: "relative" }}>
          {/* SVG connecting lines — drawn behind content */}
          <svg
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              overflow: "visible",
              zIndex: 0,
            }}
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            {/* Row 1 cards → hub  (card centers at y≈110, hub at y≈300) */}
            <line x1="167" y1="110" x2="500" y2="300" stroke="rgba(92,75,255,0.35)" strokeWidth="1.5" strokeDasharray="4 7" />
            <line x1="500" y1="110" x2="500" y2="300" stroke="rgba(92,75,255,0.35)" strokeWidth="1.5" strokeDasharray="4 7" />
            <line x1="833" y1="110" x2="500" y2="300" stroke="rgba(92,75,255,0.35)" strokeWidth="1.5" strokeDasharray="4 7" />
            {/* Row 2 cards → hub  (card centers at y≈490) */}
            <line x1="167" y1="490" x2="500" y2="300" stroke="rgba(92,75,255,0.35)" strokeWidth="1.5" strokeDasharray="4 7" />
            <line x1="500" y1="490" x2="500" y2="300" stroke="rgba(92,75,255,0.35)" strokeWidth="1.5" strokeDasharray="4 7" />
            <line x1="833" y1="490" x2="500" y2="300" stroke="rgba(92,75,255,0.35)" strokeWidth="1.5" strokeDasharray="4 7" />
          </svg>

          {/* Row 1 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {HUB_CARDS.slice(0, 3).map((card) => (
              <HubCard key={card.titleParts.map((p) => p.text).join("")} card={card} />
            ))}
          </div>

          {/* Hub */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "44px 0",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ position: "relative", width: "80px", height: "80px" }}>
              {/* Pulsing rings */}
              <div className="hub-ring" />
              <div className="hub-ring hub-ring-2" />
              {/* Hub circle */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "var(--pulse)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 40px rgba(92,75,255,0.5)",
                  zIndex: 2,
                }}
              >
                <MakersCrossGlow />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {HUB_CARDS.slice(3, 6).map((card) => (
              <HubCard key={card.titleParts.map((p) => p.text).join("")} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
