import _ from 'lodash';

const initialState = {
    firstSearchPerformed: false,
    searching: false,
    autoCompleteResults: [],
    results: [],

    query: {
        searchString: '',
        sortBy: 'title',
        descending: false,
        minSalary: 50000,

        outlook: {
            'Good Outlook': true,
            'Okay Outlook': true,
            'Poor Outlook': true,
        },

        education: {
            'Bachelor\'s': true,
            'Master\'s': true,
            'PhD': true,
        },

        subjects: {
            //
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

const handleSetSearchFilters = (state, action) => {
    const { filters } = action;

    return _.merge({}, state, {
        query: {
            subjects: filters.subjects,
        },
    });
};

const handleSetSubjectFilters = (state, action) => {
    const { subjects } = action;

    return _.merge({}, state, {
        query: {
            subjects,
        },
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
        case 'SET_SEARCH_FILTERS':
            return handleSetSearchFilters(state, action);
        case 'SET_SUBJECT_FILTERS':
            return handleSetSubjectFilters(state, action);
        default:
            return state;
    }
};

export default reducer;