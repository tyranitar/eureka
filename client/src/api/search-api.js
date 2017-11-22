import _ from 'lodash';

import autoCompleteResults from '../mocks/auto-complete-results';
import searchFilters from '../mocks/search-filters';
import searchResults from '../mocks/search-results';

export const asyncGetAutoCompleteResults = (searchString) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        const results = [];

        if (searchString) {
            let count = 5;

            searchString = searchString.toLowerCase();

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

export const asyncGetSearchResults = ({
    searchString,
    sortBy,
    descending,
    minSalary,
    outlook,
    education,
}) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        const results = [];
        const multiplier = descending ? -1 : 1;
        let count = 10;

        searchString = searchString.toLowerCase();

        searchResults.sort((a, b) => {
            let ret = 0;

            if (a[sortBy] < b[sortBy]) {
                ret =  -1;
            } else if (a[sortBy] > b[sortBy]) {
                ret = 1;
            }

            return ret * multiplier;
        });

        searchResults.some((result) => {
            if (result.title.includes(searchString) &&
                result.salary >= minSalary &&
                outlook[result.outlook] &&
                education[result.education]) {
                results.push(_.merge({}, result, {
                    title: _.capitalize(result.title),
                }));

                count -= 1;
            }

            return !count;
        });

        resolve(results);
    }, 1000));
};