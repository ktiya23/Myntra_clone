import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

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

const CartPage = () => {
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/");
  };

  return (
    <Container>
      <img
        src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
        alt="Empty Cart"
        style={{ maxWidth: "250px" }}
      />
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Hey, It feels so light!
      </Typography>
      <Typography variant="body1" sx={{ color: "gray" }}>
        There is nothing in your bag. Let's add something!
      </Typography>
      <StyledButton onClick={handleCart}>Add from Wishlist or Home</StyledButton>
    </Container>
  );
};

export default CartPage;
