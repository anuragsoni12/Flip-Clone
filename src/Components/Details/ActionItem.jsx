import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button,Divider, styled, Card } from '@mui/material'
import { products } from '../../Constants/Data'
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const LeftContainer = styled(Box)(({theme})=> ({
padding : '40px 0px 0px 80px',
minWidth   : '40%',
[theme.breakpoints.down('lg')] : {
    padding : '20px 0px 0px 40px',

}
// border : 2px solid red;
}));
const Image = styled('img')`
    padding : 15px 20px;
    width : 95%;
    border : 2px solid #f0f0f0;
`;
const StyledBtn = styled(Button)(({theme})=>({
    width : '48%',
    height : '50px',
    borderRadius : '2px',
    [theme.breakpoints.down('lg')] : {
        width : '44%',

    },
    [theme.breakpoints.down('sm')] : {
        width : '48%',

    }
}));
 
export const ActionItem = ({item}) => {
  return (
    <LeftContainer>
        <Image src={item.detailUrl} alt="product" />
        <StyledBtn variant='contained' style={{marginRight : '10px', background : '#ff9f00'}}><ShoppingCartIcon /> Add to Cart</StyledBtn>
        <StyledBtn variant='contained' style={{ background : '#fb541b'}}><FlashOnIcon/> Buy Now</StyledBtn>
    </LeftContainer>
  )
}
