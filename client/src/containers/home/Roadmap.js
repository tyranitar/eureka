import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';

import {
    Checkbox,
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
} from '../../actions/roadmap-actions';

import './Roadmap.css';

// TODO: Add roadmap milestone functionality.
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

        completeStep: (step) => {
            dispatch(completeStep(step));
        },
    };
};

const renderStepTodos = ({
    activeStep,
    todos,
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
        />
    ))
);

const renderSteps = ({
    steps,
    setActiveStep,
    completeStep,
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
                <p style={{ color: primaryColor }}>{ 'Todos:' }</p>
                { renderStepTodos({
                    activeStep: idx,
                    todos,
                }) }
                <div className="roadmap-step-buttons">
                    <RaisedButton
                        disabled={ completed }
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
                                    primaryColor: primary1Color,
                                }) }
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