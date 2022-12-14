import { Typography } from "@mui/material";
import React from "react";

const Title = () => {
  return (
    <div className="title_about">
      <Typography
        component="h2"
        variant="h2"
        sx={{
          marginTop: "10px",
          marginBottom: "10px",
          fontFamily: ["Roboto Mono, monospace"],
          fontWeight: 500,
        }}
      >
        About me
      </Typography>
    </div>
  );
};

export default Title;
