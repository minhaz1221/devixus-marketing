"use client";

import { useRef, useEffect, useState } from "react";
import { STATS } from "@/lib/constants";

interface StatConfig {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
}

function parseStatValue(value: string): StatConfig {
  // '$10M+' → prefix='$', target=10, suffix='M+'
  if (value.startsWith("$")) {
    const rest = value.slice(1);
    const num = parseFloat(rest);
    const suffix = rest.replace(/[\d.]+/, "");
    return { prefix: "$", target: num, suffix, decimals: 0 };
  }
  // '4.9★' → prefix='', target=4.9, suffix='★'
  // '250+' → prefix='', target=250, suffix='+'
  const match = value.match(/^([\d.]+)(.*)$/);
  if (match) {
    const num = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    return { prefix: "", target: num, suffix, decimals };
  }
  return { prefix: "", target: 0, suffix: value, decimals: 0 };
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function CountUpNumber({
  config,
  animate,
}: {
  config: StatConfig;
  animate: boolean;
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const done = useRef(false);

  useEffect(() => {
    if (!animate || done.current) return;
    done.current = true;
    const duration = 2000;

    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setValue(easeOut(progress) * config.target);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(config.target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate, config.target]);

  const formatted =
    config.decimals > 0
      ? value.toFixed(config.decimals)
      : Math.round(value).toString();

  return (
    <span
      style={{
        fontFamily: "var(--font-space)",
        fontWeight: 700,
        fontSize: "clamp(40px, 8vw, 96px)",
        lineHeight: 1,
      }}
    >
      <span style={{ color: "#fff" }}>
        {config.prefix}
        {formatted}
      </span>
      <span style={{ color: "var(--glow)" }}>{config.suffix}</span>
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const configs = STATS.map((s) => parseStatValue(s.value));

  return (
    <section ref={sectionRef} className="py-10 md:py-16" style={{ background: "var(--pulse)" }}>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-[1280px] mx-auto px-4 md:px-6"
      >
        {STATS.map((stat, i) => (
          <div key={stat.label}>
            <CountUpNumber config={configs[i]} animate={animate} />
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "clamp(13px, 3.5vw, 18px)",
                fontWeight: 500,
                marginTop: "14px",
                letterSpacing: "0.02em",
                fontFamily: "var(--font-space), system-ui, sans-serif",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
