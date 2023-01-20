import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const Desc = () => {
  const theme = createTheme();

  theme.typography.body2 = {
    fontSize: "18px",
    "@media (min-width:1920px)": {
      fontSize: "28px",
      maxWidth: "630px",
      lineHeight: "32px",
    },
    "@media (max-width:1536px)": {
      fontSize: "16px",
    },
    "@media (max-width:600px)": {
      fontSize: "12px",
      width: "300px",
    },
    "@media (max-width:900px)": {
      fontSize: "14px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="body2"
        sx={{
          margin: "auto",
          maxWidth: "500px",
          textAlign: "center",
          textShadow: "2px 2px 2px black",
          lineHeight: "24px",

          "@media (max-width:374px)": {
            maxWidth: "250px",
            fontSize: "8px",
            lineHeight: "20px",
          },
        }}
      >
        Hello! I am Nyi Nyein Aung and you can also call me Leo. I am a 3rd-year
        student studying Information Technology at Payap University
        International College. I have always enjoyed learning Javascript and
        making fun apps in my Computer Science class back in high school. I
        started learning how to make web applications after joining university.
        <br />
        <br />I love to learn new things and enjoy talking to my friends about
        new projects we are working on. I am also very interested in technology
        in general and try my best to keep up with the updates. I really enjoy
        making web applications and I hope to improve my skills as I go on my
        learning journey.
      </Typography>
    </ThemeProvider>
  );
};

export default Desc;
