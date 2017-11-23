import React, { Component } from 'react';
import { connect } from 'react-redux';

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

class Container extends Component {
    componentDidMount() {
        //
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
)(Container);