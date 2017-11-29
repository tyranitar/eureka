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

    return Object.assign({}, state, {
        steps: state.steps.map((step, idx) => {
            if (idx === completedStep) {
                return Object.assign({}, step, {
                    completed: true,
                });
            }

            return step;
        }),

        activeStep: Math.min(state.activeStep + 1, state.steps.length - 1),
    });
};

const handleToggleTodo = (state, action) => {
    const { activeStep, toggledTodo } = action;

    return Object.assign({}, state, {
        steps: state.steps.map((step, idx) => {
            if (idx === activeStep) {
                return Object.assign({}, step, {
                    todos: step.todos.map((todo, _idx) => {
                        if (_idx === toggledTodo) {
                            return Object.assign({}, todo, {
                                completed: !todo.completed,
                            });
                        }

                        return todo;
                    }),
                });
            }

            return step;
        }),
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
        default:
            return state;
    }
};

export default roadmapReducer;