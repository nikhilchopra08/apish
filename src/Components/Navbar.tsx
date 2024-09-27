// components/Navbar.tsx

'use client'; // Add this line to make the component a client component

import { useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const { data: session } = useSession(); // Get the user session

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/apikey', label: 'About' },
    { href: '/Chatbot', label: 'Contact' },
    { href: '/chat', label: 'Services' },
    { href: '/testing', label: 'code testing' },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-sky-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-white">MyWebsite</h1>
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white hover:text-gray-200 transition">
                {item.label}
              </Link>
            ))}
            {session ? (
              <button onClick={() => signOut()} className="text-white hover:text-gray-200 transition">
                Logout
              </button>
            ) : (
              <button onClick={() => signIn()} className="text-white hover:text-gray-200 transition">
                Login
              </button>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-200 focus:outline-none">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md p-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block text-gray-700 hover:text-blue-600 transition p-2">
              {item.label}
            </Link>
          ))}
          {session ? (
            <button onClick={() => signOut()} className="block text-gray-700 hover:text-blue-600 transition p-2">
              Logout
            </button>
          ) : (
            <button onClick={() => signIn()} className="block text-gray-700 hover:text-blue-600 transition p-2">
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
