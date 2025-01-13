import React from "react";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import myntraLogo from "../../assests/myntra_logo.png";



const Logo = () => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "1200px",
      }}
    >
      <img src={myntraLogo} alt="logo" style={{ height: 60 }} />
    </Box>
  );
};

export default Logo;
