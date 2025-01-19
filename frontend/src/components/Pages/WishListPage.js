import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, styled } from "@mui/material";


const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  padding: "20px",
  minHeight: "80vh",
  backgroundColor: theme.palette.background.default,
  textAlign: "center",
  marginTop:"20px"
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "red",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "5px",
  variant: "outlined",
  border:"2px solid red",
  fontWeight:"bold",
}));

const WishListPage = () => {
  const navigate = useNavigate();

  const handleWishlist = () => {
    navigate("/login");
  };
  return (
    <Container>
      <Typography variant="h4" fontWeight="bold">PLEASE LOG IN</Typography>
      <Typography variant="p" color="grey">Login to view items in your wishlist.</Typography>
      <img src="https://a076e84bbc8ac30bae18-8c01d651715539f80f0681c64929ddc6.ssl.cf5.rackcdn.com/ASSETS/SITE/profile.png" alt="wishlist img" style={{ maxWidth: "250px" }} />

      <StyledButton onClick={handleWishlist}>LOGIN</StyledButton>
    </Container>
  )
}

export default WishListPage;
