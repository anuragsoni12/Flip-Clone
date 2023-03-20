import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import { AppBar, Box, Toolbar, Typography, Button,Divider, styled } from '@mui/material'

const responsive = {
 
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CrouselImage = styled('img')({
    width : '150px',
  height : '150px',

  // border : '2px solid red',
  
})
const BoxRow = styled(Box)`

    background-color : #ffffff;
// border : 2px solid red;
`;
const Deal = styled(Box)`
  margin : 0px 0px;
  padding : 10px 25px;
  background : #ffffff;
  display : flex;
  align-items : center;
`;
const Timer = styled(Box)`
  display : flex;
  margin-left : 10px;
  align-items : center;
  color : #7f7f7f;

`;
const DealText = styled(Typography)`
  font-size : 22px;
  font-weight : 600;
  margin-right : 22px;

`;
const ViewAlButton = styled(Button)`
  margin-left : auto;
  background-color : #2874f0;
  color : white;
  border-radius : 2px;
  font-size : 13px;
`;
const ProductText = styled(Typography)`
    font-size : 14px;
    margin-top : 4 style={{}} px;
`;
export const LastCarousel = ({prods , timer , title}) => {
    // const [prod , setProd] = useState();
    // const callApi = async () => {
    //    const response = await fetch("https://fakestoreapi.com/products")
    //    const data = await response.json();
    //     console.log(data);
    //     setProd(data);
    //    }
    
    //    useEffect(()=>{
    //     callApi();
    //    },[])
    console.log('prod-->', prods)
       const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
       const renderer = ({ hours, minutes, seconds, completed }) => {
           return <Box varient="span">{hours} : {minutes} : {seconds} left</Box>
       };
     
  return (
        <>
          <BoxRow>
    <Divider/>
      <Deal>
        <DealText>{title}</DealText>
        {
          timer ?
          <Timer>
          <img src={timerURL} alt="" style={{width : '24px' , marginRight : '10px'}}  />
          <Countdown date={Date.now() + 5.04e+7}   renderer={renderer} />
        </Timer>: 
        null
        }
        <ViewAlButton  sx={{"&:hover": {backgroundColor: "#2874f0", }}} >View All</ViewAlButton>
      </Deal>
        <Divider />
     <Carousel 
    responsive={responsive}
    swipeable={false}
  draggable={false}
  infinite={true}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  autoPlay={true}
  autoPlaySpeed={1000}
  centerMode={true}
  
  

    >
     
        
        

         {
                prods.map((product)=>(
                  <Link to={`product/${product.id}`} style={{textDecoration: 'none' }}  >
                    <Box style={{textAlign : 'center', padding : '25px 15px'}}> 
                        <CrouselImage  src={product.image} alt=""  />
                        <ProductText style={{fontWeight :'700', color : '#212121', }} >{product.title}</ProductText>
                        <ProductText style={{color : 'green'}} >Upto 70% off</ProductText>
                      
                        <ProductText style={{color : '#212121'}} >Best Seller</ProductText>
                    </Box>
                    </Link>
                ))
        } 
           
</Carousel>
   </BoxRow>

        </>
    )
}

//    <BoxRow>
//     <Divider/>
//       <Deal>
//         <DealText>{title}</DealText>
//         {
//           timer ?
//           <Timer>
//           <img src={timerURL} alt="" style={{width : '24px' , marginRight : '10px'}}  />
//           <Countdown date={Date.now() + 5.04e+7}   renderer={renderer} />
//         </Timer>: 
//         null
//         }
//         <ViewAlButton  sx={{"&:hover": {backgroundColor: "#2874f0", }}} >View All</ViewAlButton>
//       </Deal>
//         <Divider />
//      <Carousel 
//     responsive={responsive}
//     swipeable={false}
//   draggable={false}
//   infinite={true}
//   containerClass="carousel-container"
//   dotListClass="custom-dot-list-style"
//   itemClass="carousel-item-padding-40-px"
//   autoPlay={true}
//   autoPlaySpeed={1000}
//   centerMode={true}
  
  

//     >
     
        
        

//          {
//                 product.map((product)=>(
//                   <Link to={`product/${product.id}`} style={{textDecoration: 'none'}}  >
//                     <Box style={{textAlign : 'center', padding : '25px 15px'}}> 
//                         <CrouselImage  src={product.image} alt="" />
//                         <ProductText style={{fontWeight :'700', color : '#212121', }} >{product.title}</ProductText>
//                         <ProductText style={{color : 'green'}} >Upto 70% off</ProductText>
//                         {/* <ProductText style={{color : 'green'}} >{product.discount}</ProductText> */}
//                         <ProductText style={{color : '#212121', opacity : '0.6'}} >{product.category}</ProductText>
//                     </Box>
//                     </Link>
//                 ))
//         } 
           
// </Carousel>
//    </BoxRow>
