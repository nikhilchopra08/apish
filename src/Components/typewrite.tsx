"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function TypewriterEffectDemo() {
  const { data: session } = useSession();
  const words = [
    { text: "Welcome" },
    { text: "to" },
    { text: "APIsh." },
  ];

  return (
    <div className="relative h-[18rem] w-[22rem] md:w-[30rem]">
      {/* Background div with opacity */}
      <div className="absolute inset-0 rounded-2xl bg-neutral-900 opacity-70" />
      
      {/* Content div */}
      <div className="relative flex flex-col items-center justify-center h-full rounded-2xl">
        <TypewriterEffect words={words} />
        <h1 className="pt-5 text-2xl text-white">An API Key Platform</h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          {!session ? (
            <Link href={"/auth"}>
              <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700">
                Get Started &rarr;
              </button>
            </Link>
          ) : (
            <Link href={"/apikey"}>
              <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700">
                Generate API Key &rarr;
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
