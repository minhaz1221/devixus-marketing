"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { REVIEWS } from "@/lib/constants";

const heroReviews = REVIEWS.slice(0, 4);

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

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
      className="pt-16 pb-20 md:pt-[100px] md:pb-[120px]"
      style={{
        background: "linear-gradient(140deg, #5C4BFF 0%, #4232E6 55%, #3621B8 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.25fr] gap-10 md:gap-[56px] items-stretch">
        {/* ── Left column ── */}
        <div className="flex flex-col justify-center gap-7">
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
              fontSize: "clamp(32px, 7.5vw, 110px)",
              lineHeight: 0.88,
              color: "#fff",
              letterSpacing: "-0.03em",
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
              fontSize: "clamp(16px, 4.5vw, 20px)",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.55,
            }}
          >
            We build production-grade web apps, SaaS products, and AI
            systems — then hand them over running.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#contact"
              className="text-center flex items-center justify-center min-h-[44px]"
              style={{
                background: "var(--glow)",
                color: "var(--ink)",
                padding: "14px 28px",
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Start a project →
            </Link>
            <Link
              href="#work"
              className="text-center flex items-center justify-center min-h-[44px]"
              style={{
                border: "2px solid rgba(255,255,255,0.3)",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              See the work
            </Link>
          </div>

          {/* Cycling review cards */}
          <div style={{ position: "relative", height: "220px", marginTop: "8px", overflow: "hidden" }}>
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
        <div
          className="rounded-[3px] overflow-hidden min-h-[280px] md:min-h-[540px]"
          style={{
            boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
            background: "var(--ink)",
            width: "100%",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full min-h-[280px] md:min-h-[540px] object-cover block rounded-[3px]"
          >
            <source
              src="https://res.cloudinary.com/dqdnuqh0u/video/upload/q_auto/rebuld-demo"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
