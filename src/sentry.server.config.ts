import * as Sentry from "@sentry/nextjs";

const isProd = process.env.NODE_ENV === "production";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN),
  tracesSampleRate: isProd ? 0.1 : 1.0,
  // Drop Next.js internal asset transactions — pure noise.
  tracesSampler: (ctx) => {
    const name = ctx.name ?? "";
    if (name.includes("/_next/")) return 0;
    return isProd ? 0.1 : 1.0;
  },
  beforeSend(event, hint) {
    const error = hint.originalException;
    // Expected/benign errors we never want to page on.
    if (error instanceof Error && error.name === "AbortError") return null;
    return event;
  },
});
