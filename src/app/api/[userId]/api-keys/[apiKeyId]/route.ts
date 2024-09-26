import { NextRequest, NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function POST(req: NextRequest, { params }: { params: { userId: string; apiKeyId: string } }) {
    try {
        // Extract user ID and API key ID from the URL parameters
        const { userId, apiKeyId } = params;

        // Get the details from the request body
        const body = await req.json();
        const { contextName, contextContent } = body;

        // Validate that context name and content are present
        if (!contextName || !contextContent) {
            return NextResponse.json(
                { error: "Context name and content are required" },
                { status: 400 }
            );
        }

        // Find the API key by the passed apiKeyId and check if it belongs to the user
        const apiKey = await prismadb.apiKey.findUnique({
            where: { key: apiKeyId, userId: userId }, // Check both key and userId
        });

        // Check if the API key exists
        if (!apiKey) {
            return NextResponse.json(
                { error: "API key not found or unauthorized" },
                { status: 404 }
            );
        }

        // Create the new context and associate it with the API key
        const newContext = await prismadb.context.create({
            data: {
                userId: userId,
                name: contextName,
                content: contextContent,
                apiKeyId: apiKey.id, // Use the found apiKey's ID
            },
        });

        return NextResponse.json({ context: newContext }, { status: 201 });
    } catch (e) {
        console.error("Error adding context:", e);
        return NextResponse.json(
            { error: "Error adding context" },
            { status: 500 }
        );
    }
}
