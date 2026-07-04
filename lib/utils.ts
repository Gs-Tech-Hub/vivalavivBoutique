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

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
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

  return `/api/images/${fileId}`;
}
