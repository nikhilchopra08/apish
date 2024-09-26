import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import prismadb from '@/lib/prismadb';
// import serverAuth from '@/lib/serverauth';

export async function POST(req: NextRequest, { params }: { params: { userId: string } }) {
    try {
        // Authenticate user (optional, if you still want to check the user's validity)

        // Get userId from URL params
        const userId = params.userId;

        // Generate a unique API key
        const apiKey = uuidv4();

        // Create the API key
        const newApiKey = await prismadb.apiKey.create({
            data: {
                key: apiKey,
                userId: userId, // Use userId from URL params
            },
        });

        return NextResponse.json({ apiKey: newApiKey }, { status: 201 });
    } catch (e) {
        console.error("Error during API key creation:", e);
        return NextResponse.json({ error: "Error generating API key" }, { status: 500 });
    }
}

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
    try {
        // Get userId from URL params
        const userId = params.userId;

        // Fetch all API keys for the user
        const apiKeys = await prismadb.apiKey.findMany({
            where: { userId: userId }, // Use userId from URL params
        });

        return NextResponse.json({ apiKeys }, { status: 200 });
    } catch (e) {
        console.error("Error retrieving API keys:", e);
        return NextResponse.json({ error: "Error retrieving API keys" }, { status: 500 });
    }
}
