import { Grid, Typography } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import { skills } from "../../data";
import Skill from "./Skill";
import "./Skills.css";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const cName = inView ? "fade-in" : "";

  return (
    <section id="skills" className="bg__skills" ref={ref}>
      <div className="container skills__container">
        <div className={cName}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: ["Roboto Mono, monospace"],
              fontWeight: 500,
              background:
                "linear-gradient( #cf59bf 7%, #61ff8b 43%, #cfcf5f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingBottom: "1rem",
            }}
          >
            My Skills
          </Typography>
        </div>
        <Grid container spacing={2}>
          {skills.map((project, index) => (
            <Skill
              key={project.name + index}
              pic={project.pic}
              alt={project.alt}
              name={project.name}
            />
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Skills;
