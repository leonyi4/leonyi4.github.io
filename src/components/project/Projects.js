import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";

import React from "react";
import movieAPI from "../../assets/movieAPI.png";
import orderSystemPic from "../../assets/order_system.png";
import "./Projects.css";

const Projects = () => {

  return (
    <section id="projects" className="projectss">
      <div className="project__info">
        <h2 style={{color:"var(--color-primary)"}}>My Projects</h2>
      </div>
      <div className="container projects__container">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={10}md={6}>

              <Card sx={{ border: 5, borderRadius: 5, borderColor: "#ee3838", maxWidth:500, maxHeight: 500 }}>
                <CardMedia
                  sx={{ border: 2, borderRadius: 2 }}
                  component="img"
                  src={orderSystemPic}
                  alt="ordering system"
                />
                <CardContent sx={{ backgroundColor: "#fbef45" }}>
                  <Typography
                    
                    variant="h5"
                    component="div"
                  >
                    Food Ordering System
                  </Typography>
                  
                </CardContent>
              </Card>

          </Grid>
          <Grid item xs={10} md={6}>
            <Card sx={{ border: 5, borderRadius: 5, borderColor: "#ee3838", maxWidth:500, maxHeight: 700 }}>
              <CardMedia
                sx={{ border: 2, borderRadius: 2 }}
                component="img"
                src={movieAPI}
                alt="ordering system"
              />
              <CardContent sx={{ backgroundColor: "#fbef45" }}>
                <Typography
                  
                  variant="h5"
                  component="div"
                >
                  Watched-Movies list Fetcher
                </Typography>
                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Projects;
