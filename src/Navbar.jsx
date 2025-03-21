import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "@fontsource/poppins"; // Importing Poppins font

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#388E3C",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 6px rgba(0, 0, 0, 0.1)", // Shadow on top and bottom
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-around", // Distribute items evenly
          alignItems: "center",
          flexWrap: "wrap",
          fontFamily: "Poppins, sans-serif", // Modern font
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { xs: "1rem", sm: "1.5rem" },
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Subtle shadow
              margin: "5px",
              fontWeight: 600, // Medium weight for the text
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
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
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
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
              margin: "5px",
              fontWeight: 600,
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
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
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
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
              margin: "5px",
              fontWeight: 600,
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
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
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
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
              margin: "5px",
              fontWeight: 600,
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
