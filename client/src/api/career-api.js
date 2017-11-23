import careers from '../mocks/search-results';

export const asyncGetCareerDetails = (careerId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve(careers[careerId]);
    }, 0));
};