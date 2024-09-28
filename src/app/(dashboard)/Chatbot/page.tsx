"use client";

// components/HomePage.tsx

import { useState, useRef } from "react";
import Chatbot from "@/Components/Chatbot";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [apiKey, setApiKey] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const preRef = useRef<HTMLPreElement>(null); // Ref to the <pre> element
  const envRef = useRef<HTMLPreElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 items-center justify-center p-4">
      <ToastContainer />
      {/* Chatbot Section */}
      {/* {submitted && (
        <Chatbot
          apiKey={apiKey}
          className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 space-y-6 bg-white rounded-lg shadow-lg"
        />
      )} */}

      <div className="w-full md:w-1/2 min-w-fit flex flex-col md:flex-row items-center justify-center p-4 space-y-6 md:space-y-0 md:space-x-6">
        {/* Right Side - Form to Enter API Key */}
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-6 rounded-lg shadow-lg w-full"
            >
              <h2 className="text-2xl font-bold text-gray-800">
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
                className="w-full bg-indigo-600 text-white font-bold py-3 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Submit API Key
              </button>
            </form>
          ) : (
            <>
              {/* Chatbot Section - conditionally rendered again for mobile */}
              {/* <div className="bg-white p-6 rounded-lg shadow-lg w-full mt-6 md:hidden"> */}
                <h2 className="text-2xl font-bold text-gray-200 mb-4">
                  Chatbot
                </h2>
                <Chatbot apiKey={apiKey} />
              {/* </div> */}
            </>
          )}
        </div>

        {/* Left Side - Copyable Code Block */}
        <div className="w-full flex flex-col justify-center items-start space-y-6">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Copy the Code
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-start space-y-4 md:space-y-0 md:space-x-4">
            <pre
              ref={preRef} // Ref added to <pre> element
              className="bg-slate-700 text-white text-sm p-4 rounded-lg shadow-lg max-h-96 max-w-full whitespace-pre-wrap overflow-x-auto"
            >
              {`"use client"

// components/HomePage.tsx

import { useState, useEffect } from 'react';
import Chatbot from '@/Components/Chatbot';

const HomePage = () => {
  const [apiKey, setApiKey] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Use an effect to read the API key from environment variables
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_API_KEY; // Use your environment variable
    if (key) {
      setApiKey(key);
      setSubmitted(true); // Automatically submit if the key is available
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can also save the apiKey to your app state or local storage if needed
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
              onClick={onCopy} // Calls the onCopy function to copy <pre> content
              className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Copy Code
            </button>
          </div>

          {/* Instruction for setting the environment variable in a separate <pre> tag */}
          <h3 className="text-lg font-semibold text-gray-100 mt-4">
            Add this line to your .env.local file:
          </h3>
          <div className="flex flex-col md:flex-row items-start justify-start space-y-4 md:space-y-0 md:space-x-4">
            <pre
              ref={envRef} // Ref for the env <pre> element
              className="bg-slate-700 text-white text-sm p-4 rounded-lg shadow-lg  max-w-[80vw] md:max-w-full w-full whitespace-pre-wrap overflow-x-auto"
            >
              {`NEXT_PUBLIC_API_KEY=your_api_key_here`}
            </pre>
            <button
              onClick={onCopy1} // Calls the onCopy function to copy env <pre> content
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
