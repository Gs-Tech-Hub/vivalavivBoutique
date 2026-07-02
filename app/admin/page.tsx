import Link from "next/link";
import { auth } from "@/lib/auth";
import { getAdminCounts } from "@/lib/queries";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Admin Dashboard",
};

const adminLinks = [
  {
    href: "/admin/categories",
    label: "Categories",
    description: "Manage product categories",
  },
  {
    href: "/admin/collections",
    label: "Collections",
    description: "Add and remove collection items",
  },
];

export default async function AdminDashboardPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/admin/login");
  }

  const { categoryCount, collectionCount } = await getAdminCounts();

  return (
    <div className="space-y-8">
      <div>
        <p className="section-subtitle">Admin</p>
        <h1 className="mt-2 font-heading text-3xl font-light uppercase tracking-widest text-brand-charcoal">
          Dashboard
        </h1>
        <p className="mt-2 text-brand-muted">
          Welcome back, {session.user.name ?? session.user.email}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card-luxury p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-secondary">
            Categories
          </p>
          <p className="mt-2 font-heading text-4xl font-light text-brand-charcoal">
            {categoryCount}
          </p>
        </div>
        <div className="card-luxury p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-secondary">
            Collection Items
          </p>
          <p className="mt-2 font-heading text-4xl font-light text-brand-charcoal">
            {collectionCount}
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {adminLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="card-luxury p-6 transition duration-300 hover:border-brand-secondary hover:shadow-luxury"
          >
            <h2 className="font-heading text-xl font-light uppercase tracking-wider text-brand-charcoal">
              {link.label}
            </h2>
            <p className="mt-2 text-sm text-brand-muted">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
