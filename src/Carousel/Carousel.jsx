import {bannerData} from '../../src/Constants/Data';
import React from 'react';
import {  styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
 
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CrouselImage = styled('img') (({theme}) => ({
      width : '100%',
    height : '280px',
    [theme.breakpoints.down('md')] : {
      object : 'cover',
      height : '180px',
    }
}));


export const Banner = () => {
    return (
        <Carousel 
        responsive={responsive}
        swipeable={false}
      draggable={false}
      infinite={true}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      autoPlay={true}
      autoPlaySpeed={2000}
      
        >
                {
                      bannerData.map((item)=>(
                            <CrouselImage src={item.url} alt="banner" />
                        ))
            }
    </Carousel>
  )
}


