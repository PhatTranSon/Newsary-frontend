import styled from "styled-components";
import { CardWrapper } from "../components/cardwrapper";
import { FormGroup, FormInput, FormLabel } from "../components/form";
import { Button } from "../components/button";
import { Loading } from "../components/loading";
import { useState } from "react";
import { requestCollectionCreate } from "../../state/mutations";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: normal;
    color: ${props => props.theme.primaryColor};
    margin-bottom: .5rem;
`;

const Subtitle = styled.h2`
    font-size: 1.2rem;
    font-weight: normal;
    color: ${props => props.theme.grayColorDark};
`;

const DecoratedFormGroup = styled(FormGroup)`
    margin: 1rem 0;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-flow: row-reverse nowrap;

    & * {
        margin-right: 0;
    }
`;

const CreateCollection = ({
    loading, 
    error, 
    success,
    create
}) => {
    const [name, setName] = useState("");
    const [hasStarted, setHasStarted] = useState(false);

    function onNameChange(event) {
        setName(event.target.value);
    }

    function onFormSubmit(event) {
        //Prevent redirect
        event.preventDefault();
        //Set has api call started to true
        setName("");
        setHasStarted(true);
        //Call 
        create({ name });
    }


    return (
        (hasStarted && success)  ?
        <Redirect to="/dashboard"/> : 
        <CardWrapper>
            <Title>Create word collection</Title>
            <Subtitle>Choose the name related to the collection's topic</Subtitle>
            {
                loading ? 
                <Loading /> :
                <form onSubmit={onFormSubmit}>
                    <DecoratedFormGroup>
                        <FormInput type="text" name="name" id="collectionName" placeholder="Name"
                            value={name} onChange={onNameChange}/>
                        <FormLabel htmlFor="collectionName">Name</FormLabel>

                        <ButtonWrapper>
                            <Button>Create collection</Button>
                        </ButtonWrapper>
                    </DecoratedFormGroup>
                </form>
            }
        </CardWrapper>
    );
}

function mapStateToProps(state, ownProps) {
    return {
        loading: state.dashboard.createCollection.loading,
        error: state.dashboard.createCollection.error,
        success: state.dashboard.createCollection.success
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        create: function(collection) {
            dispatch(requestCollectionCreate(collection));
        }
    }
}

export const ConnectedCreateCollection = connect(mapStateToProps, mapDispatchToProps)(CreateCollection);