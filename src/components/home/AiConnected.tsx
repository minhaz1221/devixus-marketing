interface AiCard {
  titleMain: string;
  titleAccent: string;
  body: string;
  chips: string[];
  bg: string;
  border: string;
}

const CARDS: AiCard[] = [
  {
    titleMain: "Next.js",
    titleAccent: "That Ships",
    body: "Auth, billing, RLS, edge functions. Production-hardened stack from day one.",
    chips: ["Next.js 16", "Supabase", "Vercel"],
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
  },
  {
    titleMain: "WordPress",
    titleAccent: "Done Right",
    body: "Custom plugins, not templates. WooCommerce subscription flows other devs gave up on.",
    chips: ["WooCommerce", "Elementor"],
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
  },
  {
    titleMain: "AI",
    titleAccent: "In Production",
    body: "RAG pipelines, embeddings, agent automations. Real systems, not demos.",
    chips: ["Anthropic", "OpenAI", "pgvector"],
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
  },
  {
    titleMain: "Voice Agents",
    titleAccent: "That Work",
    body: "Inbound, outbound, scheduling. Real telephony with measurable lift in handled calls.",
    chips: ["Vapi", "ElevenLabs", "Twilio"],
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
  },
  {
    titleMain: "Security",
    titleAccent: "First Always",
    body: "RLS policies, rate limiting, six-pass security audits before every production launch.",
    chips: ["Supabase RLS", "Rate Limiting"],
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
  },
  {
    titleMain: "SaaS",
    titleAccent: "Built to Scale",
    body: "Billing, onboarding, analytics, monitoring. Production-ready in weeks.",
    chips: ["Lemon Squeezy", "Sentry", "Resend"],
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
  },
];

function Chip({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 10px",
        borderRadius: "999px",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
        fontSize: "11px",
        color: "rgba(255,255,255,0.6)",
        fontWeight: 500,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function ServiceCard({ card }: { card: AiCard }) {
  return (
    <article
      style={{
        borderRadius: "20px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        background: card.bg,
        border: `1px solid ${card.border}`,
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-bricolage)",
          fontWeight: 700,
          fontSize: "19px",
          color: "#fff",
          lineHeight: 1.2,
        }}
      >
        {card.titleMain}{" "}
        <em
          style={{
            fontFamily: "var(--font-instrument)",
            fontStyle: "italic",
            color: "var(--glow)",
          }}
        >
          {card.titleAccent}
        </em>
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {card.body}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {card.chips.map((chip) => (
          <Chip key={chip} label={chip} />
        ))}
      </div>
    </article>
  );
}

function Hub() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        margin: "-16px 0",
        zIndex: 2,
      }}
    >
      <div
        className="hub-pulse"
        style={{
          position: "relative",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #5C4BFF, #4232E6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <div className="hub-ring" />
        <div className="hub-ring hub-ring-2" />
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          style={{ position: "relative", zIndex: 1 }}
        >
          <line x1="9" y1="9" x2="31" y2="31" stroke="#C9FF3B" strokeWidth="6" strokeLinecap="round" />
          <line x1="31" y1="9" x2="9" y2="31" stroke="rgba(255,255,255,0.75)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

function ConnectingLines() {
  const dotProps = { r: 4, fill: "rgba(92,75,255,0.6)" };
  const lineProps = {
    stroke: "rgba(92,75,255,0.45)",
    strokeWidth: "1.5",
    strokeDasharray: "5 4",
  };

  return (
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
      viewBox="0 0 1100 590"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* top-left → hub */}
      <line x1="177" y1="130" x2="550" y2="295" {...lineProps} />
      {/* top-center → hub */}
      <line x1="550" y1="130" x2="550" y2="260" {...lineProps} />
      {/* top-right → hub */}
      <line x1="923" y1="130" x2="550" y2="295" {...lineProps} />
      {/* bottom-left → hub */}
      <line x1="177" y1="460" x2="550" y2="330" {...lineProps} />
      {/* bottom-center → hub */}
      <line x1="550" y1="460" x2="550" y2="330" {...lineProps} />
      {/* bottom-right → hub */}
      <line x1="923" y1="460" x2="550" y2="330" {...lineProps} />

      {/* endpoint dots */}
      <circle cx="177" cy="130" {...dotProps} />
      <circle cx="550" cy="130" {...dotProps} />
      <circle cx="923" cy="130" {...dotProps} />
      <circle cx="177" cy="460" {...dotProps} />
      <circle cx="550" cy="460" {...dotProps} />
      <circle cx="923" cy="460" {...dotProps} />
    </svg>
  );
}

export default function AiConnected() {
  return (
    <section
      style={{
        background: "#0A0A0B",
        position: "relative",
        zIndex: 10,
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      {/* Subtle video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.08,
          zIndex: 0,
        }}
      >
        <source
          src="https://res.cloudinary.com/dqdnuqh0u/video/upload/q_auto/rebuld-demo"
          type="video/mp4"
        />
      </video>

      {/* Radial gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,10,11,0.92)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        {/* Header */}
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "24px",
          }}
        >
          — How it works
        </p>

        <h2
          style={{
            fontFamily: "var(--font-bricolage)",
            fontWeight: 700,
            fontSize: "clamp(56px, 7vw, 96px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: "#fff",
            marginBottom: "28px",
          }}
        >
          Built with{" "}
          <em
            style={{
              fontFamily: "var(--font-instrument)",
              fontStyle: "italic",
              color: "var(--glow)",
            }}
          >
            AI,
          </em>
          <br />
          delivered by humans.
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.55,
          }}
        >
          Real production systems. Not demos, not prototypes — working software
          handed over running.
        </p>

        {/* Card grid + hub */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "80px auto 0",
            position: "relative",
          }}
        >
          <ConnectingLines />

          {/* Row 1 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {CARDS.slice(0, 3).map((card) => (
              <ServiceCard key={card.titleMain} card={card} />
            ))}
          </div>

          <Hub />

          {/* Row 2 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {CARDS.slice(3).map((card) => (
              <ServiceCard key={card.titleMain} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
