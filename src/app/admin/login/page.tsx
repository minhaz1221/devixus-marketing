import type { Metadata } from "next";
import { MakersCross } from "@/components/admin/MakersCross";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign in · Devixus Admin",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[var(--ink)] p-4">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl bg-[var(--mist)] p-8 shadow-2xl">
          <div className="mb-6 flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-lg bg-[var(--ink)]">
              <MakersCross className="h-5 w-auto" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Devixus Admin
            </span>
          </div>

          <h1 className="text-xl font-semibold text-foreground">
            Sign in
          </h1>
          <p className="mt-1 mb-6 text-sm text-muted-foreground">
            Enter your email and we&apos;ll send a one-time sign-in link.
          </p>

          {error === "invalid_link" && (
            <p
              role="alert"
              className="mb-4 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
            >
              That sign-in link was invalid or has expired. Request a new one
              below.
            </p>
          )}

          <LoginForm />
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          Authorized personnel only.
        </p>
      </div>
    </main>
  );
}
