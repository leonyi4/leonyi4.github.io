import React from "react";
import "./Skills.css";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import reactPic from "../../assets/react.png";
import javascriptPic from "../../assets/javascript.png";
import materialUIPic from "../../assets/materialUI.png";
import javaPic from "../../assets/java.jpg";
import pythonPic from "../../assets/python.png";
import htmlPic from "../../assets/html.png";
import vscPic from "../../assets/vsc.png";
import netbeansPic from "../../assets/net_beans.png";
import javafxPic from "../../assets/javafx.png";
import cssPic from "../../assets/css.png";
import gitHubPic from "../../assets/github.png";
import nodePic from "../../assets/node.png";

const Skills = () => {
  return (
    <section id="skills" className="bg__skills">
      <div className="container skills__container">
        <h1 className="title_skills">My skills</h1>
        <Grid container spacing={2}>
          <Grid item xs={3} md={2.4}>
            <Card sx={{ maxWidth: 345,maxHeight:225 }}>
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
            <Card sx={{ maxWidth: 345,maxHeight:225 }}>
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
            <Card sx={{ maxWidth: 345,maxHeight:225 }}>
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
            <Card sx={{ maxWidth: 345,maxHeight:225 }}>
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
            <Card sx={{ maxWidth: 345,maxHeight:225 }}>
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
            <Card sx={{ maxWidth: 345,maxHeight:225 }}>
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
            <Card sx={{ maxWidth: 345,maxHeight:225 }}>
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
            <Card sx={{ maxWidth: 345,maxHeight:225 }}>
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
            <Card sx={{ maxWidth: 345,maxHeight:225 }}>
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
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Skills;
