import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row h-screen w-full overflow-hidden">
      
      {/* Left Side - Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="lg:w-1/2 w-full h-1/2 lg:h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.avif')" }} // Ensure bg.avif is in public folder
      ></motion.div>

      {/* Right Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="lg:w-1/2 w-full h-1/2 lg:h-full flex flex-col justify-center items-center text-center p-6 sm:p-10 bg-gray-100"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Welcome to ConsultCo
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-md">
          Your trusted consulting partner for business success.
        </p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative flex justify-center w-full"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 sm:px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600"
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
