import news from '../mocks/news';

export const asyncGetNews = () => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve(news);
    }, 0));
};