import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Add from 'material-ui/svg-icons/content/add';

import {
    Checkbox,
    FlatButton,
    RaisedButton,
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
} from '../../actions/roadmap-actions';

import { openDialog, closeDialog } from '../../actions/dialog-actions';
import './Roadmap.css';

// TODO: Add roadmap milestone functionality (as final step with custom icon).
// TODO: Add roadmap todo functionality.
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

        openDialog: (props) => {
            dispatch(openDialog(props));
        },

        closeDialog: () => {
            dispatch(closeDialog());
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
    dialogActions,
}) => () => {
    dialogActions.openDialog({});
};

const renderSteps = ({
    steps,
    setActiveStep,
    completeStep,
    toggleTodo,
    dialogActions,
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
                    className="roadmap-step-add-todo-button"
                    label="Add Todo"
                    primary={ true }
                    icon={ <Add /> }
                    onClick={ onAddTodoCurry({
                        dialogActions,
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

                                    dialogActions: {
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