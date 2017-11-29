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
        getRoadmap: () => dispatch(getRoadmap()),
        setActiveStep: (activeStep) => dispatch(setActiveStep(activeStep)),
        completeStep: (completedStep) => dispatch(completeStep(completedStep)),
        toggleTodo: (activeStep, toggledTodo) => dispatch(toggleTodo(activeStep, toggledTodo)),
        addTodo: (activeStep, todoTitle) => dispatch(addTodo(activeStep, todoTitle)),
        openDialog: (props) => dispatch(openDialog(props)),
        closeDialog: () => dispatch(closeDialog()),
        openSnackbar: (props) => dispatch(openSnackbar(props)),
    };
};

class Roadmap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addTodoTextFieldValue: '',
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

    renderStepTodos = (step, todos, disabled) => (
        todos.map(({
            title,
            completed,
        }, idx) => (
            <Checkbox
                className="roadmap-step-checkbox"
                key={ idx }
                label={ title }
                checked={ completed }
                onCheck={ () => { this.props.toggleTodo(step, idx) } }
                disabled={ disabled }
            />
        ))
    )

    renderSteps = () => {
        const {
            steps,
            setActiveStep,
            completeStep,
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
                    </div>
                </StepContent>
            </Step>
        ));
    }

    // TODO: Implement this.
    onAddStep = () => {
        this.props.openSnackbar({
            message: "Add Milestone has not been implemented yet!",
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