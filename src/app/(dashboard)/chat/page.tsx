"use client"

// components/Chatbot.tsx

import React, { useState } from 'react';
import axios from 'axios';

interface ChatEntry {
  question: string;
  answer: string;
}

const Chatbot = () => {
  const [question, setQuestion] = useState('');
  const [context, setContext] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState<ChatEntry[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setAnswer('');

    try {
      // Make POST request using Axios
      const response = await axios.post('/api/model', {
        question,
        context,
      });

      // Get the answer from the API response
      const newAnswer = response.data.answer || 'No answer found';

      // Update the history with the new question and answer
      setHistory([...history, { question, answer: newAnswer }]);

      // Set the answer received from the API
      setAnswer(newAnswer);
    } catch (err) {
      // Handle any errors that occur
      setError('Failed to fetch answer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl w-full">
        <div className="flex px-6 py-4 justify-center items-center">
          <h1 className="text-2xl font-bold text-gray-800">Test Context for your Bot</h1>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">Question</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="appearance-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ask a question..."
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">Context</label>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="appearance-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Provide context for the question..."
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Fetching Answer...' : 'Get Answer'}
            </button>
          </div>
        </form>

        {error && <div className="text-red-500 mt-4 text-center">{error}</div>}

        {answer && (
          <div className="px-6 py-4 bg-green-100 border border-green-400 rounded-lg shadow-sm mt-4">
            <h3 className="text-lg font-bold text-green-800">Answer:</h3>
            <p className="text-green-600">{answer}</p>
          </div>
        )}

        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Chat History</h2>
          <div className="space-y-4">
            {history.map((entry, index) => (
              <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-sm">
                <div className="text-sm font-medium text-gray-700">Question:</div>
                <p className="text-gray-800 mb-2">{entry.question}</p>
                <div className="text-sm font-medium text-gray-700">Answer:</div>
                <p className="text-gray-800">{entry.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;