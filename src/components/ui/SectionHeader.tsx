interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  dark = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${className}`}>
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-3"
        style={{ color: dark ? "rgba(255,255,255,0.45)" : "var(--g5)" }}
      >
        {eyebrow}
      </p>
      <h2
        className="font-bold leading-tight"
        style={{
          fontFamily: "var(--font-bricolage)",
          fontSize: "clamp(36px, 4vw, 56px)",
          color: dark ? "#fff" : "var(--ink)",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
