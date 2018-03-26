const initialState = {
    studentName: '',
    careerTitle: '',
    createdAt: null,
    charts: [],
    insights: [],
    educationPlans: [],
};

const handleSetReport = (state, action) => {
    const {
        studentName,
        careerTitle,
        createdAt,
        charts,
        insights,
        educationPlans,
    } = action.report;
    return Object.assign({}, state, {
        studentName,
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