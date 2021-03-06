import _ from 'lodash';

import careerEducationPaths from '../mocks/career-education-paths';
import { getCareerComments } from '../mocks/career-comments';
import advertisements from '../mocks/advertisements';
import { getCharts } from '../mocks/career-details';
import careers from '../mocks/search-results';
import loremIpsum from '../mocks/lorem-ipsum';
import videos from '../mocks/career-videos';
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
                'Typical Day',
                description,
                ..._.sampleSize(loremIpsumCopy, 2),
            ].join('\n\n'),
            charts: getCharts(career),
        });
        resolve(careerDetails);
    }, 0));
};

export const asyncSetTargetCareer = (careerId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 0));
};

export const asyncUnsetTargetCareer = () => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
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
        resolve(_.sampleSize(advertisements, 1));
    }, 0));
};

export const asyncGetCareerVideos = (careerId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve(_.sampleSize(videos, 5));
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