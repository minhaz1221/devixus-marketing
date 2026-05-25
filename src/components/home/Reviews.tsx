import Image from "next/image";
import { REVIEWS } from "@/lib/constants";
import type { Review } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";

function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className="w-[280px] md:w-[360px] flex-shrink-0"
      style={{
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: "20px",
        padding: "36px",
        minHeight: "280px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.65,
          color: "var(--ink)",
          fontStyle: "normal",
          marginBottom: "20px",
          flex: 1,
        }}
      >
        {review.quote}
      </p>
      <div>
        <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", marginBottom: "16px" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              padding: "2px",
              flexShrink: 0,
            }}
            className={`bg-gradient-to-br ${review.ring}`}
          >
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", background: "#fff" }}>
              <Image
                src={review.photo}
                alt={review.name}
                width={40}
                height={40}
                style={{ borderRadius: "50%", display: "block" }}
              />
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: "14px", color: "var(--ink)", lineHeight: 1.3 }}>
              {review.name}
            </p>
            <p style={{ fontSize: "12px", color: "var(--g5)", marginTop: "2px" }}>
              {review.role}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  const first3 = REVIEWS.slice(0, 3);
  const last3 = REVIEWS.slice(3);

  // 3× duplication so -33.333% animation always has content filling the viewport
  const row1 = [...first3, ...first3, ...first3];
  const row2 = [...last3, ...last3, ...last3];

  return (
    <section className="section-pad" style={{ background: "#F7F7F7", overflow: "hidden" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <SectionHeader eyebrow="Client reviews" title="Chosen by real brands." />
      </div>

      {/* Row 1 — forward */}
      <div style={{ overflow: "hidden", marginTop: "56px", marginBottom: "20px" }}>
        <div
          className="marquee-40-third"
          style={{ display: "flex", width: "max-content", gap: "20px", padding: "4px 0" }}
        >
          {row1.map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div style={{ overflow: "hidden" }}>
        <div
          className="marquee-48-third-rev"
          style={{ display: "flex", width: "max-content", gap: "20px", padding: "4px 0" }}
        >
          {row2.map((review, i) => (
            <ReviewCard key={`r2-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
