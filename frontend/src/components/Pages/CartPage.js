import { Button, Typography } from '@mui/material'
import React from 'react'
import { Navigate } from 'react-router-dom'

const CartPage = () => {
    const navigate = Navigate()
  return (
    <div>
      <img src='https://constant.myntassets.com/checkout/assets/img/empty-bag.webp'/>
      <Typography>Hey, It feels so light !</Typography>
      <Typography>There is nothing in your bag. Lets add something.</Typography>
      <Button onClick={()=> navigate("/")}>ADD FROM WISHLIST OR HOME </Button>
    </div>
  )
}

export default CartPage
