import React, { useState } from "react";
import { Box, Button, TextField, Typography, Snackbar, Alert } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text);
        setSnackbarMessage("Message sent successfully!");
        setSeverity("success");
        setOpenSnackbar(true);
      },
      (error) => {
        console.log(error.text);
        setSnackbarMessage("There was an error sending your message. Please try again later.");
        setSeverity("error");
        setOpenSnackbar(true);
      }
    );

    setFormData({ name: "", email: "", message: "" });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        position: "relative",
      }}
    >
      <Typography variant="h5" textAlign="center">
        Contact
      </Typography>
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email Address"
        name="email"
        variant="outlined"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Message"
        name="message"
        variant="outlined"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: "#388E3C", '&:hover': { backgroundColor: "#2c6f2e" } }}
        endIcon={<SendIcon />}
      >
        Send Message
      </Button>


      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Centered
        sx={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={severity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;
