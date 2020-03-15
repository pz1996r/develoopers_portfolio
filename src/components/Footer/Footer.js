import styled from 'styled-components';
import React from "react";

const Footer = styled.footer`
    display: flex;
    justify-content:center;
    align-items: center;
    /* background-color: ${({ theme }) => theme.colors.mobileNav}; */
    height: 36px;
    border-radius: 4px 4px 0 0;
    /* color: ${({ theme }) => theme.colors.white}; */
    color:${({ theme }) => theme.colors.mobileNav};
`;

const FooterComponent = () => (
    <Footer>
        <small>&copy; Copyright 2020, Develoopers</small>
    </Footer>
)

export default FooterComponent;

