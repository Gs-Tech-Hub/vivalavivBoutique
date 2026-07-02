import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.collectionItem.deleteMany();
  await prisma.category.deleteMany();
  await prisma.branch.deleteMany();
  await prisma.review.deleteMany();

  const categories = await Promise.all([
    prisma.category.create({ data: { name: "Dresses", slug: "dresses" } }),
    prisma.category.create({ data: { name: "Accessories", slug: "accessories" } }),
    prisma.category.create({ data: { name: "Outerwear", slug: "outerwear" } }),
  ]);

  await prisma.collectionItem.createMany({
    data: [
      {
        name: "Silk Evening Dress",
        description: "Elegant floor-length silk dress in deep burgundy.",
        price: 289.0,
        categoryId: categories[0].id,
      },
      {
        name: "Floral Midi Dress",
        description: "Lightweight midi dress with delicate floral print.",
        price: 165.0,
        categoryId: categories[0].id,
      },
      {
        name: "Gold Chain Necklace",
        description: "Minimalist 18k gold-plated chain necklace.",
        price: 78.0,
        categoryId: categories[1].id,
      },
      {
        name: "Leather Crossbody Bag",
        description: "Compact crossbody bag in soft tan leather.",
        price: 195.0,
        categoryId: categories[1].id,
      },
      {
        name: "Wool Blend Coat",
        description: "Classic tailored coat in charcoal wool blend.",
        price: 320.0,
        categoryId: categories[2].id,
      },
      {
        name: "Cashmere Wrap",
        description: "Luxuriously soft cashmere wrap in ivory.",
        price: 145.0,
        categoryId: categories[2].id,
      },
    ],
  });

  await prisma.branch.createMany({
    data: [
      {
        name: "VivaLaViv Downtown",
        address: "124 Fashion Avenue, New York, NY 10001",
        phone: "(212) 555-0142",
        email: "downtown@vivalaviv.com",
        latitude: 40.7484,
        longitude: -73.9857,
        mapEmbedUrl:
          "https://maps.google.com/maps?q=40.7484,-73.9857&z=15&output=embed",
        sortOrder: 1,
      },
      {
        name: "VivaLaViv Westside",
        address: "89 Boutique Lane, Los Angeles, CA 90024",
        phone: "(310) 555-0198",
        email: "westside@vivalaviv.com",
        latitude: 34.0689,
        longitude: -118.4452,
        mapEmbedUrl:
          "https://maps.google.com/maps?q=34.0689,-118.4452&z=15&output=embed",
        sortOrder: 2,
      },
      {
        name: "VivaLaViv Midtown",
        address: "456 Style Street, Chicago, IL 60611",
        phone: "(312) 555-0167",
        email: "midtown@vivalaviv.com",
        latitude: 41.8947,
        longitude: -87.6244,
        mapEmbedUrl:
          "https://maps.google.com/maps?q=41.8947,-87.6244&z=15&output=embed",
        sortOrder: 3,
      },
    ],
  });

  await prisma.review.createMany({
    data: [
      {
        authorName: "Sarah M.",
        rating: 5,
        content:
          "The staff helped me find the perfect dress for my anniversary dinner. Exceptional service and beautiful pieces!",
        sortOrder: 1,
      },
      {
        authorName: "Jennifer L.",
        rating: 5,
        content:
          "VivaLaViv has become my go-to boutique. The quality of every item is outstanding and the styling advice is invaluable.",
        sortOrder: 2,
      },
      {
        authorName: "Michelle R.",
        rating: 4,
        content:
          "Love the curated selection! Found a gorgeous coat and accessories that I couldn't find anywhere else.",
        sortOrder: 3,
      },
      {
        authorName: "Amanda K.",
        rating: 5,
        content:
          "Beautiful boutique with a warm atmosphere. The collections are always on-trend yet timeless.",
        sortOrder: 4,
      },
      {
        authorName: "Rachel T.",
        rating: 5,
        content:
          "From the moment I walked in, I felt welcomed. The personal styling session was worth every minute.",
        sortOrder: 5,
      },
    ],
  });

  console.log("Seed data created successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
