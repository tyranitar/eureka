import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';
import SentimentDissatisfied from 'material-ui/svg-icons/social/sentiment-dissatisfied';

import './NoResults.css';

const NoResults = ({
    muiTheme: {
        palette: {
            primary1Color,
            accent3Color,
        },
    },

    onClick,
}) => (
    <Paper className="no-results" style={{
            color: accent3Color,
        }}>
        <div className="no-results-message">
            <span className="no-results-text">
                No Results
            </span>
            <SentimentDissatisfied color={ accent3Color } />
        </div>
        <br />
        <div>
            <span>
                { 'Perhaps you could try our search suggestions on the right, or check out our ' }
            </span>
            <span style={{
                    color: primary1Color,
                    cursor: 'pointer',
                }}
                onClick={ onClick }>
                Featured Careers!
            </span>
        </div>
    </Paper>
);

NoResults.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default muiThemeable()(NoResults);