import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questionnaire from './questionnaire-reducer';
import search from './search-reducer';
import login from './login-reducer';

const reducers = combineReducers({
    router: routerReducer,
    questionnaire,
    search,
    login,
});

export default reducers;