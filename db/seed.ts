import sampleData from "./sample-data";
import { PrismaClient } from "@prisma/client";

async function main() {
  try {
    const prisma = new PrismaClient();
    await prisma.product.deleteMany();
    if ((await prisma.product.count()) > 0) return;

    await prisma.product.createMany({ data: sampleData.products });
  } catch (error) {
    console.log(error);
  }
}

main();
