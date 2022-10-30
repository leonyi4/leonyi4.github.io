import React from "react";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Timeline from "./components/timeline/Timeline";
import Footer from "./components/footer/Footer";
import Nav from './components/navbar/Nav'
import Projects from "./components/project/Projects";
import Skills from "./components/skills/Skills";
import About from "./components/aboutme/About";

const App = () => {
  return (
    <div>
      <Home />
      <Nav />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;