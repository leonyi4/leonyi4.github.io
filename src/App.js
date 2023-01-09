import React from "react";
import Home from "./components/about me/Home";
import About from "./components/aboutme/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import Projects from "./components/project/Projects";
import Skills from "./components/skills/Skills";
import Timeline from "./components/timeline/Timeline";



const App = () => {
    

  return (
    <div>
      <Home/>
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

export default App;