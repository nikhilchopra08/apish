"use client";

import { useEffect, useState } from 'react';

// Define an interface for the user structure
interface CurrentUser {
  id: string;
  email: string;
  // Add other fields if necessary
}

interface ChatbotProps {
  apiKey: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ apiKey }) => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null); // State for current user

  // Fetch the current user when the component mounts
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
    setError('');
    setResponse('');

    // Ensure currentUser is fetched before making the request
    if (!currentUser) {
      setError('User is not authenticated');
      return;
    }

    try {
      // Construct the URL with userId and apiKey
      const userId = currentUser.id; // Use the user ID from currentUser
      const res = await fetch(`/api/${userId}/chatbot/${apiKey}`, {
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
      // Type guard to check if err is an instance of Error
      const errorMsg = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMsg);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Chatbot</h1>

      {/* Display the current user */}
      {currentUser ? (
        <div className="mb-4 p-2 bg-gray-100 border border-gray-300 rounded">
          Logged in as: <strong>{currentUser.email}</strong>
        </div>
      ) : (
        <div className="mb-4 p-2 bg-yellow-100 border border-yellow-300 rounded">
          Fetching current user...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">
            Ask a question:
          </label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="mt-1 p-2 w-full border rounded shadow-sm"
            placeholder="Type your question here"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>

      {response && <div className="mt-4 p-2 bg-green-100 border border-green-300 rounded">{response}</div>}
      {error && <div className="mt-4 p-2 bg-red-100 border border-red-300 rounded">{error}</div>}
    </div>
  );
};

export default Chatbot;
