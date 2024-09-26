// src/app/page.tsx
import Chatbot from "@/Components/Chatbot"

const HomePage = () => {
  // const apiKey = 'e9e63a5e-b41c-40fc-a1d4-8938258b51c3'; // Replace with your actual API key logic
  const apiKey = 'ZawqCaGmw1tXEPRV3QFe8KMrKRHjprxU'; // Replace with your actual API key logic

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Chatbot apiKey={apiKey} />
    </div>
  );
};

export default HomePage;