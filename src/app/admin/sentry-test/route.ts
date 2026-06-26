// TEMPORARY — verifies Sentry is wired up end to end.
// Hit GET /admin/sentry-test once, confirm the error lands in Sentry, then
// DELETE this file (see Step 9 / verification step 10).

export const dynamic = "force-dynamic";

export function GET() {
  throw new Error("Sentry foundation test — server route handler error.");
}
