"use client";

import { useState, FormEvent, ChangeEvent } from "react";

const BUDGETS = [
  "Less than $5K",
  "$5K–$10K",
  "$10K–$20K",
  "$20K–$50K",
  "More than $50K",
];

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 18px",
        borderRadius: "999px",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "rgba(255,255,255,0.75)",
        textDecoration: "none",
        fontSize: "13px",
        fontWeight: 500,
        backdropFilter: "blur(8px)",
        transition: "background 0.15s",
      }}
    >
      {icon}
      {label}
    </a>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.05)",
  color: "#fff",
  fontSize: "15px",
  outline: "none",
  transition: "border-color 0.15s",
  fontFamily: "inherit",
  minHeight: "48px",
};

type ApiResponse = { success?: boolean; error?: string };

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot — intentionally hidden from users
  const [website, setWebsite] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setApiError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, whatsapp, budget, message, website }),
      });

      const data: ApiResponse = await res.json();

      if (!res.ok || !data.success) {
        setApiError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setApiError("Network error. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background: "var(--ink)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(92,75,255,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-[80px] items-start max-w-[1280px] mx-auto px-4 md:px-6"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* ── Left ── */}
        <div>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "16px",
            }}
          >
            Work with us
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 700,
              fontSize: "clamp(36px, 4vw, 52px)",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Have something to ship?
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              marginBottom: "28px",
            }}
          >
            Tell us about your project. We read every message and reply within 24 hours.
          </p>
          <a
            href="mailto:contact@devixus.com"
            style={{
              color: "var(--glow)",
              fontSize: "16px",
              fontWeight: 600,
              textDecoration: "none",
              display: "block",
              marginBottom: "32px",
            }}
          >
            contact@devixus.com
          </a>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <SocialLink
              href="https://facebook.com/devixus"
              label="Facebook"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              }
            />
            <SocialLink
              href="https://instagram.com/devixus"
              label="Instagram"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              }
            />
            <SocialLink
              href="https://twitter.com/devixus"
              label="Twitter / X"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              }
            />
            <SocialLink
              href="https://linkedin.com/company/devixus"
              label="LinkedIn"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              }
            />
          </div>
        </div>

        {/* ── Right — form card ── */}
        <div
          className="p-8 md:p-10"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "var(--glow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6 9 17l-5-5"
                    stroke="var(--ink)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 style={{ color: "#fff", fontSize: "22px", fontWeight: 700, marginBottom: "10px" }}>
                Message sent!
              </h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px" }}>
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              {/* Honeypot — hidden from real users */}
              <div style={{ position: "absolute", left: "-9999px", opacity: 0 }} aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setWebsite(e.target.value)}
                />
              </div>

              <div>
                <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  required
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                <div>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 555 000 0000"
                    value={whatsapp}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setWhatsapp(e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 500, marginBottom: "10px" }}>
                  Project Budget
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {BUDGETS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b === budget ? "" : b)}
                      style={{
                        padding: "8px 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.15s",
                        border: budget === b
                          ? "1.5px solid var(--glow)"
                          : "1.5px solid rgba(255,255,255,0.15)",
                        background: budget === b ? "rgba(201,255,59,0.12)" : "transparent",
                        color: budget === b ? "var(--glow)" : "rgba(255,255,255,0.6)",
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 500, marginBottom: "6px" }}>
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you&#39;re building…"
                  required
                  value={message}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
                />
              </div>

              {apiError && (
                <p
                  style={{
                    color: "#FCA5A5",
                    fontSize: "13px",
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.2)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    margin: 0,
                  }}
                >
                  {apiError}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? "rgba(92,75,255,0.5)" : "var(--pulse)",
                  color: "#fff",
                  padding: "16px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: 700,
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "background 0.15s",
                  marginTop: "4px",
                }}
              >
                {loading ? "Sending…" : "Let's Connect →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
