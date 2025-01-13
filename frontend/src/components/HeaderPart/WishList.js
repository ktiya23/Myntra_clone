import { IconButton,Box,Typography } from '@mui/material'
import FavoriteIcon from "@mui/icons-material/Favorite"

import React from 'react'

const WishList = () => {
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
