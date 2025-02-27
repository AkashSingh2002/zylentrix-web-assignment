import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
