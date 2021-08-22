import styled from "styled-components";
import { DeleteIcon } from "../icon/delete";
import { theme } from "../../styling/theme";
import { useState } from "react";
import { requestCollectionDelete } from "../../../state/mutations/collections";
import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { Button } from "../button";

export const CollectionCards = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

const CollectionCardWrapper = styled.div`
    background-color: white;
    margin-right: 2rem;
    flex: 1 0 30%;
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

        & p {
            color: ${props => props.theme.white};
        }

        & p::after {
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

    & p {
        margin-bottom: 1rem;
    }

    & p::after {
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
    const { url } = useRouteMatch();
    const [isHovered, setIsHovered] = useState(false);

    function onDeleteClick() {
        deleteCollection(collection);
    }

    return (
        <CollectionCardWrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <CollectionCardText>
                    <p>{ collection.name }</p>
                    <Link to={`${url}/collections/${collection._id}`}>
                        <Button inverted>View</Button>
                    </Link>
                </CollectionCardText>
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