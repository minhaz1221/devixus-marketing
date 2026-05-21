"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { REVIEWS } from "@/lib/constants";
import { cldUrl } from "@/lib/cloudinary";

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
          <div style={{ position: "relative", height: "220px", marginTop: "8px" }}>
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
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                height: "100%",
                minHeight: "540px",
              }}
            >
              {/* Top card — AirAxis */}
              <div
                style={{
                  flex: 1,
                  borderRadius: "3px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src={cldUrl("airaxis")}
                  alt="AirAxis dashboard"
                  fill
                  sizes="(max-width: 1280px) 60vw, 800px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "16px 20px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
                  }}
                >
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "15px", lineHeight: 1.3 }}>
                    AirAxis
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}>
                    SaaS · Dashboard
                  </p>
                </div>
              </div>

              {/* Bottom card — Beauty (indented) */}
              <div
                style={{
                  flex: "0 0 200px",
                  marginLeft: "20%",
                  borderRadius: "3px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src={cldUrl("beauty")}
                  alt="Beauty Commerce"
                  fill
                  sizes="(max-width: 1280px) 45vw, 640px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "16px 20px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
                  }}
                >
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "15px", lineHeight: 1.3 }}>
                    Beauty Commerce
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}>
                    Mobile App
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
