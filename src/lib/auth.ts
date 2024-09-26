import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb"

export const AuthOptions : NextAuthOptions = {
    providers : [
        CredentialsProvider({
            id : "credentials",
            name : "Credentials",
            credentials : {
                email : {label : "Email" , type:"text"},
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials , req){
                if(!credentials?.email || !credentials.password){
                    throw new Error("Email and Password are Required");
                }

                const user = await prismadb.user.findUnique({
                    where:{
                        email : credentials.email
                    }
                });

                if(!user || !user.password_hash){
                    throw new Error("User not found");
                }

                const IsCorrect = await compare(credentials.password , user.password_hash);

                if(!IsCorrect){
                    throw new Error("Incorrect password");
                }

                return user;
            }
        })
    ],
    pages:{
        signIn: "/auth"
    },
    debug: process.env.NODE_ENV === "development",
    session:{
        strategy : "jwt" as const
    },
    jwt: {
        secret: process.env.NEXT_AUTH_JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET
};