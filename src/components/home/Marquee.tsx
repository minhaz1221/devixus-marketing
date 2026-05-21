import { BRANDS } from "@/lib/constants";

export default function Marquee() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section style={{ background: "var(--bone)", padding: "28px 0", overflow: "hidden" }}>
      <p
        style={{
          textAlign: "center",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--g5)",
          marginBottom: "18px",
        }}
      >
        Trusted by brands around the world
      </p>

      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Edge fades */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "100px",
            zIndex: 1,
            background: "linear-gradient(to right, var(--bone), transparent)",
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
            background: "linear-gradient(to left, var(--bone), transparent)",
            pointerEvents: "none",
          }}
        />

        <div
          className="marquee-30"
          style={{ display: "flex", width: "max-content", alignItems: "center" }}
        >
          {doubled.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              style={{ display: "flex", alignItems: "center", gap: "0" }}
            >
              {i !== 0 && (
                <span
                  aria-hidden="true"
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "var(--g4)",
                    flexShrink: 0,
                    margin: "0 28px",
                  }}
                />
              )}
              <span
                style={{
                  fontFamily: "var(--font-space)",
                  fontWeight: 700,
                  fontSize: "19px",
                  color: "var(--ink)",
                  whiteSpace: "nowrap",
                }}
              >
                {brand}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
