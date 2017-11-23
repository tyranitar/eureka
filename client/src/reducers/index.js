import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questionnaire from './questionnaire-reducer';
import career from './career-reducer';
import search from './search-reducer';
import login from './login-reducer';

const reducers = combineReducers({
    router: routerReducer,
    questionnaire,
    career,
    search,
    login,
});

export default reducers;