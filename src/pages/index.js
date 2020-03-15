import React from "react"
import Layout from "../Layout/Layout";
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Navigation from '../components/Navigation/Navigation'
import MainHome from '../components/Main-home/Main-home'
import { H1, H2, H3, Desc, Btn } from '../components/Main-home/Introduction'
import Arrows from '../components/Main-home/Arrows';
import { Li, List } from '../components/Navigation/List';
import Main from '../components/Main';

const UnstyledBTN = styled.button`
    color: ${({ active, theme }) => active ? theme.colors.purple : 'black'};
    border: none;
    padding: 10px 20px;
    background-color: inherit;
    font-size: inherit;
    cursor: pointer;
    transition: .2s linear;
    &:hover{
      color: ${({ theme }) => theme.colors.purple};
    }
    &:focus{
      outline:0;
    }
`;
const IntroductionBtn = styled(Btn)`
    @media (min-width: 1024px){
        margin-top: 20px;
    }
`;

const NavValues = [
  { content: 'ENG', tag: UnstyledBTN },
  { content: 'PL', tag: UnstyledBTN }
];
const MaineHomeValues = [
  { tag: H3, content: "Hello, we're", PLcontent: "Cześć, tu" },
  { tag: H2, content: "Develoopers", PLcontent: "Develoopers" },
  { tag: H1, content: "We build web apps", PLcontent: "Tworzymy aplikacje webowe" },
  { tag: Desc, content: "We're a small 2 person team based in Wrocław specializing in designing and building websites and web applications.", PLcontent: "Jesteśmy małym dwu osobowym zespołem z Wrocławia, specjalizującym się w projektowaniu oraz tworzeniu stron oraz aplikacji webowych." },
  { tag: IntroductionBtn, content: "Get In Touch", PLcontent: "Skontaktuj się", fn: "lack of" },
];

// dodane na potrzeby gatsby build ze względu na to, że po stronie serwera nie istnieje taki obiekt jak window !!!
const windowGlobal = typeof window !== 'undefined' ? window : { localStorage: { lang: null } };

class IndexPage extends React.Component {
  state = {
    lang: windowGlobal.localStorage['lang'] || 'ENG',
  }
  changeLang = (lang) => {
    document.getElementById('content').style.display = 'none';
    this.setState({
      lang
    })
    setTimeout(() => { document.getElementById('content').style.display = 'block'; }, 1);
    localStorage['lang'] = lang;
  }

  render() {
    let delay = 100;
    let mobileDelay = 100;
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Develoopers</title>
          <link rel="canonical" href="http://develoopers.pl/" />
        </Helmet>
        <Navigation>
          <List noMobile>
            {NavValues.map((item) => {
              delay += 100;
              return (<Li key={delay} delay={delay} onClick={this.changeLang.bind(null, item.content)}><item.tag active={item.content === this.state.lang ? true : false}>{item.content}</item.tag></Li>)
            })}
          </List>
        </Navigation>
        <div id="content">
          <Main>
            <MainHome delay={[delay, mobileDelay]}>
              {MaineHomeValues.map((item) => {
                delay += 100;
                mobileDelay += 100;
                return (<item.tag key={[delay, mobileDelay]} delay={[delay, mobileDelay]}>{this.state.lang === 'ENG' ? item.content : item.PLcontent}</item.tag>)
              })}
              <Arrows>{this.state.lang === 'ENG' ? 'PORTFOLIOS' : 'PORTFOLIA'}</Arrows>
            </MainHome>
          </Main>
        </div>
      </Layout >
    );
  }
}
export default IndexPage;