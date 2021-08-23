import styled from "styled-components";
import { FormLabel, FormInput, FormGroup, FormSelect } from "../components/form";
import { CardWrapper } from "../components/cardwrapper";
import { Button } from "../components/button";
import { connect } from "react-redux";
import { setQuizStart } from "../../state/mutations/quiz";
import { useState } from "react";

const Title = styled.h1`
    font-size: 2rem;
    font-weight: normal;
    color: ${props => props.theme.primaryColor};
    margin-bottom: .75rem;
`

const Subtitle = styled.h2`
    font-weight: normal;
    font-size: 1.2rem;
    color: ${props => props.theme.grayColorDark};
`;

const Form = styled.form`
    margin: 1rem 0;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;

    & button {
        margin-right: 0;
    }
`;

const Quiz = ({ 
    collections,
    hasQuizStarted,
    startQuiz
}) => {
    const [collectionId, setCollectionId] = useState("");
    const [totalQuestions, setTotalQuestions] = useState("");

    function onTotalQuestionChange(event) {
        setTotalQuestions(event.target.value);
    }

    function onCollectionIdChange(event) {
        setCollectionId(event.target.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();

        const totalQuestionsAsNumber = +totalQuestions;
        if (collectionId && totalQuestionsAsNumber > 0) {
            const collection = collections.find(collection => collection._id === collectionId);
            startQuiz(collection, totalQuestionsAsNumber);
        }
    }

    return (
        <CardWrapper>
            <Title>Take a quiz</Title>
            <Subtitle>Choose the collection you want to test, and the number of questions</Subtitle>
            <Form onSubmit={onFormSubmit}>
                <FormGroup>
                    <FormInput type="number" name="questions" id="questions"
                        placeholder="Number of questions"
                        onChange={onTotalQuestionChange}
                        value={totalQuestions + ""}/>
                    <FormLabel htmlFor="questions">Number of questions</FormLabel>
                </FormGroup>

                <FormSelect placeholder="Choose collection"
                    onChange={onCollectionIdChange}>
                    <option disabled selected>Choose collection</option>
                    {
                        collections.map(
                            collection => (
                                <option key={collection._id} value={collection._id}>
                                    { collection.name }
                                </option>
                            )
                        )
                    }
                </FormSelect>

                <Buttons>
                    <Button>Start quiz</Button>
                </Buttons>
            </Form>
        </CardWrapper>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        collections: state.dashboard.wordCollections.content,
        hasQuizStarted: state.quiz.hasStarted,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        startQuiz: function(collection, numberOfQuestions) {
            dispatch(setQuizStart(collection, numberOfQuestions));
        }
    }
}

export const ConnectedQuiz = connect(mapStateToProps, mapDispatchToProps)(Quiz);