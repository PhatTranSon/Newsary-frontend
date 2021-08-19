import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 25vw;
    height: 70%;
    position: fixed;
    left: 2rem;
    bottom: 6rem;
    background-color: ${props => props.theme.white};
    z-index: 15;
    border-radius: 0.5rem;
    
    box-shadow: 0 0 1.5rem ${props => props.theme.gray};
`;

const List = ({ visible }) => {
    return (
        visible ?
        <Wrapper>
        </Wrapper> :
        null
    )
};

function mapStateToProps(state, ownProps) {
    return {
        visible: state.articlePage.wordList.visible
    };
}

export const ConnectedList = connect(mapStateToProps)(List);