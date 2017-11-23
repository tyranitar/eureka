import {
    asyncGetAutoCompleteResults,
    asyncGetSearchFilters,
    asyncGetSearchResults
} from '../api/search-api';

export const updateSearchQuery = (field, value) => {
    return {
        type: 'UPDATE_SEARCH_QUERY',
        field,
        value,
    };
};

export const updateSearchQueryOutlook = (field, value) => {
    return {
        type: 'UPDATE_SEARCH_QUERY_OUTLOOK',
        field,
        value,
    };
};

export const updateSearchQueryEducation = (field, value) => {
    return {
        type: 'UPDATE_SEARCH_QUERY_EDUCATION',
        field,
        value,
    };
};

export const setAutoCompleteResults = (autoCompleteResults) => {
    return {
        type: 'SET_AUTO_COMPLETE_RESULTS',
        autoCompleteResults,
    };
};

export const beginSearch = () => {
    return {
        type: 'BEGIN_SEARCH',
    };
};

export const setSearchResults = (results) => {
    return {
        type: 'SET_SEARCH_RESULTS',
        results,
    };
};

export const getAutoCompleteResults = (searchString) => {
    return (dispatch, getState) => {
        asyncGetAutoCompleteResults(searchString).then((results) => {
            dispatch(setAutoCompleteResults(results));
        });
    };
};

export const getSearchFilters = () => {
    return (dispatch, getState) => {
        asyncGetSearchFilters().then(() => {
            //
        });
    };
};

export const getSearchResults = (query) => {
    return (dispatch, getState) => {
        dispatch(beginSearch());

        asyncGetSearchResults(query || getState().search.query).then((results) => {
            dispatch(setSearchResults(results));
        });
    };
};
