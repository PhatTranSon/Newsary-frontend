import styled from "styled-components";
import { CardWrapper } from "../components/cardwrapper";
import { FormGroup, FormInput, FormLabel } from "../components/form";
import { Button } from "../components/button";

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

const CreateCollection = () => {
    return (
        <>
            <CardWrapper>
                <Title>Create word collection</Title>
                <Subtitle>Choose the name related to the collection's topic</Subtitle>
                <form>
                    <DecoratedFormGroup>
                        <FormInput type="text" name="name" id="collectionName" placeholder="Name"/>
                        <FormLabel htmlFor="collectionName">Name</FormLabel>

                        <ButtonWrapper>
                            <Button>Create collection</Button>
                        </ButtonWrapper>
                    </DecoratedFormGroup>
                </form>
            </CardWrapper>
        </>
    );
}

export const ConnectedCreateCollection = CreateCollection;