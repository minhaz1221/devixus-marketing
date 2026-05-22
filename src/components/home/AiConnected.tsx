'use client'

import { useEffect, useRef, useState } from 'react'

const CARDS = [
  {
    title: 'Next.js',
    italic: 'That Ships',
    body: 'Auth, billing, RLS, edge functions. Production-hardened stack from day one.',
    chips: ['Next.js 16', 'Supabase', 'Vercel'],
    col: 0, row: 0,
  },
  {
    title: 'WordPress',
    italic: 'Done Right',
    body: 'Custom plugins, not templates. WooCommerce subscription flows other devs gave up on.',
    chips: ['WooCommerce', 'Elementor'],
    col: 1, row: 0,
  },
  {
    title: 'AI',
    italic: 'In Production',
    body: 'RAG pipelines, embeddings, agent automations. Real systems, not demos.',
    chips: ['Anthropic', 'OpenAI', 'pgvector'],
    col: 2, row: 0,
  },
  {
    title: 'Voice Agents',
    italic: 'That Work',
    body: 'Inbound, outbound, scheduling. Real telephony with measurable lift in handled calls.',
    chips: ['Vapi', 'ElevenLabs', 'Twilio'],
    col: 0, row: 1,
  },
  {
    title: 'Security',
    italic: 'First Always',
    body: 'RLS policies, rate limiting, six-pass security audits before every production launch.',
    chips: ['Supabase RLS', 'Rate Limiting'],
    col: 1, row: 1,
  },
  {
    title: 'SaaS',
    italic: 'Built to Scale',
    body: 'Billing, onboarding, analytics, monitoring. Production-ready in weeks.',
    chips: ['Lemon Squeezy', 'Sentry', 'Resend'],
    col: 2, row: 1,
  },
]

export default function AiConnected() {
  const gridRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [lines, setLines] = useState<
    { x1: number; y1: number; x2: number; y2: number }[]
  >([])

  useEffect(() => {
    function computeLines() {
      if (!gridRef.current || !hubRef.current) return
      const grid = gridRef.current.getBoundingClientRect()
      const hub = hubRef.current.getBoundingClientRect()
      const hubCx = hub.left + hub.width / 2 - grid.left
      const hubCy = hub.top + hub.height / 2 - grid.top

      const newLines: { x1: number; y1: number; x2: number; y2: number }[] = []
      cardRefs.current.forEach((card) => {
        if (!card) return
        const r = card.getBoundingClientRect()
        const cx = r.left + r.width / 2 - grid.left
        const cy = r.top + r.height / 2 - grid.top
        newLines.push({ x1: hubCx, y1: hubCy, x2: cx, y2: cy })
      })
      setLines(newLines)
    }

    computeLines()
    window.addEventListener('resize', computeLines)
    return () => window.removeEventListener('resize', computeLines)
  }, [])

  return (
    <section
      style={{
        background: '#0A0A0B',
        position: 'relative',
        zIndex: 10,
        padding: '120px 0',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(92,75,255,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 60px',
          position: 'relative',
          zIndex: 2,
        }}
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

        {/* Grid + SVG lines */}
        <div ref={gridRef} style={{ position: 'relative' }}>
          {/* SVG lines drawn from measured positions */}
          {lines.length > 0 && (
            <svg
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
                overflow: 'visible',
              }}
            >
              {lines.map((l, i) => (
                <line
                  key={i}
                  x1={l.x1}
                  y1={l.y1}
                  x2={l.x2}
                  y2={l.y2}
                  stroke="rgba(92,75,255,0.45)"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />
              ))}
              {/* Dots at card endpoints */}
              {lines.map((l, i) => (
                <circle
                  key={`dot-${i}`}
                  cx={l.x2}
                  cy={l.y2}
                  r="4"
                  fill="#5C4BFF"
                />
              ))}
            </svg>
          )}

          {/* 3×2 card grid — Row 1 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {CARDS.filter((c) => c.row === 0).map((card, i) => (
              <div
                key={card.title}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '18px',
                  padding: '28px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  textAlign: 'left',
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
                    color: 'rgba(255,255,255,0.65)',
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
            ))}
          </div>

          {/* Hub */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '32px 0',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div
              ref={hubRef}
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #5C4BFF, #4232E6)',
                boxShadow:
                  '0 0 0 12px rgba(92,75,255,0.15), 0 0 0 24px rgba(92,75,255,0.07)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'hub-pulse 2.5s ease-in-out infinite',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                {/* Thick Glow stroke — top-left to bottom-right */}
                <line
                  x1="9" y1="9" x2="31" y2="31"
                  stroke="#C9FF3B"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                {/* Thin white stroke — top-right to bottom-left */}
                <line
                  x1="31" y1="9" x2="9" y2="31"
                  stroke="rgba(255,255,255,0.75)"
                  strokeWidth="3"
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
              position: 'relative',
              zIndex: 1,
            }}
          >
            {CARDS.filter((c) => c.row === 1).map((card, i) => (
              <div
                key={card.title}
                ref={(el) => {
                  cardRefs.current[i + 3] = el
                }}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '18px',
                  padding: '28px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  textAlign: 'left',
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
                    color: 'rgba(255,255,255,0.65)',
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
