import { asyncGetCareerDetails, asyncGetCareerEducationPaths } from '../api/career-api';

export const getCareerDetails = (careerId) => {
    return (dispatch, getState) => {
        asyncGetCareerDetails(careerId).then((careerDetails) => {
            dispatch(setCareerDetails(careerDetails));
        });
    };
};

export const getCareerEducationPaths = (careerId) => {
    return (dispatch, getState) => {
        asyncGetCareerEducationPaths(careerId).then((careerEducationPaths) => {
            dispatch(setCareerEducationPaths(careerEducationPaths));
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

export const setCareerEducationPaths = (careerEducationPaths) => {
    return {
        type: 'SET_CAREER_EDUCATION_PATHS',
        careerEducationPaths,
    };
};