import styled from "styled-components";
import { changeErrorVisibility } from "../../../state/mutations";
import { connect } from "react-redux";
import clearIcon from "../../../image/clear.svg";


const Wrapper = styled.div`
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.white};
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem;
    border-radius: 0.5rem;
    z-index: 15;
    display: flex;
    flex-flow: row nowrap;
    box-shadow: 0 0 2rem ${props => props.theme.grayColorDark};
`; 

const Icon = styled.img`
    cursor: pointer;
    display: block;
`;

const ErrorMessage = ({ content, visible, hide }) => {
    return (
        visible ?
        <Wrapper>
        <p>
        {
            content
        }
        </p>
        <Icon
            onClick={hide} src={clearIcon} alt="Clear error message icon"/>
        </Wrapper> :
        null
    );
}

function mapStateToProps(state, ownProps) {
    return {
        content: state.error.content,
        visible: state.error.visible
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        hide: function() {
            dispatch(changeErrorVisibility(false));
        }
    };
}

export const ConnectedErrorMessage = connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);