import _ from 'lodash';

const initialState = {
    items: [],
};

const handleSetRoadmap = (state, action) => {
    return Object.assign({}, state, _.pick(action.roadmap, [
        'items',
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