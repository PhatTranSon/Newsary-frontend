import styled from "styled-components";
import { connect } from "react-redux";
import { Loading } from "../loading";
import { Button } from "../button";
import { ErrorMessage } from "../error";
import emptyIcon from "../../../image/empty.svg";
import { Link, useRouteMatch } from "react-router-dom";
import { CollectionCards, ConnectedCollectionCard } from "../collectioncard";

const CollectionTitle = styled.div`
    color: ${props => props.theme.grayColorDark};
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;

    & h2 {
        font-weight: normal;
    }
`;

const NoCollectionsWrapper = styled.div`
    margin: 2rem auto;
    text-align: center;
    & img {
        width: 5rem;
    }

    & h2 {
        font-weight: normal;
        font-size: 1.5rem;
        color: ${props => props.theme.grayColorDark};
    }
`;

const NoCollections = () => {
    return (
        <NoCollectionsWrapper>
            <img src={emptyIcon} alt="No collection icon"/>
            <h2>No collections created</h2>
        </NoCollectionsWrapper>
    )
}

const WordCollections = ({
    collections,
    loading,
    error
}) => {
    const { url } = useRouteMatch();

    return (
        error ?
        <ErrorMessage>Can not retrieve collections</ErrorMessage> : 
        (
            loading ? 
            <Loading /> : 
            <>
                <CollectionTitle>
                    <h2>All collections</h2>
                    <Link to={`${url}/createcollection`}>
                        <Button>
                            Create
                        </Button>
                    </Link>
                </CollectionTitle>
                {
                    collections.length > 0 ?
                    <CollectionCards>
                    {
                        collections.map((collection,index) => <ConnectedCollectionCard key={index} collection={collection}/>)
                    }
                    </CollectionCards> :
                    <NoCollections />
                }
            </>
        )
    );
}

function mapStateToProps(state) {
    return {
        collections: state.dashboard.wordCollections.content,
        error: state.dashboard.wordCollections.error,
        loading: state.dashboard.wordCollections.loading
    };
} 

export const ConnectedCollections = connect(mapStateToProps, null)(WordCollections);