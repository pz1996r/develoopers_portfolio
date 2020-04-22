import React from "react"
import Layout from "../Layout/Layout";
import { Helmet } from "react-helmet"
import Navigation from '../components/Navigation/Navigation'
import MainHome from '../components/Main-home/Main-home'
import { H1, H2, H3, Desc } from '../components/Main-home/Introduction'
import { Li, List } from '../components/Navigation/List';
import MobileNav from '../components/MobileNav/MobileNav';
import Hamburger from '../components/Navigation/Burger';
import Main from '../components/Main';
import AboutComponent from '../components/About/About';
import SectionP from '../components/SectionCommonComponents/SectionP';
import SectionLink from "../components/SectionCommonComponents/SectionLink";
import scrollTo from 'gatsby-plugin-smoothscroll';
import { IntroductionBtn, LiLink } from '../components/PortfoliosComponent/PortfoliosComponent';
import ContactComponent from '../components/Contact/Contact';
import FooterComponent from '../components/Footer/Footer';
import ExperienceComponent from '../components/Experience/Experience';

import skillIMG from "../images/pinkskill.svg";

const NavValues = [
    { content: 'About', tag: LiLink, href: "#About", type: 'btn' },
    { content: 'Experience', tag: LiLink, href: "#Experience", type: 'btn' },
    { content: 'Work', tag: LiLink, href: "#Work", type: 'btn' },
    { content: 'Contact', tag: LiLink, href: "#Contact", type: 'btn' },
    { content: 'Resume', tag: LiLink, href: '/portfolios/AnnaHrynchuk.pdf', type: 'link', target: "_blank", rel: "nofollow noopener noreferrer", contrast: 'primary' },
];
const MaineHomeValues = [
    { tag: H3, content: "Hello I'm", PLcontent: "Cześć, tu" },
    { tag: H2, content: "Anna Hrynchuk", PLcontent: "Anna Green" },
    { tag: H1, content: "Create a website design", PLcontent: "Projektuję aplikacje" },
    { tag: Desc, content: "I am a web designer based in Wroclaw, working with the interface of websites and their usability",
    PLcontent: "Jestem designerem z Wrocławia." },
    { tag: IntroductionBtn, content: "Get In Touch", PLcontent: "Skontaktuj się", fn: "lack of", contrast: 'primary' },
];
const AboutValues = {
    title: { value: 'About me', nummber: '01.' },
    skills: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Figma', 'HTML', 'CSS'],
    skillIMG: skillIMG
}
const ExperienceValues = {
    active:'CodersCrew',
    title: { value: "Where I've worked", nummber: '02.' },
    work: [
        { name: "CodersCrew", jobSiteLink: "https://coderscrew.pl/", jobTitle: "UX/UI Designer", siteLink: "https://coderscrew.pl/", period: "February 2020 - now", dutys: ['Work in a team of UX/UI designers and developers creating websites', 'Create additional graphics for other projects', 'Participate in training and workshops conducted by the association' , 'Use such tools as: Jira, Confluence, Slack'], projects: [] },
        { name: "CodersCamp", jobSiteLink: "https://coderscamp.edu.pl/", jobTitle: "Camp Participant", siteLink: "https://coderscamp.edu.pl/", period: "October 2019 - January 2020", dutys: ['Worked with team to develop few applications (portfolio website, TODO list, escape room).', 'Learning new programming languages'], projects: [] },
        { name: "Klub Innowatora" , jobSiteLink: "https://www.facebook.com/otwarta12/?ref=bookmarks", jobTitle: "Intern", siteLink: "https://www.facebook.com/otwarta12/?ref=bookmarks", period: "December 2019 - now", dutys: ['Help in organizing events', 'Conducting a conversation with customers', 'Team management', 'Promoting the page on Facebook'], projects: [] },
    ],
    skillIMG: skillIMG
}
const ContactValues = {
    title: { value: "Get in touch", nummber: '04.' },
    paragraf: "In spite of I've still improve my programming skills by my own, I would like to start working under the guidance of more experienced developers. I'm ready to take up my first job or internship, so If you are looking for somebody like me click button below.  ",
    button: { content: 'Get in Touch', href: "mailto:annagreenv14@gmail.com", contrast: 'primary' }
}

