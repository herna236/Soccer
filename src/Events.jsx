import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Sessions() {
  return (
    <Box textAlign="center" p={4}>
      <Typography variant="h4" gutterBottom>
        Session Packages
      </Typography>
      <Typography variant="h6" gutterBottom>
        3 Sessions - Contact For Prices
      </Typography>
      <Typography variant="h6" gutterBottom>
        6 Sessions - Contact For Prices
      </Typography>
      <Typography variant="h6" color="red" gutterBottom>
        All sessions are currently filled. Please contact us to be added to the waitlist.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#388E3C",
          color: "white",
          fontSize: "1.2rem",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#2c6e2f"
          }
        }}
        component={Link}
        to="/Contact"
      >
        Contact Us
      </Button>
    </Box>
  );
}

export default Sessions;
