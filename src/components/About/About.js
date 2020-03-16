import styled from 'styled-components';
import React from "react";
import Img from "gatsby-image";
import SkillIMG from "../../images/skill.svg";
import SectionTitle from "../SectionCommonComponents/SectionTitle";
import SectionLi from "../SectionCommonComponents/SectionLi";
import Section from "../SectionCommonComponents/SectionContainer";

// const Section = styled.section`
//     width: 100%;
//     max-width: 820px;
//     margin: 0 auto;
// `;

const FlexContainer = styled.div`
    display: flex;
    flex-direction:column;
    @media (min-width: 640px){
       flex-direction:row;
    }
`;

const AboutContainer = styled.div`
    font-weight:300;
    @media (min-width: 640px){
        font-weight:400;
    }
`;


const ParagrafContainer = styled.div`
    @media (min-width: 640px){
        margin-right: 60px;
    }
`;


const SkillsContainer = styled.ul``;

const Skill = styled(SectionLi)`
    width: 50%;
    vertical-align: top;
`;

const Image = styled(Img)`
    display: block;
    margin: 34px auto 0 auto;
    flex-shrink:0;
    @media (min-width: 640px){
        margin:9px 0 0 0;
    }
`;

const AboutComponent = (props) => (
    <Section id="About">
        <SectionTitle beforeValue={props.title.nummber}>{props.title.value}</SectionTitle>
        <FlexContainer>
            <AboutContainer>
                <ParagrafContainer>
                    {props.children}
                </ParagrafContainer>
                <SkillsContainer>
                    {props.skills.map((skill => (<Skill key={skill} skillIMG={SkillIMG}>{skill}</Skill>)))}
                </SkillsContainer>
            </AboutContainer>
            <Image fixed={props.image.file.childImageSharp.fixed} />
        </FlexContainer>
    </Section>
)
export default AboutComponent;








