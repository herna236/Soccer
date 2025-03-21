import React from "react";
import { Box, Typography } from "@mui/material";
import JoinButton from "./JoinButton";

// Importing the cool modern font from Google Fonts
import "@fontsource/poppins"; // Import Poppins font

function Home() {
  return (
    <Box sx={{ textAlign: "center", padding: 4, fontFamily: "Poppins, sans-serif" }}>
      <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: "600" }}>
        Welcome to The Goalkeeper's Workshop!
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: 4 }}>
        Here you will find all the latest updates, events, and information about our coaching programs.
      </Typography>

      <JoinButton />

      <Typography variant="body1" sx={{ marginTop: 4 }}>
        Join us and be part of a winning team! Stay updated with our latest news and events.
      </Typography>
    </Box>
  );
}

export default Home;
