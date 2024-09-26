// src/types/next-auth.d.ts
// import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Extend the session user to include an id field
      name?: string | null;
      email?: string | null;
    };
  }
}
