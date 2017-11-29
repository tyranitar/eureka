import {
    asyncGetRoadmap,
    asyncCompleteStep,
    asyncToggleTodo,
} from '../api/roadmap-api';

export const getRoadmap = () => {
    return (dispatch, getState) => {
        asyncGetRoadmap().then((roadmap) => {
            dispatch(setRoadmap(roadmap));
        });
    };
};

export const setRoadmap = (roadmap) => {
    return {
        type: 'SET_ROADMAP',
        roadmap,
    };
};

export const setActiveStep = (activeStep) => {
    return {
        type: 'SET_ACTIVE_STEP',
        activeStep,
    };
};

export const completeStep = (completedStep) => {
    return (dispatch, getState) => {
        asyncCompleteStep(completedStep).then(() => {
            dispatch({
                type: 'COMPLETE_STEP',
                completedStep,
            });
        });
    };
};

export const toggleTodo = (activeStep, toggledTodo) => {
    return (dispatch, getState) => {
        asyncToggleTodo(activeStep, toggledTodo).then(() => {
            dispatch({
                type: 'TOGGLE_TODO',
                activeStep,
                toggledTodo,
            });
        });
    };
};