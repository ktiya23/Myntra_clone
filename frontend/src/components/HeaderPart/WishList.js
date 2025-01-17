import { IconButton,Box,Typography } from '@mui/material'
import FavoriteIcon from "@mui/icons-material/Favorite"

import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const WishList = () => {
  const navigate = useNavigate()

  const handleWishList=()=>{
    navigate("/wishlist")
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
      <IconButton sx={{ padding: 0 }} onClick={handleWishList}>
        <FavoriteIcon
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
        WishList
      </Typography>
    </Box>
  )
}

export default WishList
