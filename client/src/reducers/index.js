import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questionnaire from './questionnaire-reducer';

const reducers = combineReducers({
    router: routerReducer,
    questionnaire,
});

export default reducers;