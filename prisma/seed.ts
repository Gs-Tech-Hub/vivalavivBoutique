import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

type InstagramSeedRef = {
  category: string;
  urls: string[];
};

function getInstagramSeedData(): InstagramSeedRef[] {
  return [
    {
      category: "Dresses",
      urls: [
        "https://www.instagram.com/reel/DdyZyVeRsMZ/?stkn=bGpkYXVtYzBhY201",
        "https://www.instagram.com/reel/Ddy8tl3kdtb/?stkn=NW5panc3Nm5na2ti",
        "https://www.instagram.com/p/DdyeGAejy24/?stkn=OGxmZjlzdXozemls",
        "https://www.instagram.com/reel/DdyeXqzDpdX/?stkn=NmZxOHc0Mnk4bmEx",
        "https://www.instagram.com/reel/DeJ49lbDcOs/?stkn=dHlmOGF0amdyZmJp",
        "https://www.instagram.com/reel/Ddy9KFlkpQL/?stkn=c2xtNWk4ZWN4NXNp",
        "https://www.instagram.com/reel/Ddy85fqgedT/?stkn=ZXRyOTc1bHlvajFx",
        "https://www.instagram.com/reel/DdyexxTlYTZ/?stkn=cnhteW9uNDZscTk0",
        "https://www.instagram.com/reel/DdyelwilXpc/?stkn=MXJ1NmVkejgxdzF2cg==",
        "https://www.instagram.com/reel/DdrC2Q4D1cb/?stkn=N3kxa3ZzeGwyb3R6",
        "https://www.instagram.com/reel/Ddq1YfZjb4L/?stkn=MWU0OWh3MXV6cDdlZw==",
        "https://www.instagram.com/reel/DdjplJ_Djp0/?stkn=dG91b3R0Y3R3NHg1",
        "https://www.instagram.com/reel/DdjhtVXlTeX/?stkn=YWF4dWg2MHZycTg4",
        "https://www.instagram.com/reel/DdegKA4EePv/?stkn=MXM5cWpzajZxbHY2Mw==",
        "https://www.instagram.com/reel/DddysbJiAE1/?stkn=czlzdWZ2aTRwb3o1",
        "https://www.instagram.com/reel/DddiG9Zjc7u/?stkn=bmkyYzAwMmhvbGN4",
        "https://www.instagram.com/reel/DdcAqpQjPas/?stkn=aTZwaWU4MW9scm92",
        "https://www.instagram.com/reel/DdZIS4Liatv/?stkn=MWtpa3RrOGt1Znh4aQ==",
        "https://www.instagram.com/reel/DdYYkHTgeNb/?stkn=YXpwZnA2OTIzdXAz",
        "https://www.instagram.com/reel/DdWc-LeGUQs/?stkn=dWc2Y3dqdHV0Z2Fx",
        "https://www.instagram.com/reel/DdWIaNViqSS/?stkn=cG5hOXFxbWwwY3R6",
        "https://www.instagram.com/reel/DdWIZHGGsup/?stkn=MTZyNDV1aWhicGt4Yg==",
        "https://www.instagram.com/reel/DdV6ho1EeKa/?stkn=amM2YjhhZ280d2Fv",
        "https://www.instagram.com/reel/DdVzxLPDrU9/?stkn=cW9keG0yeml3YnZu",
        "https://www.instagram.com/reel/DdUrbd1CYl3/?stkn=MWgxZ203YTNpYjVlbQ==",
        "https://www.instagram.com/reel/DdUhUuxl8vi/?stkn=b3I4enhqajR3N2hq",
        "https://www.instagram.com/reel/DdUXw_yidsg/?stkn=b2J0NndwdWZmZTd2",
        "https://www.instagram.com/reel/DdTcl3IDMyj/?stkn=MWtncHZvOGR2NzBxNQ==",
        "https://www.instagram.com/reel/DdTRpJMjR6c/?stkn=MXI4cjRpc3IwZTZ3ZA==",
        "https://www.instagram.com/reel/DdTPb-ggikA/?stkn=MWR2eHYwemNjM3R3bQ==",
        "https://www.instagram.com/reel/DdRl1YBDse3/?stkn=MTZrdTBhMXV1NGFtaA==",
        "https://www.instagram.com/reel/DdRRuPZEXyO/?stkn=MW84YmFoN2tscHJieQ==",
      ],
    },
    {
      category: "Accessories and Bags",
      urls: [
        "https://www.instagram.com/reel/DXi-c3pCPjs/?stkn=cTc4Z2NlOHV5Y2dy",
        "https://www.instagram.com/p/DXhodtTiGwl/?stkn=OTMwY2t2MDd1M2E=",
        "https://www.instagram.com/reel/DaDUyfZIZqK/?stkn=eW1hc2l2bnM2eHhu",
        "https://www.instagram.com/reel/DaBRirlx9WF/?stkn=MWhreDZxeGFzY2o2aQ==",
        "https://www.instagram.com/reel/DZ8JrT6xlaL/?stkn=YTk0ZHloNDRlNGR3",
        "https://www.instagram.com/reel/DZsiYuXomeG/?stkn=OHp6OTVsYTZ6bmc3",
        "https://www.instagram.com/reel/DYJrMX4ou79/?stkn=MWdwb2NhbjM1NWdoeA==",
        "https://www.instagram.com/reel/DYHBC55oqcT/?stkn=Z2FkY215Mjc4cHRr",
        "https://www.instagram.com/reel/DX7ieI_Roeu/?stkn=OGRjamVpcXZ5NmM0",
        "https://www.instagram.com/reel/DX4F1q-oZXy/?stkn=aTB4OHZtb2cyZWhv",
        "https://www.instagram.com/reel/DX2IAqVFHXe/?stkn=N21yc3p4eGlrYnVw",
        "https://www.instagram.com/reel/DXzoeqQoSij/?stkn=eGxxd2hrbXV4eTFw",
        "https://www.instagram.com/p/DXzoQ-DiKic/?stkn=Zm5kbW5ta2Y2bHUw",
        "https://www.instagram.com/reel/DXgRcEUCMEH/?stkn=MXR1ZWIxZTFhemZxNQ==",
        "https://www.instagram.com/p/DXgNtcUiJp9/?stkn=MWJ0YXByemNwM3duZQ==",
        "https://www.instagram.com/p/DXfBpq3iGMx/?stkn=MTJkenE0NDh1OWJ6bg==",
        "https://www.instagram.com/p/DXSCsxnCEo0/?stkn=MnAxczY4eTFrdDhr",
        "https://www.instagram.com/reel/DXR8cCOCNo-/?stkn=MWp2dHF0bW45ZWhtMA==",
        "https://www.instagram.com/reel/DXQIg4RiOjr/?stkn=OGNvOTA4enJreTE2",
        "https://www.instagram.com/reel/DXQLEOgiNvD/?stkn=MWhvODNqOXBkYjh2YQ==",
        "https://www.instagram.com/p/DXCGqzLCKd4/?stkn=MWkxeWpkNmxrMnpwdA==",
        "https://www.instagram.com/p/DXB6i4wCMAL/?stkn=MTI0aW5oMHF5ZGVsbA==",
        "https://www.instagram.com/reel/DW_h0bSCPg1/?stkn=aXdwbnB3eWoyaHdv",
        "https://www.instagram.com/reel/DRZk-uaiLG3/?stkn=MWY1NmM2M3kwN2xpNg==",
        "https://www.instagram.com/reel/DRXDSsaiLko/?stkn=cjEzY2FpNmw0YTJh",
      ],
    },
    {
      category: "Kiddies",
      urls: [
        "https://www.instagram.com/reel/DaaZAfZIcoP/?stkn=Mm90eThpd3ZyaGZo",
        "https://www.instagram.com/reel/DaaUw1JICF4/?stkn=NGlzc25lNWphZG83",
        "https://www.instagram.com/reel/DaZyDltIoA6/?stkn=c3I2ZW9qZjYzMzlo",
        "https://www.instagram.com/reel/DZ2nG3QozHb/?stkn=MWprcXFtM2g0cndoZA==",
        "https://www.instagram.com/reel/DZ2ijTfIIvk/?stkn=MWt6bTNta2tmMDA5bQ==",
        "https://www.instagram.com/reel/DZ2bLTLo_GS/?stkn=MWc2MHQ2Y29tczV3eg==",
        "https://www.instagram.com/reel/DZva5pXx48A/?stkn=cW5rczVnbGsydTNh",
        "https://www.instagram.com/reel/DZuEGUcjXeC/?stkn=dGtxYmloeGVkZHMx",
        "https://www.instagram.com/reel/DZsqAF6xhCH/?stkn=MW5nNHMzZmxueWxsZg==",
        "https://www.instagram.com/reel/DZIaBnnje1L/?stkn=MjNjejAzY2Vndno0",
        "https://www.instagram.com/reel/DZIHYf3DSta/?stkn=MXNzdzkyem1ncTZ3Yg==",
        "https://www.instagram.com/reel/DZHwxJzk8ew/?stkn=MWEwb3NmZTVzdjRseA==",
        "https://www.instagram.com/reel/DZHcPpqHMhS/?stkn=MW1rMXFweDI4aWltcQ==",
        "https://www.instagram.com/reel/DZCSsXdEcu4/?stkn=YzQwenJsaGs0MGsw",
        "https://www.instagram.com/reel/DZAax27IK2O/?stkn=eTN1NTJxc3R0NWwx",
        "https://www.instagram.com/reel/DZATk-LkcPe/?stkn=NmVvOHBzeDRqdjdl",
        "https://www.instagram.com/reel/DW5QJ3biINU/?stkn=amozN3Fpbnltdjdx",
        "https://www.instagram.com/reel/DW8ssy7iLqf/?stkn=c3J4YnZ6eDgzbjN4",
        "https://www.instagram.com/p/DXpbXAakS9t/?stkn=eDloaWhubzFkNjFu",
        "https://www.instagram.com/p/DXlyBtHCIhP/?stkn=MWVhbXkxYnh5eWFvMw==",
        "https://www.instagram.com/p/DXpZ2P8CKbt/?stkn=dGtoNWp5NHBydWN0",
      ],
    },
  ];
}

