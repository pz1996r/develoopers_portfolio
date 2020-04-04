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
    { tag: H2, content: "Anna Green", PLcontent: "Anna Green" },
    { tag: H1, content: "I design apps", PLcontent: "Projektuję aplikacje" },
    { tag: Desc, content: "I'm a designer based in Wroclaw", PLcontent: "Jestem designerem z Wrocławia." },
    { tag: IntroductionBtn, content: "Get In Touch", PLcontent: "Skontaktuj się", fn: "lack of", contrast: 'primary' },
];
const AboutValues = {
    title: { value: 'About me', nummber: '01.' },
    skills: ['JavaScript (ES6+)', 'HTML & (S)CSS', 'REACT', 'Express', 'GATSBY', 'Node.js'],
    skillIMG: skillIMG
}
const ExperienceValues = {
    title: { value: "Where I've worked", nummber: '02.' },
    work: [
        { name: "Hokito", jobSiteLink: "https://hokito.pl/", jobTitle: "Full Stack Developer", siteLink: "https://hokito.pl/", period: "October 2018 - January	2019", dutys: ['Worked with a team of two developers and designer to build web aplication for private travel agency.', 'Developed and maintained code for client websites', 'Worked on website positioning'], projects: [] },
        { name: "Coders Camp", jobSiteLink: "https://coderscamp.edu.pl/", jobTitle: "Camp Participant", siteLink: "https://coderscamp.edu.pl/", period: "October 2019 - Janurary 2020", dutys: ['Worked with team to develop few application (portoflio website, chess game, language game and fridge app witch are still has been developing on github).', 'Improved theoritical knowlage of node.js, react, webpack, npm, and JavaScript (asysnc, promises, fetch, spread operator, OOP etc.)'], projects: [] },
    ],
    skillIMG: skillIMG
}
const ContactValues = {
    title: { value: "Get in touch", nummber: '04.' },
    paragraf: "In spite of I've still improve my programming skills by my own, I woud like to start working under the guidance of more experienced developers. I'm ready to take up my first job or internship, so If you are looking for somebody like me click button below.  ",
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
                            <SectionP>Hello! my name is Piotr Zachoszcz and I'm a junior froned developer based in Wrocław. I develop thinks that looks awesome and have useful funcionality. In free time I improve my programing skills, by creacting web application and unusuall websites like this portfolio whitch you are looking at.</SectionP>
                            <SectionP>Shortly after graduating from <SectionLink href="google">WSH</SectionLink> i join to the Coders Camp organized by <SectionLink href="https://coderscrew.pl/">Coders Crew</SectionLink> in order to improve my React and Node skills. In the meantime I began studies on <SectionLink href="https://pwr.edu.pl/">PWr</SectionLink>, because I'm curiose how to create mobile apps, and i would like to know more programing languages then JavaScript and PHP. I also care about foregin languages, thats why I attend to english classes at <SectionLink href="http://wsj.edu.pl/">WSJ</SectionLink>.</SectionP>
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
    file(name:{eq:"AnnaHrynchuk"}){
        childImageSharp{
            fixed(width:240, quality:100 ){
                ...GatsbyImageSharpFixed_tracedSVG
            }
        }
    }
}`;

export default DeveloperPage;