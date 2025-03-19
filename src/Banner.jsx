import React from "react";
import { Box, Typography } from "@mui/material";

function Banner() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 400,
        overflow: "hidden", // Hide overflow from the video
      }}
    >
      {/* Default Image Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/assets/goalie.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      />

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the video covers the area
        }}
      >
        <source src="/assets/video.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text over the image/video */}
      <Typography
        variant="h3"
        sx={{
          position: "absolute",
          top: "10%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          color: "#388E3C",
          textAlign: "left",
          backgroundColor: "rgba(0, 0, 0, 0.0)",
          padding: 1,
          borderRadius: 1,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        THE GOALKEEPERS WORKSHOP
      </Typography>
    </Box>
  );
}

export default Banner;
