"use client";

// components/ApiKeyList.tsx

import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define interfaces for API Key and Context
interface Context {
  id: string;
  name: string;
  description: string;
  content: string;
}

interface ApiKey {
  key: string;
  contexts: Context[];
}

const ApiKeyList = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApiKeys = async () => {
      try {
        const response = await axios.get('/api/apikey');
        setApiKeys(response.data);
      } catch (err) {
        setError('Failed to fetch API keys');
      } finally {
        setLoading(false);
      }
    };

    fetchApiKeys();
  }, []);

  const onCopy = (key: string) => {
    navigator.clipboard.writeText(key);
    toast.success('API Key copied to the clipboard.');
  };

  if (loading) return <p className="text-gray-600">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <ToastContainer />
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>Your API Keys</h2>
      <ul className="list-disc pl-5 space-y-4">
        {apiKeys.map((apiKey) => (
          <li key={apiKey.key} className="p-4 border border-gray-200 rounded-md shadow-sm bg-gray-50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 font-medium">
                <strong>Key:</strong> {apiKey.key}
              </span>
              <button
                onClick={() => onCopy(apiKey.key)}
                className="bg-indigo-600 size-8 text-white font-semibold py-1 px-3 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring focus:ring-indigo-300"
              >
              </button>
            </div>
            <ul className="list-disc pl-4 space-y-2">
              {apiKey.contexts.map((context) => (
                <li key={context.id} className="text-gray-600">
                  <strong className='text-gray-700'>Name:</strong> {context.name} <br />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiKeyList;
