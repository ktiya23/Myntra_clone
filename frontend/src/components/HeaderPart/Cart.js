import { IconButton,Box,Typography } from '@mui/material'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate();
  
  const handleCart =()=>{
    navigate("/cart")
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
      }}
    >
      <IconButton sx={{ padding: 0 }} onClick={handleCart} >
        <ShoppingCartIcon
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
        Cart
      </Typography>
    </Box>
  )
}

export default Cart
