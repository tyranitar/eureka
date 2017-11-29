import { asyncGetRoadmap } from '../api/roadmap-api';

export const getRoadmap = () => {
    return (dispatch, getState) => {
        asyncGetRoadmap().then((roadmap) => {
            dispatch(setRoadmap(roadmap));
        });
    };
};

export const setRoadmap = (roadmap) => {
    return {
        type: 'SET_ROADMAP',
        roadmap,
    };
};