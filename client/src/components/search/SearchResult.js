import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';

import './SearchResult.css'

const SearchResult = ({
    result: {
        title,
        description,
    },
}) => (
    <Paper className="search-result">
        { title }
    </Paper>
);

SearchResult.propTypes = {
    //
};

export default muiThemeable()(SearchResult);