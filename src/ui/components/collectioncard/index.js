import styled from "styled-components";
import { DeleteIcon } from "../icon/delete";
import { theme } from "../../styling/theme";
import { useState } from "react";
import { requestCollectionDelete } from "../../../state/mutations";
import { connect } from "react-redux";

export const CollectionCards = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

const CollectionCardWrapper = styled.div`
    background-color: white;
    flex: 0 0 30%;
    height: 40vh;
    box-shadow .6rem .6rem 0 ${props => props.theme.primaryColorDark};
    margin-bottom: 2rem;
    position: relative;
    cursor: pointer;
    transition: all linear .2s;

    &:hover {
        background-color: ${props => props.theme.primaryColorDark};
        transform: scale(1.05) translateY(-0.5rem);
        box-shadow: none;

        & h2 {
            color: ${props => props.theme.white};
        }

        & h2::after {
            background-color: ${props => props.theme.white};
        }
    }
`;

const CollectionCardText = styled.h2`
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    font-weight: normal;
    color: ${props => props.theme.primaryColorDark};
    padding-bottom: 0.5rem;

    &::after {
        width: 3rem;
        height: 2px;
        background-color: ${props => props.theme.primaryColorDark};
        content: "";
        display: block;
    }
`;

const IconGroup = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;
`;

const CollectionCard = ({ collection, deleteCollection }) => {
    const [isHovered, setIsHovered] = useState(false);

    function onDeleteClick() {
        deleteCollection(collection);
    }

    return (
        <CollectionCardWrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <CollectionCardText>{ collection.name }</CollectionCardText>
            <IconGroup>
                <DeleteIcon 
                    size="27px" fill={isHovered ? theme.white : theme.grayColorLighter}
                    onClick={onDeleteClick}/>
            </IconGroup>
        </CollectionCardWrapper>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        deleteCollection: function(collection) {
            dispatch(requestCollectionDelete(collection));
        }
    }
}

export const ConnectedCollectionCard = connect(null, mapDispatchToProps)(CollectionCard);