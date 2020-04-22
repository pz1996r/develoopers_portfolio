import styled from 'styled-components';
import React, { Children } from "react";
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
    overflow:scroll;
    display: flex;
    position: relative;
    @media (min-width: 640px){
        margin-right: 42px;
        flex-direction: column;
        overflow:visible;
    }
    &::after{
        content:'';
        display:block;
        width: ${({ activeWidth }) => activeWidth + 'px'};
        height: 2px;
        background-color:  ${({ theme }) => theme.colors.secondary};
        ${({ activeBorder }) => activeBorder * 120};
        position:absolute;
        bottom: 0;
        left:0;
        transform:  ${({ activeBorder, activePosition }) => `translate(${activePosition}px,0)`};
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

const JobLi = styled.li``;

const JobBtn = styled.button`
    white-space: nowrap;
    background-color:transparent;
    border: none;
    font-weight:800;
    font-size: .7rem;
    color: ${({ activeJob, jobName, theme }) => activeJob === jobName ? theme.colors.secondary : theme.colors.primaryTransparent};
    border-bottom: 2px solid  ${({ theme }) => theme.colors.primaryTransparent};
    // min-width: 120px;
    padding: 0 14px;
    height: 42px;
    outline: none;
    transition: .15s linear .1s;
    border-radius: 1px;
    cursor: pointer;
    @media (min-width: 640px){
        padding:0;
        min-width: 150px;
        border-bottom: none;
        border-left: 2px solid  ${({ theme }) => theme.colors.primaryTransparent};
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
    padding: 10px 0;
`;

const DutyList = styled.ul`
    padding-top:14px;
    font-weight:300;
    @media (min-width: 640px){
        font-weight:400;
    }
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
        this.jobsChoices = React.createRef();
        this.state = {
            active: this.props.active,
            activeIndex: 0,
            activePosition:0,
            activeWidth:0,
        };
    }
    componentDidMount(){
        const activeWidth = this.jobsChoices.current.childNodes[0].offsetWidth;
        // const positions = [...this.jobsChoices.current.childNodes].map((el)=>{prev += el.offsetWidth; return prev });
        this.setState({
            activeWidth,
        });
    }

    handleChange = (value, index,e) => {
        const activeWidth = e.target.parentElement.offsetWidth;
        const activePosition =  [...e.target.parentElement.parentElement.childNodes].reduce(function(previousValue, currentValue, i) {
            return i < index ? previousValue + currentValue.offsetWidth : previousValue;
        }, 0);
        e.target.parentElement.parentElement.scrollTo({
            left: activePosition - 80,
            behavior: 'smooth'
          });

        this.setState({
            active: value,
            activeIndex: index,
            activePosition,
            activeWidth,
        })
    }

    render() {
        return (
            <Section id="Experience">
                <SectionTitle beforeValue={this.props.title.nummber}>{this.props.title.value}</SectionTitle>
                <JobsContainer>
                    <JobsChoices activeBorder={this.state.activeIndex} activeWidth={this.state.activeWidth} activePosition = {this.state.activePosition} ref={this.jobsChoices}>
                        {this.props.work.map((job, index) => <JobLi key={job.name}><JobBtn activeJob={this.state.active} jobName={job.name} onClick={(e)=>{this.handleChange(job.name, index, e)}}>{job.name}</JobBtn></JobLi>)}
                    </JobsChoices>
                    <ResponsiveDiv>
                        <JobPresentationContainer amount={this.props.work.length} activeIndex={this.state.activeIndex}>
                            {this.props.work.map(job => <JobPresentation key={'jobPresentation' + job.name} amount={this.props.work.length}>
                                <H5>{job.jobTitle} <Link href={job.jobSiteLink}>@ {job.name}</Link></H5>
                                <H6>{job.period}</H6>
                                <DutyList>
                                    {job.dutys.map((duty, index) => <SectionLii key={(index + job.name + 'duty')} skillIMG={this.props.skillIMG}>{duty}</SectionLii>)}
                                </DutyList>

                                <ProjectsContainer>
                                    {job.projects.length > 0 && <H6>Projects: </H6>}
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