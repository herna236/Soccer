import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import About from "./About";
import Events from "./Events";
import Contact from "./Contact";
import Home from "./Home";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import "./App.css";
import { ContactMail } from "@mui/icons-material";

function App() {
  return (
    <Router>

      <Banner />


      <Navbar />


      <Box sx={{ padding: 3, marginTop: 1}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Box>

      <Testimonials />
    </Router>


  );
}

export default App;
