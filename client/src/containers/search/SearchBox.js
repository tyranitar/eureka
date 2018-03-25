import React from 'react';
import { AutoComplete, IconButton, RaisedButton } from 'material-ui'
import Search from 'material-ui/svg-icons/action/search';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
    updateSearchQuery,
    getAutoCompleteResults,
    getSearchResults
} from '../../actions/search-actions';
import './SearchBox.css';

const mapStateToProps = (state) => {
    const { query, autoCompleteResults } = state.search;
    return {
        autoComplete: {
            searchText: query.searchString,
            dataSource: autoCompleteResults,
        },
    };
};

const mapDispatchToProps = (dispatch) => {
    const debounced = _.debounce((searchString) => {
        dispatch(getAutoCompleteResults(searchString));
    }, 250);
    return {
        onUpdateInput: (searchString) => {
            debounced(searchString);
            dispatch(updateSearchQuery('searchString', searchString));
        },

        onKeyPress: (evt) => {
            if (evt.key === 'Enter') {
                dispatch(getSearchResults());
            }
        },

        onClick: () => {
            dispatch(getSearchResults());
        },
    };
};

const menuProps = { desktop: true };

const SearchBox = ({
    autoComplete,
    muiTheme,
    onUpdateInput,
    onKeyPress,
    onClick,
}) => (
    <div className="search-box">
        <IconButton iconStyle={{ fill: muiTheme.palette.primary1Color }}>
            <Search />
        </IconButton>
        <AutoComplete
            { ...autoComplete }
            hintText="Search"
            fullWidth={ true }
            onUpdateInput={ onUpdateInput }
            onKeyPress={ onKeyPress }
            menuProps={ menuProps }
            filter={ () => (true) }
        />
        <RaisedButton
            className="search-box-button"
            label="Search"
            primary={ true }
            onClick={ onClick }
        />
    </div>
);

export default muiThemeable()(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox));;