import React from 'react';
import styled, { css } from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink"


const defaultArrowStyling = css`
    display: flex;
    align-items: center;
    width: 140px;
    height: 40px;
    cursor: pointer;
`;

const DefaultShaftStyling = css`
    transition: .3s ease-out;
    display:block;
    content:"";
    width: 70%;
    height: 0;
    border-bottom: thin solid ${({ theme }) => theme.colors.secondary};
    transform: translateY(-50%);
`;

const DefaultPointStyling = css`
    display:block;
    content:"";
    width: 10px;
    height:10px;
    border-style:solid;
    border-color:${({ theme }) => theme.colors.secondary};
`;

const ArrowLeft = styled(AniLink)`
    ${defaultArrowStyling};
    justify-content: flex-end;
    &::after{
        ${DefaultShaftStyling};

    }
    &::before{
        ${DefaultPointStyling};
        border-width: 0 0 thin thin;
        transform: translate(12px,0px) rotate(45deg);
    }
    &:hover::after{
         width:99%;
    }

    & + span::after{
        transform:translateX(0%);
        opacity:0;
    }
    &:hover + span::after{
        transform: translate(-50%, 0);
        opacity:1;
        transition: .3s ease-out;
        content: "</developer>";
    }
`;
const ArrowRight = styled(AniLink)`
    ${defaultArrowStyling};
    justify-content:flex-start;

    &::before{
        ${DefaultShaftStyling};
    }

    &::after{
        ${DefaultPointStyling};
        border-width: thin thin 0 0;
        transform: translate(-12px,0px) rotate(45deg);
    }
    &:hover::before{
         width:99%;
    }
    & + span::after{
        transform:translateX(-90%);
        opacity:0;
    }
    &:hover + span::after{
        transform: translate(-50%, 0);
        opacity:1;
        transition: .3s ease-out;
        content: "#designer";
    }
`



const Container = styled.div`
    /*animacja strzałek  */
    animation: arrows 350ms forwards 1400ms;
    width: 250px;
    opacity: 0;
    margin: 20px auto 0 auto;
    color: rgba(10, 25, 47, 0.8);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 340px) {
        margin: 46px auto 0 auto;
    @keyframes arrows{
            0% {
                width:250px;
                transform: translate(0, 80px);
                opacity: 0;
            }
            99%{
                width: 460px;
            }
            100% {
                width: 100%;
                opacity: 1;
            }   
        }
    }
  
    width: 100%;
    @keyframes arrows{
        0% {
            transform: translate(0, 80px);
            opacity: 0;
        }
        100% {
            width: 100%;
            opacity: 1;
        }   
    }
    
`;

const P = styled.p`
    font-size: 1rem;
    margin: 0 10px;

    @media (min-width: 640px){
        font-size: 1.25rem;
        margin: 0 20px;
        font-weight: 500;
    }
`;

const Choice = styled.span`
 &::after{
    content: "";
    display: block;
    color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translate(-50%, 0);
}
`;

const Arrows = (props) => (
    <Container>
        <ArrowLeft cover direction="left" bg="rebeccapurple" to={`/developer`}></ArrowLeft>
        <Choice></Choice>
        <P>{props.children}</P>
        <ArrowRight cover direction="right" bg="rebeccapurple" to={`/designer`}></ArrowRight>
        <Choice></Choice>
    </Container>
)
export default Arrows;