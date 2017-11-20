export const selectAnswer = (answer) => {
    return {
        type: 'SELECT_ANSWER',
        answer,
    };
};

export const changeQuestion = (direction) => {
    return {
        type: 'CHANGE_QUESTION',
        direction,
    };
};