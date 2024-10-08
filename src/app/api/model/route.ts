import { NextRequest, NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb'; 
import serverAuth from '@/lib/serverauth';

export async function POST(req: NextRequest) {
  try {
    // Get the currentUser from serverAuth
    const { currentUser } = await serverAuth(req);

    if (!currentUser || !currentUser.id) {
      return NextResponse.json({ message: 'User not authenticated' }, { status: 401 });
    }

    const userId = currentUser.id;

    // Verify if the user exists
    const user = await prismadb.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found or not authorized' }, { status: 403 });
    }

    const body = await req.json();
    const { question, context } = body;

    if (!question || !context) {
      return NextResponse.json({ message: 'Please provide both question and context' }, { status: 400 });
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
        body: JSON.stringify({ inputs: { question, context } }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to fetch from Hugging Face API');
    }

    const result = await response.json();
    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 500 });
  }
}
