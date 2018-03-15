import AutoComplete from 'material-ui/AutoComplete';
import _ from 'lodash';

import autoCompleteResults from '../mocks/auto-complete-results';
import searchFilters from '../mocks/search-filters';
import searchResults from '../mocks/search-results';

const filter = AutoComplete.fuzzyFilter;

export const asyncGetAutoCompleteResults = (searchString) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        const results = [];

        if (searchString) {
            let count = 5;

            autoCompleteResults.some((result) => {
                if (filter(searchString, result)) {
                    results.push(result);
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
    }, 0));
};

export const asyncGetSearchResults = ({
    searchString,
    sortBy,
    descending,
    minSalary,
    outlook,
    education,

    featured, // NOTE: `featured` is not part of the query state.
}) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        if (featured) {
            resolve(searchResults.filter((result) => (result.featured)));
            return;
        }

        const results = [];
        const multiplier = descending ? -1 : 1;
        let count = 10;

        const searchResultsClone = searchResults.slice();

        searchResultsClone.sort((a, b) => {
            let ret = 0;

            if (a[sortBy] < b[sortBy]) {
                ret =  -1;
            } else if (a[sortBy] > b[sortBy]) {
                ret = 1;
            }

            return ret * multiplier;
        });

        searchResultsClone.some((result) => {
            if (filter(searchString, result.title) &&
                result.salary >= minSalary &&
                outlook[result.outlook] &&
                education[result.education]) {
                results.push(_.merge({}, result, {
                    title: result.title,
                }));

                count -= 1;
            }

            return !count;
        });

        resolve(results);
    }, 1000));
};