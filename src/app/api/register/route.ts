import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import prismadb from "@/lib/prismadb"

export async function POST(req:NextRequest) {
    try{
        const {email , password , name} = await req.json();

        if (!email || !password || !name) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const existingUser = await prismadb.user.findUnique({
            where:{
                email,
            },
        });

        if(existingUser){
            return NextResponse.json({error : "email already taken"} , {status : 400});
        }
        console.log(password)
        const password_hash = await bcrypt.hash(password , 12);

        const user = await prismadb.user.create({
            data:{
                name,
                email,
                password_hash,
            },
        });

        console.log(user);
        return NextResponse.json(user , {status : 201});
    }
    catch(e){
        console.log(e);
        console.error("Error during user registration:", e);
        return NextResponse.json({error : "Check api/register/route.ts"} , {status : 500});
    }
}