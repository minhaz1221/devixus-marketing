"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { REVIEWS } from "@/lib/constants";

const heroReviews = REVIEWS.slice(0, 4);

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIdx((p) => (p + 1) % heroReviews.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      style={{
        background: "linear-gradient(140deg, #5C4BFF 0%, #4232E6 55%, #3621B8 100%)",
        padding: "100px 0 120px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1.25fr",
          gap: "56px",
          alignItems: "stretch",
        }}
      >
        {/* ── Left column ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "28px",
          }}
        >
          {/* Status pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              width: "fit-content",
              padding: "8px 18px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.13)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span
              className="blink"
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#4ade80",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Accepting two Q3 engagements
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 700,
              fontSize: "clamp(64px, 7.5vw, 110px)",
              lineHeight: 0.88,
              color: "#fff",
              letterSpacing: "-2px",
            }}
          >
            Engineered
            <br />
            to{" "}
            <em
              style={{
                fontFamily: "var(--font-instrument)",
                fontStyle: "italic",
                color: "var(--glow)",
              }}
            >
              ship.
            </em>
          </h1>

          {/* Sub */}
          <p
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.55,
              maxWidth: "480px",
            }}
          >
            We build production-grade web apps, SaaS products, and AI
            systems — then hand them over running.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link
              href="#contact"
              style={{
                background: "var(--glow)",
                color: "var(--ink)",
                padding: "14px 28px",
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-block",
                transition: "transform 0.15s",
              }}
            >
              Start a project →
            </Link>
            <Link
              href="#work"
              style={{
                border: "2px solid rgba(255,255,255,0.3)",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.15s",
              }}
            >
              See the work
            </Link>
          </div>

          {/* Cycling review cards */}
          <div style={{ position: "relative", height: "148px", marginTop: "8px" }}>
            {heroReviews.map((review, i) => (
              <div
                key={review.name}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "20px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.13)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  opacity: i === activeIdx ? 1 : 0,
                  transform: i === activeIdx ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                  pointerEvents: i === activeIdx ? "auto" : "none",
                }}
              >
                <Image
                  src={review.photo}
                  alt={review.name}
                  width={48}
                  height={48}
                  style={{ borderRadius: "50%", flexShrink: 0 }}
                />
                <div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.92)",
                      fontSize: "14px",
                      lineHeight: 1.5,
                      marginBottom: "6px",
                    }}
                  >
                    {review.quote}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "12px" }}>
                    {review.name} · {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column — video ── */}
        <div style={{ position: "relative", minHeight: "540px" }}>
          {!videoError ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://res.cloudinary.com/dqdnuqh0u/video/upload/so_0,q_auto,f_auto/devixus/projects/rebuld-demo.jpg"
              onError={() => setVideoError(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "3px",
                minHeight: "540px",
                display: "block",
                boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
              }}
            >
              <source
                src="https://res.cloudinary.com/dqdnuqh0u/video/upload/q_auto/devixus/projects/rebuld-demo"
                type="video/mp4"
              />
              <source src="/videos/rebuld-demo.mp4" type="video/mp4" />
            </video>
          ) : (
            <div
              style={{
                width: "100%",
                minHeight: "540px",
                borderRadius: "3px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5l11 7-11 7V5z" fill="rgba(255,255,255,0.5)" />
                </svg>
              </div>
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px" }}>
                Demo video coming soon
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
