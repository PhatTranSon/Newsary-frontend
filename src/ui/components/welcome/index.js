import { connect } from "react-redux";
import styled from "styled-components";
import FirstPanelImage from "../../../image/panel1.png";
import SecondPanelImage from "../../../image/panel2.png";
import ThirdPanelImage from "../../../image/panel3.png";
import { changeBannerVisibility } from "../../../state/mutations/ui";
import { Button } from "../button";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 100%);
    z-index: 1000;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    animation-name: appear;
    animation-duration: 2s;
    animation-iteration-count: 1;

    @keyframes appear {
        from {
            opacity: 0%;
        }

        to {
            opacity: 100%;
        }
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row nowrap;
`;

const Column = styled.div`
    flex: 0 0 33%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: center;

    & img {
        width: 80%;
        border-radius: 1rem;
        display: block;
        border: 5px solid ${props => props.theme.primaryColor};
    }
`;

const Title = styled.h1`
    font-size: 3rem;
    color: ${props => props.theme.primaryColor};
    font-weight: normal;
    letter-spacing: .25rem;
    margin: 1rem 0;
`;

const Number = styled.p`
    color: ${props => props.theme.primaryColor};
    font-size: 1rem;
    font-weight: bold;
    width: 4rem;
    height: 4rem;
    line-height: 3.5rem;
    border: 5px solid ${props => props.theme.primaryColor};
    border-radius: 50%;
`;

const Content = styled.p`
    margin: 1rem 0;
    font-size: 1.2rem;
`;

const WelcomeBanner = ({ visible, setVisibility }) => {
    return (
        visible ?
        <Wrapper>
            <Title>
                How to use
            </Title>

            <Row>
                <Column>
                    <Number>1</Number>
                    <Content>Open any articles</Content>
                    <img src={FirstPanelImage} alt="Open news"/>
                </Column>

                <Column>
                    <Number>2</Number>
                    <Content>Select the word and look up</Content>
                    <img src={SecondPanelImage} alt="Select word"/>
                </Column>

                <Column>
                    <Number>3</Number>
                    <Content>View its meaning in the dictionary</Content>
                    <img 
                        src={ThirdPanelImage} 
                        alt="Look word up"
                        style={{ "width": "50%" }}/>
                </Column>
            </Row>

            <Button style={{ "marginBottom": "2rem"}} onClick={() => setVisibility(false)}>Start using Newsary</Button>
        </Wrapper> :
        null
    );
}

function mapStateToProps(state, ownProps) {
    return {
        visible: state.homePage.isBannerVisible
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        setVisibility: function(visible) {
            dispatch(changeBannerVisibility(visible));
        }
    };
}

export const ConnectedWelcomeBanner = connect(mapStateToProps, mapDispatchToProps)(WelcomeBanner);