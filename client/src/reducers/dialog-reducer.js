const initialState = {
    open: false,
    width: '',
    title: '',
    actions: [],
    children: null,
};

const handleOpenDialog = (state, action) => {
    const {
        width,
        title,
        actions,
        children,
    } = action;

    return Object.assign({}, state, {
        open: true,
        width,
        title,
        actions,
        children,
    });
};

const handleCloseDialog = (state, action) => {
    return Object.assign({}, state, {
        open: false,
    });
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return handleOpenDialog(state, action);
        case 'CLOSE_DIALOG':
            return handleCloseDialog(state, action);
        default:
            return state;
    }
};

export default dialogReducer;