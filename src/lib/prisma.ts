import { PrismaClient } from '@prisma/client'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import ws from 'ws'

neonConfig.webSocketConstructor = ws

const prismaClientSingleton = () => {
  // IGNORE process.env entirely here because it might be set to an empty string on Vercel
  const connectionString = 'postgresql://neondb_owner:npg_hGf6i2FjESnO@ep-falling-recipe-ap4auvht-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require';
  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool as any);
  return new PrismaClient({ adapter });
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

let prisma: PrismaClient;

try {
  prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
} catch (e) {
  console.error("Prisma Instantiation Failed:", e);
  prisma = new Proxy({} as any, {
    get: () => { throw new Error(`Prisma Init Crash: ${e instanceof Error ? e.message : String(e)}`); }
  });
}

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
