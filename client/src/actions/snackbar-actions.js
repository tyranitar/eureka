export const openSnackbar = ({
    message,
}) => {
    return {
        type: 'OPEN_SNACKBAR',
        message,
    };
};

export const closeSnackbar = () => {
    return {
        type: 'CLOSE_SNACKBAR',
    };
};