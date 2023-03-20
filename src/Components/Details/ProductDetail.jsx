import React from 'react';
import {  Box, Typography,  Table ,TableBody,TableRow,TableCell, styled  } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { adURL } from '../../Constants/Data';
const SmallFont = styled(Box)`
    font-size : 14px;
    vertical-align : baseline;
    & > p {
        font-size : 14px;
        margin-top : 10px;

    }
`;
const StyleBadge = styled(LocalOfferIcon)`
    margin-right : 10px;
    color : #00cc00;
    font-size : 18px;
`;
const ColumnText = styled(TableRow)`
font-size : 14px;
vertical-align : baseline;
    & > td {
        font-size : 14px;
        margin-top : 10px;
        border : none;

    }
`;
export const ProductDetail = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));
    
   
  return (
    <>
        <Typography>{item.title.longTitle}</Typography>
                    <Box style={{display : 'flex',alignItems : 'center'}}>
                    <Typography style={{marginTop : '5px', color : '#878787', fontSize : '14px'}} >8 Ratings & 1 Review</Typography>
                    <Box component='span'><img style={{width : '77px' , margin : '12px 0px 2px 20px'}} src={fassured} alt="assured" /></Box>
                    </Box>
                    <Typography>
                        <Box component='span' style={{fontSize : '28px' , marginRight : '20px'}}>&#x20B9;{item.price.cost}</Box>
                        <Box component='span' style={{color : '#878787',  marginRight : '20px'}}><strike>&#x20B9;{item.price.mrp}</strike></Box>
                        <Box component='span' style={{color : '#388e3c',  marginRight : '20px'}}>{item.price.discount}</Box>
                    </Typography>
                    <Typography>Available Offers</Typography>
                    <SmallFont>
                        <Typography><StyleBadge/>
                        Get extra 23% off (price inclusive of cashback/coupon)T&C
                        </Typography>
                        <Typography><StyleBadge/>
                        Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*Know More
                        </Typography>
                        <Typography><StyleBadge/>
                        Buy this product and get upto ₹250 OffKnow More
                        </Typography>
                        <Typography><StyleBadge/>
                        Additional 10% Off on Prepaid TransactionsT&C
                        </Typography>
                        <Typography><StyleBadge/>
                        5% Cashback on Flipkart Axis Bank CardT&C
                        </Typography>
                        <Typography><StyleBadge/>
                        Shop With Flipkart Pay Later & stand a chance to win ₹5,000 Gift Card* during the offer periodKnow More
                        </Typography>
                        <Typography><StyleBadge/>
                        Purchase now & get a surprise cashback coupon till November 2023Know More
                        </Typography>
                    </SmallFont>
                    <Table>
                        <TableBody>
                            <ColumnText>
                                <TableCell style={{color : '#878787'}} >Delivery</TableCell>
                                <TableCell style={{fontWeight : '600'}}> Delivery By {date.toDateString()} | &#x20B9;40 </TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell style={{color : '#878787'}} >Warranty</TableCell>
                                <TableCell style={{fontWeight : '600'}}> No Warranty</TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell style={{color : '#878787'}} >Seller</TableCell>
                                <TableCell style={{color : '#2874f0'}}> 
                                    <Box component='span'>
                                        SuperComnet
                                    </Box>
                                    <Typography>GST invoice available</Typography>
                                    <Typography>view more seller startting starting from &#x20B9;1600</Typography>
                                 </TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell colSpan={2} ><img src={adURL} style={{width : 350}} alt="coins" /></TableCell>
                                
                            </ColumnText>
                            <ColumnText>
                                <TableCell style={{color : '#878787'}} >Description</TableCell>
                                <TableCell style={{fontWeight : '600'}}>{item.description}</TableCell>
                            </ColumnText>
                        </TableBody>
                    </Table>

    </>
  )
}
