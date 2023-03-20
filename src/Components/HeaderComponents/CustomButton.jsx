import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';

import { Login } from './Login';

const BoxWraper = styled(Box)`
    display : flex;
    justify-content :space-evenly;
    align-items : center;
    // border : 2px solid red;
    // width : 35%
`;

const CustomBtn = styled('button')`
    background-color : #fff;
    border-radius : 0;
    // margin-left : 10px;
    padding : 7px 29px;
    text-transform : none;
    font-weight : 400;
    color : #2874f0;
    border : 0px;
    font-size : 15px;
    
`;


export const CustomButton = () => {
    const [open , setOpen] = useState(false);
  return (
    <BoxWraper>
        <Box>
        <CustomBtn  onClick={()=> setOpen(true)} >
            Login
        </CustomBtn>
        {/* <CustomBtn variant="contained" onClick={()=> setOpen(true)} >
         
            Login
        </CustomBtn> */}

        </Box>
        <Login open={open} setOpen={setOpen}/>
        
        {/* <Box>
            <Typography>Become a Seller</Typography>
        </Box> */}
        {/* <Box>
            More
        </Box> */}
        {/* <ShoppingCartBox >
            <ShoppingCartIcon />
            <Typography>
                Cart
            </Typography>
        </ShoppingCartBox> */}
    </BoxWraper>
  )
}
