import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tailwind-Inspired Landing Page</title>
        <meta name="description" content="A simple landing page using Tailwind CSS in Next.js" />
      </Head>

      <div className="bg-gray-50 min-h-screen">
        {/* Navbar */}
        <nav className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-blue-600">Brand</div>
            <div>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-4">Features</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-4">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 px-4">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-blue-600 py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Build Fast, Build Beautiful</h1>
            <p className="mt-4 text-xl md:text-2xl">Start your next project with Next.js & Tailwind CSS</p>
            <div className="mt-8">
              <a
                href="#"
                className="bg-white text-blue-600 hover:bg-blue-100 py-2 px-6 rounded-lg text-lg font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Features</h2>
              <p className="mt-4 text-gray-600">Explore the amazing features our platform offers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 22h20L12 2zm0 3.26L18.74 20H5.26L12 5.26zM11 8h2v6h-2V8zm0 8h2v2h-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Performance</h3>
                <p className="mt-2 text-gray-600">Optimized for speed and performance</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zm-6-5h-2v2h2v-2zm0-8h-2v6h2V6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Reliability</h3>
                <p className="mt-2 text-gray-600">Trustworthy and scalable infrastructure</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.42 4.71C17.33 2.62 14.26 2 12 2s-5.33.62-7.42 2.71c-4.34 4.34-4.34 11.37 0 15.71C6.67 21.38 9.74 22 12 22s5.33-.62 7.42-2.71c4.34-4.34 4.34-11.37 0-15.71zM12 20c-2.51 0-4.91-.98-6.71-2.71-3.71-3.71-3.71-9.71 0-13.42C7.09 2.98 9.49 2 12 2s4.91.98 6.71 2.71c3.71 3.71 3.71 9.71 0 13.42C16.91 19.02 14.51 20 12 20zm1-10h-2v2h2v-2zm0-4h-2v2h2V6zm0 12h-2v2h2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Security</h3>
                <p className="mt-2 text-gray-600">Enterprise-level security features</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 py-8 text-white">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
