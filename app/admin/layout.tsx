import Link from "next/link";
import { auth, signOut } from "@/lib/auth";
import AdminNav from "@/components/admin/admin-nav";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="min-h-screen bg-brand-cream bg-marble">
      {session && (
        <header className="border-b border-brand-border bg-brand-light/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
            <div>
              <Link
                href="/admin"
                className="font-heading text-lg font-light uppercase tracking-widest text-brand-charcoal"
              >
                VIV LA VIV Admin
              </Link>
              {session.user.email && (
                <p className="text-xs text-brand-muted">{session.user.email}</p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm text-brand-muted transition hover:text-brand-primary"
              >
                View site
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/admin/login" });
                }}
              >
                <button
                  type="submit"
                  className="text-sm text-brand-primary transition hover:text-red-800"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </header>
      )}

      {session ? (
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <AdminNav />
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
