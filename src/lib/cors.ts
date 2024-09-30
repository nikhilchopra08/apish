// lib/cors.ts
import { NextRequest, NextResponse } from 'next/server';

export const corsMiddleware = (req: NextRequest) => {
    const res = NextResponse.next();

    // Set CORS headers
    res.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins or specify specific origins
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        return new NextResponse(null, { status: 204, headers: res.headers });
    }
    
    return res;
};
