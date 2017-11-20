import _ from 'lodash';

const initialState = {
    errorMessages: {
        email: "",
        password: "",
    },
};

const handleSetErrorMessage = (state, action) => {
    return _.merge({}, state, {
        errorMessages: {
            [action.field]: action.errorMessage,
        },
    });
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ERROR_MESSAGE':
            return handleSetErrorMessage(state, action);
        default:
            return state;
    }
};

export default loginReducer;