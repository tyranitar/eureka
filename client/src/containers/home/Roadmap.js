import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Add from 'material-ui/svg-icons/content/add';

import {
    Checkbox,
    FlatButton,
    RaisedButton,
    TextField,
} from 'material-ui';

import {
    Step,
    Stepper,
    StepButton,
    StepContent,
} from 'material-ui/Stepper';

import {
    getRoadmap,
    setActiveStep,
    completeStep,
    toggleTodo,
    addTodo,
} from '../../actions/roadmap-actions';

import { openDialog, closeDialog } from '../../actions/dialog-actions';
import { openSnackbar } from '../../actions/snackbar-actions';
import './Roadmap.css';

// TODO: Add roadmap milestone functionality (as final step with custom icon).
// TODO: Add reminder functionality.

const mapStateToProps = (state) => {
    const {
        steps,
        activeStep,
    } = state.roadmap;

    return {
        steps,
        activeStep,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRoadmap: () => {
            dispatch(getRoadmap());
        },

        setActiveStep: (activeStep) => {
            dispatch(setActiveStep(activeStep));
        },

        completeStep: (completedStep) => {
            dispatch(completeStep(completedStep));
        },

        toggleTodo: (activeStep, toggledTodo) => {
            dispatch(toggleTodo(activeStep, toggledTodo));
        },

        addTodo: (activeStep, todoTitle) => {
            dispatch(addTodo(activeStep, todoTitle));
        },

        openDialog: (props) => {
            dispatch(openDialog(props));
        },

        closeDialog: () => {
            dispatch(closeDialog());
        },

        openSnackbar: (props) => {
            dispatch(openSnackbar(props));
        },
    };
};

const renderStepTodos = ({
    activeStep,
    todos,
    toggleTodo,
    disabled,
}) => (
    todos.map(({
        title,
        completed,
    }, idx) => (
        <Checkbox
            className="roadmap-step-checkbox"
            key={ idx }
            label={ title }
            checked={ completed }
            onCheck={ toggleTodo.bind(null, activeStep, idx) }
            disabled={ disabled }
        />
    ))
);

const isCompleteButtonDisabled = (todos) => {
    let ret = false;

    todos.some((todo) => {
        ret = !todo.completed;
        return ret;
    });

    return ret;
};

const onAddTodoCurry = ({
    activeStep,

    addTodoProps: {
        openDialog,
        closeDialog,
        updateTextFieldValue,
        onAddButtonClick,
    },
}) => () => {
    openDialog({
        title: 'Add Todo',
        width: '300px',

        actions: [
            <FlatButton
                primary={ true }
                label="Cancel"
                onClick={ closeDialog }
            />,

            <RaisedButton
                style={{ marginLeft: '8px' }}
                primary={ true }
                label="Add"
                onClick={ () => { onAddButtonClick(activeStep) } }
            />
        ],

        children: (
            <TextField
                onChange={ updateTextFieldValue }
                hintText="Todo Title"
                fullWidth={ true }
            />
        ),
    });
};

const renderSteps = ({
    steps,
    setActiveStep,
    completeStep,
    toggleTodo,
    addTodoProps,
    primaryColor,
}) => (
    steps.map(({
        title,
        description,
        completed,
        todos,
    }, idx) => (
        <Step
            key={ idx }
            completed={ completed }>
            <StepButton onClick={ setActiveStep.bind(null, idx) }>
                { title }
            </StepButton>
            <StepContent>
                <p>{ description }</p>
                { todos.length ? <p style={{ color: primaryColor }}>{ 'Todos:' }</p> : null }
                { renderStepTodos({
                    activeStep: idx,
                    todos,
                    toggleTodo,
                    disabled: completed,
                }) }
                <FlatButton
                    disabled={ completed }
                    className="roadmap-step-add-todo-button"
                    label="Add Todo"
                    primary={ true }
                    icon={ <Add /> }
                    onClick={ onAddTodoCurry({
                        activeStep: idx,
                        addTodoProps,
                    }) }
                />
                <div className="roadmap-step-buttons">
                    <RaisedButton
                        disabled={ completed || isCompleteButtonDisabled(todos) }
                        label="Complete"
                        primary={ true }
                        onClick={ completeStep.bind(null, idx) }
                    />
                </div>
            </StepContent>
        </Step>
    ))
);

class Roadmap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addTodoTextFieldValue: '',
        };
    }

    updateAddTodoTextFieldValue = (evt, addTodoTextFieldValue) => {
        this.setState({
            addTodoTextFieldValue,
        });
    }

    onDialogAddTodoButtonClick = (activeStep) => {
        const todoTitle = this.state.addTodoTextFieldValue;

        const {
            addTodo,
            closeDialog,
            openSnackbar,
        } = this.props;

        if (todoTitle) {
            addTodo(activeStep, todoTitle);
            closeDialog();
        } else {
            openSnackbar({
                message: "Please enter a title for the todo",
            });
        }
    }

    componentDidMount() {
        const {
            getRoadmap,
        } = this.props;

        getRoadmap();
    }

    render() {
        const {
            steps,
            activeStep,
            setActiveStep,
            completeStep,
            toggleTodo,
            openDialog,
            closeDialog,
            muiTheme: {
                palette: {
                    primary1Color,
                },
            },
        } = this.props;

        return (
            <div className="roadmap-container">
                <Row center="xs">
                    <Col xs={4}>
                        <div className="roadmap">
                            <Stepper
                                activeStep={ activeStep }
                                linear={ false }
                                orientation="vertical">
                                { renderSteps({
                                    steps,
                                    setActiveStep,
                                    completeStep,
                                    toggleTodo,
                                    primaryColor: primary1Color,

                                    addTodoProps: {
                                        updateTextFieldValue: this.updateAddTodoTextFieldValue,
                                        onAddButtonClick: this.onDialogAddTodoButtonClick,
                                        openDialog,
                                        closeDialog,
                                    },
                                }) }
                                <Step>
                                    <StepButton icon={ <Add color={ primary1Color } /> }>
                                        Add Milestone
                                    </StepButton>
                                </Step>
                            </Stepper>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

    componentWillUnmount() {
        //
    }
}

export default muiThemeable()(connect(
    mapStateToProps,
    mapDispatchToProps
)(Roadmap));