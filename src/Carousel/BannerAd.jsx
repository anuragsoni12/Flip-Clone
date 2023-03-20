import React from 'react';
import {    styled  ,Grid} from '@mui/material';
import {imageURL} from '../Constants/Data';
const Wraper = styled(Grid)`
    margin-top : 10px;
    margin-bottom : 10px;
    display : flex;
    justify-content : space-between;
`;
export const BannerAd = () => {
  return (
   <>
     <Wraper lg={12} sm={12} ms={12} container spacing={1 } >
            {
                imageURL.map((image => (
                  <Grid item lg={4} md={4} sm={12} xs={12} > 
                    <img src={image} style={{width : '100%'}} alt="" />
                  </Grid>
                )))
            }
   </Wraper>
   </>
  )
}
