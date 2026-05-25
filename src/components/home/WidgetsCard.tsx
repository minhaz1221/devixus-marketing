import Link from "next/link";

const CODE_SNIPPET = `<script
  src="https://widgets.devixus.com/embed.js"
  data-key="YOUR_KEY"
  defer>
</script>

<!-- Drop any widget anywhere: -->
<div data-devixus-widget="contact-form"></div>
<div data-devixus-widget="review-carousel"></div>
<div data-devixus-widget="booking-modal"></div>`;

export default function WidgetsCard() {
  return (
    <section id="widgets" className="py-16 md:py-24 lg:py-32" style={{ background: "#fff" }}>
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <article
          className="rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16"
          style={{
            background:
              "linear-gradient(135deg, var(--pulse) 0%, var(--pulse-deep) 55%, var(--pulse-deeper) 100%)",
          }}
        >
          {/* Kicker */}
          <p
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "16px",
            }}
          >
            Our product
          </p>

          {/* Headline — "Ten widgets." in Glow */}
          <h2
            style={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 700,
              fontSize: "clamp(32px, 6vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            One line of code.{" "}
            <span style={{ color: "var(--glow)" }}>Ten widgets.</span>
          </h2>

          {/* Body */}
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.55,
              marginBottom: "28px",
              maxWidth: "560px",
            }}
          >
            Drop any of our 10 production-ready widgets — contact forms, review
            carousels, booking modals, chatbots — into any site with a single script
            tag. No backend required.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10">
            <Link
              href="https://widgets.devixus.com"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full px-6 min-h-[48px] w-full sm:w-auto"
              style={{
                background: "var(--glow)",
                color: "var(--ink)",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Try Widgets →
            </Link>
            <Link
              href="https://widgets.devixus.com"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full px-6 min-h-[48px] w-full sm:w-auto"
              style={{
                border: "2px solid rgba(255,255,255,0.3)",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              widgets.devixus.com
            </Link>
          </div>

          {/* Code block */}
          <div
            className="rounded-xl p-4 md:p-6 overflow-x-auto"
            style={{
              background: "rgba(0,0,0,0.25)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ display: "flex", gap: "6px", marginBottom: "16px" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57", flexShrink: 0 }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E", flexShrink: 0 }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840", flexShrink: 0 }} />
            </div>
            <pre
              style={{
                fontFamily: "var(--font-mono, 'Courier New', monospace)",
                fontSize: "13px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.82)",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                margin: 0,
              }}
            >
              {CODE_SNIPPET}
            </pre>
          </div>
        </article>
      </div>
    </section>
  );
}
