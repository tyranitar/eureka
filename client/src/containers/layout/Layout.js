import React from 'react';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Home from 'material-ui/svg-icons/action/home';
import Search from 'material-ui/svg-icons/action/search';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {
    AppBar,
    IconButton,
    IconMenu,
    MenuItem,
    Divider,
    Dialog,
    Snackbar,
} from 'material-ui';

import { closeSnackbar } from '../../actions/snackbar-actions';
import { closeDialog } from '../../actions/dialog-actions';
import { logout } from '../../actions/login-actions';
import './Layout.css';

const mapStateToProps = (state) => {
    return {
        dialog: state.dialog,
        snackbar: state.snackbar,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        pushPath: (path) => () => dispatch(push(path)),
        logout: () => dispatch(logout()),
        closeDialog: () => dispatch(closeDialog()),
        closeSnackbar: () => dispatch(closeSnackbar()),
    };
};

const Layout = ({
    children,
    pushPath,
    logout,
    dialog,
    closeDialog,
    snackbar,
    closeSnackbar,
    muiTheme: {
        palette: {
            primary1Color,
        },
    },
}) => (
    <div className="layout">
        <AppBar
            title="Eureka"
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
        <Dialog
            open={ dialog.open }
            title={ dialog.title }
            actions={ dialog.actions }
            contentStyle={{ width: dialog.width }}
            onRequestClose={ closeDialog }>
            { dialog.children }
        </Dialog>
        <Snackbar
            open={ snackbar.open }
            message={ snackbar.message }
            action={ <span style={{ color: primary1Color }}>Dismiss</span> }
            onActionTouchTap={ closeSnackbar }
            onRequestClose={ closeSnackbar }
            autoHideDuration={ 3000 }
        />
    </div>
);

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(Layout));