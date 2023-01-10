import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";

const Skill = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  const cName = inView ? "fade-in" : "";

  return (
    <Grid item xs={6} sm={4} md={3} ref={ref}>
      <Card className={cName}>
        <CardMedia
          component="img"
          height="155"
          src={props.pic}
          alt={props.alt}
        />
        <CardContent>
          <Typography
            variant="subtitle1"
            sx={{ fontFamily: ["Roboto Mono, monospace"] }}
          >
            {props.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Skill;
