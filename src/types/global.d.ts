// global.d.ts
import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {
      prismadb: PrismaClient; // Declare your custom property here
    }
  }
}
