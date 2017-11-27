const initialState = {
    details: {
        title: '',
        description: '',
        charts: [],
        favorited: false,
        featured: false,
        id: 0,
    },

    educationPaths: [],
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

const careerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CAREER_DETAILS':
            return handleSetCareerDetails(state, action);
        case 'RESET_CAREER_DETAILS':
            return handleResetCareerDetails(state, action);
        case 'SET_CAREER_EDUCATION_PATHS':
            return handleSetCareerEducationPaths(state, action);
        default:
            return state;
    }
};

export default careerReducer;