import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { skills } from "../../data";
import Skill from "./Skill";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="bg__skills">
      <div className="container skills__container">
        <Typography
          variant="h2"
          sx={{
            fontFamily: ["Roboto Mono, monospace"],
            fontWeight: 500,
            background: "#cf59bf",
            background:
              "linear-gradient( #cf59bf 7%, #61ff8b 43%, #cfcf5f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            paddingBottom: "1rem",
          }}
        >
          My Skills
        </Typography>
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

{
  /* <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 345, maxHeight: 225 }}>
              <CardMedia
                component="img"
                height="165"
                src={reactPic}
                alt="react"
              />
              <CardContent>
                <Typography varient="h4" component="div">
                  React JS
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 345, maxHeight: 225 }}>
              <CardMedia
                component="img"
                height="165"
                src={materialUIPic}
                alt="materialUI"
              />
              <CardContent>
                <Typography varient="h4" component="div">
                  MaterialUI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card>
              <CardMedia
                component="img"
                height="165"
                src={nodePic}
                alt="node"
              />
              <CardContent>
                <Typography varient="h5" component="div">
                  Node JS
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 345, maxHeight: 225 }}>
              <CardMedia
                component="img"
                height="165"
                src={javascriptPic}
                alt="javascript"
              />
              <CardContent>
                <Typography varient="h4" component="div">
                  Javascript
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 345, maxHeight: 225 }}>
              <CardMedia
                component="img"
                height="165"
                src={javaPic}
                alt="java"
              />
              <CardContent>
                <Typography varient="h5" component="div">
                  java
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 345, maxHeight: 225 }}>
              <CardMedia
                component="img"
                height="165"
                src={javafxPic}
                alt="javafx"
              />
              <CardContent>
                <Typography varient="h5" component="div">
                  Javafx
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 345, maxHeight: 225 }}>
              <CardMedia
                component="img"
                height="165"
                src={pythonPic}
                alt="python"
              />
              <CardContent>
                <Typography varient="h5" component="div">
                  Python
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 345, maxHeight: 225 }}>
              <CardMedia
                component="img"
                height="165"
                src={htmlPic}
                alt="html"
              />
              <CardContent>
                <Typography varient="h5" component="div">
                  Html
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card>
              <CardMedia component="img" height="165" src={cssPic} alt="css" />
              <CardContent>
                <Typography varient="h5" component="div">
                  Css
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 345, maxHeight: 225 }}>
              <CardMedia
                component="img"
                height="165"
                src={netbeansPic}
                alt="netbeans"
              />
              <CardContent>
                <Typography varient="h5" component="div">
                  NetBeans
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 345, maxHeight: 225 }}>
              <CardMedia component="img" height="165" src={vscPic} alt="vsc" />
              <CardContent>
                <Typography varient="h5" component="div">
                  Visual Stuido Code
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="165"
                src={gitHubPic}
                alt="github"
              />
              <CardContent>
                <Typography varient="h5" component="div">
                  GitHub
                </Typography>
              </CardContent>
            </Card>
          </Grid> */
}
