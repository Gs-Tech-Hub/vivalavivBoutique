import { prisma } from "@/lib/prisma";

export async function getFeaturedCollections(limit = 6) {
  try {
    return await prisma.collectionItem.findMany({
      where: { published: true },
      include: { category: true },
      orderBy: { createdAt: "desc" },
      take: limit,
    });
  } catch {
    return [];
  }
}

export async function getPublishedReviews() {
  try {
    return await prisma.review.findMany({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { authorName: "asc" }],
    });
  } catch {
    return [];
  }
}

export async function getPublishedBranches() {
  try {
    return await prisma.branch.findMany({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    });
  } catch {
    return [];
  }
}

export async function getCategories() {
  try {
    return await prisma.category.findMany({
      orderBy: { name: "asc" },
    });
  } catch {
    return [];
  }
}

export async function getPublishedCollectionItems() {
  try {
    return await prisma.collectionItem.findMany({
      where: { published: true },
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    return [];
  }
}

export async function getAdminCategories() {
  try {
    return await prisma.category.findMany({
      include: { _count: { select: { items: true } } },
      orderBy: { name: "asc" },
    });
  } catch {
    return [];
  }
}

export async function getAdminCollectionItems() {
  try {
    return await prisma.collectionItem.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    return [];
  }
}

export async function getAdminCounts() {
  try {
    const [categoryCount, collectionCount] = await Promise.all([
      prisma.category.count(),
      prisma.collectionItem.count(),
    ]);
    return { categoryCount, collectionCount };
  } catch {
    return { categoryCount: 0, collectionCount: 0 };
  }
}
