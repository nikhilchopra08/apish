import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Function to determine if the requested route is protected
const isProtectedRoute = (req: NextRequest): boolean => {
    // You can modify this array to specify which paths to protect
    const protectedPaths = ['/api', '/chat', '/Chatbot']; // Add your protected paths here
    return protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path));
};

export default async function middleware(req: NextRequest): Promise<NextResponse> {
    // Check if the user is authenticated
    const token = await getToken({ req });

    // If the route is protected and there is no token, redirect to the login page
    if (isProtectedRoute(req) && !token) {
        const url = req.nextUrl.clone();
        url.pathname = '/auth'; // Redirect to your sign-in page
        return NextResponse.redirect(url);
    }

    return NextResponse.next(); // Proceed to the next middleware or route
}

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)'], // Apply to all routes except those with file extensions and _next
};
