"use client";

// components/HomePage.tsx

import { useState, useEffect } from 'react';
import Chatbot from '@/Components/Chatbot';

const HomePage = () => {
  const [apiKey, setApiKey] = useState('');
  // const [submitted, setSubmitted] = useState(false);

  // Use an effect to read the API key from environment variables (optional)
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_API_KEY; // Use your environment variable
    if (key) {
      setApiKey(key);
      // setSubmitted(true); // Automatically submit if the key is available
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Chatbot</h2>
        <Chatbot apiKey={apiKey} />
      </div>
    </div>
  );
};

export default HomePage;