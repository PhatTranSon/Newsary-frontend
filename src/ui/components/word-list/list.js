import { connect } from "react-redux";
import styled from "styled-components";
import { Loading } from "../loading";
import { useOutsideClick } from "../../../hooks/ui";
import { toggleWordListVisibility } from "../../../state/mutations";
import { useRef } from "react";
import { breakpoints } from "../../styling/theme";
import { EmptyList } from "./empty";

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

const CardWrapper = styled.li`
    border-bottom: 2px dashed ${props => props.theme.gray};

    & h3 {
        color: ${props => props.theme.primaryColor};
        margin: 0.25rem 0;
        font-weight: 300;
        font-size: 1.5rem;
    }

    & p {
        font-weight: 300;
        margin-bottom: 1rem;
    }
`;

const Card = ({ word }) => {
    return (
        <CardWrapper>
            <h3>{ word.word }</h3>
            <h4>Phonetic</h4>
            <p>{ word.phonetic }</p>
            <h4>Meaning</h4>
            <p>{ word.meaning }</p>
            <h4>Example</h4>
            <p>{ word.example }</p>
        </CardWrapper>
    )
}

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
                    words.map((word, index) => <Card key={index} word={word}/>)
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