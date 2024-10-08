import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-6 md:space-y-0">
          {/* Left section with brand and description */}
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-wider mb-2">APIsh</h3>
            <p className="text-gray-400 text-sm">
              Your go-to platform for generating API keys seamlessly.
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex justify-center md:justify-end space-x-6">
            <Link href="/about" passHref>
              <span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                About Us
              </span>
            </Link>
            <Link href="/pricing" passHref>
              <span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                Pricing
              </span>
            </Link>
            <Link href="/faq" passHref>
              <span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                FAQs
              </span>
            </Link>
            <Link href="/contact" passHref>
              <span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                Contact
              </span>
            </Link>
          </nav>
        </div>

        {/* Bottom section with social links and copyright */}
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} APIsh. All rights reserved.
          </p>

          {/* Social media icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
