import * as Sentry from "@sentry/nextjs";

const isProd = process.env.NODE_ENV === "production";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN),
  tracesSampleRate: isProd ? 0.1 : 1.0,
  beforeSend(event, hint) {
    const error = hint.originalException;
    if (error instanceof Error && error.name === "AbortError") return null;
    return event;
  },
});

// Instruments App Router client navigations for tracing.
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
