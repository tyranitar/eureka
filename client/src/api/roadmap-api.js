import roadmap from '../mocks/roadmap';

export const asyncGetRoadmap = () => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve(roadmap);
    }, 0));
};

export const asyncCompleteStep = () => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 0));
};