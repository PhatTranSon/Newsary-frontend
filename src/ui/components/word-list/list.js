import { connect } from "react-redux";
import styled from "styled-components";
import { Loading } from "../loading";
import { useOutsideClick } from "../../../hooks/ui";
import { toggleWordListVisibility } from "../../../state/mutations/ui";
import { requestCollectionAdd } from "../../../state/mutations/collections";
import { useRef } from "react";
import { breakpoints } from "../../styling/theme";
import { EmptyList } from "./empty";
import { ConnectedCard } from "./card";

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
    overflow-y: scroll;

    ${breakpoints.sm} {
        width: 80vw;
    }
`;

const Cards = styled.ul`
    list-style-type: none;
    margin: 1rem;
    display: flex;
    flex-flow: column-reverse nowrap;
`;

const List = ({ loading, visible, words, hideList }) => {
    //Outside click
    const ref = useRef(null);
    useOutsideClick(ref, hideList);

    return (
        visible ?
        <Wrapper ref={ref}>
            {
                loading ? <Loading small/> : null
            }
            {
                (words.length === 0 && !loading) ?
                <EmptyList /> :
                <Cards>
                {
                    words.map((word, index) => <ConnectedCard key={index} word={word}/>)
                }
                </Cards>
            }
        </Wrapper> :
        null
    )
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.articlePage.wordList.loading,
        visible: state.articlePage.wordList.visible,
        words: state.articlePage.wordList.words
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        hideList: function() {
            dispatch(toggleWordListVisibility());
        }
    };
}

export const ConnectedList = connect(mapStateToProps, mapDispatchToProps)(List);