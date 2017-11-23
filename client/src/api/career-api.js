import careers from '../mocks/search-results';

export const asyncGetCareerDetails = (careerId) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        const career = careers[careerId];

        const {
            description,
        } = career;

        const careerDetails = Object.assign({}, career, {
            description: [description, description, description].join('\n\n'),
        });

        resolve(careerDetails);
    }, 0));
};