import _ from 'lodash';

const initialState = {
    firstSearchPerformed: false,
    searching: false,
    autoCompleteResults: [],
    filters: [],
    results: [],

    query: {
        searchString: '',
        sortBy: 'title',
        descending: false,
        minSalary: 75000,

        outlook: {
            'Good Outlook': false,
            'Okay Outlook': false,
            'Poor Outlook': false,
        },

        education: {
            'Bachelor\'s': false,
            'Master\'s': false,
            'PhD': false,
        },
    },
};

const handleUpdateSearchQuery = (state, action) => {
    return _.merge({}, state, {
        query: {
            [action.field]: action.value,
        },
    });
};

const handleUpdateSearchQueryOutlook = (state, action) => {
    return _.merge({}, state, {
        query: {
            outlook: {
                [action.field]: action.value,
            },
        },
    });
};

const handleUpdateSearchQueryEducation = (state, action) => {
    return _.merge({}, state, {
        query: {
            education: {
                [action.field]: action.value,
            },
        },
    });
};

const handleSetAutoCompleteResults = (state, action) => {
    const { autoCompleteResults } = action;

    return Object.assign({}, state, {
        autoCompleteResults,
    });
};

const handleBeginSearch = (state, action) => {
    return Object.assign({}, state, {
        firstSearchPerformed: true,
        searching: true,
    });
};

const handleSetSearchResults = (state, action) => {
    const { results } = action;

    return Object.assign({}, state, {
        searching: false,
        results,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH_QUERY':
            return handleUpdateSearchQuery(state, action);
        case 'UPDATE_SEARCH_QUERY_OUTLOOK':
            return handleUpdateSearchQueryOutlook(state, action);
        case 'UPDATE_SEARCH_QUERY_EDUCATION':
            return handleUpdateSearchQueryEducation(state, action);
        case 'SET_AUTO_COMPLETE_RESULTS':
            return handleSetAutoCompleteResults(state, action);
        case 'BEGIN_SEARCH':
            return handleBeginSearch(state, action);
        case 'SET_SEARCH_RESULTS':
            return handleSetSearchResults(state, action);
        default:
            return state;
    }
};

export default reducer;