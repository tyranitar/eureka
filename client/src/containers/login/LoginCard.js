import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { TextField, IconButton, RaisedButton } from 'material-ui';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import { connect } from 'react-redux';

import { setErrorMessage } from '../../actions/login-actions';
import { login, signup } from '../../actions/login-actions';
import './LoginCard.css';

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
    return { errorMessages: login.errorMessages };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (email, password, isLogin) => {
            if (!email) {
                dispatch(setErrorMessage('email', "This field is required"));
            }
            if (!password) {
                dispatch(setErrorMessage('password', "This field is required"));
            }
            if (email && password) {
                dispatch((isLogin ? login : signup)({ email, password }));
            }
        },

        onFocus: (field) => {
            dispatch(setErrorMessage(field, ""));
        },
    };
};

class LoginCard extends Component {
    isLogin() {
        return this.props.isLogin;
    }

    onClick() {
        const { email, password } = this.refs;
        this.props.onClick(email.getValue(), password.getValue(), this.isLogin());
    }

    render() {
        const isLogin = this.isLogin();
        return (
            <div>
                <Card className="login-card">
                    <CardText className="login-logo">
                        <IconButton { ...getIconButtonProps(this.props.muiTheme.palette.primary1Color) }>
                            <Fingerprint />
                        </IconButton>
                    </CardText>
                    <CardTitle className="login-card-title" style={{ color: this.props.muiTheme.palette.primary1Color }}>
                        Eureka
                    </CardTitle>
                    <CardText className="login-card-text">
                        <TextField
                            className="login-text-field"
                            ref="email"
                            hintText="Email"
                            errorText={ this.props.errorMessages.email }
                            onFocus={ this.props.onFocus.bind(null, 'email') }
                        />
                        <TextField
                            className="login-text-field"
                            ref="password"
                            type="password"
                            hintText="Password"
                            errorText={ this.props.errorMessages.password }
                            onFocus={ this.props.onFocus.bind(null, 'password') }
                        />
                    </CardText>
                    <CardActions className="login-card-actions">
                        <RaisedButton label={ isLogin ? 'Login' : 'Signup' } primary={ true } fullWidth={ true } onClick={ this.onClick.bind(this) } />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

LoginCard = connect(mapStateToProps, mapDispatchToProps)(LoginCard);

export default muiThemeable()(LoginCard);