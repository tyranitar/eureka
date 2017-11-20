import { combineReducers } from 'redux';
import questionnaire from './questionnaire-reducer';

const reducers = combineReducers({
    questionnaire,
});

export default reducers;