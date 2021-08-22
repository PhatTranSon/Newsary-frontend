import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import editIcon from "../../image/edit.svg";
import { requestCollectionUpdate } from "../../state/mutations/collections";

//Collection name and edit
const CollectionNameForm = styled.form`
    display: flex;
    flex-flow: row wrap;
`;

const CollectionNameInput = styled.input`
    display: inline-block;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};
    padding-bottom: 1rem;
    margin-right: 1rem;
    font-family: inherit;
    font-size: 2rem;
    font-weight: bold;
    max-width: 40%;

    &:focus {
        outline: 2px solid ${props => props.theme.primaryColor};
    }
`;

const CollectionNameEditButton = styled.button`
    display: block;
    cursor: pointer;
    background-color: transparent;
    border: none;

    & img {
        width: 2rem;
        height: 2rem;
    }
`;

//Collection words


const Collection = ({ collection, update }) => {
    const [name, setName] = useState(collection.name);

    function onNameChange(event) {
        setName(event.target.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        if (name) {
            update(collection._id, name);
        }
    }

    return (
        <CollectionNameForm onSubmit={onFormSubmit}>
            <CollectionNameInput 
                type="text" name="name" 
                value={name} onChange={onNameChange}></CollectionNameInput>
            <CollectionNameEditButton>
                <img src={editIcon} alt="Edit icon"/>
            </CollectionNameEditButton>
        </CollectionNameForm>
    )
}

function mapStateToProps(state, ownProps) {
    //Get collection id
    const { collectionId } = ownProps.match.params;

    return {
        collection: state.dashboard.wordCollections.content.find(
            collection => collection._id === collectionId
        )
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        update: function(collectionId, name) {
            dispatch(requestCollectionUpdate(collectionId, name));
        }
    }
}

export const ConnectedCollection = connect(mapStateToProps, mapDispatchToProps)(Collection);