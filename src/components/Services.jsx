import React from "react";
import { FaLaptopCode, FaChartLine, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode className="h-14 w-14 text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-900" />,
      title: "Business Consulting",
      color: "from-blue-50 to-blue-100 border-blue-500",
      glow: "group-hover:shadow-blue-300",
    },
    {
      icon: <FaChartLine className="h-14 w-14 text-teal-600 transition-all duration-300 group-hover:scale-110 group-hover:text-teal-800" />,
      title: "Market Analysis",
      color: "from-teal-50 to-teal-100 border-teal-500",
      glow: "group-hover:shadow-teal-300",
    },
    {
      icon: <FaMobileAlt className="h-14 w-14 text-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-800" />,
      title: "Financial Planning",
      color: "from-purple-50 to-purple-100 border-purple-500",
      glow: "group-hover:shadow-purple-300",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 text-center">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-black mb-12"
      >
        Our Services
      </motion.h2>

      {/* Services Grid */}
      <div className="container mx-auto grid md:grid-cols-3 gap-10 px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative group p-8 bg-gradient-to-b ${service.color} border-l-4 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${service.glow}`}
          >
            {/* Icon */}
            <div className="flex justify-center">{service.icon}</div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600">
              Providing top-notch {service.title.toLowerCase()} services.
            </p>

            {/* Background Design Elements */}
            <div className="absolute top-2 left-2 w-10 h-10 bg-opacity-20 bg-gray-400 rounded-full blur-lg"></div>
            <div className="absolute bottom-2 right-2 w-16 h-1 bg-gray-400 rotate-12 opacity-50"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
