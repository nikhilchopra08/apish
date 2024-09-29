"use client";
import React from "react";

export default function StepsToIntegrateAPI() {
  return (
    <section className="steps-to-integrate-api bg-neutral-700 py-10 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl text-white text-center mb-8 font-semibold">Integrate Our APIs in a Few Simple Steps</h2>
      <div className="max-w-4xl mx-auto text-gray-400">
        <ul className="steps-list grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              step: "1. Create an Account",
              description: "Get started by signing up for a free account on our platform.",
            },
            {
              step: "2. Explore the Context",
              description: (
                <>
                  Visit the <span className="text-blue-500">Test</span> section to experiment with different contexts and understand how our AI responds.
                </>
              ),
            },
            {
              step: "3. Generate Your API Key",
              description: (
                <>
                  Once you&apos;re satisfied with the context, head to the <span className="text-blue-500">API Generation</span> section to obtain your unique API key.
                </>
              ),
            },
            {
              step: "4. Integrate the Chatbot API",
              description: (
                <>
                  Navigate to the <span className="text-blue-500">Chatbot</span> section to access your API key and integration instructions. Follow the provided steps to seamlessly add our chatbot to your website or application.
                </>
              ),
            },
          ].map(({ step, description }, index) => (
            <li
              key={index}
              className="flex flex-col items-start justify-start p-6 rounded-lg bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <span className="text-blue-500 text-2xl font-semibold mb-2">{step}</span>
              <p>{description}</p>
            </li>
          ))}
        </ul>
        <p className="text-center mt-6 text-gray-300 italic">
          <strong>Need Assistance?</strong> Don&apos;t hesitate to reach out to our friendly support team for help. We&apos;re here to guide you through the integration process and answer any questions you may have.
        </p>
      </div>
    </section>
  );
}
