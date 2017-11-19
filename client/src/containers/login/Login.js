import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { TextField, IconButton, RaisedButton } from 'material-ui';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';

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

class Login extends Component {
    render() {
        return (
            <Card className="login-card">
                <CardText>
                    <IconButton { ...getIconButtonProps(this.props.muiTheme.palette.primary1Color) }>
                        <Fingerprint />
                    </IconButton>
                </CardText>
                <CardTitle className="login-card-title" style={{ color: this.props.muiTheme.palette.primary1Color }}>
                    Capstone
                </CardTitle>
                <CardText>
                    <TextField ref="email" hintText="Email" />
                    <TextField ref="password" hintText="Password" type="password" />
                </CardText>
                <CardActions className="login-card-actions">
                    <RaisedButton label="Login" primary={ true } fullWidth={ true } />
                </CardActions>
            </Card>
        );
    }
}

export default muiThemeable()(Login);