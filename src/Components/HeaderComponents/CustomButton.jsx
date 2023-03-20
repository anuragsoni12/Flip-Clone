import React, { useState } from 'react';
import {  Box, styled } from '@mui/material';


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
 

        </Box>
        <Login open={open} setOpen={setOpen}/>
        
       
    </BoxWraper>
  )
}
