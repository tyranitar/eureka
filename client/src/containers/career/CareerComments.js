import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Share from 'material-ui/svg-icons/social/share';
import Person from 'material-ui/svg-icons/social/person';
import { blue500, grey300, cyan500, } from 'material-ui/styles/colors';

import {
    ListItem,
    Avatar,
    IconButton,
    TextField,
    RaisedButton,
} from 'material-ui';

import {
    getCareerComments,
    toggleCareerCommentLike,
    addCareerComment,
} from '../../actions/career-actions';

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

        addCareerComment: (careerId, comment) => {
            dispatch(addCareerComment(careerId, comment));
        },
    };
};

const renderComments = ({
    comments,
    onLikeButtonClick,

    palette: {
        primary1Color,
        accent3Color,
        alternateTextColor,
    },
}) => {
    return comments.map((comment, idx) => (
        <div key={ idx }>
            <ListItem leftAvatar={
                    <Avatar
                        icon={ <Person /> }
                        backgroundColor={ primary1Color }
                        color={ alternateTextColor }
                        src={ comment.user.imageUrl }
                        style={{
                            marginTop: '12px',
                        }}
                    />
            } disabled={ true }>
                <div className="career-comment-username" style={{
                        color: primary1Color,
                    }}>
                    { comment.user.name }
                </div>
                <div className="career-comment-created-at" style={{
                        color: accent3Color,
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
    constructor(props) {
        super(props);

        this.state = {
            commentFieldValue: '',
        };
    }

    componentDidMount() {
        const {
            careerId,
            getCareerComments,
        } = this.props;

        getCareerComments(careerId);
    }

    onCommentFieldChange = (evt) => {
        this.setState({
            commentFieldValue: evt.target.value,
        });
    }

    onCommentButtonClick() {
        const {
            careerId,
            addCareerComment,
        } = this.props;

        addCareerComment(careerId, this.state.commentFieldValue);

        this.setState({
            commentFieldValue: '',
        });
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
                alternateTextColor,
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
                        onLikeButtonClick,
                        palette: this.props.muiTheme.palette,
                    }) }
                </div>
                <ListItem
                    leftAvatar={
                        <Avatar
                            icon={ <Person /> }
                            backgroundColor={ primary1Color }
                            color={ alternateTextColor }
                        />
                    }
                    disabled={ true }>
                    <TextField
                        hintText="Share your thoughts!"
                        fullWidth={ true }
                        style={{
                            marginTop: '-16px',
                        }}
                        value={ this.state.commentFieldValue }
                        onChange={ this.onCommentFieldChange }
                    />
                    <div className="career-comments-comment-button">
                        <RaisedButton
                            label="Comment"
                            primary={ true }
                            onClick={ this.onCommentButtonClick.bind(this) }
                        />
                    </div>
                </ListItem>
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