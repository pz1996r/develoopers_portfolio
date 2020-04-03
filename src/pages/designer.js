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
import scrollTo from 'gatsby-plugin-smoothscroll';
import { IntroductionBtn, LiLink } from '../components/PortfoliosComponent/PortfoliosComponent';



// const NavValues = [
//     { content: 'About', tag: A },
//     { content: 'Experience', tag: A },
//     { content: 'Work', tag: A },
//     { content: 'Contact', tag: A },
//     { content: 'Resume', tag: Button },
// ];
const NavValues = [
    { content: 'About', tag: LiLink, href: "#About", type: 'btn' },
    { content: 'Experience', tag: LiLink, href: "#Experience", type: 'btn' },
    { content: 'Work', tag: LiLink, href: "#Work", type: 'btn' },
    { content: 'Contact', tag: LiLink, href: "#Contact", type: 'btn' },
    { content: 'Resume', tag: LiLink, href: '/portfolios/AnnaHrynchuk.pdf', type: 'link', target: "_blank", rel: "nofollow noopener noreferrer" },
];
const MaineHomeValues = [
    { tag: H3, content: "Hello I'm", PLcontent: "Cześć, tu" },
    { tag: H2, content: "Anna Green", PLcontent: "Anna Green" },
    { tag: H1, content: "I design apps", PLcontent: "Projektuję aplikacje" },
    { tag: Desc, content: "I'm a designer based in Wroclaw", PLcontent: "Jestem designerem z Wrocławia." },
    { tag: IntroductionBtn, content: "Get In Touch", PLcontent: "Skontaktuj się", fn: "lack of" },
];

const windowGlobal = typeof window !== 'undefined' ? window : { localStorage: { lang: null } };
class DeveloperPage extends React.Component {
    state = {
        hamburger: true,
        lang: windowGlobal.localStorage['lang'] || 'ENG',
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
                            return (<Li key={delay} delay={delay}><item.tag href={item.href} target={item.target} rel={item.rel}>{item.content}</item.tag></Li>)
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
                                return (<item.tag key={[delay, mobileDelay]} delay={[delay, mobileDelay]}>{this.state.lang === 'ENG' ? item.content : item.PLcontent}</item.tag>)
                            })}
                        </MainHome>
                    </Main>
                    <MobileNav hamburger={this.state.hamburger} links={NavValues} fun={this.redirectSection}></MobileNav>
                </div>
            </Layout >
        )
    }
}

export default DeveloperPage;