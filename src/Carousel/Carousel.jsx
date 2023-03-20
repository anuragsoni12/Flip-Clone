import {bannerData} from '../../src/Constants/Data'
import React from 'react'
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'
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




// import Img4 from '../Images/Img4.jpg'
// // import './App.css';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// // import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import React, { useState } from 'react'
// import { height } from '@mui/system'
// // import {bannerData} from '../Constants/Data'
// export const Banner = ({banners}) => {
 
  

//    const SlidersContainer = {
//     width : '100%',
//     position  : 'relative',
//   }

//   const Prev = {

//     padding : '25px 12px',
//     borderTopRightRadius: '3px',
//     borderBottomRightRadius: '3px',
//     fontSize : '30px',
//     fontWeight : 'bold',
//     backgroundColor : 'white',
//     color : 'black',
//     position : 'absolute',
//     top : '50%',
//     transform : 'translate(0,-50%)',
//     left : '0px',
  
   
//   }
//   const Next = {
//     padding : '25px 12px',
//     borderTopLeftRadius: '3px',
//     borderBottomLeftRadius: '3px',
//     fontSize : '30px',
//     fontWeight : 'bold',
//     backgroundColor : 'white',
//     color : 'black',
//     position : 'absolute',
//     top : '50%',
//     transform : 'translate(0,-50%)',
//     right : '0px',

//   }
//   const [currentIndex , setCurrentIndex] = useState(0);
//   const Sliders = {
//     height : '280px',
//     width : '100%',
//     position : 'relative',

//   }

//   const SliderStyle = {
//     width : '100%',
//     height : '100%',
//     backgroundColor : 'red',
//     backgroundImage : `url(${banners[currentIndex].url})`,
//     backgroundSize : 'cover',
//     backgroundPosition : 'center',
//     transition: 'all 0.2s ease-in-out'
//   }

//   const gotToNext = () =>{
//     let isLastSlide = currentIndex === banners.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   }
//   const gotToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? banners.length - 1 : currentIndex -1;
//     setCurrentIndex(newIndex);
//   }
//   return (
//     <div style={SlidersContainer} >
     
//       <div style={Sliders}>
//         <span style={Prev} onClick={gotToPrevious}><ArrowBackIosIcon/></span>
//         <div style={SliderStyle}></div>
//         <span style={Next}  onClick={gotToNext}><ArrowForwardIosIcon/></span>
//       </div>
    
      
//     </div>
//   )

// }