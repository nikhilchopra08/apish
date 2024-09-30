// app/api/hello/route.ts
import { NextResponse } from 'next/server';


export async function GET() {
    // Apply CORS headers
    const res = NextResponse.json({ message: 'Hello, World!' });
    res.headers.set('Access-Control-Allow-Origin', '*'); // Allow CORS
    return res;
}