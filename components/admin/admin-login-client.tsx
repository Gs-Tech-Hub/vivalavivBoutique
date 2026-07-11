"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

export default function AdminLoginClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCredentialsSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    console.log("[login] submitting credentials", { email });
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/admin",
    });
    console.log("[login] signIn result", result);

    if (result?.error) {
      const message = result.error === "CredentialsSignin" ? "Invalid email or password" : result.error;
      console.log("[login] sign-in failed", { message });
      setError(message);
      setIsLoading(false);
    } else if (result?.ok) {
      console.log("[login] redirecting to", result.url || "/admin");
      window.location.href = result.url || "/admin";
    }
  };

  return (
    <>
      {error && (
        <div className="mb-6 rounded-lg border border-brand-primary/30 bg-brand-primary/5 px-4 py-3 text-sm text-brand-primary">
          {error}
        </div>
      )}

      <form onSubmit={handleCredentialsSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-brand-secondary">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            disabled={isLoading}
            className="mt-2 w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-muted focus:border-brand-primary focus:outline-none disabled:opacity-50"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-xs uppercase tracking-[0.2em] text-brand-secondary">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            disabled={isLoading}
            className="mt-2 w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-muted focus:border-brand-primary focus:outline-none disabled:opacity-50"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-primary w-full disabled:opacity-50"
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-4">
        <div className="flex-1 border-t border-brand-border" />
        <span className="text-xs text-brand-muted">Or</span>
        <div className="flex-1 border-t border-brand-border" />
      </div>

      <button
        type="button"
        disabled={isLoading}
        onClick={async () => {
          setIsLoading(true);
          await signIn("google", { callbackUrl: "/admin" });
        }}
        className="btn btn-secondary w-full disabled:opacity-50"
      >
        {isLoading ? "Signing in..." : "Sign in with Google"}
      </button>

      <div className="mt-6 text-center text-sm text-brand-muted">
        <Link href="/" className="transition hover:text-brand-primary">
          ← Back to site
        </Link>
      </div>
    </>
  );
}
