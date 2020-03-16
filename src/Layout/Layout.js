import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'
import { Helmet } from "react-helmet"

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css?family=Questrial&display=swap'); */
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap');
#content{
  position:relative;
  overflow:hidden;
}
ul{
  list-style:none;
}
html{
  overflow-x:hidden;
  font-size:19px;
  scroll-behavior: smooth;
  @media (max-width: 320px) {
    /* font-size:12px; */
  }
}

  *,*::before,*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body{
    /* min-height:100vh; */
    /* font-family: 'Questrial', sans-serif; */
    width:100vw;
    transition: background-color .2s linear;
    padding:0;
    margin:0;
    /* font-family: 'Questrial', sans-serif; */
    font-family: 'Montserrat', sans-serif;
    background:${({ theme }) => theme.colors.white}
  }
`;

const StyledWrapper = styled.div`
  /* min-height:100vh; */
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap&subset=latin-ext" rel="stylesheet" />
      </Helmet>
      <StyledWrapper>
        {children}
      </StyledWrapper>
    </>
  </ThemeProvider>

)

export default Layout;