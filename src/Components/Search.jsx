import React from 'react'
import {  Box, InputBase,  styled } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
const SearchContainer = styled(Box)`
    background : #fff;
width : 35%;
border-radius : 2px;

display : flex;    
// border : 2px solid red;

`;
const InputSearchBar = styled(InputBase)`
// border : 2px solid red;
    padding-left : 20px;
    width : 92%
`;
const SearchIconBox = styled(Box)`
    color : blue;
    display : flex;
  
    align-items : center;
    padding-left : 5px
`;
export const Search = () => {
  return (
    <SearchContainer>
            <InputSearchBar 
                placeholder='Search for products, brands and more'
            />
            <SearchIconBox>
            <SearchIcon />
            </SearchIconBox>
    </SearchContainer>
  )
}
