import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient();
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

let prisma: PrismaClient;

try {
  prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
} catch (e) {
  console.error("Prisma Instantiation Failed:", e);
  // Create a proxy that throws the real error when used, so the action can catch it!
  prisma = new Proxy({} as any, {
    get: () => { throw new Error(`Prisma Init Crash: ${e instanceof Error ? e.message : String(e)}`); }
  });
}

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
