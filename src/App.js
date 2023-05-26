import React from "react";
import "./App.css";
import About from "./components/aboutme/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/navbar/Nav";
import Projects from "./components/project/Projects";
import Skills from "./components/skills/Skills";
import Timeline from "./components/timeline/Timeline";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="not_home">
        <Home />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
