import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const Project = (props) => {
  return (
    <Card
      sx={{
        width: "500px",
        "@media (max-width:600px)": {
          width: "300px",
        },

        textAlign: "center",
        background: "transparent",
        margin: "auto",
        borderRadius: "5px",
        border: 2,
        borderColor: "white",
        padding: "2px",
        marginBottom: "15px",
      }}
    >
      <CardMedia
        component="img"
        src={props.project.pic}
        sx={{ objectFit: "contain", padding: 2 }}
      />
      <CardContent
        sx={{
          marginBottom: 2,
          marginLeft: 2,
          marginRight: 2,
          marginTop: 1,
          padding: 1,
          backgroundColor: "rgba(247, 201, 115, 1)",
          borderRadius: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            background: "rgba(255, 20, 10, 0.6)",
            textShadow: "2px 2px 2px black",
            color: "white",
            fontFamily: ["Roboto Mono, monospace"],
          }}
        >
          {props.project.title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            background: "rgba(00, 100, 255, 0.6)",
            textShadow: "2px 2px 2px black",
            lineHeight: "24px",
          }}
        >
          {props.project.desc}
        </Typography>
        <div className="tech">
          {props.project.tech.map((tech, index) => (
            <img
              key={`${index}tech`}
              src={tech}
              alt={`${index}tech`}
              className="logo"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Project;
