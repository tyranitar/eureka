import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { TextField, IconButton, RaisedButton } from 'material-ui';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { setErrorMessage } from '../../actions/login-actions';

import './Login.css';

const getIconButtonProps = (primaryColor) => {
    return {
        style: {
            margin: '25px',
            width: '150px',
            height: '150px',
            padding: '20px',
            border: `5px solid ${primaryColor}`,
            borderRadius: '50%',
        },

        iconStyle: {
            width: '100px',
            height: '100px',
            fill: `${primaryColor}`,
        },
    };
};

const mapStateToProps = (state) => {
    const { login } = state;

    return {
        errorMessages: login.errorMessages,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {
            if (!email) {
                dispatch(setErrorMessage('email', "This field is required"));
            }

            if (!password) {
                dispatch(setErrorMessage('password', "This field is required"));
            }

            if (email && password) {
                dispatch(push('/questionnaire'));
            }
        },

        onFocus: (field) => {
            dispatch(setErrorMessage(field, ""));
        },
    };
};

class Login extends Component {
    login() {
        const { email, password } = this.refs;

        this.props.login(email.getValue(), password.getValue());
    }

    render() {
        return (
            <Card className="login-card">
                <CardText className="login-logo">
                    <IconButton { ...getIconButtonProps(this.props.muiTheme.palette.primary1Color) }>
                        <Fingerprint />
                    </IconButton>
                </CardText>
                <CardTitle className="login-card-title" style={{ color: this.props.muiTheme.palette.primary1Color }}>
                    Capstone
                </CardTitle>
                <CardText className="login-card-text">
                    <TextField
                        className="login-text-field"
                        ref="email"
                        floatingLabelText="Email"
                        errorText={ this.props.errorMessages.email }
                        onFocus={ this.props.onFocus.bind(null, 'email') }
                    />
                    <TextField
                        className="login-text-field"
                        ref="password"
                        type="password"
                        floatingLabelText="Password"
                        errorText={ this.props.errorMessages.password }
                        onFocus={ this.props.onFocus.bind(null, 'password') }
                    />
                </CardText>
                <CardActions className="login-card-actions">
                    <RaisedButton label="Login" primary={ true } fullWidth={ true } onClick={ this.login.bind(this) } />
                </CardActions>
            </Card>
        );
    }
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default muiThemeable()(Login);