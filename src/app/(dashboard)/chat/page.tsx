"use client";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-neutral-800 shadow-gray-700  shadow-xl rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Question Answering Chatbot</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Question</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ask a question..."
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Context</label>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Provide context for the question..."
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
            >
              {loading ? 'Fetching Answer...' : 'Get Answer'}
            </button>
          </div>
        </form>

        {error && <div className="text-red-500 mt-4 text-center">{error}</div>}

        {answer && (
          <div className="mt-6 bg-green-500 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-white">Answer:</h3>
            <p className="text-white">{answer}</p>
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Chat History</h2>
          <div className="space-y-4">
            {history.map((entry, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-sm font-medium text-gray-300">Question:</div>
                <p className="text-white mb-2">{entry.question}</p>
                <div className="text-sm font-medium text-gray-300">Answer:</div>
                <p className="text-white">{entry.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
