import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questionnaire from './questionnaire-reducer';
import login from './login-reducer';

const reducers = combineReducers({
    router: routerReducer,
    questionnaire,
    login,
});

export default reducers;