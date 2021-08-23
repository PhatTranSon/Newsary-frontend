export const SET_QUIZ_START = "SET_QUIZ_START";
export const SET_QUIZ_END = "SET_QUIZ_END";

export function setQuizStart(collection, numberOfQuestions) {
    return {
        type: SET_QUIZ_START,
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