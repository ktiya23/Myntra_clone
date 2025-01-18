import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Box,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; 

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  cursor: "pointer",
  "&:hover": {
    fontWeight: "bold",
  },
}));

const LoginDialogBox = ({ open, setOpen, user }) => {
  const navigate = useNavigate(); 

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoginSignupClick = () => {
    setOpen(false); 
    navigate("/login"); 
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      BackdropProps={{
        style: { background: "transparent" },
      }}
      sx={{
        "& .MuiDialog-paper": {
          width: "300px",
          position: "absolute",
          left: "80%",
          top: "39%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      {user ? (
        <>
          <DialogTitle sx={{ paddingBottom: 0 }}>Hello {user.name}</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ marginBottom: "12px" }}>
              {user.number}
            </DialogContentText>
            <Button
              variant="outlined"
              sx={{
                marginBottom: "15px",
                color: "red",
                borderColor: "gray",
                fontWeight: "bold",
                "&:hover": {
                  borderColor: "red",
                },
              }}
              onClick={handleLoginSignupClick} 
            >
              Login/Signup
            </Button>
            <Divider />
            <Box sx={{ marginTop: "15px", marginBottom: "15px" }}>
              <StyledTypography>Orders</StyledTypography>
              <StyledTypography>Wishlist</StyledTypography>
              <StyledTypography>Gift Cards</StyledTypography>
              <StyledTypography>Contact Us</StyledTypography>
              <StyledTypography>Myntra Insiders</StyledTypography>
            </Box>
            <Divider />
            <Box sx={{ marginTop: "15px" }}>
              <StyledTypography>Myntra Credit</StyledTypography>
              <StyledTypography>Coupons</StyledTypography>
              <StyledTypography>Saved Cards</StyledTypography>
              <StyledTypography>Saved VPA</StyledTypography>
              <StyledTypography>Saved Addresses</StyledTypography>
            </Box>
            <Divider />
            <Box sx={{ marginTop: "15px" }}>
              <StyledTypography>Edit Profile</StyledTypography>
              <StyledTypography>Logout</StyledTypography>
            </Box>
          </DialogContent>
        </>
      ) : (
        <>
          <DialogTitle sx={{ paddingBottom: 0 }}>Welcome</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ marginBottom: "12px" }}>
              To access your account and manage orders
            </DialogContentText>
            <Button
              variant="outlined"
              sx={{
                marginBottom: "15px",
                color: "red",
                borderColor: "gray",
                fontWeight: "bold",
                "&:hover": {
                  borderColor: "red",
                },
              }}
              onClick={handleLoginSignupClick} 
            >
              Login/Signup
            </Button>
            <Divider />
            <Box sx={{ marginTop: "15px", marginBottom: "15px" }}>
              <StyledTypography>Orders</StyledTypography>
              <StyledTypography>Wishlist</StyledTypography>
              <StyledTypography>Gift Cards</StyledTypography>
              <StyledTypography>Contact Us</StyledTypography>
              <StyledTypography>Myntra Insiders</StyledTypography>
            </Box>
            <Divider />
            <Box sx={{ marginTop: "15px" }}>
              <StyledTypography>Myntra Credit</StyledTypography>
              <StyledTypography>Coupons</StyledTypography>
              <StyledTypography>Saved Cards</StyledTypography>
              <StyledTypography>Saved VPA</StyledTypography>
              <StyledTypography>Saved Addresses</StyledTypography>
            </Box>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default LoginDialogBox;
