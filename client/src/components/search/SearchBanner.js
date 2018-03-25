import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { getPublicUrl } from '../../utils/common';
import './SearchBanner.css';

const SearchBanner = ({
    muiTheme: {
        palette: {
            primary1Color,
            alternateTextColor,
        },
    },
    onClick,
}) => (
    <Paper className="search-banner" onClick={ onClick }>
        <div className="search-banner-image" style={{
            backgroundImage: `url('${ getPublicUrl('/images/search_banner.jpg') }')`,
        }}></div>
        <div
            className="search-banner-text"
            style={{
                color: alternateTextColor,
                backgroundColor: primary1Color,
            }}>
            Not sure where to start? Take a look at our featured careers!
        </div>
    </Paper>
);

SearchBanner.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default muiThemeable()(SearchBanner);