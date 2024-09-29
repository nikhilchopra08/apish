"use client";
import React from "react";
import Image from "next/image";
import apiShLogo from "../public/images/image.png"; // Adjust the path if necessary

export default function AboutUs() {
  return (
    <section className="bg-neutral-800 py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-gray-400 flex flex-col justify-center p-6">
          <h2 className="text-4xl text-white mb-6 font-semibold">About APIsh</h2>
          <p className="mb-4">
            APIsh is your all-in-one platform for managing API keys with ease and security. We empower businesses to generate, distribute, and monitor API keys, streamlining management and ensuring robust security.
          </p>
          <p className="mb-4">
            Our commitment is to simplify API management, allowing developers to focus on building innovative products without security concerns. Enjoy real-time monitoring, advanced analytics, and seamless integration to unlock the full potential of your APIs.
          </p>
          <p>
            Experience the power of APIsh and join the community of developers and businesses trusting us for their API management needs.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={apiShLogo}
            alt="APIsh Logo"
            className="w-full h-auto rounded-lg shadow-lg"
            layout="responsive" // Makes the image responsive
            width={500} // Provide width for responsive behavior
            height={300} // Provide height for responsive behavior
          />
        </div>
      </div>
    </section>
  );
}
