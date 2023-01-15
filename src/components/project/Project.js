import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";

const Project = (props) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const ani = inView ? "fade-in" : "";
  return (
    <Card
      className={ani}
      ref={ref}
      sx={{
        width: "700px",
        "@media (max-width:1920px)": {
          width: "1000px",
        },
        "@media (max-width:1024px)": {
          width: "500px",
        },
        "@media (max-width:600px)": {
          width: "300px",
        },
        "@media (max-width:374px)": {
          width: "250px",
        },

        textAlign: "center",
        background: "transparent",
        margin: "auto",
        borderRadius: 1,
        border: 2,
        borderColor: "white",
        marginBottom: "15px",
      }}
    >
      <CardMedia
        component="img"
        src={props.project.pic}
        sx={{ objectFit: "contain", padding: 0.5, borderRadius: 2 }}
      />
      <CardContent
        sx={{
          p: 0,
          "&:last-child": { pb: "5px" },
          m: 0.5,
          px: 0.5,
          pt: 0.5,
          pb: 0,
          backgroundColor: "rgba(247, 201, 115, 1)",
          borderRadius: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "20px",
            },
            fontWeight: 500,
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
            "@media (max-width:600px)": {
              fontSize: "10px",
            },

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
        <CardActionArea>
          <Button
            onClick={(e) => window.open(props.project.link)}
            variant="contained"
            size="small"
            sx={{
              marginTop: "10px",
              display: "flex",
              fontFamily: ["Roboto Mono, monospace"],
              "@media (max-width:600px)": {
                fontSize: "6px",
              },
            }}
          >
            More information
          </Button>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

export default Project;
