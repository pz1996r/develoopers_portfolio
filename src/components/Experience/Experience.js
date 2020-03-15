import styled from 'styled-components';
import React from "react";
import SkillIMG from "../../images/skill.svg";
import SectionTitle from "../SectionCommonComponents/SectionTitle";
import SectionLi from "../SectionCommonComponents/SectionLi";
import Section from "../SectionCommonComponents/SectionContainer";
import Link from "../SectionCommonComponents/SectionLink";

const SectionLii = styled(SectionLi)`
    display: block;
`;

const JobsContainer = styled.div`
    overflow:hidden;
    @media (min-width: 640px){
        display:flex;
    }
`;
const JobsChoices = styled.ul`
    display: flex;
    position: relative;
    @media (min-width: 640px){
        margin-right: 42px;
        flex-direction: column;
    }
    &::after{
        content:'';
        display:block;
        width: 120px;
        height: 2px;
        background-color:  ${({ theme }) => theme.colors.purple};
        ${({ activeBorder }) => activeBorder * 120};
        position:absolute;
        bottom: 0;
        left:0;
        transform:  ${({ activeBorder }) => `translate(${activeBorder * 120}px,0)`};
        transition: transform .15s linear;
        border-radius: 2px;
        @media (min-width: 640px){
            width: 2px;
            height: 42px;
            bottom: inherit;
            left:0;
            top:0;
            transform:  ${({ activeBorder }) => `translate(0,${activeBorder * 42}px)`};
        }
    }
`;
const JobLi = styled.li`

`;
const JobBtn = styled.button`
    background-color:transparent;
    border: none;
    color: ${({ activeJob, jobName, theme }) => activeJob === jobName ? theme.colors.purple : theme.colors.lightGray};
    border-bottom: 2px solid  ${({ theme }) => theme.colors.lightGray};
    min-width: 120px;
    height: 42px;
    outline: none;
    transition: .15s linear .1s;
    border-radius: 1px;
    cursor: pointer;
    @media (min-width: 640px){
        border-bottom: none;
        border-left: 2px solid  ${({ theme }) => theme.colors.lightGray};
    }
`;

const JobPresentationContainer = styled.div`
    width: ${({ amount }) => amount * 100 + '%'};
    transform: ${({ activeIndex, amount }) => `translate(-${(activeIndex * 100 / amount)}%,0)`};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const JobPresentation = styled.div`
    width:100%;
    display:inline-block;
    width: ${({ amount }) => 100 / amount + '%'};

`;

const H5 = styled.h5`
    padding-top:24px;
    font-size: 1.1rem;
`;
const H6 = styled.h6`
    font-size: .8rem;
    font-weight:200;
    /* padding-top:10px; */
    padding: 10px 0;
`;
const DutyList = styled.ul`
    padding-top:14px;
`;
const ProjectLink = styled(Link)`
    white-space: nowrap;
`;
const ProjectsContainer = styled.div`
    padding-top: 20px;
`;
const ProjectKey = styled.div`
    display:inline-block;
`;
const ResponsiveDiv = styled.div`
    width: 100%;
    overflow: hidden;
`;
class ExperienceComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Hokito',
            activeIndex: 0,
        };
    }

    handleChange = (value, index) => {
        this.setState({
            active: value,
            activeIndex: index,
        })
    }

    render() {
        return (
            <Section id="Experience">
                <SectionTitle beforeValue={this.props.title.nummber}>{this.props.title.value}</SectionTitle>
                <JobsContainer>
                    <JobsChoices activeBorder={this.state.activeIndex}>
                        {this.props.work.map((job, index) => <JobLi key={job.name}><JobBtn activeJob={this.state.active} jobName={job.name} onClick={this.handleChange.bind(null, job.name, index)}>{job.name}</JobBtn></JobLi>)}
                    </JobsChoices>
                    <ResponsiveDiv>
                        <JobPresentationContainer amount={this.props.work.length} activeIndex={this.state.activeIndex}>
                            {this.props.work.map(job => <JobPresentation key={'jobPresentation' + job.name} amount={this.props.work.length}>
                                <H5>{job.jobTitle} <Link href={job.jobSiteLink}>@ {job.name}</Link></H5>
                                <H6>{job.period}</H6>
                                <DutyList>
                                    {job.dutys.map((duty, index) => <SectionLii key={(index + job.name + 'duty')} skillIMG={SkillIMG}>{duty}</SectionLii>)}
                                </DutyList>

                                <ProjectsContainer>
                                    <H6>Projects: </H6>
                                    {job.projects.map(project => <ProjectKey key={(project.Link + project.name + 'proj')}><ProjectLink href={project.Link} >[{project.name}]  </ProjectLink>  </ProjectKey>)}
                                </ProjectsContainer>
                            </JobPresentation>)}
                        </JobPresentationContainer>
                    </ResponsiveDiv>
                </JobsContainer>
            </Section >
        )
    }
}

export default ExperienceComponent