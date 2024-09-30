// app/api/hello/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { corsMiddleware } from '@/lib/cors';
import serverAuth from '@/lib/serverauth';

export async function GET(req: NextRequest) {
    // Apply CORS headers
    const res = NextResponse.json({ message: 'Hello, World!' });
    res.headers.set('Access-Control-Allow-Origin', '*'); // Allow CORS
    return res;
}