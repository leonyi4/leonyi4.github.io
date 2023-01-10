import React from "react";
import { useInView } from "react-intersection-observer";
import "./About.css";
import Desc from "./Desc";
import Title from "./Title";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const cName = inView
    ? "container aboutme__container fade-in"
    : "container aboutme__container";

  return (
    <section id="about" className="bg__about">
      <div ref={ref} className={cName}>
        <Title />
        <Desc />
      </div>
    </section>
  );
};

export default About;
