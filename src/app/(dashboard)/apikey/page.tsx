"use client"
// pages/index.tsx

import CreateApiKey from "@/Components/createApi";
import ApiKeyList from "@/Components/fetchapilist";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
// import { useRouter } from "next/router";
import { redirect } from "next/navigation";

const Home = () => {

  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      redirect("/auth");
    }
  }, [session]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 bg-gray-900">
      <h1 className="text-3xl sm:text-4xl pt-5 font-bold text-white ">Your API Key Manager</h1>
      <div className="flex flex-col md:flex-row items-center gap-7 justify-center w-full max-w-5xl">
        <div className="md:w-1/2">
        <CreateApiKey />
        </div>
        <div className="md:w-1/2">
        <ApiKeyList />
        </div>
      </div>
    </div>
  );
};

export default Home;