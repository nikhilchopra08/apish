"use client";
import React from "react";
import Image from "next/image";
import apiShLogo from "../public/images/image.png"; // Adjust the path if necessary

export default function AboutUs() {
  return (
    <section className="bg-neutral-900 text-gray-200">
      {/* Hero section */}
      <div className="relative bg-neutral-800 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-gray-200 flex flex-col justify-center p-6">
            <h2 className="text-5xl text-white mb-6 font-bold">About APIsh</h2>
            <p className="mb-4">
              APIsh is your all-in-one platform for managing API keys with ease and security. We empower businesses to generate, distribute, and monitor API keys seamlessly, ensuring robust security and streamlined management.
            </p>
            <p className="mb-4">
              Our goal is to simplify API management, enabling developers to focus on building cutting-edge solutions. From real-time monitoring to advanced analytics, we offer tools that make API management secure and efficient.
            </p>
            <p>
              Join the growing community of developers and businesses trusting APIsh for their API management needs.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={apiShLogo}
              alt="APIsh Logo"
              className="rounded-lg shadow-lg"
              layout="responsive"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <div className="bg-gray-800 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-white mb-8">Why Choose APIsh?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Seamless Integration</h4>
              <p className="text-gray-400">
                Integrate APIsh into your existing systems effortlessly with our easy-to-use interface and comprehensive API documentation.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Real-time Monitoring</h4>
              <p className="text-gray-400">
                Monitor your API traffic in real-time, ensuring your keys are secure and functioning as expected 24/7.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Advanced Security</h4>
              <p className="text-gray-400">
                Protect your API keys with state-of-the-art security measures, including token-based authentication and encrypted data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials or Call-to-Action Section */}
      <div className="bg-neutral-800 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-white mb-8">
            Trusted by Developers Worldwide
          </h3>
          <p className="text-gray-400 mb-6">
            "APIsh has been a game-changer for our team. The seamless integration and real-time monitoring have helped us secure our APIs and streamline development. We can’t recommend it enough!"
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Join APIsh Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
