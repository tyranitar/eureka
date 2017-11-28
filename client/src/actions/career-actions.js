import {
    asyncGetCareerDetails,
    asyncGetCareerEducationPaths,
    asyncGetCareerComments,
    asyncGetCareerPointOfContact,
    asyncToggleCareerCommentLike,
    asyncAddCareerComment,
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

export const getCareerPointOfContact = (careerId) => {
    return (dispatch, getState) => {
        asyncGetCareerPointOfContact(careerId).then((careerPointOfContact) => {
            dispatch(setCareerPointOfContact(careerPointOfContact));
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
    };
};

export const addCareerComment = (careerId, comment) => {
    return (dispatch, getState) => {
        asyncAddCareerComment(careerId, comment).then(() => {
            const { comments } = getState().career;

            dispatch(setCareerComments(comments.concat({
                user: {
                    name: 'You',
                },

                createdAt: new Date(),
                id: comments.length,
                content: comment,
            })));
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

export const setCareerComments = (careerComments) => {
    return {
        type: 'SET_CAREER_COMMENTS',
        careerComments,
    };
};

export const setCareerPointOfContact = (careerPointOfContact) => {
    return {
        type: 'SET_CAREER_POINT_OF_CONTACT',
        careerPointOfContact,
    };
};