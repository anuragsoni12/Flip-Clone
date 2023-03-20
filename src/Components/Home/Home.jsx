import React from 'react';
import { Navigation } from './Navigation';
import { Banner } from '../../Carousel/Carousel';
import { bannerData } from '../../Constants/Data';
import {products} from '../../Constants/Data';
import {  Box, styled } from '@mui/material';
import { FirstSlide } from '../../Carousel/FirstSlide';

import { MidSlide } from '../../Carousel/MidSlide';
// import { BannerAd } from '../../Carousel/BannerAd';


const BannerContainer = styled(Box)`
padding : 2px 10px;
background : #f2f2f2;
`;
const NavContainer = styled(Box)`
// padding : 10px 0px;
`;
export const Home = () => {


  return (
    <>

      <NavContainer>
      <Navigation />

      </NavContainer>
      <BannerContainer>
      <Banner banners={bannerData} />

      </BannerContainer>
      <BannerContainer>
      <MidSlide products={products} title='Deal of the Day'timer={true} />
      
      </BannerContainer>
    
      
     
      
      <BannerContainer>      
      <FirstSlide products={products} title='Discount for you'timer={false} />
      </BannerContainer>
      <BannerContainer>      
      <FirstSlide products={products} title='Discount for you'timer={false} />
      </BannerContainer>
      <BannerContainer>      
      <FirstSlide products={products} title='Discount for you'timer={false} />
      </BannerContainer>
      
   


     
    </>


  )
}
