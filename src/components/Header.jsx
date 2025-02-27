import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  const menuItems = [
    { name: "Home", link: "hero" },
    { name: "About", link: "hero" },
    { name: "Services", link: "services" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <header className="bg-gray-900 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-semibold flex items-center">
            Consult
            <span className="text-blue-500 text-3xl font-bold italic">Co</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.link}
              smooth={true}
              duration={400}
              offset={-40} // Adjusts for fixed header
              className="text-white font-medium px-4 py-2 rounded-md cursor-pointer transition-all duration-300 hover:text-blue-400 hover:underline"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          whileTap={{ scale: 0.8 }}
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"} {/* Icon changes on toggle */}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gray-800 overflow-hidden"
          >
            <nav className="flex flex-col items-center py-4 space-y-4">
              {menuItems.map((item, index) => (
                <ScrollLink
                  key={index}
                  to={item.link}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg cursor-pointer hover:text-blue-400 transition-all duration-300"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
