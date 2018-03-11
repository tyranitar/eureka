import { asyncGetFavorites } from '../api/favorites-api';

export const getFavorites = () => {
    return async (dispatch, getState) => {
        const favorites = await asyncGetFavorites();
        dispatch(setFavorites(favorites));
    };
};

export const setFavorites = (favorites) => {
    return {
        type: 'SET_FAVORITES',
        favorites,
    };
};