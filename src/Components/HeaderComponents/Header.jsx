import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../Search';
import { Logo } from './Logo';
import { CustomButton } from './CustomButton';
import { More } from './More';
import { BecomeASelleor } from './BecomeASelleor';
import { Cart } from './Cart';
import {Home} from '../Home/Home'
//routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'

const StyledHeader = styled(AppBar)`
    // border : 2px solid red;
    
    // display : flex;
    // justify-content : center;
    // align-items : center
`;
const BoxWraper = styled(Box)`
    display : flex;
    justify-content :space-evenly;
    align-items : center;
    // border : 2px solid red;
    width : 90%
`;

export const Header = () => {


    return (
        <StyledHeader>
            <Toolbar>

                <BoxWraper>

                    <Logo />
                    <Search />
                    <CustomButton />
                    <BecomeASelleor />
                    <More />
                    <Cart />
                  
                </BoxWraper>
            </Toolbar>
        </StyledHeader>
    )
}
