import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
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

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) notFound()

  const heroSrc = cldUrl(cs.heroImage, { width: 1800, height: 900, crop: 'fill' })

  return (
    <main>
      {/* ── HERO ── */}
      <section
        style={{
          background: 'var(--ink)',
          paddingTop: '80px',
          paddingBottom: '0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          {/* Breadcrumb */}
          <p
            style={{
              fontFamily: 'var(--font-space)',
              fontSize: '12px',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '28px',
              textTransform: 'uppercase',
            }}
          >
            Work / {cs.client}
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontWeight: 700,
              fontSize: 'clamp(44px, 5vw, 72px)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: '#fff',
              maxWidth: '900px',
            }}
          >
            {cs.title}
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: '20px',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '700px',
              marginTop: '16px',
            }}
          >
            {cs.tagline}
          </p>

          {/* Tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '24px',
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

          {/* Year + client */}
          <p
            style={{
              fontFamily: 'var(--font-space)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.4)',
              marginTop: '12px',
              letterSpacing: '0.04em',
            }}
          >
            {cs.year} · {cs.client}
          </p>
        </div>

        {/* Hero image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxHeight: '560px',
            overflow: 'hidden',
            marginTop: '48px',
          }}
        >
          <Image
            src={heroSrc}
            alt={cs.title}
            width={1800}
            height={900}
            priority
            unoptimized
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '560px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </section>

      {/* ── METRICS BAND ── */}
      <section style={{ background: 'var(--pulse)', padding: '48px 0' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'grid',
            gridTemplateColumns: `repeat(${cs.metrics.length}, 1fr)`,
            gap: '32px',
          }}
        >
          {cs.metrics.map(m => (
            <div key={m.label} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: 'var(--font-bricolage)',
                  fontWeight: 700,
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  color: '#fff',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {m.value}
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.65)',
                  marginTop: '6px',
                  fontFamily: 'var(--font-space)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '80px 40px',
        }}
      >
        {/* Problem */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontWeight: 700,
              fontSize: '28px',
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: '16px',
            }}
          >
            The Problem
          </h2>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'var(--g6)',
            }}
          >
            {cs.problem}
          </p>
        </section>

        {/* Approach */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontWeight: 700,
              fontSize: '28px',
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: '24px',
            }}
          >
            The Approach
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {cs.approach.map((item, i) => (
              <div
                key={i}
                style={{
                  paddingLeft: '20px',
                  borderLeft: '3px solid var(--pulse)',
                  display: 'flex',
                  gap: '14px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-space)',
                    fontWeight: 700,
                    fontSize: '12px',
                    color: 'var(--pulse)',
                    minWidth: '20px',
                    paddingTop: '4px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p
                  style={{
                    fontSize: '18px',
                    lineHeight: 1.8,
                    color: 'var(--g6)',
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-bricolage)',
              fontWeight: 700,
              fontSize: '28px',
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: '16px',
            }}
          >
            The Outcome
          </h2>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'var(--g6)',
            }}
          >
            {cs.outcome}
          </p>
        </section>

        {/* Testimonial */}
        {cs.testimonial && (
          <div
            style={{
              background: 'var(--mist)',
              borderRadius: '20px',
              padding: '48px',
              marginBottom: '0',
            }}
          >
            <div
              style={{
                fontSize: '80px',
                lineHeight: 0,
                color: 'var(--pulse)',
                fontFamily: 'Georgia, serif',
                marginBottom: '24px',
                display: 'block',
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontFamily: 'var(--font-instrument)',
                fontStyle: 'italic',
                fontSize: '22px',
                lineHeight: 1.6,
                color: 'var(--ink)',
                marginBottom: '32px',
              }}
            >
              {cs.testimonial.quote}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <Image
                src={cs.testimonial.photo}
                alt={cs.testimonial.name}
                width={48}
                height={48}
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
                    color: 'var(--g5)',
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
      <section style={{ background: 'var(--ink)', padding: '64px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <p
            style={{
              fontFamily: 'var(--font-space)',
              fontSize: '12px',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Next project →
          </p>
          <NextProjectLink slug={cs.nextSlug} title={cs.nextTitle} />
        </div>
      </section>
    </main>
  )
}
