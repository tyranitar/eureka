import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { getCareerComments } from '../../actions/career-actions';
import './CareerComments.css';

const mapStateToProps = (state) => {
    const { comments } = state.career;

    return {
        comments,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCareerComments: (careerId) => {
            dispatch(getCareerComments(careerId));
        },
    };
};

class CareerComments extends Component {
    componentDidMount() {
        const {
            careerId,
            getCareerComments,
        } = this.props;

        getCareerComments(careerId);
    }

    render() {
        const {
            comments,
        } = this.props;

        const {
            palette: {
                accent3Color,
            },
        } = this.props.muiTheme;

        return (
            <div>
                { 'Comments ' }
                <span style={{
                        color: accent3Color,
                    }}>
                    { `(${ comments.length })` }
                </span>
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
)(CareerComments));