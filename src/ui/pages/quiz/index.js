import { connect } from "react-redux";
import { ConnectedQuizChoose } from "./choose"
import { ConnectedQuizGame } from "./game"

const Quiz = ({
    hasStarted
}) => {
    return (
        hasStarted ?
        <ConnectedQuizGame /> :
        <ConnectedQuizChoose />
    );
}

function mapStateToProps(state, ownProps) {
    return {
        hasStarted: state.quiz.hasStarted
    };
}

export const ConnectedQuiz = connect(mapStateToProps)(Quiz);