import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import women from "../../../images/beautiful-young.png";

const Banner = () => {
  return (
    <Box sx={{ px: 12, py: 8, bgcolor: "#FFF8F5" }}>
      <Grid sx={{ alignItems: "center" }} container spacing={4}>
        <Grid xs={12} md={6}>
          <Typography variant="h4">
            BEAUTY SALON <br /> FOR EVERY WOMEN
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat{" "}
          </Typography>
          <Button className="jerins-btn" variant="contained">
            Get an Appointment
          </Button>
        </Grid>
        <Grid xs={12} md={6}>
          <Box sx={{ textAlign: "center" }}>
            <img style={{ width: "50%" }} src={women} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
