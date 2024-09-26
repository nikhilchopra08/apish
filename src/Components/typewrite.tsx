"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import React from "react";
import Link from "next/link";

export default function TypewriterEffectDemo() {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "APIsh.",
      className: "bg-white  text-green-500 dark:text-black",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-neutral-900 h-[18rem] w-[40rem]">
     
      <TypewriterEffect words={words} />
      <h1 className="pt-5 text-2xl">An API Key Platform</h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Link href={"/auth"}>
            <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700">
            Get Started &rarr;
            </button>
        </Link>
      </div>
    </div>
  );
}
