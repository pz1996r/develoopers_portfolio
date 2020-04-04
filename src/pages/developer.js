import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet"
import Layout from "../Layout/Layout";
import Navigation from '../components/Navigation/Navigation';
import MainHome from '../components/Main-home/Main-home';
import { H1, H2, H3, Desc } from '../components/Main-home/Introduction';
import { Li, List } from '../components/Navigation/List';
import MobileNav from '../components/MobileNav/MobileNav'
import Hamburger from '../components/Navigation/Burger';
import Main from '../components/Main';
import AboutComponent from '../components/About/About';
import SectionP from '../components/SectionCommonComponents/SectionP';
import SectionLink from "../components/SectionCommonComponents/SectionLink";
import ExperienceComponent from '../components/Experience/Experience';
import WorkComponent from '../components/Work/Work';
import ContactComponent from '../components/Contact/Contact';
import FooterComponent from '../components/Footer/Footer';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { IntroductionBtn, LiLink } from '../components/PortfoliosComponent/PortfoliosComponent';

import skillIMG from "../images/skill.svg";

const NavValues = [
    { content: 'About', tag: LiLink, href: "#About", type: 'btn' },
    { content: 'Experience', tag: LiLink, href: "#Experience", type: 'btn' },
    { content: 'Work', tag: LiLink, href: "#Work", type: 'btn' },
    { content: 'Contact', tag: LiLink, href: "#Contact", type: 'btn' },
    { content: 'Resume', tag: LiLink, href: '/portfolios/Piotr%20Zachoszcz.pdf', type: 'link', target: "_blank", rel: "nofollow noopener noreferrer", contrast: false },
];

const MaineHomeValues = [
    { tag: H3, content: "Hello I'm", PLcontent: "Cześć, tu" },
    { tag: H2, content: "Piotr Zachoszcz", PLcontent: "Piotr Zachoszcz" },
    { tag: H1, content: "I build stuff for web", PLcontent: "Tworzę rozwiązania webowe" },
    { tag: Desc, content: "I'm a frontend developer based in Wroclaw, specialazing in creating stuff for web (mainly frontend, but occasionally also backend).", PLcontent: "Jestem fronend developerem z Wrocławia. Specjalizuje się w tworzeniu rozwiązań webowych (głównie po stronie fronendu, lecz czasami piszę również w node.js oraz PHP)." },
    { tag: IntroductionBtn, content: "Get In Touch", PLcontent: "Skontaktuj się", href: "mailto:pz1996r@gmail.com", contrast: false },
];
const AboutValues = {
    title: { value: 'About me', nummber: '01.' },
    skills: ['JavaScript (ES6+)', 'HTML & (S)CSS', 'REACT', 'Express', 'GATSBY', 'Node.js'],
    skillIMG: skillIMG
}
const ExperienceValues = {
    title: { value: "Where I've worked", nummber: '02.' },
    work: [
        { name: "Hokito", jobSiteLink: "https://hokito.pl/", jobTitle: "Full Stack Developer", siteLink: "https://hokito.pl/", period: "October 2018 - January	2019", dutys: ['Worked with a team of two developers and designer to build web aplication for private travel agency.', 'Developed and maintained code for client websites', 'Worked on website positioning'], projects: [{ Link: "http://pharmex.pl/", name: "Pharemx" }, { Link: "https://creamadventureclub.pl/", name: "Cream Adventure Club" }, { Link: "http://amplifica.pl/", name: "Amlifica" }, { Link: "https://claritywindows.com/", name: "Clarity Windows" }] },
        { name: "Coders Camp", jobSiteLink: "https://coderscamp.edu.pl/", jobTitle: "Camp Participant", siteLink: "https://coderscamp.edu.pl/", period: "October 2019 - Janurary 2020", dutys: ['Worked with team to develop few application (portoflio website, chess game, language game and fridge app witch are still has been developing on github).', 'Improved theoritical knowlage of node.js, react, webpack, npm, and JavaScript (asysnc, promises, fetch, spread operator, OOP etc.)'], projects: [{ Link: "https://github.com/jatanski/cc5.Chess", name: "Chess" }, { Link: "https://github.com/jatanski/zieloni", name: "LinguaChallenge" }, { Link: "https://github.com/jatanski/myFridge", name: "Fridge App" }] },
    ],
    skillIMG: skillIMG
}
const WorkValues = {
    title: { value: "Some things I've Built", nummber: '03.' },
    projects: [
        {
            githubLink: null,
            visitLink: "https://www.nuestro.pl/",
            title: "Nuestro",
            description: "Nuestro is a web app for order management in cafes, although it could also be easily found in restaurants. The application is based on an authorial QR code scanner, whitch  is used for user authorization, thanks to which it receives access to the menu and ordering options. Nuestro has also administrative panel where waiters can manage the orders.",
            technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', '.htaccess',]
        },
        {
            githubLink: null,
            visitLink: "https://develoopers.com",
            title: "Portfolio",
            description: "Develoopers is my first website created in Gatsby. During that project I have learnt a lot new stuff like Styled Components, GraphQL, Gatsby Image and that's why I don't regret choosing a new technology that was completely new to me.",
            technologies: ['Gatsby', 'Gatsby-Image', 'JSX', 'GraphQL', 'AniLink', "Styled-Components"]
        },
        {
            githubLink: "https://github.com/pz1996r/zieloni#linguachallenge",
            visitLink: null,
            title: "LinguaChallenge",
            description: "LinguaChallenge is a game whitch was developed during the CodersCamp. The main goal of this app is improving english vocabulary knowlage of the players. In the future, the application will be expanded with new functionalities and will use a different API, because these browsers do not deal well with single words.",
            technologies: ['JavaScript', 'Webpack', 'SCSS', 'Web Speech API', 'External API']
        },
        {
            githubLink: "https://github.com/pz1996r/The-shortest-path-algorithms",
            visitLink: "https://pz1996r.github.io/The-shortest-path-algorithms/",
            title: "The shortest path algorithms",
            description: "Project for my artificial inteligence class to find the shortes path. User can draw or enter points on the coordinate axis that the algorithm will analyze to find the shortest path using two algorithms.",
            technologies: ['JavaScript', 'Canvas', 'CSS', 'HTML']
        },
        {
            githubLink: "https://github.com/jatanski/myFridge",
            visitLink: null,
            title: "Fridge App",
            description: "This project is currently being improved and expanded. Fridge application is used to manage products and recipes. With this application you can indicate what you fancy, and it will suggest you what you should buy. ",
            technologies: ['React', 'Node', 'Express', 'MongoDB']
        },
        {
            githubLink: "https://www.douzupelnianeia.ed",
            visitLink: "https://www.douzupelnianeia.ed",
            title: "Tetris",
            description: "This project I created for a AI classes. The main goal is to find the shortest path through all points on the coordinate system.",
            technologies: ['JavaScript', 'Canvas', 'CSS', 'HTML']
        },
    ]
}

