import _ from 'lodash';

const initialState = {
    steps: [],
};

const handleSetRoadmap = (state, action) => {
    return Object.assign({}, state, _.pick(action.roadmap, [
        'steps',
    ]));
};

const roadmapReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ROADMAP':
            return handleSetRoadmap(state, action);
        default:
            return state;
    }
};

export default roadmapReducer;