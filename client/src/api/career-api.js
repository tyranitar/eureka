import careers from '../mocks/search-results';
import _ from 'lodash';

import careerEducationPaths from '../mocks/career-education-paths';
import { getCareerComments } from '../mocks/career-comments';
import { getCharts } from '../mocks/career-details';
import advertisements from '../mocks/advertisements';
import loremIpsum from '../mocks/lorem-ipsum';
import users from '../mocks/users';

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
        resolve(getCareerComments());
    }, 0));
};

export const asyncGetCareerPointOfContact = (careerId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve(_.sample(users));
    }, 0));
};

export const asyncGetCareerAdvertisements = (careerId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve(_.sampleSize(advertisements, 2));
    }, 0));
};

export const asyncToggleCareerCommentLike = (commentId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 0));
};

export const asyncAddCareerComment = (careerId, comment) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 0));
};