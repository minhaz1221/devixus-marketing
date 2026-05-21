"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { cldUrl } from "@/lib/cloudinary";

interface WorkCard {
  id: string;
  category: string;
  title: string;
  body: string;
  outcome: string;
  dark?: boolean;
  accent: string;
  image?: string;
  imageFallbackGradient?: string;
}

const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8VAAAIBAgQE";

// Images are 4:3 — request matching dimensions so Cloudinary doesn't crop
const WORK: WorkCard[] = [
  {
    id: "vetted",
    category: "AI SaaS · Next.js 15",
    title: "Vetted — AI-powered candidate screening.",
    body: "Automated video interviews, scoring, and shortlisting. Built on Next.js 15 with OpenAI function calling and Supabase RLS.",
    outcome: "→ 82% reduction in manual screening time",
    dark: true,
    accent: "#5C4BFF",
    image: cldUrl("vetted", { width: 900, height: 675 }),
  },
  {
    id: "larrys",
    category: "WooCommerce · Custom Plugin",
    title: "Larry's Lunch — Complex catering portal.",
    body: "Custom order management, driver routing, and 15-iteration WooCommerce checkout plugin. Still running perfectly.",
    outcome: "→ $40K in catering orders in first 3 months",
    dark: false,
    accent: "#F59E0B",
    image: cldUrl("larrys-lunch", { width: 900, height: 675 }),
    imageFallbackGradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  },
  {
    id: "nunhems",
    category: "Campaign Platform · BASF",
    title: "Nunhems Pulse — World Cup prediction game.",
    body: "Full-stack campaign platform with security audit. Nine-week delivery, zero incidents, BASF-grade compliance.",
    outcome: "→ 18,000+ players across Latin America",
    dark: true,
    accent: "#F39500",
    imageFallbackGradient: "linear-gradient(135deg, #F39500 0%, #E8850A 100%)",
  },
  {
    id: "rebuld",
    category: "SaaS · Next.js · Stripe",
    title: "Rebuld — Device repair marketplace.",
    body: "Technician onboarding, job management, and payment flows. Auth, subscriptions, and RLS from day one.",
    outcome: "→ Launched in 6 weeks, 200+ active techs",
    dark: false,
    accent: "#3B82F6",
    image: cldUrl("rebuld", { width: 900, height: 675 }),
  },
  {
    id: "dedalus",
    category: "Web App · Enterprise",
    title: "Dedalus — Internal ops platform.",
    body: "Role-based dashboards, document workflows, and Supabase-powered audit trails for a European enterprise client.",
    outcome: "→ Replaced 3 legacy tools with one interface",
    dark: true,
    accent: "#8B5CF6",
    image: cldUrl("dedalus", { width: 900, height: 675 }),
  },
  {
    id: "yellowai",
    category: "AI Integration · Voice",
    title: "Yellow.ai — Conversational AI pipeline.",
    body: "RAG pipeline, embeddings, and live agent handoff. Integrated with Yellow.ai's platform and internal CRM.",
    outcome: "→ 65% containment rate, zero escalation lag",
    dark: false,
    accent: "#EAB308",
    image: cldUrl("yellow-ai", { width: 900, height: 675 }),
  },
  {
    id: "rise",
    category: "E-Commerce · NFC",
    title: "Rise Headwear — NFC loyalty portal.",
    body: "Custom NFC redirect infrastructure paired with a headwear brand portal. Tap-to-claim, tap-to-register flows.",
    outcome: "→ 3,400+ NFC activations in first quarter",
    dark: false,
    accent: "#EF4444",
    image: cldUrl("rise-headwear", { width: 900, height: 675 }),
    imageFallbackGradient: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
  },
];

function CardImage({
  card,
  hovered,
  maxImageHeight,
}: {
  card: WorkCard;
  hovered: boolean;
  maxImageHeight?: number;
}) {
  const [error, setError] = useState(false);

  if (!card.image || error) {
    return (
      <div
        style={{
          aspectRatio: "4/3",
          maxHeight: maxImageHeight,
          background:
            card.imageFallbackGradient ??
            `linear-gradient(135deg, ${card.accent}40, ${card.accent}20)`,
          flexShrink: 0,
        }}
      />
    );
  }

  return (
    <div
      style={{
        aspectRatio: "4/3",
        maxHeight: maxImageHeight,
        position: "relative",
        overflow: "hidden",
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
          transition: "transform 0.5s ease",
        }}
        onError={() => setError(true)}
      />
    </div>
  );
}

function Card({
  card,
  maxImageHeight,
}: {
  card: WorkCard;
  maxImageHeight?: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        background: card.dark ? "var(--ink-2)" : "#fff",
        border: card.dark ? "1px solid rgba(255,255,255,0.06)" : "1px solid var(--g2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 32px 64px rgba(10,10,11,0.10)" : "none",
      }}
    >
      <CardImage card={card} hovered={hovered} maxImageHeight={maxImageHeight} />

      <div
        style={{
          padding: "28px 30px 32px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: card.dark ? "rgba(255,255,255,0.4)" : "var(--g5)",
            marginBottom: "8px",
            display: "block",
          }}
        >
          {card.category}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-bricolage)",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            color: card.dark ? "#fff" : "var(--ink)",
            marginBottom: "8px",
          }}
        >
          {card.title}
        </h3>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: card.dark ? "rgba(255,255,255,0.55)" : "var(--g5)",
            flex: 1,
            marginBottom: "14px",
          }}
        >
          {card.body}
        </p>
        <p
          style={{
            fontSize: "14px",
            fontStyle: "italic",
            color: "var(--pulse)",
            fontWeight: 600,
          }}
        >
          {card.outcome}
        </p>
      </div>
    </article>
  );
}

function CTACard() {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "20px",
        background: "var(--ink)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "28px",
        textAlign: "center",
        height: "100%",
        minHeight: "200px",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 32px 64px rgba(10,10,11,0.10)" : "none",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-bricolage)",
          fontWeight: 700,
          fontSize: "48px",
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
          marginBottom: "20px",
          lineHeight: 1.4,
        }}
      >
        more projects across
        <br />
        18 industries
      </p>
      <Link
        href="#contact"
        style={{
          background: "var(--pulse)",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "999px",
          fontSize: "13px",
          fontWeight: 700,
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        See all work →
      </Link>
    </article>
  );
}

export default function WorkGrid() {
  return (
    <section id="work" className="section-pad" style={{ background: "#fff" }}>
      <div style={{ maxWidth: "1480px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader eyebrow="Selected work" title="The work, up close." />

        {/* Row 1 — 1.55fr / 1fr */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.55fr 1fr",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <Card card={WORK[0]} maxImageHeight={320} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Card card={WORK[1]} />
            <Card card={WORK[2]} />
          </div>
        </div>

        {/* Row 2 — 1fr / 1.55fr */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.55fr",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <Card card={WORK[3]} />
          <Card card={WORK[4]} maxImageHeight={320} />
        </div>

        {/* Row 3 — 1.55fr / 1fr */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1.55fr 1fr", gap: "16px" }}
        >
          <Card card={WORK[5]} maxImageHeight={320} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Card card={WORK[6]} />
            <CTACard />
          </div>
        </div>
      </div>
    </section>
  );
}
