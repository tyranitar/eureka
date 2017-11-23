import _ from 'lodash';

import autoCompleteResults from './auto-complete-results';
import loremIpsum from './lorem-ipsum';

const outlooks = [
    'Good Outlook',
    'Okay Outlook',
    'Poor Outlook',
];

const educationLevels = [
    'Bachelor\'s',
    'Master\'s',
    'PhD',
];

const searchResults = autoCompleteResults.map((title, idx) => ({
    title,
    description: loremIpsum[_.random(loremIpsum.length - 1)],
    salary: _.random(5, 15) * 10000,
    outlook: outlooks[_.random(outlooks.length - 1)],
    education: educationLevels[_.random(educationLevels.length - 1)],
    favorited: false,
    featured: false,
    id: idx,
}));

const featuredCareers = new Set();
const numFeaturedCareers = 5;

if (numFeaturedCareers > searchResults.length) {
    throw new Error("number of featured careers exceeds number of search results");
}

while (featuredCareers.size < numFeaturedCareers) {
    const result = searchResults[_.random(searchResults.length - 1)];

    if (!featuredCareers.has(result)) {
        result.featured = true;
        featuredCareers.add(result);
    }
}

export default searchResults;