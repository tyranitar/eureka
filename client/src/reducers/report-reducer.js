const initialState = {
    title: '',
    careerTitle: '',
    createdAt: null,
    charts: [],
    insights: [],
    educationPlans: [],
};

const handleSetReport = (state, action) => {
    const {
        title,
        careerTitle,
        createdAt,
        charts,
        insights,
        educationPlans,
    } = action.report;
    return Object.assign({}, state, {
        title,
        careerTitle,
        createdAt,
        charts,
        insights,
        educationPlans,
    });
};

const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REPORT':
            return handleSetReport(state, action);
        default:
            return state;
    }
};

export default reportReducer;