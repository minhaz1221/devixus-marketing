import Link from "next/link";

const CODE_SNIPPET = `<script
  src="https://widgets.devixus.com/embed.js"
  data-key="YOUR_KEY"
  defer>
</script>

<!-- Then drop any widget anywhere: -->
<div data-devixus-widget="contact-form"></div>
<div data-devixus-widget="review-carousel"></div>
<div data-devixus-widget="booking-modal"></div>`;

export default function WidgetsCard() {
  return (
    <section id="widgets" className="section-pad" style={{ background: "#fff" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
              fontSize: "clamp(36px, 4vw, 56px)",
              color: "var(--ink)",
              lineHeight: 1.1,
            }}
          >
            One line of code.{" "}
            <span style={{ color: "var(--pulse)" }}>Ten widgets.</span>
          </h2>
        </div>

        {/* Full-width card */}
        <div
          style={{
            borderRadius: "16px",
            background: "linear-gradient(140deg, #5C4BFF 0%, #4232E6 55%, #3621B8 100%)",
            padding: "64px 56px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "56px",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "16px",
              }}
            >
              Devixus Widgets
            </p>
            <h3
              style={{
                fontFamily: "var(--font-bricolage)",
                fontWeight: 700,
                fontSize: "clamp(32px, 3vw, 48px)",
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              Devixus Widgets.
            </h3>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.6,
                marginBottom: "32px",
              }}
            >
              Drop any of our 10 production-ready widgets — contact forms, review
              carousels, booking modals, chatbots — into any site with a single
              script tag. No backend required.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
              <Link
                href="https://widgets.devixus.com"
                target="_blank"
                style={{
                  background: "var(--glow)",
                  color: "var(--ink)",
                  padding: "12px 24px",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Try Widgets →
              </Link>
              <Link
                href="https://widgets.devixus.com"
                style={{
                  border: "2px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                  padding: "10px 24px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                widgets.devixus.com
              </Link>
            </div>
          </div>

          {/* Right — code block */}
          <div
            style={{
              background: "rgba(0,0,0,0.5)",
              borderRadius: "12px",
              padding: "28px",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "6px",
                marginBottom: "20px",
              }}
            >
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840" }} />
            </div>
            <pre
              style={{
                fontFamily: "'Courier New', Courier, monospace",
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
        </div>
      </div>
    </section>
  );
}
