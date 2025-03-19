import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Aaron Hernandez", text: "Eric is the man" },
  { name: "Michael Smith", text: "I love the travel recommendations. Everything was perfect!" },
  { name: "Samantha Lee", text: "A must-visit site for any traveler. Super useful and easy to navigate." },
  { name: "Daniel Brown", text: "Great experience! Found the perfect vacation spot thanks to this." },
];

// Duplicate testimonials to create a seamless loop
const scrollingTestimonials = [...testimonials, ...testimonials];

function Testimonials() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "#f5f5f5",
        padding: 2,
        marginTop: 4,
        display: "flex",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 70, ease: "linear" }} // Slow and smooth scrolling
        style={{ display: "flex", gap: "20px" }}
      >
        {scrollingTestimonials.map((testimonial, index) => (
          <Card key={index} sx={{ minWidth: 250, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="body1">"{testimonial.text}"</Typography>
              <Typography variant="subtitle2" sx={{ marginTop: 1, fontWeight: "bold" }}>
                - {testimonial.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </Box>
  );
}

export default Testimonials;
