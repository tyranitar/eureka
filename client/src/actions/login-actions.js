export const login = ({
    email,
    password,
}) => {
    // TODO: Make login request.
};

export const setErrorMessage = (field, errorMessage) => {
    return {
        type: 'SET_ERROR_MESSAGE',
        field,
        errorMessage,
    };
};