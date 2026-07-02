"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatPrice, getImageUrl } from "@/lib/utils";

type CollectionItem = {
  id: string;
  name: string;
  description: string | null;
  price: string | null;
  imageFileId: string | null;
  category: { name: string };
};

export default function CollectionList({ items }: { items: CollectionItem[] }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function handleDelete(id: string) {
    if (!confirm("Delete this collection item?")) return;

    setDeletingId(id);
    setError("");

    const response = await fetch(`/api/admin/collections/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.error ?? "Failed to delete item");
      setDeletingId(null);
      return;
    }

    setDeletingId(null);
    router.refresh();
  }

  if (items.length === 0) {
    return (
      <p className="card-luxury p-6 text-brand-muted">
        No collection items yet.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {error && <p className="text-sm text-brand-primary">{error}</p>}
      {items.map((item) => {
        const imageUrl = getImageUrl(item.imageFileId);

        return (
          <div
            key={item.id}
            className="card-luxury flex items-center gap-4 p-4"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-brand-marble">
              {imageUrl ? (
                <Image src={imageUrl} alt={item.name} fill className="object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-xs text-brand-muted">
                  —
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-brand-charcoal">{item.name}</p>
              <p className="text-xs text-brand-muted">
                {item.category.name}
                {formatPrice(item.price) ? ` · ${formatPrice(item.price)}` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleDelete(item.id)}
              disabled={deletingId === item.id}
              className="text-sm text-brand-primary transition hover:text-red-800 disabled:opacity-50"
            >
              {deletingId === item.id ? "Deleting..." : "Delete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
