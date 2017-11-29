const initialState = {
    open: false,
    message: "",
};

const handleOpenSnackbar = (state, action) => {
    return Object.assign({}, state, {
        open: true,
        message: action.message,
    });
};

const handleCloseSnackbar = (state, action) => {
    return Object.assign({}, state, {
        open: false,
    });
};

const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_SNACKBAR':
            return handleOpenSnackbar(state, action);
        case 'CLOSE_SNACKBAR':
            return handleCloseSnackbar(state, action);
        default:
            return state;
    }
};

export default snackbarReducer;