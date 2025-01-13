import { IconButton,Box,Typography } from '@mui/material'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import React from 'react'

const Cart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
      }}
    >
      <IconButton sx={{ padding: 0 }}>
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
