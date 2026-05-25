import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getCaseStudy, getAllSlugs } from '@/lib/case-studies'
import { cldUrl } from '@/lib/cloudinary'
import NextProjectLink from './NextProjectLink'

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return {}
  return { title: `${cs.client} — ${cs.tagline} | Devixus` }
}

function SectionLabel({ n, text }: { n: string; text: string }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-mono, monospace)',
        fontSize: '11px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--pulse)',
        marginBottom: '16px',
      }}
    >
      {n} — {text}
    </p>
  )
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) notFound()

  const next = getCaseStudy(cs.nextSlug)
  const heroSrc = cldUrl(cs.heroImage, { width: 900, height: 700, crop: 'fill' })
  const nextPreviewSrc = next
    ? cldUrl(next.heroImage, { width: 400, height: 280, crop: 'fill' })
    : ''

  return (
    <main style={{ background: '#fff' }}>

      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden pt-16 md:pt-[100px]" style={{ background: 'var(--ink)' }}>

        {/* Abstract bg video — Pulse/violet iridescent loop */}
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.30 }}
          src="https://res.cloudinary.com/dqdnuqh0u/video/upload/q_auto/abstract-bg"
        />

        {/* Modest dim — abstract content needs less crushing than UI footage */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(10, 10, 11, 0.25)' }}
        />

        {/* Vignette — edge containment */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10,10,11,0.5) 80%, rgba(10,10,11,0.8) 100%)',
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-10 md:gap-[60px] items-stretch">
            {/* Left: copy */}
            <div
              className="pb-8 md:pb-[60px]"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '32px',
                }}
              >
                Work → {cs.client}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '24px',
                }}
              >
                {cs.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      display: 'inline-block',
                      padding: '5px 14px',
                      borderRadius: '999px',
                      background: 'rgba(92,75,255,0.18)',
                      border: '1px solid rgba(92,75,255,0.35)',
                      color: '#a89fff',
                      fontSize: '12px',
                      fontFamily: 'var(--font-space)',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontWeight: 700,
                  fontSize: 'clamp(44px, 5.5vw, 72px)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.04em',
                  color: '#fff',
                }}
              >
                {cs.title}
              </h1>

              <p
                style={{
                  fontSize: 'clamp(16px, 4vw, 20px)',
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: '16px',
                  maxWidth: '500px',
                  lineHeight: 1.65,
                }}
              >
                {cs.tagline}
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: '24px',
                  letterSpacing: '0.04em',
                }}
              >
                {cs.year}
                <span style={{ margin: '0 8px', opacity: 0.5 }}>·</span>
                {cs.client}
              </p>
            </div>

            {/* Right: hero image */}
            <div
              className="min-h-[240px] md:min-h-[400px]"
              style={{
                position: 'relative',
                borderRadius: '12px 12px 0 0',
                overflow: 'hidden',
                boxShadow: '0 -20px 60px rgba(92,75,255,0.15)',
              }}
            >
              <Image
                src={heroSrc}
                alt={cs.title}
                fill
                priority
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS BAND ── */}
      <section style={{ background: 'var(--pulse)', padding: '48px 0' }}>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[1280px] mx-auto px-4 md:px-[60px]"
        >
          {cs.metrics.map(m => {
            const hasPlus = m.value.endsWith('+')
            const base = hasPlus ? m.value.slice(0, -1) : m.value
            return (
              <div key={m.label} style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-space)',
                    fontWeight: 700,
                    fontSize: 'clamp(32px, 5vw, 56px)',
                    color: '#fff',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {base}
                  {hasPlus && (
                    <span style={{ color: 'var(--glow)' }}>+</span>
                  )}
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.65)',
                    marginTop: '8px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-space)',
                  }}
                >
                  {m.label}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── CONTENT AREA ── */}
      <div className="max-w-[1100px] mx-auto px-4 md:px-[60px]">
        {/* Two-column layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[68fr_32fr] gap-10 lg:gap-[80px] py-16 lg:py-[80px] items-start"
        >
          {/* ── LEFT COLUMN ── */}
          <div>
            {/* 01 — The Problem */}
            <section style={{ marginBottom: '64px' }}>
              <SectionLabel n="01" text="THE PROBLEM" />
              <h2
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontWeight: 700,
                  fontSize: '32px',
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  marginBottom: '16px',
                }}
              >
                What needed solving.
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  color: 'var(--g6, #52525b)',
                  lineHeight: 1.8,
                }}
              >
                {cs.problem}
              </p>
            </section>

            {/* 02 — The Approach */}
            <section style={{ marginBottom: '64px' }}>
              <SectionLabel n="02" text="THE APPROACH" />
              <h2
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontWeight: 700,
                  fontSize: '32px',
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  marginBottom: '24px',
                }}
              >
                How we built it.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {cs.approach.map((step, i) => (
                  <div
                    key={i}
                    style={{
                      borderLeft: '3px solid var(--pulse)',
                      borderRadius: '0 12px 12px 0',
                      padding: '20px 24px',
                      background: 'var(--mist, #f5f4f0)',
                      marginBottom: '16px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: '11px',
                        color: 'var(--pulse)',
                        letterSpacing: '0.1em',
                        marginBottom: '8px',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <p
                      style={{
                        fontSize: '16px',
                        color: 'var(--g7, #3f3f46)',
                        lineHeight: 1.7,
                      }}
                    >
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 03 — The Outcome */}
            <section style={{ marginBottom: '64px' }}>
              <SectionLabel n="03" text="THE OUTCOME" />
              <h2
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontWeight: 700,
                  fontSize: '32px',
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  marginBottom: '16px',
                }}
              >
                What shipped.
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  color: 'var(--g6, #52525b)',
                  lineHeight: 1.8,
                }}
              >
                {cs.outcome}
              </p>
            </section>

            {/* 04 — Tech Stack */}
            <section style={{ marginBottom: '64px' }}>
              <SectionLabel n="04" text="TECH STACK" />
              <h2
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontWeight: 700,
                  fontSize: '32px',
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  marginBottom: '20px',
                }}
              >
                Built with.
              </h2>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                {cs.stack.map(tech => (
                  <span
                    key={tech}
                    style={{
                      background: '#fff',
                      border: '2px solid var(--pulse)',
                      borderRadius: '12px',
                      padding: '12px 20px',
                      fontWeight: 600,
                      fontSize: '16px',
                      color: 'var(--ink)',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* ── RIGHT COLUMN: sticky sidebar ── */}
          <div className="lg:sticky" style={{ top: '100px' }}>

            {/* Project Details card */}
            <div
              style={{
                background: 'var(--ink)',
                borderRadius: '16px',
                padding: '32px',
                marginBottom: '16px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--glow)',
                  marginBottom: '24px',
                }}
              >
                Project Details
              </p>
              {([
                { label: 'Client', value: cs.client },
                { label: 'Year', value: cs.year },
                { label: 'Services', value: cs.tags.slice(0, 2).join(' · ') },
                { label: 'Status', value: 'Live in production' },
              ] as const).map(({ label, value }, i) => (
                <div
                  key={label}
                  style={{
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'rgba(255,255,255,0.4)',
                      marginBottom: '4px',
                    }}
                  >
                    {label}
                  </p>
                  <p style={{ fontSize: '15px', color: '#fff', fontWeight: 500 }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Metrics card */}
            <div
              style={{
                background: 'var(--mist, #f5f4f0)',
                borderRadius: '16px',
                padding: '32px',
                marginBottom: '16px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--pulse)',
                  marginBottom: '24px',
                }}
              >
                Key Numbers
              </p>
              {cs.metrics.map((m, i) => (
                <div key={m.label}>
                  <p
                    style={{
                      fontFamily: 'var(--font-bricolage)',
                      fontWeight: 700,
                      fontSize: '40px',
                      color: 'var(--ink)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {m.value}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--g5, #71717a)',
                      marginTop: '4px',
                    }}
                  >
                    {m.label}
                  </p>
                  {i < cs.metrics.length - 1 && (
                    <div
                      style={{
                        height: '1px',
                        background: 'rgba(0,0,0,0.08)',
                        margin: '16px 0',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Back to work */}
            <Link
              href="/work"
              style={{
                display: 'inline-block',
                marginTop: '32px',
                color: 'var(--pulse)',
                fontSize: '14px',
                fontFamily: 'var(--font-space)',
                fontWeight: 600,
                textDecoration: 'underline',
                letterSpacing: '0.02em',
              }}
            >
              ← All work
            </Link>
          </div>
        </div>

        {/* ── TESTIMONIAL — full width ── */}
        {cs.testimonial && (
          <div
            className="px-6 py-8 md:p-[48px]"
            style={{
              background: 'linear-gradient(135deg, #f8f7ff, #f0eeff)',
              borderLeft: '4px solid var(--pulse)',
              borderRadius: '16px',
              marginBottom: '80px',
            }}
          >
            <span
              style={{
                fontSize: '80px',
                color: 'var(--pulse)',
                lineHeight: 0,
                display: 'block',
                marginBottom: '16px',
                fontFamily: 'Georgia, serif',
              }}
            >
              &ldquo;
            </span>
            <p
              style={{
                fontFamily: 'var(--font-instrument)',
                fontStyle: 'italic',
                fontSize: '22px',
                color: 'var(--ink)',
                lineHeight: 1.65,
              }}
            >
              {cs.testimonial.quote}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginTop: '28px',
              }}
            >
              <Image
                src={cs.testimonial.photo}
                alt={cs.testimonial.name}
                width={52}
                height={52}
                unoptimized
                style={{ borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-space)',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: 'var(--ink)',
                  }}
                >
                  {cs.testimonial.name}
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--g5, #71717a)',
                    marginTop: '2px',
                  }}
                >
                  {cs.testimonial.role}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── NEXT PROJECT ── */}
      <section className="py-16 md:py-[80px]" style={{ background: 'var(--ink)' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-[60px]">
          <NextProjectLink
            slug={cs.nextSlug}
            title={cs.nextTitle}
            previewSrc={nextPreviewSrc}
          />
        </div>
      </section>
    </main>
  )
}
