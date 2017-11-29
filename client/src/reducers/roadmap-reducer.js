import _ from 'lodash';

const initialState = {
    steps: [],
    activeStep: 0,
};

const handleSetRoadmap = (state, action) => {
    return Object.assign({}, state, _.pick(action.roadmap, [
        'steps',
        'activeStep',
    ]));
};

const handleSetActiveStep = (state, action) => {
    return Object.assign({}, state, {
        activeStep: action.activeStep,
    });
};

const handleCompleteStep = (state, action) => {
    const { completedStep } = action;
    const updatedSteps = state.steps.slice();

    updatedSteps[completedStep] = Object.assign({}, updatedSteps[completedStep], {
        completed: true,
    });

    return Object.assign({}, state, {
        steps: updatedSteps,
        activeStep: Math.min(state.activeStep + 1, state.steps.length - 1),
    });
};

const handleToggleTodo = (state, action) => {
    const { activeStep, toggledTodo } = action;
    const updatedSteps = state.steps.slice();
    const updatedTodos = updatedSteps[activeStep].todos.slice();

    updatedTodos[toggledTodo] = Object.assign({}, updatedTodos[toggledTodo], {
        completed: !updatedTodos[toggledTodo].completed,
    });

    updatedSteps[activeStep] = Object.assign({}, updatedSteps[activeStep], {
        todos: updatedTodos,
    });

    return Object.assign({}, state, {
        steps: updatedSteps,
    });
};

const handleAddTodo = (state, action) => {
    const { activeStep, todoTitle } = action;
    const updatedSteps = state.steps.slice();

    const updatedTodos = updatedSteps[activeStep].todos.concat([{
        title: todoTitle,
        completed: false,
    }]);

    updatedSteps[activeStep] = Object.assign({}, updatedSteps[activeStep], {
        todos: updatedTodos,
    });

    return Object.assign({}, state, {
        steps: updatedSteps,
    });
};

const roadmapReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ROADMAP':
            return handleSetRoadmap(state, action);
        case 'SET_ACTIVE_STEP':
            return handleSetActiveStep(state, action);
        case 'COMPLETE_STEP':
            return handleCompleteStep(state, action);
        case 'TOGGLE_TODO':
            return handleToggleTodo(state, action);
        case 'ADD_TODO':
            return handleAddTodo(state, action);
        default:
            return state;
    }
};

export default roadmapReducer;