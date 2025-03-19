import React from "react";
import { Box, Typography } from "@mui/material";
import JoinButton from "./JoinButton";  

function Home() {
  return (
    <Box sx={{ textAlign: "center", padding: 4 }}>
      <Typography variant="h3" sx={{ marginBottom: 4 }}>
        Welcome to The Goalkeeper's Workshop!
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        Here you will find all the latest updates, events, and information about our coaching programs.
      </Typography>

      {/* Add the Join the Team button */}
      <JoinButton />

      <Typography variant="body1" sx={{ marginTop: 4 }}>
        Join us and be part of a winning team! Stay updated with our latest news and events.
      </Typography>
    </Box>
  );
}

export default Home;
