"use client";

import Link from "next/link";
import { useState } from "react";

export default function NextProjectLink({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/work/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-bricolage)",
        fontWeight: 700,
        fontSize: "clamp(32px, 4vw, 48px)",
        color: hovered ? "var(--glow)" : "#fff",
        textDecoration: "none",
        letterSpacing: "-0.02em",
        lineHeight: 1.1,
        display: "inline-block",
        transition: "color 0.2s ease",
      }}
    >
      {title}
    </Link>
  );
}
