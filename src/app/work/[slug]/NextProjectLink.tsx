'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function NextProjectLink({
  slug,
  title,
  previewSrc,
}: {
  slug: string
  title: string
  previewSrc: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left: label + title */}
      <div>
        <p
          style={{
            fontFamily: 'var(--font-bricolage), "Bricolage Grotesque", system-ui, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: 'rgba(255,255,255,0.6)',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          Next project →
        </p>
        <Link
          href={`/work/${slug}`}
          style={{
            fontFamily: 'var(--font-bricolage)',
            fontWeight: 700,
            fontSize: 'clamp(40px, 5vw, 64px)',
            color: hovered ? 'var(--glow)' : '#fff',
            textDecoration: 'none',
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            display: 'inline-block',
            transition: 'color 0.2s ease',
          }}
        >
          {title}
        </Link>
      </div>

      {/* Right: preview image */}
      {previewSrc && (
        <Link href={`/work/${slug}`} style={{ flexShrink: 0, textDecoration: 'none' }}>
          <div
            style={{
              width: '200px',
              height: '140px',
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative',
              filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.3s ease',
            }}
          >
            <Image
              src={previewSrc}
              alt={title}
              fill
              unoptimized
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Link>
      )}
    </div>
  )
}
