import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Share from 'material-ui/svg-icons/social/share';
import { blue500, grey300, cyan500, } from 'material-ui/styles/colors';

import {
    ListItem,
    Avatar,
    IconButton,
} from 'material-ui';

import { getCareerComments, toggleCareerCommentLike } from '../../actions/career-actions';
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

        onLikeButtonClick: (commentId) => {
            dispatch(toggleCareerCommentLike(commentId));
        },
    };
};

const renderComments = ({
    comments,
    usernameColor,
    createdAtColor,
    onLikeButtonClick,
}) => {
    return comments.map((comment, idx) => (
        <div key={ idx }>
            <ListItem leftAvatar={
                    <Avatar src={ comment.user.imageUrl } style={{
                        marginTop: '12px',
                    }} />
            } disabled={ true }>
                <div className="career-comment-username" style={{
                        color: usernameColor,
                    }}>
                    { comment.user.name }
                </div>
                <div className="career-comment-created-at" style={{
                        color: createdAtColor,
                    }}>
                    { comment.createdAt.toLocaleDateString() }
                </div>
                <div className="career-comment-content">
                    { comment.content }
                </div>
                <div className="career-comment-actions">
                    <IconButton onClick={ onLikeButtonClick.bind(null, comment.id) }>
                        { comment.liked ? <ThumbUp color={ blue500 } /> : <ThumbUp color={ grey300 } /> }
                    </IconButton>
                    <IconButton>
                        <Share color={ cyan500 } />
                    </IconButton>
                </div>
            </ListItem>
        </div>
    ))
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
            onLikeButtonClick,
        } = this.props;

        const {
            palette: {
                primary1Color,
                accent3Color,
            },
        } = this.props.muiTheme;

        return (
            <div>
                <div>
                    { 'Comments ' }
                    <span style={{
                            color: accent3Color,
                        }}>
                        { `(${ comments.length })` }
                    </span>
                </div>
                <div className="career-comments">
                    { renderComments({
                        comments,
                        usernameColor: primary1Color,
                        createdAtColor: accent3Color,
                        onLikeButtonClick,
                    }) }
                </div>
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