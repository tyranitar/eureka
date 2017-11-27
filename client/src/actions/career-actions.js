import {
    asyncGetCareerDetails,
    asyncGetCareerEducationPaths,
    asyncGetCareerComments,
    asyncToggleCareerCommentLike,
} from '../api/career-api';

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

export const getCareerComments = (careerId) => {
    return (dispatch, getState) => {
        asyncGetCareerComments(careerId).then((careerComments) => {
            dispatch(setCareerComments(careerComments));
        });
    };
};

export const toggleCareerCommentLike = (commentId) => {
    return (dispatch, getState) => {
        asyncToggleCareerCommentLike(commentId).then(() => {
            dispatch(setCareerComments(getState().career.comments.map((comment) => {
                if (comment.id === commentId) {
                    return Object.assign({}, comment, {
                        liked: !comment.liked,
                    });
                }

                return comment;
            })));
        });
    }
}

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

export const setCareerComments = (careerComments) => {
    return {
        type: 'SET_CAREER_COMMENTS',
        careerComments,
    };
};