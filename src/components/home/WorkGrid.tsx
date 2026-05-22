"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cldUrl } from "@/lib/cloudinary";

interface WorkCard {
  id: string;
  category: string;
  title: string;
  body: string;
  outcome: string;
  image?: string;
  slug?: string;
  variant?: "nunhems";
}

const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8VAAAIBAgQE";

const WORK: WorkCard[] = [
  {
    id: "vetted",
    category: "AI SaaS · Next.js 15",
    title: "Vetted — AI-powered candidate screening.",
    body: "Automated video interviews, scoring, and shortlisting. Built on Next.js 15 with OpenAI function calling and Supabase RLS.",
    outcome: "82% reduction in manual screening time",
    image: cldUrl("vetted", { width: 900, height: 675 }),
  },
  {
    id: "larrys",
    category: "WooCommerce · Custom Plugin",
    title: "Larry's Lunch — Custom catering portal.",
    body: "Custom order management, driver routing, and 15-iteration WooCommerce checkout plugin. Still running perfectly.",
    outcome: "$40K in catering orders in first 3 months",
    image: cldUrl("larrys-lunch", { width: 900, height: 675 }),
    slug: "larrys-lunch",
  },
  {
    id: "nunhems",
    category: "Campaign Platform · BASF",
    title: "Nunhems Pulse — World Cup prediction game.",
    body: "Full-stack campaign platform with security audit. Nine-week delivery, zero incidents, BASF-grade compliance.",
    outcome: "18,000+ players across Latin America",
    variant: "nunhems",
    slug: "nunhems-quiniela",
  },
  {
    id: "rebuld",
    category: "SaaS · Next.js · Stripe",
    title: "Rebuld — Device repair marketplace.",
    body: "Technician onboarding, job management, and payment flows. Auth, subscriptions, and RLS from day one.",
    outcome: "Launched in 6 weeks, 200+ active techs",
    image: cldUrl("rebuld", { width: 900, height: 675 }),
  },
  {
    id: "dedalus",
    category: "Web App · Enterprise",
    title: "Dedalus — Internal ops platform.",
    body: "Role-based dashboards, document workflows, and Supabase-powered audit trails for a European enterprise client.",
    outcome: "Replaced 3 legacy tools with one interface",
    image: cldUrl("dedalus", { width: 900, height: 675 }),
  },
  {
    id: "yellowai",
    category: "AI Integration · Voice",
    title: "Yellow.ai — Conversational AI pipeline.",
    body: "RAG pipeline, embeddings, and live agent handoff. Integrated with Yellow.ai's platform and internal CRM.",
    outcome: "65% containment rate, zero escalation lag",
    image: cldUrl("yellow-ai", { width: 900, height: 675 }),
  },
  {
    id: "rise",
    category: "E-Commerce · NFC",
    title: "Rise Headwear — NFC loyalty portal.",
    body: "Custom NFC redirect infrastructure paired with a headwear brand portal. Tap-to-claim, tap-to-register flows.",
    outcome: "3,400+ NFC activations in first quarter",
    image: cldUrl("rise-headwear", { width: 900, height: 675 }),
    slug: "rise-headwear",
  },
];

