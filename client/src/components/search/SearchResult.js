import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import AttachMoney from 'material-ui/svg-icons/editor/attach-money';
import WbSunny from 'material-ui/svg-icons/image/wb-sunny';
import Flare from 'material-ui/svg-icons/image/flare';
import WbCloudy from 'material-ui/svg-icons/image/wb-cloudy';
import School from 'material-ui/svg-icons/social/school';

import {
    red500,
    lightGreen500,
    amber500,
    deepOrange500,
    blueGrey500,
    indigo500,
} from 'material-ui/styles/colors';

import IconTag from '../icon-tag/IconTag';
import './SearchResult.css';

const getOutlookIcon = (outlook) => {
    switch (outlook) {
        case 'Good Outlook':
            return (<WbSunny color={ amber500 } />);
        case 'Okay Outlook':
            return (<Flare color={ deepOrange500 } />);
        case 'Poor Outlook':
            return (<WbCloudy color={ blueGrey500 } />);
        default:
            return null;
    }
};

const truncateDescription = (description) => {
    return `${description.slice(0, 500)}...`;
};

const SearchResult = ({
    result: {
        title,
        description,
        salary,
        outlook,
        education,
        favorited, // TODO: Use this as `checked` property.
        featured,
        id,
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

    onClick,
}) => (
    <Paper className="search-result">
        <div className="search-result-band" style={{
            backgroundColor: featured ? accent1Color : primary1Color,
        }}></div>
        <div className="search-result-title" onClick={ onClick.bind(null, id) }>
            { title }
        </div>
        <div className="search-result-actions">
            <Checkbox
                iconStyle={{ margin: '0px', fill: red500 }}
                checkedIcon={ <Favorite /> }
                uncheckedIcon={ <FavoriteBorder /> }
            />
        </div>
        <div
            className="search-result-description"
            style={{ color: accent3Color }}
            onClick={ onClick.bind(null, id) }>
            { description }
        </div>
        <div className="search-result-icon-tags">
            <IconTag
                icon={ <AttachMoney color={ lightGreen500 } /> }
                label={ (salary || 'N/A').toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,') }
            />
            <IconTag
                icon={ getOutlookIcon(outlook) }
                label={ outlook }
            />
            <IconTag
                icon={ <School color={ indigo500 } /> }
                label={ education }
            />
        </div>
        <Paper className="search-result-preview">
            <div>{ title }</div>
            <br />
            <div>{ truncateDescription(description) }</div>
        </Paper>
    </Paper>
);

SearchResult.propTypes = {
    //
};

export default muiThemeable()(SearchResult);