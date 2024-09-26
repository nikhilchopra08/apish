// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Suppress TypeScript error for accessing global.prismadb
// @ts-expect-error kdfnsgkjf
const client = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === 'production') {
// @ts-expect-error kdfnsgkjf
  global.prismadb = client; // Assign the client to the global variable
}

export default client;
