import _ from 'lodash';

import autoCompleteResults from '../mocks/auto-complete-results';
import searchFilters from '../mocks/search-filters';
import searchResults from '../mocks/search-results';

export const asyncGetAutoCompleteResults = (searchString) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        const results = [];

        if (searchString) {
            let count = 5;

            autoCompleteResults.some((result) => {
                if (result.includes(searchString)) {
                    results.push(_.capitalize(result));
                    count -= 1;
                }

                return !count;
            });
        }

        resolve(results);
    }, 0));
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