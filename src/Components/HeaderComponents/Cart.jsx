import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material';

const  ShoppingCartBox = styled(Box)`
display : flex;
`;


export const Cart = () => {
  return (
    <ShoppingCartBox >
    <ShoppingCartIcon />
    <Typography>
        Cart
    </Typography>
 
</ShoppingCartBox>
  )
}
