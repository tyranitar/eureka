import { push } from 'react-router-redux';

import { asyncLogin, asyncLogout, asyncSignup } from '../api/login-api';

export const login = ({
    email,
    password,
}) => {
    return (dispatch, getState) => {
        asyncLogin({ email, password }).then(() => {
            dispatch(push('/'));
        });
    };
};

export const logout = () => {
    return (dispatch, getState) => {
        asyncLogout().then(() => {
            dispatch(push('/login'));
        });
    };
};

export const signup = ({
    email,
    password,
}) => {
    return (dispatch, getState) => {
        asyncSignup({ email, password }).then(() => {
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