import { push } from 'react-router-redux';

import { asyncLogin, asyncLogout } from '../api/login-api';

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

export const logout = () => {
    return (dispatch, getState) => {
        asyncLogout().then(() => {
            dispatch(push('/login'));
        });
    };
}

export const setErrorMessage = (field, errorMessage) => {
    return {
        type: 'SET_ERROR_MESSAGE',
        field,
        errorMessage,
    };
};