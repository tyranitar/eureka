import questions from '../mocks/questions';

const initialState = {
    questions,
    questionIdx: 0,
};

const numQuestions = questions.length;

const updateAnswer = (question, answer) => {
    switch (question.type) {
        case 'radio':
            return answer;
        default:
            return answer;
    }
};

const questionnaireReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_ANSWER':
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
        case 'CHANGE_QUESTION':
            return Object.assign({}, state, {
                questionIdx: Math.min(Math.max(0, state.questionIdx + action.direction), numQuestions - 1),
            });
        default:
            return state;
    }
};

export default questionnaireReducer;