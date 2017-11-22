import React from 'react';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import {
    AppBar,
    IconButton,
    IconMenu,
    MenuItem,
} from 'material-ui';

import { logout } from '../../actions/login-actions';
import './Layout.css';

const mapStateToProps = (state) => {
    return {
        //
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(push('/'));
        },

        logout: () => {
            dispatch(logout());
        },
    };
};

const Layout = ({
    children,
    onClick,
    logout,
}) => (
    <div className="layout">
        <AppBar
            title="Capstone"

            iconElementLeft={
                <IconButton onClick={ onClick }>
                    <Fingerprint />
                </IconButton>
            }

            iconElementRight={
                <IconMenu
                    iconButtonElement={ <IconButton><Menu /></IconButton> }
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                    <MenuItem primaryText="Logout" onClick={ logout } />
                </IconMenu>
            }
        />
        { children }
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);