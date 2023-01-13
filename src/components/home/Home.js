import { createTheme, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import cat from "../../assets/cool-cat.png";
import ContactMe from "./Contactme";
import "./Home.css";

const Home = () => {
  const theme = createTheme({});

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  theme.typography.h2 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  };
  theme.typography.h1 = {
    fontSize: "2rem",
    "@media (min-width:600px)": {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "5rem",
    },
  };

  theme.typography.subtitle1 = {
    "@media (max-width:900px)": {
      maxWidth: "300px",
    },
    "@media (max-width:600px)": {
      maxWidth: "200px",
      fontSize: "10px",
    },
    "@media (max-width:440px)": {
      maxWidth: "180px",

      fontSize: "10px",
    },
  };

  const cName = inView ? "fade-in" : "";

  return (
    <header id="home" className={cName}>
      <ThemeProvider theme={theme}>
        <div className="container header__container" ref={ref}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "var(--color-primary)",
              textShadow: " 2px 2px 2px black",
            }}
          >
            Hello
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              background:
                "linear-gradient( #cf59bf 7%, #61ff8b 43%, #cfcf5f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: "auto",
            }}
          >
            I am Leo
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              maxWidth: "600px",
              margin: "auto",
              alignContent: "center",
              textShadow: " 2px 2px 2px black",
            }}
          >
            I am a 3rd year IT student and I am looking for internships
          </Typography>{" "}
          <ContactMe />
          <div className="cool">
            <img src={cat} alt="cool cat" />
          </div>
        </div>
      </ThemeProvider>
    </header>
  );
};

export default Home;
