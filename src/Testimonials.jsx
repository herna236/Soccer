import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  { name: "James Carter", text: "Coach Eric has transformed my game completely. His dedication and knowledge are unmatched!" },
  { name: "Lisa Reynolds", text: "My son has improved so much under Coach Eric's guidance. He is an incredible mentor!" },
  { name: "Mark Thompson", text: "Eric's coaching style is both inspiring and effective. He truly cares about his players' growth." },
  { name: "Sophia Martinez", text: "I've never met a coach more passionate and skilled than Eric. His training sessions are top-notch!" },
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