const windowGlobal = typeof window !== 'undefined' ? window : { localStorage: { lang: null } };
class DeveloperPage extends React.Component {
    state = {
        hamburger: true,
        lang: windowGlobal.localStorage['lang'] || 'ENG',
        height: null,
    }


    displayNav = () => {
        this.setState({
            height: window.innerHeight,
            hamburger: !this.state.hamburger,
        })
    }
    redirectSection = (href) => {
        if (document.querySelector(href)) {
            this.displayNav();
            setTimeout(scrollTo.bind(null, href), 290);
        }
        else {
            console.log('programisto element do którego chcesz zeskrollować stronę nie istnieje.');
        }
    }

    scrollFun = e => {
        if (!this.state.hamburger) {
            this.setState({
                hamburger: true,
            })
        }
    }

    componentDidMount() {
        this.setState({
            height: window.innerHeight,
        })
        window.addEventListener('scroll', this.scrollFun);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFun);
    }
    render() {
        let delay = 100;
        let mobileDelay = 100;
        return (
            <Layout path="designer">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Develoopers Anna Green</title>
                    <link rel="canonical" href="https://develoopers.pl/designer" />
                </Helmet>
                <Navigation>
                    <List>
                        {NavValues.map((item) => {
                            delay += 100;
                            if (item.type === 'btn') {
                                return (<Li key={delay} delay={delay}><item.tag fun={() => scrollTo(item.href)}>{item.content}</item.tag></Li>)
                            }
                            return (<Li key={delay} delay={delay}><item.tag href={item.href} target={item.target} rel={item.rel} contrast={item.contrast ? item.contrast : null}>{item.content}</item.tag></Li>)
                        })}
                    </List>
                    <Hamburger hamburger={this.state.hamburger} hamburgerFun={this.displayNav}></Hamburger>
                </Navigation>
                <div id="content">
                    <Main>
                        <MainHome delay={[delay, mobileDelay]}>
                            {MaineHomeValues.map((item) => {
                                delay += 100;
                                mobileDelay += 100;
                                return (<item.tag key={[delay, mobileDelay]} contrast={item.contrast ? item.contrast : null} delay={[delay, mobileDelay]}>{this.state.lang === 'ENG' ? item.content : item.PLcontent}</item.tag>)
                            })}
                        </MainHome>
                        <AboutComponent {...AboutValues} image={this.props.data}>
                            <SectionP>I like to experiment, I have a sense of style and my strength is to look at the world from a different perspective - creative and innovative, which helps me in my work.</SectionP>
                            <SectionP>My story has started when I first took part in programming courses, learning HTML and CSS from <SectionLink href="google">Udemy</SectionLink>. Later I participated in the <SectionLink href="https://coderscrew.pl/">CodersCamp</SectionLink> course and after its completion, I joined the <SectionLink href="https://pwr.edu.pl/">CodersCrew</SectionLink> team where I work as a UX / UI designer. I am currently learning new programming languages for getting a better understanding of programming. In my spare time, I study foreign languages, draw or read books. 
                            </SectionP>
                            <SectionP>I do not stagnate, I am constantly developing and expanding my skills to be able to create better projects and become better day by day at programing.</SectionP>
                            <SectionP>Here are a few technologies I have been working with recently: </SectionP>
                        </AboutComponent>
                        <ExperienceComponent {...ExperienceValues} />
                        {/* jednego brakuje na razie  */}
                        <ContactComponent {...ContactValues} />
                        <FooterComponent />
                    </Main>
                    <MobileNav hamburger={this.state.hamburger} links={NavValues} height={this.state.height} fun={this.redirectSection}></MobileNav>
                </div>
            </Layout >
        )
    }
}

export const query = graphql`
{
    file(name:{eq:"AniaHrynchuk"}){
        childImageSharp{
            fixed(width:240, quality:100 ){
                ...GatsbyImageSharpFixed_tracedSVG
            }
        }
    }
}`;

export default DeveloperPage;