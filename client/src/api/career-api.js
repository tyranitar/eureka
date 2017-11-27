import careers from '../mocks/search-results';
import _ from 'lodash';

import { getCharts } from '../mocks/career-details';
import careerEducationPaths from '../mocks/career-education-paths';
import careerComments from '../mocks/career-comments';
import loremIpsum from '../mocks/lorem-ipsum';

export const asyncGetCareerDetails = (careerId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        const career = careers[careerId];

        const { description } = career;

        const loremIpsumCopy = loremIpsum.slice();

        if (loremIpsumCopy.includes(description)) {
            loremIpsumCopy.splice(loremIpsumCopy.indexOf(description), 1);
        }

        const careerDetails = Object.assign({}, career, {
            description: [
                description,
                ..._.sampleSize(loremIpsumCopy, 2),
            ].join('\n\n'),

            charts: getCharts(career),
        });

        resolve(careerDetails);
    }, 0));
};

export const asyncGetCareerEducationPaths = (careerId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve(careerEducationPaths);
    }, 0));
};

export const asyncGetCareerComments = (careerId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve(careerComments);
    }, 0));
};

export const asyncToggleCareerCommentLike = (commentId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 0));
};