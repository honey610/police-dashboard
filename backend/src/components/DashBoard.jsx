import React from "react";
import HeatMap from "./HeatMap";
import TouristAlert from "./TouristAlert";
import Chart from "./Chart";
import TouristId from "./TouristId";
import AlertHistory from "./AlertHistory";
import Efir from "./Efir";
import { Typography, Box } from "@mui/material";

export default function Dashboard() {
  return (
    <Box>
      {/* <Typography variant="h5" gutterBottom>
        Welcome to the Police Dashboard
      </Typography> */}

      <TouristAlert />
      <Box mt={3}><HeatMap /></Box>
      <Box mt={3}><Chart /></Box>
      <Box mt={3}><TouristId /></Box>
      <Box mt={3}><AlertHistory /></Box>
      <Box mt={3}><Efir /></Box>
    </Box>
  );
}
