import { connect } from "react-redux";
import styled from "styled-components";
import { setHasStarted, setNextQuestion, setQuizEnded, setRemainingSeconds, setScoreIncrease } from "../../../state/mutations/quiz";
import { ClickableButton } from "../../components/button/clickable";
import { theme } from "../../styling/theme";
import { Button } from "../../components/button";

const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    background-color: ${props => props.theme.primaryColorLight};
    border-radius: 0.5rem;
    padding: 2rem;
    color: ${props => props.theme.white};
    position: relative;
`;

const Timer = styled.div`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 5px solid ${props => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 1.5rem;
    font-weight: 300;
`

const Question = styled.div`
    text-align: center;
    margin-top: 2rem;
    font-size: 1.5rem;
    color: ${props => props.theme.white};
`

const EndGame = styled.div`
    text-align: center;
    font-size: 3rem;
    font-weight: normal;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Answers = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    left: 0;
`;

const QuizGame = ({
    hasStarted,
    hasEnded,
    questions,
    currentQuestion,
    numberOfQuestions,
    seconds,
    increaseScore,
    skipQuestion,
    score,
    restart
}) => {
    const question = questions[currentQuestion];

    function callQuestionSkip() {
        setTimeout(() => {
            skipQuestion();
        }, 500);
    }
    
    function onCorrect() {
        //Increase score
        increaseScore();
        //Move to next question
        if (seconds > 0) {
            callQuestionSkip();
        }
    }

    function onWrong() {
        //Move to next questio,
        if (seconds > 0) {
            callQuestionSkip();
        }
    }

    return (
        <Wrapper>
            {
                hasEnded ?
                <EndGame>
                    <h1>
                    Score 
                    </h1>
                    <h1>
                    { score } / { numberOfQuestions }
                    </h1>
                    <Button inverted onClick={() => restart()}>Restart</Button>
                </EndGame> :
                <> 
                    <Timer>
                        <h2>{ seconds }</h2>
                    </Timer>
        
                    <Question>
                        <h3>Question { currentQuestion + 1}:</h3>
                        <p>{ question.question }</p>
                        <Answers>
                        {
                            question.answers.map(
                                (answer, index) => {
                                    if (index === question.correctAnswerIndex) {
                                        return (
                                            <ClickableButton 
                                                onClick={onCorrect}
                                                color={theme.successColor}
                                                content={answer}
                                                number={currentQuestion} />
                                        );
                                    } else {
                                        return (
                                            <ClickableButton 
                                                onClick={onWrong}
                                                color={theme.dangerColor}
                                                content={answer}
                                                number={currentQuestion} />
                                        );
                                    }
                                }
                            )
                        }
                        </Answers>
                    </Question>
                </>
            }
        </Wrapper>
    )
};

function mapStateToProps(state, ownProps) {
    return state.quiz;
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        increaseScore: function() {
            dispatch(setScoreIncrease());
        },
        skipQuestion: function() {
            dispatch(setRemainingSeconds(60));
            dispatch(setNextQuestion());
        },
        restart: function() {
            dispatch(setQuizEnded(true));
            dispatch(setHasStarted(false));
        }
    }
}

export const ConnectedQuizGame = connect(mapStateToProps, mapDispatchToProps)(QuizGame);