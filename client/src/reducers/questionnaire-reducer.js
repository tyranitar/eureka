import questions from '../mocks/questions';

const initialState = {
    questions,
    questionIdx: 0,
};

const numQuestions = questions.length;

const updateAnswer = (question, answer) => {
    switch (question.type) {
        case 'checkbox':
            return (question.answer || Array(question.options.length).fill(false)).map((val, idx) => {
                if (idx === answer) {
                    return !val;
                }
                return val;
            });
        case 'radio':
            return answer;
        default:
            return answer;
    }
};

const handleSelectAnswer = (state, action) => {
    const { questions, questionIdx } = state;
    return Object.assign({}, state, {
        questions: questions.map((question, idx) => {
            if (idx === questionIdx) {
                return Object.assign({}, question, {
                    answer: updateAnswer(question, action.answer),
                });
            }
            return question;
        }),
    });
};

const handleChangeQuestion = (state, action) => {
    return Object.assign({}, state, {
        questionIdx: Math.min(Math.max(0, state.questionIdx + action.direction), numQuestions - 1),
    });
};

const questionnaireReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_ANSWER':
            return handleSelectAnswer(state, action);
        case 'CHANGE_QUESTION':
            return handleChangeQuestion(state, action);
        default:
            return state;
    }
};

export default questionnaireReducer;