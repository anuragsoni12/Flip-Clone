import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {products} from '../../Constants/Data'
import { ActionItem } from './ActionItem';
import { ProductDetail } from './ProductDetail';
import {  Box,  styled ,Grid } from '@mui/material'
const Component = styled(Box)`
    background : #f2f2f2;
 
`;
const Conatiner = styled(Grid)(({theme})=> ({
    background : '#ffffff',
    display : 'flex',
    [theme.breakpoints.down('md')] : {
        margin : 0,
    }

}));
const RightContainer = styled(Grid)`
// border : 2px solid red;
padding : 15px 20px;
    margin-top : 50px;
`;

export const DetailView = () => {
  
const temp = useParams();
// console.log('id ->', temp.id)
const [detail, setDetail] = useState();

useEffect(()=>{
    setDetail(temp.id);
},[])

  return (
    <div>
        

        <>
    
        <Component>
        {products && products.map((item)=>(
            item.id === detail ? 
                <Conatiner container>
                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem item={item}/>
                </Grid>
                <RightContainer item lg={8} sm={8} md={8} xs={12}>
                    
                    <ProductDetail item={item} />
                </RightContainer>
                </Conatiner>
                
                
                
                
                
                : null
                ))}
                </Component>
        </>
            
            
        
    </div>
  )
}
