const initialState = {
    careers: [],
};

const handleSetFavorites = (state, action) => {
    const {
        careers,
    } = action.favorites;

    return Object.assign({}, state, {
        careers,
    });
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return handleSetFavorites(state, action);
        default:
            return state;
    }
};

export default favoritesReducer;