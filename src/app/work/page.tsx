import type { Metadata } from 'next'
import Link from 'next/link'
import { CASE_STUDIES } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Work — Devixus',
  description: 'Case studies from Devixus — production-grade web, SaaS, and AI products.',
}

export default function WorkIndexPage() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{ background: 'var(--ink)', padding: '100px 0 64px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <p
            style={{
              fontFamily: 'var(--font-space)',
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '16px',
            }}
          >
            Selected work
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontWeight: 700,
              fontSize: 'clamp(44px, 5vw, 72px)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: '#fff',
            }}
          >
            The work, up close.
          </h1>
        </div>
      </section>

      {/* Case study list */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 32px 120px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {CASE_STUDIES.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                alignItems: 'center',
                gap: '32px',
                padding: '32px 0',
                borderBottom: i < CASE_STUDIES.length - 1 ? '1px solid var(--g2)' : 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-space)',
                  fontSize: '13px',
                  color: 'var(--g4)',
                  letterSpacing: '0.04em',
                }}
              >
                {cs.year}
              </span>

              <div>
                <p
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-space)',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--g4)',
                    marginBottom: '6px',
                  }}
                >
                  {cs.client}
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-bricolage)',
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                    letterSpacing: '-0.02em',
                    color: 'var(--ink)',
                    marginBottom: '8px',
                  }}
                >
                  {cs.title}
                </h2>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {cs.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-space)',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        color: 'var(--pulse)',
                        background: 'rgba(92,75,255,0.08)',
                        padding: '3px 10px',
                        borderRadius: '999px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-space)',
                  fontSize: '13px',
                  color: 'var(--pulse)',
                  whiteSpace: 'nowrap',
                  fontWeight: 600,
                }}
              >
                View case study →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
