import React from 'react';
import TypewriterEffectDemo from "../Components/typewrite"

const Home: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 ">
      <div >
        <TypewriterEffectDemo/>
      </div>

    </div>
  );
};

export default Home;