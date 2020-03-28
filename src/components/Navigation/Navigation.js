import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.svg';
import { Link } from "gatsby";

import { ImgWrapper, LogoImg } from './Logo';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding-top: 28px;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    width: 100%;
    z-index: 3;
    @media (min-width: 640px) {
      padding-top: 36px;
    }
    color: ${props => { console.log(props, 'eee'); return props.theme.main }};

`;

const Navigation = (props) => (
  // podział na globalne oraz nie globalne kolory
  <Nav>
    <ImgWrapper>
      <Link to="/">
        <LogoImg src={logo} alt="Develoopers logo" />
      </Link>
    </ImgWrapper>
    {props.children}
  </Nav>
);

export default Navigation;