// pages/index.tsx

import CreateApiKey from "@/Components/createApi";
import ApiKeyList from "@/Components/fetchapilist";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-white mb-8">Your API Key Manager</h1>
      <div className="flex flex-col md:flex-row items-center gap-7 justify-center w-full max-w-5xl">
        <div className="w-1/2">
        <CreateApiKey />
        </div>
        <div className="w-1/2">
        <ApiKeyList />
        </div>
      </div>
    </div>
  );
};

export default Home;