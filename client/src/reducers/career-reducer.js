const initialState = {
    details: {
        title: '',
        description: '',
        charts: [],
        favorited: false,
        featured: false,
        id: 0,
    },
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

const careerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CAREER_DETAILS':
            return handleSetCareerDetails(state, action);
        case 'RESET_CAREER_DETAILS':
            return handleResetCareerDetails(state, action);
        default:
            return state;
    }
};

export default careerReducer;