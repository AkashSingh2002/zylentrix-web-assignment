import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200">
      <Header />

      {/* Hero Section */}
      <Hero />
      <hr className="border-t-2 border-gray-300 mx-auto my-10 w-3/4" />

      {/* Services Section */}
      <div className="container mx-auto px-4">
        <Services />
      </div>
      <hr className="border-t-2 border-gray-300 mx-auto my-10 w-3/4" />

      {/* Contact Section */}
      <div className="container mx-auto px-4">
        <Contact />
      </div>
      <hr className="border-t-2 border-gray-300 mx-auto my-10 w-3/4" />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
