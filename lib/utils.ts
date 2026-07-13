export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function formatPrice(price: number | string | null | undefined) {
  if (price === null || price === undefined || price === "") {
    return null;
  }

  const amount = typeof price === "string" ? Number(price) : price;
  if (Number.isNaN(amount)) {
    return null;
  }

  // Format currency in Nigerian Naira with no decimal places
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getImageUrl(fileId?: string | null) {
  if (!fileId) return null;

  if (
    fileId.startsWith("/") ||
    fileId.startsWith("http://") ||
    fileId.startsWith("https://") ||
    fileId.startsWith("data:")
  ) {
    return fileId;
  }

  if (fileId.startsWith("images/")) {
    return `/${fileId}`;
  }

  // If Supabase public storage is configured, prefer the direct public URL
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseBucket = process.env.NEXT_PUBLIC_SUPABASE_BUCKET;
  if (supabaseUrl && supabaseBucket) {
    const base = supabaseUrl.replace(/\/$/, "");
    return `${base}/storage/v1/object/public/${supabaseBucket}/${fileId}`;
  }

  return `/api/images/${fileId}`;
}
