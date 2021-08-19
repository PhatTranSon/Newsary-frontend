import styled from "styled-components";
import menuImage from "../../../image/menu.svg";
import { toggleWordListVisibility } from "../../../state/mutations";
import { connect } from "react-redux";

const Wrapper = styled.button`
    position: fixed;
    left: 2rem;
    bottom: 2rem;
    border-radius: 50%;
    padding: 0.75rem;
    cursor: pointer;
    background-color: ${props => props.theme.primaryColor};
    border: none;
    z-index: 10;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: ${props => props.theme.primaryColorDark};
    }
`;

const Image = styled.img`

`;

const WordListButton = ({ openWordList }) => {
    return (
        <Wrapper onClick={openWordList}>
            <Image src={menuImage} alt="word list button"/>
        </Wrapper>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        openWordList: function() {
            dispatch(toggleWordListVisibility());
        }
    }
}

export const ConnectedWordListButton = connect(null, mapDispatchToProps)(WordListButton);