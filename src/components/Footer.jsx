import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <p>&copy; 2025 ConsultCo. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="hover:text-gray-400"><FaLinkedin className="h-6 w-6 inline" /></a>
        <a href="#" className="hover:text-gray-400"><FaTwitter className="h-6 w-6 inline" /></a>
        <a href="#" className="hover:text-gray-400"><FaInstagram className="h-6 w-6 inline" /></a>
      </div>
    </footer>
  );
};

export default Footer;