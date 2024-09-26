import { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { AuthOptions } from './auth';
import prismadb from '@/lib/prismadb';
import { Session } from 'next-auth'; // Ensure you import Session type if needed

const serverAuth = async (req: NextRequest) => {
    // Pass an object containing the request and options
    const session: Session | null = await getServerSession({
        req,
        ...AuthOptions,
    });

    if (!session?.user?.email) {
        throw new Error("Not signed in");
    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
        },
    });

    if (!currentUser) {
        throw new Error("User not found");
    }

    return { currentUser };
}

export default serverAuth;
