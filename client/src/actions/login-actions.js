import { push } from 'react-router-redux';
import { asyncLogin, asyncLogout, asyncSignup } from '../api/login-api';

export const login = ({
    email,
    password,
}) => {
    return async (dispatch, getState) => {
        await asyncLogin({ email, password });
        dispatch(push('/'));
    };
};

export const logout = () => {
    return async (dispatch, getState) => {
        await asyncLogout();
        dispatch(push('/login'));
    };
};

export const signup = ({
    email,
    password,
}) => {
    return async (dispatch, getState) => {
        await asyncSignup({ email, password });
        dispatch(push('/questionnaire'));
    };
};

export const setErrorMessage = (field, errorMessage) => {
    return {
        type: 'SET_ERROR_MESSAGE',
        field,
        errorMessage,
    };
};