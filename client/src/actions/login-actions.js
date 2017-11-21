import { push } from 'react-router-redux';

import { asyncLogin } from '../api/login-api';

export const login = ({
    email,
    password,
}) => {
    // TODO: Add validation.

    return (dispatch, getState) => {
        asyncLogin({ email, password }).then(() => {
            // TODO: Change this.
            dispatch(push('/questionnaire'));
        });
    };
};

export const setErrorMessage = (field, errorMessage) => {
    return {
        type: 'SET_ERROR_MESSAGE',
        field,
        errorMessage,
    };
};