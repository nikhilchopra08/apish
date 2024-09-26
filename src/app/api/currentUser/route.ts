import { NextRequest, NextResponse } from 'next/server';
import serverAuth from '@/lib/serverauth';

export async function GET(req: NextRequest) {
    try {
        // Authenticate user and get currentUser
        const { currentUser } = await serverAuth(req);

        // Check if currentUser is found
        if (!currentUser) {
            throw new Error('No user authenticated');
        }

        return NextResponse.json({ currentUser }, { status: 200 });
    } catch (error) {
        console.error("Error fetching current user:", error);
        return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
}
