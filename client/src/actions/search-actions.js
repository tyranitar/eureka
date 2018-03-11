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
    return async (dispatch, getState) => {
        const results = await asyncGetAutoCompleteResults(searchString);
        dispatch(setAutoCompleteResults(results));
    };
};

export const getSearchFilters = () => {
    return async (dispatch, getState) => {
        await asyncGetSearchFilters();
    };
};

export const getSearchResults = (query) => {
    return async (dispatch, getState) => {
        dispatch(beginSearch());

        const results = await asyncGetSearchResults(query || getState().search.query);
        dispatch(setSearchResults(results));
    };
};
