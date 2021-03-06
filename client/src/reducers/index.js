import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questionnaire from './questionnaire-reducer';
import favorites from './favorites-reducer';
import snackbar from './snackbar-reducer';
import roadmap from './roadmap-reducer';
import career from './career-reducer';
import dialog from './dialog-reducer';
import report from './report-reducer';
import search from './search-reducer';
import login from './login-reducer';
import news from './news-reducer';

const reducers = combineReducers({
    router: routerReducer,
    questionnaire,
    favorites,
    snackbar,
    roadmap,
    career,
    dialog,
    report,
    search,
    login,
    news,
});

export default reducers;