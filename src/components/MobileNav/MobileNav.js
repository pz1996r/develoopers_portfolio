import styled from 'styled-components';
import React from "react";
import Button from '../Btn';

const MobileContainer = styled.div`
    width: 200px;
    /* height:100vh; */
    /* min-height: -webkit-fill-available; */
    /* min-height:100%; */
    min-height:${({ height }) => { if (height !== null && height > 0) { return `${height}px` } else { return '100vh' } }};
    position: absolute;
    display: flex;
    align-items: center;
    position:fixed;
    right:0;
    top:0;
    transition: .3s linear;
    transform: ${({ hamburger }) => hamburger ? 'translate(100%,0)' : 'translate(0,0)'}; 
    background-color: ${({ theme }) => theme.colors.mobileNav};
    
    @media(min-width:640px){
      display: none;
  }
`;
const Nav = styled.nav`
    width:100%;
`;
const Ul = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const Btn = styled(Button)`
    margin:10px 20px;
`;

const ScrollLink = styled.button`
    background: transparent;
    border:none;
    font-size: 1rem;
    display: inline-block;
    color: #edf1fd;
    padding: 10px 20px;
    text-decoration: none;
    outline: none;   
    &:focus{
        outline: none; 
    }
`;

const MobileNav = (props) => (
    <MobileContainer hamburger={props.hamburger} height={props.height}>
        <Nav>
            <Ul>
                {props.links.map(link => link.type === 'btn' ? <li key={link.content + 'MobileLink'}><ScrollLink onClick={props.fun.bind(null, link.href)}>{link.content}</ScrollLink></li> : <li key={link.content + 'MobileLink'}><Btn href={link.href} second={true} target={link.target} rel={link.rel}>{link.content}</Btn></li>)}
            </Ul>
        </Nav>
    </MobileContainer>
)
export default MobileNav;