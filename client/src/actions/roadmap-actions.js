import {
    asyncGetRoadmap,
    asyncCompleteStep,
    asyncToggleTodo,
    asyncAddTodo,
    asyncAddStep,
    asyncRemoveTodo,
    asyncRemoveStep,
} from '../api/roadmap-api';

export const getRoadmap = () => {
    return async (dispatch, getState) => {
        const roadmap = await asyncGetRoadmap();
        dispatch(setRoadmap(roadmap));
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
    return async (dispatch, getState) => {
        await asyncCompleteStep(completedStep);
        dispatch({
            type: 'COMPLETE_STEP',
            completedStep,
        });
    };
};

export const toggleTodo = (activeStep, toggledTodo) => {
    return async (dispatch, getState) => {
        await asyncToggleTodo(activeStep, toggledTodo);
        dispatch({
            type: 'TOGGLE_TODO',
            activeStep,
            toggledTodo,
        });
    };
};

export const addTodo = (activeStep, todoTitle) => async (dispatch, getState) => {
    await asyncAddTodo(activeStep, todoTitle);
    dispatch({
        type: 'ADD_TODO',
        activeStep,
        todoTitle,
    });
};

export const addStep = (stepTitle, stepDescription) => async (dispatch, getState) => {
    await asyncAddStep(stepTitle, stepDescription);
    dispatch({
        type: 'ADD_STEP',
        stepTitle,
        stepDescription,
    });
};

export const removeTodo = (activeStep, removedTodo) => async (dispatch, getState) => {
    await asyncRemoveTodo(activeStep, removedTodo);
    dispatch({
        type: 'REMOVE_TODO',
        activeStep,
        removedTodo,
    });
};

export const removeStep = (removedStep) => async (dispatch, getState) => {
    await asyncRemoveStep(removedStep);
    dispatch({
        type: 'REMOVE_STEP',
        removedStep,
    });
};