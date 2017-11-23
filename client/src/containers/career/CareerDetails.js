import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCareerDetails, resetCareerDetails } from '../../actions/career-actions';
import './CareerDetails.css';

const mapStateToProps = (state) => {
    const { details } = state.career;

    return {
        details,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCareerDetails: (careerId) => {
            dispatch(getCareerDetails(careerId));
        },

        resetCareerDetails: () => {
            dispatch(resetCareerDetails());
        },
    };
};

class CareerDetails extends Component {
    componentDidMount() {
        const { careerId, getCareerDetails } = this.props;

        getCareerDetails(careerId);
    }

    render() {
        const {
            title,
            // description,
            // salary,
            // outlook,
            // education,
            // favorited,
            // featured,
            // id,
        } = this.props.details;

        return (
            <div>
                { title }
            </div>
        );
    }

    componentWillUnmount() {
        this.props.resetCareerDetails();
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CareerDetails);