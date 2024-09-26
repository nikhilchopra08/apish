import React from 'react';
import TypewriterEffectDemo from "../Components/typewrite"

const Home: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-custom-radial ">
      <div >
        <TypewriterEffectDemo/>
      </div>

    </div>
  );
};

export default Home;