import { Container, Typography } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import { projects } from "../../data";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const title = inView ? "project__info fade-in" : "project__info";
  return (
    <section id="projects" className="projectss">
      <div className="projects_container">
        <Typography
          ref={ref}
          component="div"
          variant="h2"
          className={title}
          sx={{
            margin: "auto",
            fontFamily: ["Roboto Mono, monospace"],
            fontWeight: 500,
            background:
              "linear-gradient( #cf59bf 7%, #61ff8b 43%, #cfcf5f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            paddingBottom: "1rem",
          }}
        >
          My Projects
        </Typography>
        <Container
          sx={{
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          {projects.map((project, index) => (
            <Project key={project.title + index} project={project} />
          ))}
        </Container>
      </div>
    </section>
  );
};

export default Projects;
