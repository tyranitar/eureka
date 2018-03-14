import roadmap from '../mocks/roadmap';

export const asyncGetRoadmap = () => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve(roadmap);
    }, 0));
};

export const asyncCompleteStep = (completedStep) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 0));
};

export const asyncToggleTodo = (activeStep, toggledTodo) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 0));
};

export const asyncAddTodo = (activeStep, todoTitle) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 0));
};

export const asyncAddStep = (stepTitle, stepDescription) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 0));
};

export const asyncRemoveTodo = (activeStep, removedTodo) => {
    return new Promise(setTimeout.bind(null, (resolve, reject) => {
        resolve();
    }, 0));
};