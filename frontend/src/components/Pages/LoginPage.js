import React from "react";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignupPage from "./SignupPage";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login logic");
    navigate("/"); 
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
        Login
      </Typography>
      <Divider />
      <form onSubmit={handleLoginSubmit}>
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
          Login
        </Button>
      </form>
      <Typography
        variant="body2"
        sx={{ textAlign: "center", marginTop: "15px", cursor: "pointer" }}
        onClick={() => navigate("/signup")}
      >
        New to Myntra? Sign Up
      </Typography>
      <ToastContainer />
    </Box>
  );
};

export default Login;
