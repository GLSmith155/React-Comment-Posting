import React from 'react';
import styled, { withTheme } from 'styled-components';

const Header = () => {
    return <MainContainer><h1>hey</h1></MainContainer>;
};

export default Header;

//MAIN CONTAINER
const MainContainer = styled.header`
    background: url(../../images/4444.png) no-repeat center/cover;
    height: 30rem; width: 30rem; display: inline-block; color:white;
    background-size: contain;
    
    `;

    
