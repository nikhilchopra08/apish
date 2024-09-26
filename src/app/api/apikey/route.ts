import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid'; // To generate a unique API key
import prismadb from '@/lib/prismadb'; // Import your Prisma client instance
import serverAuth from '@/lib/serverauth';

export async function POST(req: NextRequest) {
  try {
    // Authenticate user
    const { currentUser } = await serverAuth(req);
    
    if (!currentUser) {
      return NextResponse.json({ message: 'Unauthorized user' }, { status: 403 });
    }

    const body = await req.json();
    const { contextName, contextDescription, content } = body; // Include content in destructuring

    if (!contextName || !contextDescription || !content) { // Check if content is provided
      return NextResponse.json({ message: 'Context name, description, and content are required' }, { status: 400 });
    }

    // Generate a unique API key
    const apiKey = nanoid(32);

    // Create a new API key record in the database
    const apiKeyRecord = await prismadb.apiKey.create({
      data: {
        key: apiKey,
        userId: currentUser.id,
        isActive: true, // Assuming the key is active by default
      },
    });

    // Create a context and link it with the API key
    const context = await prismadb.context.create({
      data: {
        name: contextName,
        description: contextDescription,
        content: content, // Include content in the context creation
        apiKeyId: apiKeyRecord.id, // Link the API key
        userId: currentUser.id, // Link the user
      },
    });

    // Return the generated API key and associated context
    return NextResponse.json({
      message: 'API key created successfully',
      apiKey: apiKey,
      context: {
        name: context.name,
        description: context.description,
        content: context.content, // Return content if necessary
      },
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 500 });
  }
}


export async function GET(req: NextRequest) {
    try {
      // Authenticate user
      const { currentUser } = await serverAuth(req);
      
      if (!currentUser) {
        return NextResponse.json({ message: 'Unauthorized user' }, { status: 403 });
      }
  
      // Fetch the user's API keys along with their associated contexts
      const apiKeys = await prismadb.apiKey.findMany({
        where: { userId: currentUser.id },
        include: {
          contexts: true, // Include associated contexts
        },
      });
  
      return NextResponse.json(apiKeys, { status: 200 });
  
    } catch (error) {
      return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
  }