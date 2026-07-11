import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

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
        imageFileId: "/images/fashion-woman-leaning-on-car.jpg",
        imageFileName: "fashion-woman-leaning-on-car.jpg",
      },
      {
        name: "Floral Midi Dress",
        description: "Lightweight midi dress with delicate floral print.",
        price: 165.0,
        categoryId: categories[0].id,
        imageFileId: "/images/girl-in-yello.jpeg",
        imageFileName: "girl-in-yello.jpeg",
      },
      {
        name: "Gold Chain Necklace",
        description: "Minimalist 18k gold-plated chain necklace.",
        price: 78.0,
        categoryId: categories[1].id,
        imageFileId: "/images/fashion-collection-1.jpg",
        imageFileName: "fashion-collection-1.jpg",
      },
      {
        name: "Leather Crossbody Bag",
        description: "Compact crossbody bag in soft tan leather.",
        price: 195.0,
        categoryId: categories[1].id,
        imageFileId: "/images/fashion-collection-2.jpg",
        imageFileName: "fashion-collection-2.jpg",
      },
      {
        name: "Wool Blend Coat",
        description: "Classic tailored coat in charcoal wool blend.",
        price: 320.0,
        categoryId: categories[2].id,
        imageFileId: "/images/fashion-collection-3.jpg",
        imageFileName: "fashion-collection-3.jpg",
      },
      {
        name: "Cashmere Wrap",
        description: "Luxuriously soft cashmere wrap in ivory.",
        price: 145.0,
        categoryId: categories[2].id,
        imageFileId: "/images/fashion-collection-4.jpg",
        imageFileName: "fashion-collection-4.jpg",
      },
    ],
  });

  await prisma.branch.createMany({
    data: [
      {
        name: "Viv La Viv Head Office",
        address: "1st Ugbor, Benin City, Edo State, Nigeria",
        phone: "(212) 555-0142",
        email: "downtown@vivalaviv.com",
        latitude: 40.7484,
        longitude: -73.9857,
        mapEmbedUrl:
          "https://maps.google.com/maps?q=40.7484,-73.9857&z=15&output=embed",
        imageFileId: "/images/head-office.jpeg",
        imageFileName: "head-office.jpeg",
        sortOrder: 1,
      },
      {
        name: "Viv La Viv Shoprite",
        address: "Edo Mall, Benin City, Edo State, Nigeria",
        phone: "(310) 555-0198",
        email: "westside@vivalaviv.com",
        latitude: 34.0689,
        longitude: -118.4452,
        mapEmbedUrl:
          "https://maps.google.com/maps?q=34.0689,-118.4452&z=15&output=embed",
        imageFileId: "/images/shoprite.jpeg",
        imageFileName: "shoprite.jpeg",
        sortOrder: 2,
      },
      {
        name: "Viv La Viv Ugbowo",
        address: "Ugbowo, Benin City, Edo State, Nigeria",
        phone: "(312) 555-0167",
        email: "midtown@vivalaviv.com",
        latitude: 41.8947,
        longitude: -87.6244,
        mapEmbedUrl:
          "https://maps.google.com/maps?q=41.8947,-87.6244&z=15&output=embed",
        imageFileId: "/images/branch-shop.jpeg",
        imageFileName: "branch-shop.jpeg",
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
          "Viva La Viv has become my go-to boutique. The quality of every item is outstanding and the styling advice is invaluable.",
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

  // Create or update an admin user for credentials login
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@vivalaviv.com";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "admin001";
  const hashed = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      name: "Administrator",
      password: hashed,
    },
    create: {
      email: adminEmail,
      name: "Administrator",
      password: hashed,
    },
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
