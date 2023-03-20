import React from 'react'
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'
import {Link} from 'react-router-dom'

const LogoBox = styled(Link)`
    margin-left : 12%;
    line-height : 0;
 
    
    
    `;
    const ExplorePlus = styled(Typography)`
    // border : 2px solid black;
    color : #fff;
   
  
    font-size : 12px;
    font-style : italic;
    text-decoration-color: #fff,
    `;

const Star = styled('img')({
    width : 10
})
export const Logo = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    
            <LogoBox to='/' style={{textDecoration: 'none'}} >
   
    <img src={logoURL} alt="logo" style={{ width: 90 }} />
    <Box>
        <ExplorePlus>
            Explore&nbsp;
            <Box component='span' style={{color : '#ffe500'}} >
                Plus

            </Box>
            <Star src={subURL} alt="star"/>
        </ExplorePlus>  
    </Box>
 

</LogoBox>
    
  )
}
