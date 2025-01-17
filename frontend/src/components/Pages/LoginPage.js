import React, { useState } from "react";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginPage = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Login and Signup

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login logic");
    navigate("/"); // Navigate to the home page after login
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Sign up logic");
    navigate("/"); // Navigate to the home page after signup
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
        {isSignUp ? "Sign Up" : "Login"}
      </Typography>
      <Divider />
      <form onSubmit={isSignUp ? handleSignUpSubmit : handleLoginSubmit}>
        {!isSignUp && (
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        )}
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          required
        />
        {isSignUp && (
          <>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
          </>
        )}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ marginTop: "15px" }}
        >
          {isSignUp ? "Sign Up" : "Login"}
        </Button>
      </form>
      <Typography
        variant="body2"
        sx={{ textAlign: "center", marginTop: "15px", cursor: "pointer" }}
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? "Already have an account? Login" : "New to Myntra? Sign Up"}
      </Typography>
    </Box>
  );
};

export default LoginPage;
