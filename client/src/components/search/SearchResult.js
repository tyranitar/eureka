import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';
import EuroSymbol from 'material-ui/svg-icons/action/euro-symbol';
import WbSunny from 'material-ui/svg-icons/image/wb-sunny';
import School from 'material-ui/svg-icons/social/school';
import { amber500, indigo500 } from 'material-ui/styles/colors';

import IconTag from '../icon-tag/IconTag';
import './SearchResult.css';

const SearchResult = ({
    result: {
        title,
        description,
    },

    muiTheme: {
        palette: {
            primary1Color,
            primary2Color,
            primary3Color,
            accent1Color,
            accent2Color,
            accent3Color,
        },
    },
}) => (
    <Paper className="search-result">
        <div className="search-result-band" style={{ backgroundColor: primary1Color }}></div>
        <div className="search-result-title">
            { title }
        </div>
        <div className="search-result-description" style={{ color: accent3Color }}>
            { description }
        </div>
        <div className="search-result-icon-tags">
            <IconTag
                icon={ <EuroSymbol color={ accent1Color /* or lightGreen500 */ } /> }
                label={ "100,000" }
            />
            <IconTag
                icon={ <WbSunny color={ amber500 } /> }
                label={ "Good Outlook" }
            />
            <IconTag
                icon={ <School color={ indigo500 } /> }
                label={ "Bachelor's" }
            />
        </div>
    </Paper>
);

SearchResult.propTypes = {
    //
};

export default muiThemeable()(SearchResult);