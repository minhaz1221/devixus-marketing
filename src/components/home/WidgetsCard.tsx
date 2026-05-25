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
    <section id="widgets" className="section-pad" style={{ background: "#fff" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">

        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--g5)",
              marginBottom: "12px",
            }}
          >
            Our product
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 700,
              fontSize: "clamp(28px, 5vw, 56px)",
              color: "var(--ink)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            One line of code.{" "}
            <span style={{ color: "var(--pulse)" }}>Ten widgets.</span>
          </h2>
        </div>

        {/* Full-width gradient card */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl"
          style={{
            background: "linear-gradient(135deg, var(--pulse) 0%, var(--pulse-deep) 55%, var(--pulse-deeper) 100%)",
            alignItems: "center",
          }}
        >
          {/* Text block — always order-1 */}
          <div className="order-1">
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "12px",
              }}
            >
              Devixus Widgets
            </p>
            <h3
              style={{
                fontFamily: "var(--font-bricolage)",
                fontWeight: 700,
                fontSize: "clamp(28px, 5vw, 48px)",
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Devixus Widgets.
            </h3>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.55,
                marginBottom: "24px",
              }}
            >
              Drop any of our 10 production-ready widgets — contact forms, review
              carousels, booking modals, chatbots — into any site with a single
              script tag. No backend required.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="https://widgets.devixus.com"
                target="_blank"
                className="flex items-center justify-center min-h-[48px] w-full sm:w-auto"
                style={{
                  background: "var(--glow)",
                  color: "var(--ink)",
                  padding: "12px 24px",
                  borderRadius: "999px",
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
                className="flex items-center justify-center min-h-[48px] w-full sm:w-auto"
                style={{
                  border: "2px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                  padding: "10px 24px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                widgets.devixus.com
              </Link>
            </div>
          </div>

          {/* Code block — order-2, mt-8 when stacked, mt-0 when side by side */}
          <div
            className="order-2 mt-8 md:mt-0 max-w-full"
            style={{
              background: "rgba(0,0,0,0.45)",
              borderRadius: "12px",
              padding: "24px",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", gap: "6px", marginBottom: "16px" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57", flexShrink: 0 }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E", flexShrink: 0 }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840", flexShrink: 0 }} />
            </div>
            <pre
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: "12px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.82)",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                margin: 0,
                overflowX: "auto",
              }}
            >
              {CODE_SNIPPET}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
