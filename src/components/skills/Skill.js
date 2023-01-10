import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Skill = (props) => {
  return (
    <Grid item>
      <Card>
        <CardMedia
          component="img"
          height="165"
          src={props.pic}
          alt={props.alt}
        />
        <CardContent>
          <Typography
            variant="h4"
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
