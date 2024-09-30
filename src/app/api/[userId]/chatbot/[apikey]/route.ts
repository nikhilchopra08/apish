import { NextRequest, NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb'; // Import your Prisma client instance
// import serverAuth from '@/lib/serverauth';

const setCorsHeaders = (response: NextResponse) => {
  response.headers.set('Access-Control-Allow-Origin', '*'); // Allow CORS for all origins (consider restricting this in production)
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS'); // Allowed methods
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
  response.headers.set('Access-Control-Allow-Credentials', 'true'); // Allow credentials if needed
};


export async function OPTIONS() {
  const response = NextResponse.json({ message: 'CORS preflight success' });
  setCorsHeaders(response);
  return response;
}


export async function POST(req: NextRequest) {

  // if (req.method === 'OPTIONS') {
  //   return OPTIONS(req);
  // }

  const response = NextResponse.json({ message: 'Success' });
  setCorsHeaders(response); // Set CORS headers for the POST response


  try {
    // Extract API key and userId from the URL parameters
    const url = new URL(req.url);
    const urlParts = url.pathname.split('/');
    const userId = urlParts[2]; // Extract userId from path
    const apiKey = urlParts[4]; // Extract apiKey from path

    if (!apiKey) {
      return NextResponse.json({ message: 'API key is required' }, { status: 401 });
    }

    // const { currentUser } = await serverAuth(req);

    // if (!currentUser || currentUser.id !== userId) {
    //   return NextResponse.json({ message: 'Unauthorized user' }, { status: 403 });
    // }

    // Verify if the API key exists and is active
    const apiKeyRecord = await prismadb.apiKey.findUnique({
      where: { key: apiKey },
      include: { user: { include: { contexts: true } } }, // Include user and contexts
    });

    if (!apiKeyRecord || !apiKeyRecord.isActive || apiKeyRecord.userId !== userId) {
      return NextResponse.json({ message: 'Invalid or inactive API key' }, { status: 403 });
    }

    // Verify if the user exists
    const user = await prismadb.user.findUnique({
      where: { id: userId },
      include: { contexts: true }, // Include contexts for the user
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found or not authorized' }, { status: 403 });
    }

    // Fetch the specific context linked to the API key
    const context = await prismadb.context.findFirst({
      where: {
        apiKeyId: apiKeyRecord.id, // Filter context by apiKeyId
        userId: userId // Ensure the context belongs to the user
      }
    });

    if (!context) {
      return NextResponse.json({ message: 'No context available for the API key' }, { status: 400 });
    }

    const body = await req.json();
    const { question } = body;

    if (!question) {
      return NextResponse.json({ message: 'Question is required' }, { status: 400 });
    }

    const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API;

    if (!HUGGINGFACE_API_KEY) {
      return NextResponse.json({ message: 'Hugging Face API key is not set in the environment' }, { status: 500 });
    }

    const response = await fetch(
      'https://api-inference.huggingface.co/models/deepset/roberta-base-squad2',
      {
        headers: {
          Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ inputs: { question, context: context.content } }), // Use the context content
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to fetch from Hugging Face API');
    }

    const result = await response.json();
    const finalResponse = NextResponse.json(result, { status: 200 });

    setCorsHeaders(finalResponse); // Set CORS headers for the final response
    return finalResponse;

  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 500 });
  }
}
