import React from 'react'
import { adURL } from '../Constants/Data'
import {  Box,  styled  ,Grid} from '@mui/material'

const Wraper = styled(Grid)`
    margin-top : 10px;
    margin-bottom : 10px;
    // width : 100%;
    height : 
`;
export const SingleAd = () => {

  return (
    <>
    <Wraper lg={4} sm={12} ms={12} container spacing={0} >
            {
              
                  <Grid item lg={12}  md={12} sm={12} xs={12} > 
                    <img src={adURL} style={{width : '100%' , height : '200px' }} alt="" />
                  </Grid>

            }
   </Wraper>
    </>
  )
}

// md={4} sm={12} xs={12}
