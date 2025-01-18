import React from "react";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up logic");
    navigate("/"); // Navigate to home after signup
  };

  return (
    <Box
      sx={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <Typography variant="h5" textAlign="center">
        Sign Up
      </Typography>
      <Divider />
      <form onSubmit={handleSignUpSubmit}>
        <TextField
          label="Name"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ marginTop: "15px" }}
        >
          Sign Up
        </Button>
      </form>
      <Typography
        variant="body2"
        sx={{ textAlign: "center", marginTop: "15px", cursor: "pointer" }}
        onClick={() => navigate("/login")}
      >
        Already have an account? Login
      </Typography>
      <ToastContainer />
    </Box>
  );
};

export default SignupPage;
