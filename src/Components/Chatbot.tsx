// components/Chatbot.tsx

import { useEffect, useState } from 'react';

// Define an interface for the user structure
interface CurrentUser {
  id: string;
  email: string;
  // Add other fields if necessary
}

interface ChatbotProps {
  apiKey: string;
  className?: string;
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
    <div className="flex flex-col max-w-md mx-auto p-8 bg-white rounded shadow-md">

      {/* Display the current user */}
      {currentUser ? (
        // <div className="flex items-center mb-4 p-4 bg-gray-100 rounded border border-gray-300">
        //   <span className="text-sm font-medium text-gray-700 mr-2">Logged in as:</span>
        //   <strong>{currentUser.email}</strong>
        // </div>
        <div></div>
      ) : (
        <div className="flex items-center mb-4 p-4 bg-yellow-100 rounded border border-yellow-300">
          <span className="text-sm font-medium text-yellow-700 mr-2">Fetching current user...</span>
        </div>
      )}

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
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Submit
        </button>
      </form>

      {response && <div className="mt-4 p-4 bg-green-100 rounded shadow-md">
          <h3 className="text-lg font-bold text-green-800">Answer:</h3>
          <p className="text-green-600">{response}</p>
        </div>}
      {error && <div className="mt-4 p-4 bg-red-100 rounded shadow-md">
          <h3 className="text-lg font-bold text-red-800">Error:</h3>
          <p className="text-red-600">{error}</p>
        </div>}
    </div>
  );
};

export default Chatbot;