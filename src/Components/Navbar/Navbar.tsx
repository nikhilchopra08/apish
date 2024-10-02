"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { IconMenu, IconX } from "@tabler/icons-react";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Generate",
    path: "/apikey",
  },
  {
    title: "Chatbot",
    path: "/Chatbot",
  },
  {
    title: "Test",
    path: "/chat",
  },
];

const NavBar = () => {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 top-0 left-0 right-0 z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Placeholder */}
          <div className="flex-shrink-0 text-white font-bold text-xl">
            APIsh
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md md:text-lg font-medium"
                >
                  {link.title}
                </Link>
              ))}
              {session && (
                <button
                  onClick={() => signOut()}
                  className="text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-md md:text-lg font-medium"
                >
                  Logout
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <IconX className="h-6 w-6" />
              ) : (
                <IconMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)} // Close menu on link click
            >
              {link.title}
            </Link>
          ))}
          {session && (
            <button
              onClick={() => {
                signOut();
                setMobileMenuOpen(false); // Close menu on logout
              }}
              className="text-gray-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
