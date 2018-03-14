import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Add from 'material-ui/svg-icons/content/add';
import Close from 'material-ui/svg-icons/navigation/close';

import {
    Checkbox,
    FlatButton,
    RaisedButton,
    TextField,
    IconButton,
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
    addStep,
    removeTodo,
    removeStep,
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
        getRoadmap: () => dispatch(getRoadmap()),
        setActiveStep: (activeStep) => dispatch(setActiveStep(activeStep)),
        completeStep: (completedStep) => dispatch(completeStep(completedStep)),
        toggleTodo: (activeStep, toggledTodo) => dispatch(toggleTodo(activeStep, toggledTodo)),
        addTodo: (activeStep, todoTitle) => dispatch(addTodo(activeStep, todoTitle)),
        addStep: (stepTitle, stepDescription) => dispatch(addStep(stepTitle, stepDescription)),
        openDialog: (props) => dispatch(openDialog(props)),
        closeDialog: () => dispatch(closeDialog()),
        openSnackbar: (props) => dispatch(openSnackbar(props)),
        removeTodo: (activeStep, removedTodo) => dispatch(removeTodo(activeStep, removedTodo)),
        removeStep: (removedStep) => dispatch(removeStep(removedStep)),
    };
};

class Roadmap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addTodoTextFieldValue: '',
            addStepTitleTextFieldValue: '',
            addStepDescriptionTextFieldValue: '',
        };
    }

    componentDidMount() {
        const {
            getRoadmap,
        } = this.props;

        getRoadmap();
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

    onAddTodoCurry = (step) => () => {
        const {
            openDialog,
            closeDialog,
        } = this.props;

        this.setState({
            addTodoTextFieldValue: '',
        });

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
                    onClick={ () => { this.onDialogAddTodoButtonClick(step) } }
                />
            ],

            children: (
                <TextField
                    onChange={ this.updateAddTodoTextFieldValue }
                    hintText="Todo Title"
                    fullWidth={ true }
                />
            ),
        });
    }

    isCompleteButtonDisabled = (todos) => {
        let ret = false;

        todos.some((todo) => {
            ret = !todo.completed;
            return ret;
        });

        return ret;
    }

    renderStepTodos = (step, todos, disabled) => {
        const {
            muiTheme: {
                palette: {
                    primary3Color,
                },
            },
        } = this.props;

        return todos.map(({
            title,
            completed,
        }, idx) => (
            <div
                key={ idx }
                className="roadmap-step-checkbox-container">
                <div>
                    <Checkbox
                        label={ title }
                        checked={ completed }
                        onCheck={ () => { this.props.toggleTodo(step, idx) } }
                        disabled={ disabled }
                    />
                </div>
                <div className="roadmap-step-checkbox-remove">
                    <IconButton
                        onClick={ () => { this.props.removeTodo(step, idx) } }
                        iconStyle={{ fill: primary3Color }}
                        style={{
                            width: '24px',
                            height: '24px',
                            padding: '0px',
                        }}>
                        <Close />
                    </IconButton>
                </div>
            </div>
        ))
    }

    onRemoveStep = (activeStep) => {
        const {
            steps,
            openDialog,
            closeDialog,
            removeStep,
        } = this.props;

        openDialog({
            title: 'Remove Milestone',
            width: '300px',
            children: (
                <span>
                    { `Are you sure you want to remove the milestone ${ steps[activeStep].title }?` }
                </span>
            ),
            actions: [
                <FlatButton
                    primary={ true }
                    label="Cancel"
                    onClick={ closeDialog }
                />,

                <RaisedButton
                    style={{ marginLeft: '8px' }}
                    primary={ true }
                    label="Remove"
                    onClick={ () => {
                        removeStep(activeStep);
                        closeDialog();
                    } }
                />
            ],
        });
    }

    renderSteps = () => {
        const {
            steps,
            setActiveStep,
            completeStep,
            removeStep,
            muiTheme: {
                palette: {
                    primary1Color,
                },
            },
        } = this.props;

        return steps.map(({
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
                    { todos.length ? <p style={{ color: primary1Color }}>{ 'Todos:' }</p> : null }
                    { this.renderStepTodos(idx, todos, completed) }
                    <FlatButton
                        disabled={ completed }
                        className="roadmap-step-add-todo-button"
                        label="Add Todo"
                        primary={ true }
                        icon={ <Add /> }
                        onClick={ this.onAddTodoCurry(idx) }
                    />
                    <div className="roadmap-step-buttons">
                        <RaisedButton
                            disabled={ completed || this.isCompleteButtonDisabled(todos) }
                            label="Complete"
                            primary={ true }
                            onClick={ completeStep.bind(null, idx) }
                        />
                        <FlatButton
                            label="Remove"
                            secondary={ true }
                            onClick={ this.onRemoveStep.bind(this, idx) }
                        />
                    </div>
                </StepContent>
            </Step>
        ));
    }

    updateAddStepTitleTextFieldValue = (evt, addStepTitleTextFieldValue) => {
        this.setState({
            addStepTitleTextFieldValue,
        });
    }

    updateAddStepDescriptionTextFieldValue = (evt, addStepDescriptionTextFieldValue) => {
        this.setState({
            addStepDescriptionTextFieldValue,
        });
    }

    onDialogAddStepButtonClick = () => {
        const {
            addStep,
            closeDialog,
            openSnackbar,
        } = this.props;

        const {
            addStepTitleTextFieldValue,
            addStepDescriptionTextFieldValue,
        } = this.state;

        if (!addStepTitleTextFieldValue) {
            openSnackbar({
                message: "Please provide a milestone title",
            });

            return;
        }

        if (!addStepDescriptionTextFieldValue) {
            openSnackbar({
                message: "Please provide a milestone description",
            });

            return;
        }

        addStep(addStepTitleTextFieldValue, addStepDescriptionTextFieldValue);
        closeDialog();
    }

    // TODO: Implement this.
    onAddStep = () => {
        const {
            openDialog,
            closeDialog,
        } = this.props;

        this.setState({
            addStepTitleTextFieldValue: '',
            addStepDescriptionTextFieldValue: '',
        });

        openDialog({
            title: 'Add Milestone',
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
                    onClick={ this.onDialogAddStepButtonClick }
                />
            ],

            children: (
                <div>
                    <TextField
                        onChange={ this.updateAddStepTitleTextFieldValue }
                        hintText="Milestone Title"
                        fullWidth={ true }
                        />
                    <TextField
                        onChange={ this.updateAddStepDescriptionTextFieldValue }
                        hintText="Milestone Description"
                        fullWidth={ true }
                        multiLine={ true }
                        />
                </div>
            ),
        });
    }

    render() {
        const {
            activeStep,
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
                                { this.renderSteps() }
                                <Step>
                                    <StepButton
                                        icon={ <Add color={ primary1Color } /> }
                                        onClick={ this.onAddStep }>
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