import { asyncGetCareerDetails } from '../api/career-api';

export const getCareerDetails = (careerId) => {
    return (dispatch, getState) => {
        asyncGetCareerDetails(careerId).then((careerDetails) => {
            dispatch(setCareerDetails(careerDetails));
        });
    };
};

export const setCareerDetails = (careerDetails) => {
    return {
        type: 'SET_CAREER_DETAILS',
        careerDetails,
    };
};

export const resetCareerDetails = () => {
    return {
        type: 'RESET_CAREER_DETAILS',
    };
};