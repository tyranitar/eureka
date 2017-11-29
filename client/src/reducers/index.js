import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questionnaire from './questionnaire-reducer';
import favorites from './favorites-reducer';
import career from './career-reducer';
import search from './search-reducer';
import login from './login-reducer';
import news from './news-reducer';

const reducers = combineReducers({
    router: routerReducer,
    questionnaire,
    favorites,
    career,
    search,
    login,
    news,
});

export default reducers;