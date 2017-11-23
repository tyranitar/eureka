import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Question from '../../components/question/Question';
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

        onSubmit: () => {
            dispatch(push('/'));
        },
    };
};

const Questions = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Question);

export default Questions;