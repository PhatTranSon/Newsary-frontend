export const INITIALIZE_QUIZ = "INITIALIZE_QUIZ";
export const SET_QUIZ_END = "SET_QUIZ_END";
export const SET_REMAINING_SECONDS = "SET_REMAINING_SECONDS";
export const SET_NEXT_QUESTION = "SET_NEXT_QUESTION";
export const SET_INTERVAL_ID = "SET_INTERVAL_ID";
export const START_QUIZ = "START_QUIZ";
export const SET_SCORE_INCREASE = "SET_SCORE_INCREASE";
export const SET_HAS_STARTED = "SET_HAS_STARTED";
export const QUESTION_TIME = 60;

export function setScoreIncrease() {
    return {
        type: SET_SCORE_INCREASE
    };
}

export function startQuiz() {
    return {
        type: START_QUIZ
    };
}

export function setIntervalId(intervalId) {
    return {
        type: SET_INTERVAL_ID,
        intervalId
    };
}

export function setNextQuestion() {
    return {
        type: SET_NEXT_QUESTION
    };
}

export function setRemainingSeconds(seconds) {
    return {
        type: SET_REMAINING_SECONDS,
        seconds
    }
}

export function setHasStarted(hasStarted) {
    return {
        type: SET_HAS_STARTED,
        hasStarted
    };
}

export function initializeQuiz(collection, numberOfQuestions) {
    return {
        type: INITIALIZE_QUIZ,
        collection,
        numberOfQuestions
    };
}

export function setQuizEnded(score) {
    return {
        type: SET_QUIZ_END,
        score
    };
}