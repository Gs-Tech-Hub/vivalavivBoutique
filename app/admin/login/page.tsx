import Link from "next/link";
import { signIn } from "@/lib/auth";
import Brand from "@/components/ui/brand";

export const metadata = {
  title: "Admin Login",
};

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="card-luxury w-full max-w-md p-8 shadow-luxury">
        <div className="pb-8 text-center">
          <p className="section-subtitle mb-4"><Brand size="sm" /> Admin</p>
          <h1 className="font-heading text-3xl font-light uppercase tracking-widest text-brand-charcoal">
            Sign in to manage
          </h1>
          <p className="mt-3 text-sm text-brand-muted">
            Use your authorized Google account to access the admin dashboard.
          </p>
        </div>

        <LoginError searchParams={searchParams} />

        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/admin" });
          }}
        >
          <button type="submit" className="btn btn-primary w-full">
            Sign in with Google
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-brand-muted">
          <Link href="/" className="transition hover:text-brand-primary">
            ← Back to site
          </Link>
        </div>
      </div>
    </section>
  );
}

async function LoginError({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  if (!params.error) return null;

  return (
    <div className="mb-6 rounded-lg border border-brand-primary/30 bg-brand-primary/5 px-4 py-3 text-sm text-brand-primary">
      Access denied. Your Google account is not authorized for admin access.
    </div>
  );
}
