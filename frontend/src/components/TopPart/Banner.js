import React from 'react'
import { Container, Box } from "@mui/material";


const Banner = () => {
  return (
    <Container
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 0,
      margin: "0 auto",
      mt: "100px",
      p: 0,
      overflow: "hidden",
    }}
  >
    <Box sx={{ display: "flex", width: "100%" }}>
      <img
        src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/hOdRKVHJ_1144dd5f360a4bd38d79200ded0a1b6d.jpg"
        alt="First"
        style={{
          width: "50%",
          height: "auto",
          margin: 0,
          padding: 0,
          display: "block",
        }}
      />
      <img
        src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/S0PybOMD_1edc8c14119b47ab9fe19db3f3d94ea3.jpg"
        alt="Second"
        style={{
          width: "50%",
          height: "auto",
          margin: 0,
          padding: 0,
          display: "block",
        }}
      />
    </Box>
  </Container>
  )
}

export default Banner
