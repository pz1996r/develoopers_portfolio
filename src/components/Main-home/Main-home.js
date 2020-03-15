import React from 'react';
import styled from 'styled-components';
import Introduction from './Introduction';

const Main = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height:${({ height }) => { if (height !== null && height > 0) { return `${height}px` } else { return '100vh' } }};
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 90px 0 40px 0;
    @media (min-width: 340px){
        padding: 100px 0 40px 0;
    }
    /* padding: 100px 0 40px 0; */
    @media(min-width: 1024px) {
        min-height: 100vh;
        padding: 100px 0;
    }
`;

class MainHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: null,
        }
    }
    componentDidMount() {
        this.setState({
            height: window.innerHeight,
        })
    }
    render() {
        return (
            <Main height={this.state.height}>
                <Introduction delay={this.props.delay} >
                    {this.props.children}
                </Introduction>
            </Main>
        )
    }
}
export default MainHome;