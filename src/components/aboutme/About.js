import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import "./About.css";
const About = () => {
  const theme = createTheme();

  theme.typography.body2 = {
    fontSize: "18px",
    "@media (max-width:600px)": {
      fontSize: "12px",
      width: "300px",
    },
  };

  return (
    <section id="about" className="bg__about">
      <div className="container aboutme__container">
        <div className="title_about">
          <Typography component="h2" variant="h2" sx={{ marginTop: "10px" }}>
            About me
          </Typography>
        </div>
        <ThemeProvider theme={theme}>
          <Typography
            variant="body2"
            sx={{
              margin: "auto",
              maxWidth: "500px",
              textAlign: "center",
              textShadow: "2px 2px 2px black",
              lineHeight: "24px",
              fontFamily: ["Roboto Mono", "monospace"],
            }}
          >
            Hello. I am Nyi Nyein Aung but you can also Call me Leo. I am 18
            years and am currently a 3rd-year university student studying IT at
            Payap International College. I have always enjoyed learning
            Javascript and making random games in my Computer Science class back
            in high school. Then a year after I joined the university, I started
            learning web development.
            <br />
            <br />I enjoy playing games during my free time and I also love
            problem-solving. I usually would self-study frontend after I get
            home from university in the evening and play games with my friends
            at night. I am also very interested in technology in general and try
            my best to keep up with the updates. I really enjoy web development
            and I hope to improve my skills as I go on my learning journey.
          </Typography>
        </ThemeProvider>
      </div>
    </section>
  );
};

export default About;
