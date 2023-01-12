import { Container, Typography } from "@mui/material";

import React from "react";
import { projects } from "../../data";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projectss">
      <div className="projects_container">
        <Typography
          component="div"
          variant="h2"
          className="project__info"
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

        <Container sx={{ maxWidth: "800px", margin: "auto" }}>
          {projects.map((project, index) => (
            <Project key={project.title + index} project={project} />
          ))}
        </Container>
      </div>
    </section>
  );
};

export default Projects;
