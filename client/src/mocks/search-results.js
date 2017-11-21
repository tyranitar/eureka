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

export default autoCompleteResults.map((title) => ({
    title,
    description: loremIpsum[_.random(loremIpsum.length - 1)],
    salary: _.random(5, 15) * 10000,
    outlook: outlooks[_.random(outlooks.length - 1)],
    education: educationLevels[_.random(educationLevels.length - 1)],
}));