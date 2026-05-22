"use client";

import { SERVICES, TECH_STACK } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Service } from "@/lib/constants";

function ServiceIcon({ name }: { name: string }) {
  const style = { flexShrink: 0 as const };

  switch (name) {
    case "globe":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={style}>
          <circle cx="12" cy="12" r="10" stroke="var(--pulse)" strokeWidth="1.8" />
          <ellipse cx="12" cy="12" rx="4.5" ry="10" stroke="var(--pulse)" strokeWidth="1.8" />
          <line x1="2" y1="12" x2="22" y2="12" stroke="var(--pulse)" strokeWidth="1.8" />
          <line x1="4" y1="7" x2="20" y2="7" stroke="var(--pulse)" strokeWidth="1.2" />
          <line x1="4" y1="17" x2="20" y2="17" stroke="var(--pulse)" strokeWidth="1.2" />
        </svg>
      );
    case "wordpress":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={style}>
          <circle cx="12" cy="12" r="10" stroke="var(--pulse)" strokeWidth="1.8" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--pulse)">
            Wp
          </text>
        </svg>
      );
    case "brain":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={style}>
          <path
            d="M9.5 4C7 4 5 6 5 8.5c0 1-.3 1.9-.8 2.6C3.5 12 3 13 3 14.2 3 16.9 5.1 19 7.8 19H9c.3.6.9 1 1.5 1h3c.6 0 1.2-.4 1.5-1h1.2C19 19 21 16.8 21 14c0-1.1-.4-2.1-1.1-2.9-.5-.6-.9-1.4-.9-2.3C19 6.2 17 4 14.5 4c-.8 0-1.5.2-2.2.6A4.4 4.4 0 0 0 9.5 4Z"
            stroke="var(--pulse)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <line x1="12" y1="4.5" x2="12" y2="19" stroke="var(--pulse)" strokeWidth="1.4" strokeDasharray="1.5 2" />
        </svg>
      );
    case "mic":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={style}>
          <rect x="9" y="2" width="6" height="11" rx="3" stroke="var(--pulse)" strokeWidth="1.8" />
          <path d="M5 11a7 7 0 0 0 14 0" stroke="var(--pulse)" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="12" y1="18" x2="12" y2="22" stroke="var(--pulse)" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="9" y1="22" x2="15" y2="22" stroke="var(--pulse)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "browser":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={style}>
          <rect x="2" y="4" width="20" height="16" rx="3" stroke="var(--pulse)" strokeWidth="1.8" />
          <line x1="2" y1="9" x2="22" y2="9" stroke="var(--pulse)" strokeWidth="1.8" />
          <circle cx="5.5" cy="6.5" r="1" fill="var(--pulse)" />
          <circle cx="8.5" cy="6.5" r="1" fill="var(--pulse)" />
          <circle cx="11.5" cy="6.5" r="1" fill="var(--pulse)" />
        </svg>
      );
    case "nfc":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={style}>
          <path d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="var(--pulse)" />
          <path d="M16 12a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4" stroke="var(--pulse)" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M19 12a7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7" stroke="var(--pulse)" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12" stroke="var(--pulse)" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 3" />
        </svg>
      );
    default:
      return null;
  }
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      style={{
        background: "#F5F4F0",
        borderRadius: "16px",
        padding: "40px",
        border: "1px solid rgba(0,0,0,0.07)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "12px",
          background: "rgba(92,75,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <ServiceIcon name={service.icon} />
      </div>
      <p
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#5C4BFF",
          marginBottom: "8px",
        }}
      >
        {service.category}
      </p>
      <h3
        style={{
          fontFamily: "var(--font-bricolage)",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: 1.25,
          color: "#0A0A0B",
          marginBottom: "12px",
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.65,
          color: "#52525B",
        }}
      >
        {service.body}
      </p>
    </article>
  );
}

const doubled = [...TECH_STACK, ...TECH_STACK];

export default function AiSection() {
  return (
    <section
      id="services"
      style={{ background: '#ffffff', padding: '120px 0' }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          eyebrow="What we build"
          title="AI-powered work."
        />

        {/* Service cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "64px",
          }}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.category} service={service} />
          ))}
        </div>

        {/* Tech stack strip */}
        <div
          style={{
            background: '#ffffff',
            borderTop: '1px solid #E4E4E7',
            paddingTop: '40px',
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#A1A1AA",
              marginBottom: "20px",
            }}
          >
            Our tech stack
          </p>

          {/* Tech stack marquee */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "100px",
                zIndex: 1,
                background: "linear-gradient(to right, #ffffff, transparent)",
                pointerEvents: "none",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: "100px",
                zIndex: 1,
                background: "linear-gradient(to left, #ffffff, transparent)",
                pointerEvents: "none",
              }}
            />

            <div
              className="marquee-28"
              style={{ display: "flex", width: "max-content", alignItems: "center", gap: "10px" }}
            >
              {doubled.map((tech, i) => (
                <span
                  key={`${tech.name}-${i}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    border: `1px solid ${tech.border}`,
                    background: tech.bg,
                    color: "#0A0A0B",
                    fontSize: "13px",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-space)",
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
