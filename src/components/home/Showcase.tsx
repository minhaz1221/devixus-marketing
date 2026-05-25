import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { cldUrl } from "@/lib/cloudinary";

const TOP_TAGS = [
  "SaaS Dashboard",
  "Mobile Apps",
  "WordPress",
  "Branding",
  "Next.js",
  "WooCommerce",
  "AI Integrations",
  "Voice Agents",
  "NFC Systems",
  "Field Service",
];

const BOTTOM_TAGS = [
  "Supabase",
  "Vercel",
  "Framer",
  "Elementor",
  "Figma",
  "Cloudflare",
  "OpenAI",
  "Anthropic",
  "Twilio",
  "Stripe",
  "Next.js",
  "Resend",
];

const PROJECTS = [
  {
    id: "vetted",
    title: "Vetted",
    category: "AI SaaS · Next.js 15",
    dark: true,
    accent: "#5C4BFF",
    image: cldUrl("vetted", { width: 520, height: 390 }),
  },
  {
    id: "larrys-lunch",
    title: "Larry's Lunch",
    category: "WooCommerce · Custom Plugin",
    dark: false,
    accent: "#F59E0B",
    image: cldUrl("larrys-lunch", { width: 520, height: 390 }),
  },
  {
    id: "rebuld",
    title: "Rebuld",
    category: "SaaS · Next.js · Stripe",
    dark: false,
    accent: "#3B82F6",
    image: cldUrl("rebuld", { width: 520, height: 390 }),
  },
  {
    id: "dedalus",
    title: "Dedalus",
    category: "Web App · Enterprise",
    dark: true,
    accent: "#8B5CF6",
    image: cldUrl("dedalus", { width: 520, height: 390 }),
  },
  {
    id: "yellow-ai",
    title: "Yellow.ai",
    category: "AI Integration · Voice",
    dark: false,
    accent: "#EAB308",
    image: cldUrl("yellow-ai", { width: 520, height: 390 }),
  },
  {
    id: "rise-headwear",
    title: "Rise Headwear",
    category: "E-Commerce · NFC",
    dark: false,
    accent: "#EF4444",
    image: cldUrl("rise-headwear", { width: 520, height: 390 }),
  },
];

const doubled = [...PROJECTS, ...PROJECTS];

function TagStrip({
  tags,
  direction,
}: {
  tags: string[];
  direction: "left" | "right";
}) {
  const cls = direction === "left" ? "marquee-22" : "marquee-22-rev";
  const items = [...tags, ...tags];

  return (
    <div
      style={{
        overflow: "hidden",
        background: "#fff",
        borderTop: "1px solid var(--g2)",
        borderBottom: "1px solid var(--g2)",
        padding: "14px 0",
      }}
    >
      <div
        className={cls}
        style={{ display: "flex", alignItems: "center", width: "max-content" }}
      >
        {items.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              padding: "0 32px",
            }}
          >
            <span
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--ink)",
                whiteSpace: "nowrap",
              }}
            >
              {tag}
            </span>
            <span
              aria-hidden
              style={{ color: "var(--g4)", margin: "0 4px", fontSize: "15px" }}
            >
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <div
      className="w-[85vw] md:w-[520px] flex-shrink-0"
      style={{
        borderRadius: 20,
        overflow: "hidden",
        background: project.dark ? "var(--ink-2)" : "#fff",
        border: project.dark
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid var(--g2)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="w-full aspect-[520/390] relative flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${project.accent}40, ${project.accent}20)`,
        }}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 85vw, 520px"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        )}
      </div>
      <div style={{ padding: "20px 24px" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: project.dark ? "rgba(255,255,255,0.4)" : "var(--g5)",
            marginBottom: 6,
          }}
        >
          {project.category}
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "var(--font-bricolage)",
            color: project.dark ? "#fff" : "var(--ink)",
          }}
        >
          {project.title}
        </p>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" className="pt-16 md:pt-24 lg:pt-32 pb-0" style={{ background: "#fff" }}>
      <div className="max-w-[1480px] mx-auto px-4 md:px-6 mb-12">
        <SectionHeader eyebrow="Selected work" title="Shipped. Live. Earning." />
      </div>

      <TagStrip tags={TOP_TAGS} direction="left" />

      <div style={{ overflow: "hidden", padding: "24px 0 24px 16px" }}>
        <div
          className="marquee-30"
          style={{ display: "flex", gap: "20px", width: "max-content" }}
        >
          {doubled.map((project, i) => (
            <ProjectCard key={`${project.id}-${i}`} project={project} />
          ))}
        </div>
      </div>

      <TagStrip tags={BOTTOM_TAGS} direction="right" />
    </section>
  );
}
