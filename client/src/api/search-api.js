import autoCompleteResults from '../mocks/auto-complete-results';
import searchFilters from '../mocks/search-filters';
import searchResults from '../mocks/search-results';

export const asyncGetAutoCompleteResults = (query) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve(autoCompleteResults);
    }, 1000));
};

export const asyncGetSearchFilters = () => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve(searchFilters);
    }, 1000));
};

export const asyncGetSearchResults = (query) => {
    console.log(query);
    
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve(searchResults);
    }, 1000));
};