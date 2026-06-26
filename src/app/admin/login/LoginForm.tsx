"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { requestMagicLink, type LoginState } from "./actions";

const initialState: LoginState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
      size="lg"
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin" /> Sending…
        </>
      ) : (
        <>
          <Mail /> Send magic link
        </>
      )}
    </Button>
  );
}

export function LoginForm() {
  const [state, formAction] = useActionState(requestMagicLink, initialState);

  if (state.status === "sent") {
    return (
      <div
        role="status"
        className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground"
      >
        <p className="font-medium">Check your email</p>
        <p className="mt-1 text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@devixus.com"
          required
          autoFocus
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
