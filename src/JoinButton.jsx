import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function JoinButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Events");
  };

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#388E3C",
        color: "white",
        fontSize: "1.2rem",
        fontFamily: "Poppins, sans-serif",
        padding: "12px 25px",
        borderRadius: "8px",
        textTransform: "none",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        "&:hover": {
          backgroundColor: "#2c6e2f",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
        },
      }}
      onClick={handleClick}
    >
      Join the Team
    </Button>
  );
}

export default JoinButton;
