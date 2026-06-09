import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_hGf6i2FjESnO@ep-falling-recipe-ap4auvht-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require'
  });
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
