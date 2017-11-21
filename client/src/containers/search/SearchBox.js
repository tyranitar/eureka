import React from 'react';
import { AutoComplete, IconButton, RaisedButton } from 'material-ui'
import Search from 'material-ui/svg-icons/action/search';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';

import './SearchBox.css';

const mapStateToProps = (state) => {
    return {
        autoComplete: {
            dataSource: [],
        },
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //
    };
};

const SearchBox = ({
    autoComplete,
    muiTheme,
}) => (
    <div className="search-box">
        <IconButton iconStyle={{ fill: muiTheme.palette.primary1Color }}>
            <Search />
        </IconButton>

        <AutoComplete
            { ...autoComplete }
            hintText="Search"
            fullWidth={ true }
        />

        <RaisedButton
            className="search-box-button"
            label="Search"
            primary={ true }
        />
    </div>
);

export default muiThemeable()(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox));;