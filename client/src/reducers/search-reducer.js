import _ from 'lodash';

const initialState = {
    firstSearchPerformed: false,
    autoCompleteResults: [],
    filters: [],
    results: [],
    query: {},
};

const handleUpdateSearchQuery = (state, action) => {
    return _.merge({}, state, {
        query: {
            [action.field]: action.value,
        },
    });
};

const handleSetAutoCompleteResults = (state, action) => {
    const { autoCompleteResults } = action;

    return _.merge({}, state, {
        autoCompleteResults,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH_QUERY':
            return handleUpdateSearchQuery(state, action);
        case 'SET_AUTO_COMPLETE_RESULTS':
            return handleSetAutoCompleteResults(state, action);
        default:
            return state;
    }
};

export default reducer;