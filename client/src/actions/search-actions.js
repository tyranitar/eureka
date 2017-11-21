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

export const getAutoCompleteResults = (searchString) => {
    return (dispatch, getState) => {
        //
    };
};

export const getSearchFilters = () => {
    return (dispatch, getState) => {
        //
    };
};

export const getSearchResults = () => {
    return (dispatch, getState) => {
        asyncGetSearchResults(getState().search.query).then((results) => {
            console.log(results);
        });
    };
};
