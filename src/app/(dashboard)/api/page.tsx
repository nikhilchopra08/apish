// pages/index.tsx

import CreateApiKey from "@/Components/createApi";
import ApiKeyList from "@/Components/fetchapilist";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <CreateApiKey />
      <ApiKeyList/>
    </div>
  );
};

export default Home;
