import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CareerComments.css';

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

class CareerComments extends Component {
    componentDidMount() {
        //
    }

    render() {
        return (
            <div>
                Comments
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
)(CareerComments);