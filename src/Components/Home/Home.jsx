import React,{useState,useEffect} from 'react'
import { Navigation } from './Navigation'
import { Banner } from '../../Carousel/Carousel'
import { bannerData } from '../../Constants/Data'
import {products} from '../../Constants/Data';
import {  Box, styled } from '@mui/material'
import { FirstSlide } from '../../Carousel/FirstSlide'
// import { SingleAd } from '../../Carousel/SingleAd';
import { MidSlide } from '../../Carousel/MidSlide';
// import { BannerAd } from '../../Carousel/BannerAd';
// import { LastCarousel } from '../../Carousel/LastCarousel';

const BannerContainer = styled(Box)`
padding : 2px 10px;
background : #f2f2f2;
`;
const NavContainer = styled(Box)`
// padding : 10px 0px;
`;
export const Home = () => {

    //  console.log('prod', prod)
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
      {/* <FirstSlide products={products} title='Discount for you'timer={false} /> */}
      </BannerContainer>
    
      
     
      {/* <LastCarousel prods={prod} title ='Weekend Special' timer={false} /> */}
      {/* <SingleAd/> */}
      <BannerContainer>      
      <FirstSlide products={products} title='Discount for you'timer={false} />
      </BannerContainer>
      <BannerContainer>      
      <FirstSlide products={products} title='Discount for you'timer={false} />
      </BannerContainer>
      <BannerContainer>      
      <FirstSlide products={products} title='Discount for you'timer={false} />
      </BannerContainer>
      
      {/* <BannerContainer>
      <BannerAd/>
      </BannerContainer> */}
     


      {/* <LastCarousel prods={prod} title ='Weekend Special' timer={false} /> */}
     
    </>


  )
}
