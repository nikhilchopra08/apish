"use client";

// components/HomePage.tsx

import { useState, useRef, useEffect } from "react";
import Chatbot from "@/Components/Chatbot";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CurrentUser {
  id: string;
  email: string;
  // Add other fields if necessary
}

const HomePage = () => {
  const [apiKey, setApiKey] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const preRef = useRef<HTMLPreElement>(null); // Ref to the <pre> element
  const envRef = useRef<HTMLPreElement>(null);
  const chatRef = useRef<HTMLPreElement>(null);

  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null); // State for current user

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await fetch('/api/currentUser');
        if (!res.ok) {
          throw new Error('Failed to fetch user');
        }
        const data = await res.json();
        setCurrentUser(data.currentUser); // Set the current user
      } catch (err) {
        console.error(err);
        setError('Failed to fetch current user');
      }
    };

    fetchCurrentUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on submit
    try {
      // Simulate an API call or processing time
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust as needed
      setSubmitted(true);
      toast.success("API Key submitted successfully!");
    } catch (error) {
      toast.error("An error occurred while submitting the API Key.");
    } finally {
      setLoading(false); // Set loading to false after processing
    }
  };

  const onCopy = () => {
    if (preRef.current) {
      const content = preRef.current.innerText; // Get the text inside <pre>
      navigator.clipboard.writeText(content);
      toast.success("Code copied to the clipboard.");
    }
  };

  const onCopy1 = () => {
    if (envRef.current) {
      const content = envRef.current.innerText; // Get the text inside <pre>
      navigator.clipboard.writeText(content);
      toast.success("Code copied to the clipboard.");
    }
  };

  const onCopy2 = () => {
    if (chatRef.current) {
      const content = chatRef.current.innerText; // Get the text inside <pre>
      navigator.clipboard.writeText(content);
      toast.success("Code copied to the clipboard.");
    }
  };

  console.log(error)

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 items-center justify-center p-4">
      <ToastContainer />
      <div className="w-full md:w-1/2 min-w-fit flex flex-col md:flex-row items-center justify-center p-4 space-y-6 md:space-y-0 md:space-x-6">
        {/* Right Side - Form to Enter API Key */}
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-6 rounded-lg shadow-lg w-full"
            >
              <h2 className="text-2xl text-center font-bold text-gray-800">
                Enter Your API Key
              </h2>
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your API Key"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-700"
                required
              />
              <button
                type="submit"
                className={`w-full bg-indigo-600 text-white font-bold py-3 rounded-md hover:bg-indigo-700 transition-colors ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={loading} // Disable button when loading
              >
                {loading ? "Submitting..." : "Submit API Key"}
              </button>
            </form>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-200 mb-4">
                Chatbot
              </h2>
              <Chatbot apiKey={apiKey} />
            </>
          )}
        </div>

        {/* Left Side - Copyable Code Block */}
        <div className="w-full flex flex-col justify-center items-start space-y-6">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Copy the Code for Chatbot
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-start space-y-4 md:space-y-0 md:space-x-4">
            <pre
              ref={preRef}
              className="bg-slate-700 text-white text-sm p-4 rounded-lg shadow-lg max-h-96 max-w-full whitespace-pre-wrap overflow-x-auto"
            >
              {`"use client"

// components/HomePage.tsx

import { useState, useEffect } from 'react';
import Chatbot from '@/Components/Chatbot';

const HomePage = () => {
  const [apiKey, setApiKey] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_API_KEY; 
    if (key) {
      setApiKey(key);
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-sm rounded-md shadow-md bg-white p-6">
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your API Key"
            className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-2 rounded-md hover:bg-indigo-700"
          >
            Submit API Key
          </button>
        </form>
      ) : (
        <Chatbot apiKey={apiKey} />
      )}
    </div>
  );
};

export default HomePage;
`}
            </pre>
            <button
              onClick={onCopy}
              className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Copy Code
            </button>
          </div>


          <div className="flex flex-col md:flex-row items-start justify-start space-y-4 md:space-y-0 md:space-x-4">
                <div>
          <h2 className="text-3xl font-semibold text-white mb-4">
            Copy the Code for components/Chatbot.tsx
          </h2>
  <pre
    ref={chatRef}
    className="bg-slate-700 h-96 text-white text-sm p-4 rounded-lg shadow-lg max-w-[80vw] md:max-w-full w-full whitespace-pre-wrap overflow-x-auto"
  >
    {`// components/Chatbot.tsx

import { useState } from 'react';

interface ChatbotProps {
  apiKey: string;
  className?: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ apiKey, className }) => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State for loading

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResponse('');
    setLoading(true); // Set loading to true

    try {
      const userId = process.env.NEXT_PUBLIC_USER_ID;

      if (!userId) {
        throw new Error('User ID is not defined in the environment variables.');
      }

      // Validate question input
      if (question.trim() === '') {
        throw new Error('Question cannot be empty.');
      }

      const res = await fetch(\`https://apish-nikhil-chopras-projects.vercel.app/api/\${userId}/chatbot/\${apiKey}\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        const errorText = await res.json();
        throw new Error(errorText.message || 'Unknown error occurred');
      }

      const data = await res.json();
      setResponse(data.answer || 'No answer found.');
    } catch (err) {
      console.log(err);
      const errorMsg = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMsg);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className={\`flex flex-col max-w-md mx-auto p-8 bg-white rounded shadow-md \${className}\`}>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">
            Ask a question:
          </label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="mt-1 p-2 text-gray-700 w-full border rounded shadow-sm"
            placeholder="Type your question here"
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          disabled={loading} // Disable button when loading
        >
          {loading ? 'Submitting...' : 'Submit'} {/* Show loading state */}
        </button>
      </form>

      {response && (
        <div className="mt-4 p-4 bg-green-100 rounded shadow-md">
          <h3 className="text-lg font-bold text-green-800">Answer:</h3>
          <p className="text-green-600">{response}</p>
        </div>
      )}
      {error && (
        <div className="mt-4 p-4 bg-red-100 rounded shadow-md">
          <h3 className="text-lg font-bold text-red-800">Error:</h3>
          <p className="text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;`}
  </pre>
  </div>

  <button
    onClick={onCopy2}
    className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
  >
    Copy Instruction
  </button>
</div>






          <h3 className="text-lg font-semibold text-gray-100 mt-4">
            Add this line to your .env file:
          </h3>
          <div className="flex flex-col md:flex-row items-start justify-start space-y-4 md:space-y-0 md:space-x-4">
          <pre
  ref={envRef}
  className="bg-slate-700 text-white text-sm p-4 rounded-lg shadow-lg max-w-[80vw] md:max-w-full w-full whitespace-pre-wrap overflow-x-auto"
>
  {`NEXT_PUBLIC_API_KEY=your_api_key_here
NEXT_PUBLIC_USER_ID=${currentUser?.id}`}
</pre>

            <button
              onClick={onCopy1}
              className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Copy Instruction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
