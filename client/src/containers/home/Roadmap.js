import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

import {
    Step,
    Stepper,
    StepButton,
    StepContent,
} from 'material-ui/Stepper';

import { getRoadmap } from '../../actions/roadmap-actions';
import './Roadmap.css';

// TODO: Add roadmap milestone functionality.
// TODO: Add roadmap todo functionality.
// TODO: Add reminder functionality.

const mapStateToProps = (state) => {
    const { steps } = state.roadmap;

    return {
        steps,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRoadmap: () => {
            dispatch(getRoadmap());
        },
    };
};

const renderSteps = (steps) => (
    steps.map(({
        title,
    }, idx) => (
        <Step key={ idx }>
            <StepButton>
                { title }
            </StepButton>
            <StepContent>
                <p>Test</p>
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
        } = this.props;

        return (
            <div className="roadmap-container">
                <Row center="xs">
                    <Col xs={4}>
                        <div className="roadmap">
                            <Stepper
                                activeStep={ 0 }
                                linear={ false }
                                orientation="vertical">
                                { renderSteps(steps) }
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Roadmap);