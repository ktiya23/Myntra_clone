import React, { useState } from "react";
import { Box, TextField, Button, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError } from "../../util";

const SignupPage = () => {
  const [signInfo, setSignInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = signInfo;
    if (!name || !email || !password) {
      return handleError("All fields are required!!");
    }
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
        Sign Up
      </Typography>
      <Divider />
      <form onSubmit={handleSignUpSubmit}>
        <TextField
          label="Name"
          name="name"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={signInfo.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={signInfo.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={signInfo.password}
          onChange={handleChange}
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
