const initialState = {
    careers: [],
    articles: [],
    advertisements: [],
};

const handleSetNews = (state, action) => {
    const { careers, articles, advertisements } = action.news;
    return Object.assign({}, state, {
        careers,
        articles,
        advertisements,
    });
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NEWS':
            return handleSetNews(state, action);
        default:
            return state;
    }
};

export default newsReducer;