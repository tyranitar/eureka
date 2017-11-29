import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import './NoFavoritedCareers.css';

const NoFavoritedCareers = ({
    muiTheme: {
        palette: {
            primary1Color,
            accent3Color,
        },
    },

    onClick,
}) => (
    <Paper className="no-favorited-careers" style={{
            color: accent3Color,
        }}>
        <div className="no-favorited-careers-message">
            <FavoriteBorder color={ accent3Color } />
            <span className="no-favorited-careers-text">
                { "You don't have any favorites yet!" }
            </span>
        </div>
        <br />
        <div>
            <span>
                { "Try going to our " }
            </span>
            <span style={{
                    color: primary1Color,
                    cursor: 'pointer',
                }}
                onClick={ onClick }>
                { "Search Page" }
            </span>
            <span>
                { " to find careers you might be interested in!" }
            </span>
        </div>
    </Paper>
);

NoFavoritedCareers.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default muiThemeable()(NoFavoritedCareers);