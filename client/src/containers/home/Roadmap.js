import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRoadmap } from '../../actions/roadmap-actions';
import './Roadmap.css';

const mapStateToProps = (state) => {
    const { items } = state.roadmap;

    return {
        items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRoadmap: () => {
            dispatch(getRoadmap());
        },
    };
};

class Roadmap extends Component {
    componentDidMount() {
        const {
            getRoadmap,
        } = this.props;

        getRoadmap();
    }

    render() {
        return (
            <div>
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