import Link from "next/link";
import Brand from "@/components/ui/brand";
import AdminLoginClient from "@/components/admin/admin-login-client";

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="card-luxury w-full max-w-md p-8 shadow-luxury">
        <div className="pb-8 text-center">
          <p className="section-subtitle mb-4">
            <Brand size="sm" /> Admin
          </p>
          <h1 className="font-heading text-3xl font-light uppercase tracking-widest text-brand-charcoal">
            Sign in to manage
          </h1>
          <p className="mt-3 text-sm text-brand-muted">
            Access the admin dashboard with your credentials.
          </p>
        </div>

        <LoginError searchParams={searchParams} />

        <AdminLoginClient />
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
  if (!params?.error) return null;

  return (
    <div className="mb-6 rounded-lg border border-brand-primary/30 bg-brand-primary/5 px-4 py-3 text-sm text-brand-primary">
      Access denied. Please check your credentials or use Google sign-in.
      {params?.error ? ` (${params.error})` : ""}
    </div>
  );
}
