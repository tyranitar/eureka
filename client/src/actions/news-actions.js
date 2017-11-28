import { asyncGetNews } from '../api/news-api';

export const getNews = () => {
    return (dispatch, getState) => {
        asyncGetNews().then((news) => {
            dispatch(setNews(news));
        });
    };
};

export const setNews = (news) => {
    return {
        type: 'SET_NEWS',
        news,
    };
};