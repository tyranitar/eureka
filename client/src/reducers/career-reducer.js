// Template for targetCareer.
const defaultTargetCareer = {
    id: null,
    title: null,
};

const initialState = {
    advertisements: [],
    educationPaths: [],
    comments: [],

    details: {
        title: '',
        description: '',
        charts: [],
        favorited: false,
        featured: false,
        id: 0,
    },

    pointOfContact: {
        name: '',
    },

    targetCareer: defaultTargetCareer,
    videos: [],
};

const handleSetCareerDetails = (state, action) => {
    return Object.assign({}, state, {
        details: action.careerDetails,
    });
};

const handleResetCareerDetails = (state, action) => {
    return Object.assign({}, state, {
        details: initialState.details,
    });
};

const handleSetCareerEducationPaths = (state, action) => {
    return Object.assign({}, state, {
        educationPaths: action.careerEducationPaths,
    });
};

const handleSetCareerComments = (state, action) => {
    return Object.assign({}, state, {
        comments: action.careerComments,
    });
};

const handleSetCareerPointOfContact = (state, action) => {
    return Object.assign({}, state, {
        pointOfContact: action.careerPointOfContact,
    });
};

const handleSetCareerAdvertisements = (state, action) => {
    return Object.assign({}, state, {
        advertisements: action.careerAdvertisements,
    });
};

const handleAddTargetCareer = (state, action) => {
    return Object.assign({}, state, {
        targetCareer: action.career,
    });
};

const handleRemoveTargetCareer = (state, action) => {
    return Object.assign({}, state, {
        targetCareer: defaultTargetCareer,
    });
};

const handleSetCareerVideos = (state, action) => {
    return Object.assign({}, state, {
        videos: action.careerVideos,
    });
};

const careerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CAREER_DETAILS':
            return handleSetCareerDetails(state, action);
        case 'RESET_CAREER_DETAILS':
            return handleResetCareerDetails(state, action);
        case 'SET_CAREER_EDUCATION_PATHS':
            return handleSetCareerEducationPaths(state, action);
        case 'SET_CAREER_COMMENTS':
            return handleSetCareerComments(state, action);
        case 'SET_CAREER_POINT_OF_CONTACT':
            return handleSetCareerPointOfContact(state, action);
        case 'SET_CAREER_ADVERTISEMENTS':
            return handleSetCareerAdvertisements(state, action);
        case 'ADD_TARGET_CAREER':
            return handleAddTargetCareer(state, action);
        case 'REMOVE_TARGET_CAREER':
            return handleRemoveTargetCareer(state, action);
        case 'SET_CAREER_VIDEOS':
            return handleSetCareerVideos(state, action);
        default:
            return state;
    }
};

export default careerReducer;