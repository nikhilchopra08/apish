"use client";
// components/ApiKeyList.tsx

import { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]); // Update the state type
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Your API Keys</h2>
      <ul>
        {apiKeys.map((apiKey) => (
          <li key={apiKey.key}>
            <strong>Key:</strong> {apiKey.key}
            <ul>
              {apiKey.contexts.map((context) => (
                <li key={context.id}>
                  <strong>Name:</strong> {context.name} <br />
                  <strong>Description:</strong> {context.description} <br />
                  <strong>Content:</strong> {context.content}
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
