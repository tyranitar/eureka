import { asyncGetNews } from '../api/news-api';

export const getNews = () => {
    return async (dispatch, getState) => {
        const news = await asyncGetNews()
        dispatch(setNews(news));
    };
};

export const setNews = (news) => {
    return {
        type: 'SET_NEWS',
        news,
    };
};