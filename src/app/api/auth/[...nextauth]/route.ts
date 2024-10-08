import { AuthOptions } from "@/lib/auth"
import NextAuth from "next-auth"

// @ts-expect-error jfdbvjsfb
const handler = NextAuth(AuthOptions)

export { handler as GET, handler as POST }