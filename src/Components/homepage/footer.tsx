import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-slate-100 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">APIsh</h3>
            <p className="text-sm">Your go-to platform for generating API keys.</p>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/pricing" className="hover:underline">Pricing</a>
            <a href="/faq" className="hover:underline">FAQs</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} APIsh. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;