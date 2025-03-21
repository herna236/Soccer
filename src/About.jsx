import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

function About() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={3}>
      <Avatar
        src="/assets/eric1.JPG"
        alt="Coach Eric"
        sx={{ width: 150, height: 150, mb: 2 }}
      />
      <Typography variant="h4" gutterBottom>
        Meet Coach Eric
      </Typography>
      <Typography variant="body1" textAlign="center" maxWidth={600}>
        Coach Eric has over 20 years of experience coaching athletes of all ages.
        His dedication to player development and passion for the game make him a
        valuable mentor. Whether you're a beginner or an advanced player, Coach Eric
        is here to guide you on your journey to success.
      </Typography>
    </Box>
  );
}

export default About;
