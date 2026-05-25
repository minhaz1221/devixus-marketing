"use client";

import { useState, useEffect } from "react";

function MakersCrossGlow() {
  return (
    <svg width="20" height="20" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <line x1="3" y1="31" x2="31" y2="3" stroke="#C9FF3B" strokeWidth="6" strokeLinecap="round" />
      <line x1="3" y1="3" x2="31" y2="31" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      // Mobile: bottom-[76px] clears FloatingNav (bottom-4 + ~44px height + 16px gap).
      // Desktop: bottom-8 sits at same level as FloatingNav but far-right — no overlap.
      className="fixed bottom-[76px] right-4 md:bottom-8 md:right-8 w-[48px] h-[48px] rounded-full flex items-center justify-center z-[49]"
      style={{
        background: "var(--pulse)",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 4px 20px rgba(92,75,255,0.4)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <MakersCrossGlow />
    </button>
  );
}
