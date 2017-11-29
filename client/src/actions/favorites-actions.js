import { asyncGetFavorites } from '../api/favorites-api';

export const getFavorites = () => {
    return (dispatch, getState) => {
        asyncGetFavorites().then((favorites) => {
            dispatch(setFavorites(favorites));
        });
    };
};

export const setFavorites = (favorites) => {
    return {
        type: 'SET_FAVORITES',
        favorites,
    };
};