async function main() {
  await prisma.collectionItem.deleteMany();
  await prisma.category.deleteMany();
  await prisma.branch.deleteMany();
  await prisma.review.deleteMany();

  const categories = await Promise.all([
    prisma.category.create({ data: { name: "Dresses", slug: "dresses" } }),
    prisma.category.create({
      data: { name: "Accessories and Bags", slug: "accessories-and-bags" },
    }),
    prisma.category.create({ data: { name: "Kiddies", slug: "kiddies" } }),
  ]);

  const categoryLookup = new Map(categories.map((category) => [category.name, category]));
  const importedInstagramItems = getInstagramSeedData().flatMap(({ category, urls }) => {
    const categoryRecord = categoryLookup.get(category);
    if (!categoryRecord) {
      return [];
    }

    return Array.from(new Set(urls)).map((url) => ({
      name: category,
      categoryId: categoryRecord.id,
      imageFileId: null,
      imageFileName: null,
      instagramReelUrl: url,
      published: true,
    }));
  });

  if (importedInstagramItems.length > 0) {
    await prisma.collectionItem.createMany({ data: importedInstagramItems });
  }

  await prisma.branch.createMany({
    data: [
      {
        name: "VivLaViv Head Office",
        address: "1st Ugbor, Benin City, Edo State, Nigeria",
        phone: "+234 813 106 4022",
        email: "vivlaviv13@gmail.com",
        latitude: 6.2990255,
        longitude: 5.6151112,
        mapEmbedUrl:
          "https://maps.google.com/maps?q=6.2990255,5.6151112&z=15&output=embed",
        imageFileId: "/images/head-office.jpeg",
        imageFileName: "head-office.jpeg",
        sortOrder: 1,
      },
      {
        name: "VivLaViv Shoprite",
        address: "Edo Mall, Benin City, Edo State, Nigeria",
        phone: "+234 813 106 4022",
        email: "vivlaviv13@gmail.com",
        latitude: 6.3215168,
        longitude: 5.625856,
        mapEmbedUrl:
          "https://maps.google.com/maps?q=6.3215168,5.625856&z=15&output=embed",
        imageFileId: "/images/shoprite.jpeg",
        imageFileName: "shoprite.jpeg",
        sortOrder: 2,
      },
      {
        name: "VivLaViv Market Square",
        address: "Market Square, Benin City, Edo State, Nigeria",
        phone: "+234 813 106 4022",
        email: "vivlaviv13@gmail.com",
        latitude: 6.0878302,
        longitude: 5.6642962,
        mapEmbedUrl:
          "https://maps.google.com/maps?q=6.0878302,5.6642962&z=15&output=embed",
        imageFileId: "/images/branch-shop.jpeg",
        imageFileName: "branch-shop.jpeg",
        sortOrder: 3,
      },
    ],
  });

  await prisma.review.createMany({
    data: [
      {
        authorName: "Jennifer L.",
        rating: 5,
        content:
          "Viva La Viv has become my go-to boutique. The quality of every item is outstanding and the styling advice is invaluable.",
        sortOrder: 2,
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

  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@vivlavivboutique.com";
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
