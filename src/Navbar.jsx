import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#388E3C" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { xs: "1rem", sm: "1.5rem" }, // Adjust font size for mobile
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
              margin: "5px",
            }}
          >
            Home
          </Typography>
        </Link>

        <Typography
          variant="h6"
          sx={{
            color: "white",
            mx: 3,
            fontSize: { xs: "1rem", sm: "1.5rem" },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
            margin: "5px",
          }}
        >
          |
        </Typography>

        <Link to="/Events" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { xs: "1rem", sm: "1.5rem" },
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
              margin: "5px",
            }}
          >
            Events
          </Typography>
        </Link>

        <Typography
          variant="h6"
          sx={{
            color: "white",
            mx: 3,
            fontSize: { xs: "1rem", sm: "1.5rem" },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
            margin: "5px",
          }}
        >
          |
        </Typography>

        <Link to="/About" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { xs: "1rem", sm: "1.5rem" },
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
              margin: "5px",
            }}
          >
            About
          </Typography>
        </Link>

        <Typography
          variant="h6"
          sx={{
            color: "white",
            mx: 3,
            fontSize: { xs: "1rem", sm: "1.5rem" },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
            margin: "5px",
          }}
        >
          |
        </Typography>

        <Link to="/Contact" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { xs: "1rem", sm: "1.5rem" },
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
              margin: "5px",
            }}
          >
            Contact
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
