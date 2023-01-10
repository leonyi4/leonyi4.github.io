import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Skill = (props) => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card>
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
