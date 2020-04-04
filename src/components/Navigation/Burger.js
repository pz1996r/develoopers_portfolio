import React from 'react';
import styled, { css } from 'styled-components';

const Hamburger = styled.div`
  margin-right:11px;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  transition: transform .3s .1s ease-in-out;

  position:fixed;
  top:30px;
  right:0px;
  background: ${({ hamburger }) => hamburger ? '#edf1fdbf' : 'transparent'}; 
  transition: ${({ hamburger }) => hamburger ? '.3s .2s linear' : '0'};
  border-radius:8px;

  @media(min-width:640px){
      display: none;
  }
  /* animowanie */
  animation: 1900ms ease normal forwards running opacityContaier;
    opacity:0;
      @keyframes opacityContaier{
        0%{
            opacity: 0; 
         }
          100%{
            opacity: 1;
         }
      }

`;

const HamburgerBox = styled.span`
  width:30px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

// kreski
const mixinSpan = css`
    background-color: ${({ hamburger }, gray = ({ theme }) => theme.colors.primary, tertiary = ({ theme }) => theme.colors.tertiary) => hamburger ? gray : tertiary}; 
    height:${({ hamburger }) => hamburger ? '2px' : '2px'}; 
    right: 0px;
    transition-property: transform;
    border-radius: 3px;
    position: absolute;
`;
const mixinPseudoElements = css`
    content: "";
    display: block;
`;
const HamburgerInner = styled.span`
    ${mixinSpan};
    width: 30px;
    top: 50%;
    left: 0px;
    transform: ${({ hamburger }) => hamburger ? 'rotate(0deg)' : 'rotate(225deg)'}; 
    transition: ${({ hamburger }) => hamburger ? 'transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s, background-color .3s linear .1s' : 'transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s, background-color .3s linear'};
  &::before{
    ${mixinSpan};
    ${mixinPseudoElements};
    width: ${({ hamburger }) => hamburger ? '120%' : '100%'}; 
    top: ${({ hamburger }) => hamburger ? '-10px' : '0px'}; 
    left: auto;
    transition: ${({ hamburger }) => hamburger ? 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in 0.1s, background-color .3s linear.1s' : 'top 0.1s ease-out 0s, opacity 0.1s ease-out 0.12s, background-color .3s linear'}; 
    opacity: ${({ hamburger }) => hamburger ? '1' : '0'}; 
  }
  &::after{
    ${mixinSpan};
    ${mixinPseudoElements};
    width: ${({ hamburger }) => hamburger ? '80%' : '100%'}; 
    bottom: ${({ hamburger }) => hamburger ? '-10px' : '0px'}; 
    left: auto;
    transform: ${({ hamburger }) => hamburger ? 'rotate(0deg)' : 'rotate(-90deg)'}; 
    transition: ${({ hamburger }) => hamburger ? 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s, background-color .3s linear .1s' : 'bottom 0.1s ease-out 0s, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s, background-color .3s linear'}; 
  }
  
      animation: opacityContaier 1200ms forwards;
      @keyframes opacityContaier{
        0%{
            opacity: 0; 
         }
          100%{
            opacity: 1;
         }
      }
      
  `;

const Burger = ({ hamburger, hamburgerFun }) => (
  <Hamburger onClick={hamburgerFun} hamburger={hamburger}>
    <HamburgerBox>
      <HamburgerInner hamburger={hamburger}></HamburgerInner>
    </HamburgerBox>
  </Hamburger>
)

export default Burger;