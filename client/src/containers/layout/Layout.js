import React from 'react';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Home from 'material-ui/svg-icons/action/home';
import Search from 'material-ui/svg-icons/action/search';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';

import {
    AppBar,
    IconButton,
    IconMenu,
    MenuItem,
    Divider,
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
        pushPath: (path) => {
            return () => {
                dispatch(push(path));
            };
        },

        logout: () => {
            dispatch(logout());
        },
    };
};

const Layout = ({
    children,
    pushPath,
    logout,
}) => (
    <div className="layout">
        <AppBar
            title="Capstone"

            iconElementLeft={
                <IconButton onClick={ pushPath('/') }>
                    <Fingerprint />
                </IconButton>
            }

            iconElementRight={
                <IconMenu
                    iconButtonElement={ <IconButton><Menu /></IconButton> }
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                    <MenuItem primaryText="Home" leftIcon={ <Home /> } onClick={ pushPath('/') } />
                    <MenuItem primaryText="Search" leftIcon={ <Search /> } onClick={ pushPath('/search') } />
                    <Divider />
                    <MenuItem primaryText="Logout" leftIcon={ <PowerSettingsNew /> } onClick={ logout } />
                </IconMenu>
            }
        />
        { children }
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);