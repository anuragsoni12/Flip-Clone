import React from 'react';
import {  Box,  Typography, styled } from '@mui/material';
import { navData } from '../../Constants/Data';

const Component = styled(Box)(({theme})=>({
    display : 'flex',
    // border : '2px solid red',
    alignItems : 'center',
    overflow : 'hidden',
    justifyContent : 'space-evenly',
    // margin : '55px 110px 0 130px',
    // justifyContent : 'spaceBetween',
    [theme.breakpoints.down('lg')] : {
        // margin : '55px 110px 0 130px',
        margin : 0
    }

}));
const Container = styled(Box)`
    padding : 12px 8px;
    text-align : center;
`;
const ImageUrl = styled('img')`
    width : 70px;
`;
export const Navigation = () => {
  return (
    
        <Component>
        {
            navData.map((item)=>(
                <Container >
                    <ImageUrl src={item.url} alt=""  />
                    <Typography style={{fontSize : '14px',fontWeight : '600' , textAlign : 'center' , padding : '10px 10px' }}>{item.text}</Typography>
                </Container>
            ))
        }
        </Component>
    
  )
}
