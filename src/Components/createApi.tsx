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
      window.location.reload(); // Reload to reflect changes (alternative approaches exist)
    } catch (error) {
      // @ts-expect-error Handling possible TypeScript error due to error type
      const errorMsg = error.response?.data?.message || 'An error occurred';
      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-4/5 lg:w-1/2 mx-auto p-8 border rounded-lg shadow-md bg-gradient-to-b from-indigo-500 to-purple-700">
      <h2 className="text-3xl font-bold text-white text-center mb-8 animate__animated animate__fadeInDown">Create API Key</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="contextName"
            className="block text-sm font-medium text-gray-300" // Changed label color
          >
            Context Name
          </label>
          <input
            type="text"
            id="contextName"
            value={contextName}
            onChange={(e) => setContextName(e.target.value)}
            className="mt-1 text-gray-700 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-3 rounded-md animate__animated animate__fadeInUp"
            placeholder="Context Name"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="contextDescription"
            className="block text-sm font-medium text-gray-300" // Changed label color
          >
            Context Description
          </label>
          <textarea
            id="contextDescription"
            value={contextDescription}
            onChange={(e) => setContextDescription(e.target.value)}
            className="mt-1 text-gray-700 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-3 rounded-md animate__animated animate__fadeInUp"
            placeholder="Context Description"
            rows={4}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="content" className="block text-sm font-medium text-gray-300">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 text-gray-700 block w-full border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 px-4 py-3 rounded-md animate__animated animate__fadeInUp"
            placeholder="Content"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-bold py-3 rounded-md hover:from-indigo-600 hover:to-purple-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
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