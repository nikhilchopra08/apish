"use client"

// components/CreateApiKey.tsx

import { useState } from 'react';
import axios from 'axios';

const CreateApiKey = () => {
  const [contextName, setContextName] = useState('');
  const [contextDescription, setContextDescription] = useState('');
  const [content, setContent] = useState(''); // State for content
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('/api/apikey', {
        contextName,
        contextDescription,
        content, // Include content in the request
      });

      setMessage(`API key created successfully: ${response.data.apiKey}`);
    } catch (error) {
        // @ts-expect-error Handling possible TypeScript error due to error type
      const errorMsg = error.response?.data?.message || 'An error occurred';
      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create API Key</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="contextName" className="block text-sm font-medium text-gray-700">
            Context Name
          </label>
          <input
            type="text"
            id="contextName"
            value={contextName}
            onChange={(e) => setContextName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contextDescription" className="block text-sm font-medium text-gray-700">
            Context Description
          </label>
          <textarea
            id="contextDescription"
            value={contextDescription}
            onChange={(e) => setContextDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            rows={4}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create API Key'}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
};

export default CreateApiKey;
