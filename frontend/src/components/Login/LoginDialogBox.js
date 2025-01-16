import React from 'react';
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  Divider, 
  Box 
} from '@mui/material';

const LoginDialogBox = ({ open, setOpen }) => {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      sx={{
        '& .MuiDialog-paper': {
          width: '300px',
          padding: '20px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }
      }}
    >
      <DialogTitle>Welcome</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ marginBottom: '20px' }}>
          To access your account and manage order
        </DialogContentText>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth
          onClick={handleClose}
          sx={{ marginBottom: '15px' }}
        >
          Login/Signup
        </Button>
        <Divider />
        <Box sx={{ marginTop: '15px' }}>
          <DialogActions>Orders</DialogActions>
          <DialogActions>Wishlist</DialogActions>
          <DialogActions>Gift Cards</DialogActions>
          <DialogActions>Contact Us</DialogActions>
          <DialogActions>Myntra Insiders</DialogActions>
        </Box>
        <Divider />
        <Box sx={{ marginTop: '15px' }}>
          <DialogActions>Myntra Credit</DialogActions>
          <DialogActions>Coupons</DialogActions>
          <DialogActions>Saved Cards</DialogActions>
          <DialogActions>Saved VPA</DialogActions>
          <DialogActions>Saved Addresses</DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialogBox;
