import styled from "styled-components";
import { Btn } from '../Main-home/Introduction';
import React from "react";


export const NavLinkScrollBtn = styled.button`
    padding: 0 20px;
    transition: .3s linear;
    font-size: 1rem;
    color: inherit;
    background: transparent;
    border: none;
    cursor: pointer;
    &:focus {outline:0 !important}
`;
export const Button = styled(Btn)`
    padding: 6px 10px;
    margin-right: 30px;
    margin-left: 20px;
    transition: .3s linear;
    &:focus {outline:0 !important}
    @media (min-width: 640px){
        font-weight:500;
    }
    @media (min-width: 1024px){
        margin-right: 20px;
    }
`;

export const IntroductionBtn = styled(Btn)`
    @media (min-width: 1024px){
        margin-top: 20px;
    }
`;

export const LiLink = (props) => {
    if (props.rel) {
        return (<Button href={props.href} target={props.target} rel={props.rel} contrast={props.contrast ? props.contrast : null}>{props.children}</Button>);
    }
    else {
        return (<NavLinkScrollBtn onClick={props.fun}>{props.children}</NavLinkScrollBtn>);
    }
}


