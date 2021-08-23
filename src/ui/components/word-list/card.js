import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { requestCollectionAdd } from "../../../state/mutations/collections";
import { Button } from "../button";

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

    & form {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin-bottom: .5rem;
    }

    & select {
        background-color: ${props => props.theme.white};
        border-radius: .5rem;
        border: 2px solid ${props => props.theme.primaryColorDark};
    }

    & label {
        display: block;
        color: ${props => props.theme.grayColorDark};
        align-self: center;
    }
`;

const Card = ({ word, loggedIn, collections, add }) => {
    const [collectionId, setCollectionId] = useState("");

    function onSelectChange(event) {
        setCollectionId(event.target.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        if (collectionId.length > 0) {
            //Call append word
            add(collectionId, word);
        }
    }

    return (
        <CardWrapper>
            <h3>{ word.word }</h3>
            <h4>Phonetic</h4>
            <p>{ word.phonetic }</p>
            <h4>Meaning</h4>
            <p>{ word.meaning }</p>
            <h4>Example</h4>
            <p>{ word.example }</p>
            {
                loggedIn ?
                <form onSubmit={onFormSubmit}>
                    <label>Collection</label>
                    <select onChange={onSelectChange}>
                    <option value="">None</option>
                    {
                        collections.map((collection, index) => <option key={index} value={collection._id}>{ collection.name }</option>)
                    }
                    </select>
                    <Button>Add</Button>
                </form> : 
                null
            }
        </CardWrapper>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        loggedIn: state.authentication.login.loggedIn,
        collections: state.dashboard.wordCollections.content
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        add: function(collectionId, word) {
            dispatch(requestCollectionAdd(collectionId, word));
        }
    };
}

export const ConnectedCard = connect(mapStateToProps, mapDispatchToProps)(Card);