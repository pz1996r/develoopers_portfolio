import styled from 'styled-components';
import React from "react";
import SectionTitle from "../SectionCommonComponents/SectionTitle";
import Section from "../SectionCommonComponents/SectionContainer";
import { Btn } from '../Main-home/Introduction';

const ContactSection = styled(Section)`
    text-align:center;
    margin-bottom:64px;
`;
const ContactTitle = styled(SectionTitle)`
    text-align:left;
`;

const Button = styled(Btn)`
    margin: 0 auto;
    margin-right:auto !important;
    @media (min-width: 1024px){
        margin: 0 auto;
        margin-right:auto;
    }
`;

const ContactP = styled.p`
    max-width:530px;
    margin: 50px auto;
    text-align: center;
    font-weight:300;
    @media (min-width: 640px){
        font-weight:400;
    }
`;

const ContactComponent = ({ title, paragraf, button }) => (
    <ContactSection id="Contact">
        <ContactTitle beforeValue={title.nummber}>{title.value}</ContactTitle>
        <ContactP>{paragraf}</ContactP>
        <Button href={button.href ? button.href : null}>{button.content}</Button>
    </ContactSection>
);

export default ContactComponent;