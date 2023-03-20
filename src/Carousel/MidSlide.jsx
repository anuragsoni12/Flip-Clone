import React from 'react';
import { FirstSlide } from './FirstSlide';

import {  Box,  styled } from '@mui/material';

const Container = styled(Box)`
    width : 100%;
    height : 150;
    // border : 2px solid red;
    display : flex;
    margin : 10  0 10px 0;
    background-color : #ffff;
`;
const LeftSilder = styled(Box)(({theme})=> ({
    width : '83%',
    [theme.breakpoints.down('md')] : {
        width : '100%',
        height : '100px',
    }
}));
const RightSlider  = styled(Box)(({theme}) => ({
    // border : 2px solid red;
    // margin-bottom : 10px;
    marginLeft : '15px',
    width : '17%',
    textAlign : 'center',
    [theme.breakpoints.down('md') ] : {
        display : 'none',
    }

}));

export const MidSlide = ({products, title ,timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <Container>
        <LeftSilder>
            <FirstSlide
                products={products}
                timer={timer}
                title={title}
            />
        </LeftSilder>
        <RightSlider>
            <img src={adURL} alt="ad" style={{width : '214px', height : '100%'}} />
        </RightSlider>
    </Container>
  )
}




