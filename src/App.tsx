import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
