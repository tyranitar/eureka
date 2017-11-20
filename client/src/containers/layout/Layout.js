import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

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
    };
};

const Layout = ({
    children,
    onClick,
}) => (
    <div className="layout">
        <AppBar
            title="Capstone"
            iconElementLeft={
                <IconButton onClick={ onClick }>
                    <Fingerprint />
                </IconButton>
            }
        />
        { children }
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);