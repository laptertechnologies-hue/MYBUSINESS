const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasourceUrl: "postgresql://neondb_owner:npg_hGf6i2FjESnO@ep-falling-recipe-ap4auvht-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require"
});

async function main() {
  try {
    const businesses = await prisma.business.findMany();
    console.log("Connected successfully! Businesses:", businesses);
  } catch (error) {
    console.error("Connection failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