function CardImageArea({
  card,
  hovered,
}: {
  card: WorkCard;
  hovered: boolean;
}) {
  const [imgError, setImgError] = useState(false);

  if (!card.image || imgError) return null;

  return (
    <div
      style={{
        aspectRatio: "4/3",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px 12px 0 0",
        flexShrink: 0,
      }}
    >
      <Image
        src={card.image}
        alt={card.title}
        fill
        unoptimized={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"
        placeholder="blur"
        blurDataURL={BLUR_PLACEHOLDER}
        style={{
          objectFit: "cover",
          objectPosition: "center center",
          transform: hovered ? "scale(1.03)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
        onError={() => setImgError(true)}
      />
      {card.slug && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
            display: "flex",
            alignItems: "flex-end",
            padding: "14px 16px",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.25s ease",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: "#fff",
              fontFamily: "var(--font-space)",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            View case study →
          </span>
        </div>
      )}
    </div>
  );
}

function Card({ card }: { card: WorkCard }) {
  const [hovered, setHovered] = useState(false);

  const cardStyle: React.CSSProperties = {
    borderRadius: "16px",
    overflow: "hidden",
    background: "#fff",
    border: "1px solid #E4E4E7",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    transform: hovered ? "translateY(-4px)" : "translateY(0)",
    boxShadow: hovered
      ? "0 16px 40px rgba(0,0,0,0.08)"
      : "0 1px 3px rgba(0,0,0,0.04)",
    cursor: card.slug ? "pointer" : "default",
    textDecoration: "none",
    color: "inherit",
  };

  const inner = (
    <>
      <CardImageArea card={card} hovered={hovered} />
      <div
        style={{
          padding: "24px",
          paddingBottom: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--pulse)",
            fontFamily: "var(--font-space)",
          }}
        >
          {card.category}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-bricolage)",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
          }}
        >
          {card.title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.65,
            color: "#52525B",
          }}
        >
          {card.body}
        </p>
        <p
          style={{
            fontSize: "13px",
            fontStyle: "italic",
            color: "var(--pulse)",
            marginTop: "8px",
          }}
        >
          → {card.outcome}
        </p>
      </div>
    </>
  );

  if (card.slug) {
    return (
      <Link
        href={`/work/${card.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={cardStyle}
      >
        {inner}
      </Link>
    );
  }

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={cardStyle}
    >
      {inner}
    </article>
  );
}

function NunhemsCard({ card }: { card: WorkCard }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/work/${card.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        background: "linear-gradient(135deg, #5C4BFF 0%, #4232E6 100%)",
        display: "flex",
        flexDirection: "column",
        padding: "36px",
        gap: "10px",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 16px 40px rgba(92,75,255,0.3)"
          : "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.55)",
          fontFamily: "var(--font-space)",
        }}
      >
        {card.category}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-bricolage)",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          color: "#fff",
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.65,
          color: "rgba(255,255,255,0.72)",
        }}
      >
        {card.body}
      </p>
      <p
        style={{
          fontSize: "13px",
          fontStyle: "italic",
          color: "var(--glow)",
          marginTop: "8px",
        }}
      >
        → {card.outcome}
      </p>
    </Link>
  );
}

function CTACard() {
  return (
    <article
      style={{
        borderRadius: "16px",
        background: "#0A0A0B",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "36px",
        textAlign: "center",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-space)",
          fontWeight: 700,
          fontSize: "64px",
          color: "var(--glow)",
          lineHeight: 1,
          marginBottom: "8px",
        }}
      >
        47+
      </p>
      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "14px",
          lineHeight: 1.5,
          marginBottom: "24px",
        }}
      >
        more projects across
        <br />
        18 industries
      </p>
      <Link
        href="#contact"
        style={{
          background: "var(--glow)",
          color: "var(--ink)",
          padding: "10px 22px",
          borderRadius: "999px",
          fontSize: "13px",
          fontWeight: 700,
          textDecoration: "none",
          display: "inline-block",
          letterSpacing: "0.01em",
        }}
      >
        See all work →
      </Link>
    </article>
  );
}

export default function WorkGrid() {
  return (
    <section id="work" className="section-pad" style={{ background: "#F5F4F0" }}>
      <div style={{ maxWidth: "1480px", margin: "0 auto", padding: "0 24px" }}>
        {/* Section header */}
        <div style={{ marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#71717A",
              fontFamily: "var(--font-space)",
              marginBottom: "12px",
            }}
          >
            Selected work
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 700,
              fontSize: "clamp(40px, 5vw, 64px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--ink)",
            }}
          >
            The work, up close.
          </h2>
        </div>

        {/* Row 1 — 1.5fr / 1fr, cards at natural height */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            alignItems: "start",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <Card card={WORK[0]} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Card card={WORK[1]} />
            <NunhemsCard card={WORK[2]} />
          </div>
        </div>

        {/* Row 2 — 1fr / 1.5fr */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            alignItems: "start",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <Card card={WORK[3]} />
          <Card card={WORK[4]} />
        </div>

        {/* Row 3 — 1.5fr / 1fr */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            alignItems: "start",
            gap: "16px",
          }}
        >
          <Card card={WORK[5]} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Card card={WORK[6]} />
            <CTACard />
          </div>
        </div>
      </div>
    </section>
  );
}
