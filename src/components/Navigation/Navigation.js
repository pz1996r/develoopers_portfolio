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
    color: ${({ theme }) => theme.colors.navGray};
    position: absolute;
    width: 100%;
    z-index: 3;
    @media (min-width: 640px) {
      padding-top: 36px;
    }
`;

const Navigation = (props) => (
  <Nav>
    <ImgWrapper>
      <Link to="/">
        <LogoImg src={logo} alt="Develoopers logo" onLoad={() => { console.log('załadowano obrazek') }} />
      </Link>
    </ImgWrapper>
    {props.children}
  </Nav>
);

export default Navigation;