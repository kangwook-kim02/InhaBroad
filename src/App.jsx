import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Join from "./components/Join";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
