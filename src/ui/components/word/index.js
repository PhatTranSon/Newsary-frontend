import styled from "styled-components";
import deleteIcon from "../../../image/delete.svg";
import { requestCollectionRemoveWord } from "../../../state/mutations/collections";
import SpeakIcon from "../../../image/speak.svg";
import { speak } from "../../../speech";
import { connect } from "react-redux";

export const WordCards = styled.div`
    margin: 1.5rem auto;
    display: flex;
    flex-flow: row wrap;
`;

const WordCardWrapper = styled.div`
    flex: 1 0 27%;
    background-color: ${props => props.theme.white};
    min-height: 10rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
    position: relative;

    & h3 {
        font-weight: normal;
        font-size: 1.5rem;
        color: ${props => props.theme.primaryColor};
        margin-bottom: 1rem;
    }

    & p {
        margin-bottom: 1rem;
    }
`;

const WordCardButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const Word = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    & button {
        margin-left: .5rem;
        background: none;
        border: none;
        cursor: pointer;

        & img {
            width: 2rem;
            height: 2rem;
            transform: translateY(-.4rem);
        }
    }
`;

const WordCard = ({ collectionId, word, remove }) => {
    return (
        <WordCardWrapper>
            <Word>
                <h3>{ word.word }</h3>
                <button onClick={() => speak(word.word)}>
                    <img src={SpeakIcon} alt="Speak"/>
                </button>
            </Word>
            <h4>Phonetic</h4>
            <p>{ word.phonetic }</p>
            <h4>Meaning</h4>
            <p>{ word.meaning }</p>
            <h4>Example</h4>
            <p>{ word.example }</p>

            <WordCardButton onClick={() => remove(collectionId, word._id)}>
                <img src={deleteIcon} alt="Delete icon"/>
            </WordCardButton>
        </WordCardWrapper>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        remove: function(collectionId, wordId) {
            dispatch(requestCollectionRemoveWord(collectionId, wordId));
        }
    };
}

export const ConnectedWordCard = connect(null, mapDispatchToProps)(WordCard);