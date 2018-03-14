import {
    asyncGetCareerDetails,
    asyncGetCareerEducationPaths,
    asyncGetCareerComments,
    asyncGetCareerPointOfContact,
    asyncGetCareerAdvertisements,
    asyncToggleCareerCommentLike,
    asyncAddCareerComment,
    asyncSetTargetCareer,
    asyncUnsetTargetCareer,
} from '../api/career-api';

export const getCareerDetails = (careerId) => {
    return async (dispatch, getState) => {
        const careerDetails = await asyncGetCareerDetails(careerId);
        dispatch(setCareerDetails(careerDetails));
    };
};

export const getCareerEducationPaths = (careerId) => {
    return async (dispatch, getState) => {
        const careerEducationPaths = await asyncGetCareerEducationPaths(careerId);
        dispatch(setCareerEducationPaths(careerEducationPaths));
    };
};

export const getCareerComments = (careerId) => {
    return async (dispatch, getState) => {
        const careerComments = await asyncGetCareerComments(careerId);
        dispatch(setCareerComments(careerComments));
    };
};

export const getCareerPointOfContact = (careerId) => {
    return async (dispatch, getState) => {
        const careerPointOfContact = await asyncGetCareerPointOfContact(careerId);
        dispatch(setCareerPointOfContact(careerPointOfContact));
    };
};

export const getCareerAdvertisements = (careerId) => {
    return async (dispatch, getState) => {
        const careerAdvertisements = await asyncGetCareerAdvertisements(careerId);
        dispatch(setCareerAdvertisements(careerAdvertisements));
    };
};

export const toggleCareerCommentLike = (commentId) => {
    return async (dispatch, getState) => {
        await asyncToggleCareerCommentLike(commentId);
        dispatch(setCareerComments(getState().career.comments.map((comment) => {
            if (comment.id === commentId) {
                return Object.assign({}, comment, {
                    liked: !comment.liked,
                });
            }

            return comment;
        })));
    };
};

export const addCareerComment = (careerId, comment) => {
    return async (dispatch, getState) => {
        await asyncAddCareerComment(careerId, comment);
        const { comments } = getState().career;

        dispatch(setCareerComments(comments.concat({
            user: {
                name: 'You',
            },

            createdAt: new Date(),
            id: comments.length,
            content: comment,
        })));
    };
};

export const addTargetCareer = (careerId) => {
    return {
        type: 'ADD_TARGET_CAREER',
        careerId,
    };
};

export const removeTargetCareer = () => {
    return {
        type: 'REMOVE_TARGET_CAREER',
    };
};

export const setTargetCareer = (careerId) => {
    return async (dispatch, getState) => {
        await asyncSetTargetCareer(careerId);
        dispatch(addTargetCareer(careerId));
    };
};

export const unsetTargetCareer = () => {
    return async (dispatch, getState) => {
        await asyncUnsetTargetCareer();
        dispatch(removeTargetCareer());
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

export const setCareerAdvertisements = (careerAdvertisements) => {
    return {
        type: 'SET_CAREER_ADVERTISEMENTS',
        careerAdvertisements,
    };
};