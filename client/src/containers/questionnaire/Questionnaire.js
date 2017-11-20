import { connect } from 'react-redux';

import Question from '../../components/Question';
import { selectAnswer, changeQuestion } from '../../actions/questionnaire-actions';

const mapStateToProps = (state) => {
    const { questionnaire } = state;

    return {
        questionIdx: questionnaire.questionIdx,
        isLastQuestion: questionnaire.questionIdx === questionnaire.questions.length - 1,
        question: questionnaire.questions[questionnaire.questionIdx],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectAnswer: (answer) => {
            dispatch(selectAnswer(answer));
        },

        onChangeQuestion: (direction) => {
            dispatch(changeQuestion(direction));
        },
    };
};

const Questionnaire = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Question);

export default Questionnaire;