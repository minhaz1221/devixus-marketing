const CARDS = [
  {
    title: 'Next.js',
    italic: 'That Ships',
    body: 'Auth, billing, RLS, edge functions. Production-hardened stack from day one.',
    chips: ['Next.js 16', 'Supabase', 'Vercel'],
    row: 0,
  },
  {
    title: 'WordPress',
    italic: 'Done Right',
    body: 'Custom plugins, not templates. WooCommerce subscription flows other devs gave up on.',
    chips: ['WooCommerce', 'Elementor'],
    row: 0,
  },
  {
    title: 'AI',
    italic: 'In Production',
    body: 'RAG pipelines, embeddings, agent automations. Real systems, not demos.',
    chips: ['Anthropic', 'OpenAI', 'pgvector'],
    row: 0,
  },
  {
    title: 'Voice Agents',
    italic: 'That Work',
    body: 'Inbound, outbound, scheduling. Real telephony with measurable lift in handled calls.',
    chips: ['Vapi', 'ElevenLabs', 'Twilio'],
    row: 1,
  },
  {
    title: 'Security',
    italic: 'First Always',
    body: 'RLS policies, rate limiting, six-pass security audits before every production launch.',
    chips: ['Supabase RLS', 'Rate Limiting'],
    row: 1,
  },
  {
    title: 'SaaS',
    italic: 'Built to Scale',
    body: 'Billing, onboarding, analytics, monitoring. Production-ready in weeks.',
    chips: ['Lemon Squeezy', 'Sentry', 'Resend'],
    row: 1,
  },
]

function Card({ card }: { card: typeof CARDS[number] }) {
  return (
    <div
      style={{
        background: 'rgba(20, 20, 22, 0.7)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '18px',
        padding: '28px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        textAlign: 'left',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 700,
          fontSize: '20px',
          color: '#fff',
          letterSpacing: '-0.02em',
        }}
      >
        {card.title}{' '}
        <em
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#C9FF3B',
          }}
        >
          {card.italic}
        </em>
      </div>
      <p
        style={{
          fontSize: '14.5px',
          color: 'rgba(255,255,255,0.80)',
          lineHeight: 1.65,
          flex: 1,
        }}
      >
        {card.body}
      </p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {card.chips.map((chip) => (
          <span
            key={chip}
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '999px',
              padding: '4px 12px',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.65)',
            }}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function AiConnected() {
  return (
    <section
      className="relative overflow-hidden isolate"
      style={{ background: 'var(--ink, #0A0A0B)' }}
    >
      {/* Video texture — screen blend keeps ink dark, highlights come through as motion */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.25, mixBlendMode: 'screen' }}
        src="https://res.cloudinary.com/dqdnuqh0u/video/upload/q_auto/rebuld-demo"
      />

      {/* Flat Ink overlay — softens video everywhere before the vignette does edge work */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(10, 10, 11, 0.35)' }}
      />

      {/* Depth vignette — darkens corners so edges never show adjacent-section bleed */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10,10,11,0.55) 80%, rgba(10,10,11,0.85) 100%)',
        }}
      />

      {/* All content above video and vignette */}
      <div
        className="relative z-10"
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '120px 60px' }}
      >
        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '12px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              marginBottom: '16px',
            }}
          >
            — How it works
          </p>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(44px, 6vw, 80px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
              color: '#fff',
              marginBottom: '18px',
            }}
          >
            Built with{' '}
            <em
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#C9FF3B',
              }}
            >
              AI,
            </em>
            <br />
            delivered by humans.
          </h2>
          <p
            style={{
              fontSize: '19px',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '560px',
              lineHeight: 1.65,
            }}
          >
            Every service combines the right tooling with real engineering
            judgement. Here is the stack that runs it.
          </p>
        </div>

        {/* Constellation container — aspectRatio drives SVG height; viewBox unchanged */}
        <div style={{ position: 'relative', aspectRatio: '1020 / 600' }}>

          {/* Static L-shaped orthogonal routing SVG */}
          <svg
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              overflow: 'visible',
              zIndex: 0,
            }}
            viewBox="0 0 1020 480"
            preserveAspectRatio="none"
          >
            {/* top-left card → down to axis → right to hub */}
            <path
              d="M170,120 L170,240 L510,240"
              stroke="rgba(92,75,255,0.35)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* top-center card → straight down to hub */}
            <path
              d="M510,120 L510,240"
              stroke="rgba(92,75,255,0.35)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* top-right card → down to axis → left to hub */}
            <path
              d="M850,120 L850,240 L510,240"
              stroke="rgba(92,75,255,0.35)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* bottom-left card → straight up to axis */}
            <path
              d="M170,360 L170,240"
              stroke="rgba(92,75,255,0.35)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* bottom-center card → straight up to hub */}
            <path
              d="M510,360 L510,240"
              stroke="rgba(92,75,255,0.35)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* bottom-right card → up to axis → left to hub */}
            <path
              d="M850,360 L850,240 L510,240"
              stroke="rgba(92,75,255,0.35)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Junction dots on the horizontal axis */}
            <circle cx="170" cy="240" r="4" fill="#5C4BFF" />
            <circle cx="510" cy="240" r="4" fill="#5C4BFF" />
            <circle cx="850" cy="240" r="4" fill="#5C4BFF" />
          </svg>

          {/* Row 1 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
          >
            {CARDS.filter((c) => c.row === 0).map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>

          {/* Hub — positive margin gives ≥40px clearance from each card row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '40px 0',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #5C4BFF, #4232E6)',
                boxShadow: '0 0 0 12px rgba(92,75,255,0.15), 0 0 0 24px rgba(92,75,255,0.07)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'hub-pulse 2.5s ease-in-out infinite',
              }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <line
                  x1="8" y1="8" x2="28" y2="28"
                  stroke="#C9FF3B"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <line
                  x1="28" y1="8" x2="8" y2="28"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Row 2 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
          >
            {CARDS.filter((c) => c.row === 1).map((card) => (
              <Card key={card.title} card={card} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