const ContactValues = {
    title: { value: "Get in touch", nummber: '04.' },
    paragraf: "In spite of I've still improve my programming skills by my own, I woud like to start working under the guidance of more experienced developers. I'm ready to take up my first job or internship, so If you are looking for somebody like me click button below.  ",
    button: { content: 'Get in Touch', href: "mailto:pz1996r@gmail.com" }
}

// dodane na potrzeby gatsby build ze względu na to, że po stronie serwera nie istnieje taki obiekt jak window !!!
const windowGlobal = typeof window !== 'undefined' ? window : { localStorage: { lang: null } };

class DeveloperPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hamburger: true,
            lang: windowGlobal.localStorage['lang'] || 'ENG',
            height: null,
        }
    }

    displayNav = () => {
        this.setState({
            height: window.innerHeight,
            hamburger: !this.state.hamburger,
        })
    }

    redirectSection = (href) => {
        this.displayNav();
        setTimeout(scrollTo.bind(null, href), 290);
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
            <Layout path="developer">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Develoopers Piotr Zachoszcz</title>
                    <link rel="canonical" href="https://develoopers.pl/developer" />
                </Helmet>
                <Navigation>
                    <List>
                        {NavValues.map((item) => {
                            delay += 150;
                            if (item.type === 'btn') {
                                return (<Li key={delay} delay={delay}><item.tag fun={() => scrollTo(item.href)}>{item.content}</item.tag></Li>)
                            }
                            return (<Li key={delay} delay={delay}><item.tag href={item.href} target={item.target} rel={item.rel} contrast={item.contrast ? item.contrast : null}>{item.content}</item.tag></Li>)
                        })}
                    </List>
                    <Hamburger hamburger={this.state.hamburger} hamburgerFun={this.displayNav}></Hamburger>
                </Navigation>
                <div id="content" >
                    <Main >
                        <MainHome delay={[delay, mobileDelay]}>
                            {MaineHomeValues.map((item) => {
                                delay += 150;
                                mobileDelay += 150;
                                return (<item.tag key={[delay, mobileDelay]} delay={[delay, mobileDelay]} href={item.href ? item.href : null} contrast={item.contrast ? item.contrast : null}>{this.state.lang === 'ENG' ? item.content : item.PLcontent}</item.tag>)
                            })}
                        </MainHome>
                        <AboutComponent {...AboutValues} image={this.props.data}>
                            <SectionP>Hello! my name is Piotr Zachoszcz and I'm a junior froned developer based in Wrocław. I develop thinks that looks awesome and have useful funcionality. In free time I improve my programing skills, by creacting web application and unusuall websites like this portfolio whitch you are looking at.</SectionP>
                            <SectionP>Shortly after graduating from <SectionLink href="google">WSH</SectionLink> i join to the Coders Camp organized by <SectionLink href="https://coderscrew.pl/">Coders Crew</SectionLink> in order to improve my React and Node skills. In the meantime I began studies on <SectionLink href="https://pwr.edu.pl/">PWr</SectionLink>, because I'm curiose how to create mobile apps, and i would like to know more programing languages then JavaScript and PHP. I also care about foregin languages, thats why I attend to english classes at <SectionLink href="http://wsj.edu.pl/">WSJ</SectionLink>.</SectionP>
                            <SectionP>Here are a few technologies I have been working with recently: </SectionP>
                        </AboutComponent>
                        <ExperienceComponent {...ExperienceValues} />
                        <WorkComponent {...WorkValues} />
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
    file(name:{eq:"PiotrZachoszcz"}){
        childImageSharp{
            fixed(width:240, quality:100){
                ...GatsbyImageSharpFixed_tracedSVG
            }
        }
    }
}`;

export default DeveloperPage;