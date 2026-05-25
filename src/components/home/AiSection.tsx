"use client";

import { Globe, Boxes, Bot, Mic, AppWindow, Radio } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES, TECH_STACK } from "@/lib/constants";
import type { Service } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  globe: Globe,
  wordpress: Boxes,
  brain: Bot,
  mic: Mic,
  browser: AppWindow,
  nfc: Radio,
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = ICON_MAP[service.icon];

  return (
    <article
      className="p-6 md:p-7"
      style={{
        background: "#EDEAE2",
        borderRadius: "12px",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "10px",
          background: "rgba(92, 75, 255, 0.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {Icon && <Icon size={22} strokeWidth={1.6} color="var(--pulse)" />}
      </div>

      <p
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--pulse)",
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
          letterSpacing: "-0.01em",
          color: "var(--ink)",
          marginBottom: "10px",
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.55,
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
      data-section="ai-services"
      className="py-16 md:py-24 lg:py-32"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#3F3F46",
              marginBottom: "12px",
            }}
          >
            WHAT WE BUILD
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 700,
              fontSize: "clamp(40px, 6.5vw, 84px)",
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
              color: "var(--ink)",
            }}
          >
            AI-powered work.
          </h2>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 items-start">
          {SERVICES.map((service) => (
            <ServiceCard key={service.category} service={service} />
          ))}
        </div>

        {/* Tech stack strip */}
        <div
          style={{
            background: "#ffffff",
            borderTop: "1px solid #E4E4E7",
            paddingTop: "40px",
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

          <div style={{ position: "relative", overflow: "hidden" }}>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "60px",
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
                width: "60px",
                zIndex: 1,
                background: "linear-gradient(to left, #ffffff, transparent)",
                pointerEvents: "none",
              }}
            />

            <div
              className="marquee-28"
              style={{
                display: "flex",
                width: "max-content",
                alignItems: "center",
                gap: "10px",
              }}
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
