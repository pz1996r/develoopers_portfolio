import styled from 'styled-components';
import React from "react";
import FolderIMG from "../../images/folder.svg";
import GitHubIMG from "../../images/github_gray.svg";
import ActiveGitHubIMG from "../../images/github.svg";
import LinkIMG from "../../images/link_gray.svg";
import ActiveLinkIMG from "../../images/link.svg";
import SectionTitle from "../SectionCommonComponents/SectionTitle";
import Section from "../SectionCommonComponents/SectionContainer";

const Project = styled.div`
    width:100%;
    padding:30px;
    /* background: #282569; */
    background: ${({ theme }) => { console.log('..x..', Boolean(theme.colors.tertiary)); const color = theme.colors.tertiary ? theme.colors.tertiary : 'green'; return color }};
    border-radius: 6px;
    margin-bottom: 24px;
    display:flex;
    flex-direction:column;
    @media (min-width: 640px){
        width:49%;
    }
    @media (min-width: 1024px){
        width:32%;
}
`;
const Project2 = styled.div`
    width:100%;
    padding:30px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondaryy};
`;
const IconsWrapper = styled.div`
    display:flex;
    padding-bottom:30px;
`;
const FolderImage = styled.img`
    width: 44px;
    height: 44px;
    margin-right: auto;
`;
const Icon = styled.a`
    margin-left: 14px;
    position:relative;
    display:inline-block;
    width: 22px;
    height: 22px;
    background-size: 22px 22px;
    background-image: ${({ image }) => `url(${image})`};
    background-repeat: no-repeat;
    &::before{
            content: '';
            display:inline-block;
            background-image: ${({ activeImage }) => `url(${activeImage})`}; 
            width: 22px;
            height: 22px;
            background-size: 22px 22px;
            opacity:0;
            transition: .25s linear;
            background-repeat: no-repeat;
        }
    &:hover{
        &::before{
            opacity:1;
        }
    }
`;
const ProjectTitle = styled.h5`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.white};
`;

const ProjectDescription = styled.p`
    padding: 18px 0px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;
`;

const Technologies = styled.ul`
    margin-top: auto;
    padding: 8px 0 0 0;
`;
const Technology = styled.li`
    display:inline-block;
    color: ${({ theme }) => theme.colors.primaryTransparent};
    font-weight: .8rem;
    padding: 3px 6px;
    font-weight: 300;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const WorkComponent = ({ title, projects }) => (
    <Section id="Work">
        <SectionTitle beforeValue={title.nummber}>{title.value}</SectionTitle>
        <FlexContainer>
            {projects.map(project => <Project key={project.title}>
                <IconsWrapper>
                    <FolderImage src={FolderIMG} alt="Folder ICON" />
                    {project.githubLink ? <Icon href={project.githubLink} image={GitHubIMG} activeImage={ActiveGitHubIMG}></Icon> : null}
                    {project.visitLink ? <Icon href={project.visitLink} image={LinkIMG} activeImage={ActiveLinkIMG}></Icon> : null}
                </IconsWrapper>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <Technologies>{project.technologies.map(technology => <Technology key={technology + project.title}>{technology}</Technology>)}</Technologies>
            </Project>)}
            <Project2>dawwa</Project2>
        </FlexContainer>
    </Section>
);
export default WorkComponent;