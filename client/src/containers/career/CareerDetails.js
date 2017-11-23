import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CareerDetails.css';

const mapStateToProps = (state) => {
    return {
        //
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //
    };
};

class CareerDetails extends Component {
    componentDidMount() {
        //
    }

    render() {
        return (
            <div>
                Details
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
)(CareerDetails);