import React from 'react';
import TypewriterEffectDemo from '../Components/typewrite';
// import AboutUs from '@/Components/AboutUs';
// import StepsToIntegrateAPI from '@/Components/StepsToIntegrateAPI';
// import Features from '@/Components/homepage/Features';
// import UseCases from '@/Components/homepage/usecase';
// import Contact from '@/Components/homepage/contact';
// import Pricing from '@/Components/homepage/pricing';
// import Footer from '@/Components/homepage/footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Background section with Typewriter effect */}
      <div
        className="h-screen w-full grid place-content-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/image.png')" }}
      >
        <TypewriterEffectDemo />
      </div>

      {/* Main Content Sections */}
      <div className=" w-full mx-auto px-4">
        {/* About Us Section */}
        {/* <AboutUs /> */}

        {/* Features Section */}
        {/* <Features /> */}

        {/* Use Cases Section */}
        {/* <UseCases /> */}

        {/* Steps to Integrate API Section */}
        {/* <StepsToIntegrateAPI /> */}

        {/* Pricing Section */}
        {/* <Pricing /> */}

        {/* Contact Section */}
        {/* <Contact /> */}
      </div>

      {/* Footer */}
      {/* <div
        className=" w-full"
      >
        <Footer />
      </div> */}

    </div>
  );
};

export default Home;
