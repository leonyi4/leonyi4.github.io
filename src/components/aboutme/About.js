import React from "react";
import "./About.css";
import Desc from "./Desc";
import Title from "./Title";

const About = () => {
  return (
    <section id="about" className="bg__about">
      <div className="container aboutme__container">
        <Title />
        <Desc />
      </div>
    </section>
  );
};

export default About;
