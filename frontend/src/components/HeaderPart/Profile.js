import { Box, IconButton, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // import useNavigate
import LoginDialogBox from "../Login/LoginDialogBox";

const Profile = () => {
  const [open , setOpen] = useState(false);
  const navigate = useNavigate();  // useNavigate hook for navigation

  const handleDialog = () => {
    setOpen(true);
  };

  const handleLoginSignup = () => {
    navigate("/login");  // Navigate to /login page
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        marginLeft: "50px"
      }}
    >
      <IconButton sx={{ padding: 0 }} onClick={handleDialog}>
        <PersonIcon
          sx={{
            fontSize: 20,
            stroke: "black",
            fill: "none",
            strokeWidth: 1,
          }}
        />
      </IconButton>
      <Typography
        variant="body2"
        sx={{ color: "black", fontWeight: "bold", mt: 0 }}
      >
        Profile
      </Typography>
      <LoginDialogBox open={open} setOpen={setOpen} handleLoginSignup={handleLoginSignup} />
    </Box>
  );
};

export default Profile;
