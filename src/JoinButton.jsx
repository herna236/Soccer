import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";  // Import useNavigate

function JoinButton() {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleClick = () => {
    navigate("/Events");  // Navigate to the /Events page
  };

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#388E3C",
        color: "white",
        fontSize: "1.2rem",
        padding: "10px 20px",
        "&:hover": {
          backgroundColor: "#2c6e2f"  // Darker shade on hover
        }
      }}
      onClick={handleClick}  // Use the handleClick function for navigation
    >
      Join the Team
    </Button>
  );
}

export default JoinButton;
