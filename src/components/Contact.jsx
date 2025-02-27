import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-black"
      >
        Contact Us
      </motion.h2>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-xl mt-8 p-8 bg-white shadow-lg rounded-xl border-t-4 border-blue-500"
      >
        <form className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md transition-all hover:bg-blue-700"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
