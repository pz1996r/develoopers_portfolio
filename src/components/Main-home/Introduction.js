import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../Btn';

// responsywność css
const responsiveSmallText = css`
font-size: .9rem;
@media (min-width: 340px){
    font-size: 1rem;
}
`;

const responsiveBigText = css`
    font-size: 1.4rem;

@media (min-width: 340px){
    font-size: 1.8rem;
}
@media (min-width: 640px){
    font-size: 3.5rem;
}
@media (min-width: 1024px){
    font-size: 4rem;
}
`;

const anim = css`
    animation: show 250ms forwards ${({ delay }) => delay ? `${delay[1]}ms` : null};

    @media (min-width: 640px){
        animation: show 250ms forwards ${({ delay }) => delay ? `${delay[0]}ms` : null};
    }

@keyframes show{
    0%{
        transform: translate(0,20px);
        opacity: 0; 
    }
    20%{
        transform: translate(0,20px);
        opacity: 0.2;  
    }
    80%{
        opacity: 1;  
    }
    100%{
        transform: translate(0,0);
        opacity: 1;
    }
}`;

const Intro = styled.div`
    opacity: 0;
    position: relative;
    margin: auto 0;
    animation: opacityContaier 50ms forwards ${({ delay }) => delay ? `${delay[1]}ms` : null};

    @media (min-width: 640px){
        animation: show 250ms forwards ${({ delay }) => delay ? `${delay[0]}ms` : null};
    }

    @keyframes opacityContaier{
    0%{
        opacity: 0; 
    }
    100%{
        opacity: 1;
    }
}
`;

export const H3 = styled.h3`
    ${responsiveSmallText};
    ${anim};
    margin-bottom: 10px;
    position: relative;
    left: 40px;
    color: ${({ theme }) => theme.colors.mainGray};
    display: inline-block;
    transform: translate(0,20px);
    opacity: 0;
    font-weight:400;
    &::before{
        position: absolute;
        top: 10px;
        left: -48px;
        width: 35px;
        height: 2px;
        background: ${({ theme }) => theme.colors.purple};
        content: "";
    }

    @media (min-width: 1024px){
        margin-bottom: 20px;
    }
`;

export const H2 = styled.h2`
    ${anim};
    ${responsiveBigText};
    margin-bottom: 5px;
    transition-delay: 2s;
    font-weight:600;
    color: ${({ theme }) => theme.colors.purple};
    transform: translate(0,20px);
    opacity: 0.05;

    @media (min-width: 1024px){
        margin-bottom: 20px;
    }
`;

export const H1 = styled.h1`
    ${anim};
    ${responsiveBigText};
    margin-bottom: 20px;
    font-weight:600;
    color: ${({ theme }) => theme.colors.mainGray};
    transform: translate(0,20px);
    opacity: 0.05;

    @media (min-width: 1024px){
        margin-bottom: 20px;
    }
    
`;

export const Desc = styled.div`
    ${responsiveSmallText};
    ${anim};
    margin-bottom: 20px;
    max-width: 500px;
    font-weight:300;
    transform: translate(0,20px);
    opacity: 0;

    @media (min-width: 1024px){
        margin-top: 40px;
    }
`;

export const Btn = styled(Button)`
    ${responsiveSmallText};
    ${anim};
    transform: translate(0,20px);
    opacity: 0; 
`;

const Introduction = (props) => (
    <Intro delay={props.delay}>
        {props.children}
    </Intro>
)
export default Introduction;