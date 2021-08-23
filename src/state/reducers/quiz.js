import { defaultState } from "../default";
import { 
    SET_QUIZ_END, 
    SET_REMAINING_SECONDS, 
    SET_NEXT_QUESTION, 
    SET_INTERVAL_ID, 
    SET_SCORE_INCREASE, 
    SET_HAS_STARTED,
    INITIALIZE_QUIZ,
    QUESTION_TIME
} from "../mutations/quiz";

import {
    createQuiz
} from "../../helper/quiz";

export function quizReducer(quiz = defaultState.quiz, action) {
    let newState;

    switch(action.type) {
        case SET_HAS_STARTED:
            newState = {
                ...quiz,
                hasStarted: action.hasStarted
            };
            break;
        case SET_SCORE_INCREASE:
            newState = {
                ...quiz,
                score: quiz.score + 1
            };
            break;
        case SET_INTERVAL_ID:
            newState = {
                ...quiz,
                intervalId: action.intervalId
            };
            break;
        case SET_NEXT_QUESTION:
            newState = {
                ...quiz,
                seconds: QUESTION_TIME,
                currentQuestion: quiz.currentQuestion + 1
            };
            break;
        case SET_REMAINING_SECONDS:
            newState = {
                ...quiz,
                seconds: action.seconds
            };
            break;
        case INITIALIZE_QUIZ:
            newState = {
                ...quiz,
                hasStarted: true,
                hasEnded: false,
                numberOfQuestions: action.numberOfQuestions,
                currentQuestion: 0,
                questions: createQuiz(action.collection.words, action.numberOfQuestions),
                score: 0
            };
            break;
        case SET_QUIZ_END:
            newState = {
                ...quiz,
                seconds: QUESTION_TIME,
                hasEnded: true
            };
            break;
        default:
            newState = quiz;
            break;
    }

    return newState;
}