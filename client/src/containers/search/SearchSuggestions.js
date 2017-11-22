import React from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

import './SearchSuggestions.css';

const mapStateToProps = (state) => {
    return {
        //
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //
    };
};

const renderRecommendedSearches = (color) => {
    return [
        'Systems',
        'Design',
        'Engineering',
    ].map((search) => (
        <div className="search-suggestion" style={{
                color,
            }}>
            <ChevronRight color={ color } />
            { search }
        </div>
    ));
};

const renderRecentSearches = (color) => {
    return [
        'Computer',
        'Architect',
        'Analyst',
    ].map((search) => (
        <div className="search-suggestion" style={{
                color,
            }}>
            <ChevronRight color={ color } />
            { search }
        </div>
    ));
};

const renderTrendingSearches = (color) => {
    return [
        'Software',
        'Manager',
        'Science',
    ].map((search) => (
        <div className="search-suggestion" style={{
                color,
            }}>
            <ChevronRight color={ color } />
            { search }
        </div>
    ));
};

const SearchSuggestions = ({
    muiTheme: {
        palette: {
            primary1Color,
            alternateTextColor,
        },
    },
}) => (
    <div className="search-suggestions">
        <div className="search-suggestions-header">
            <HelpOutline color={ primary1Color } />
            <span className="search-suggestions-title">
                Search Suggestions
            </span>
        </div>
        <div className="search-suggestions-body">
            <div className="search-suggestions-section-title">
                { 'Recommended for You' }
            </div>
            { renderRecommendedSearches(primary1Color) }

            <div className="search-suggestions-section-title">
                Your Recent Searches
            </div>
            { renderRecentSearches(primary1Color) }

            <div className="search-suggestions-section-title">
                Trending Searches
            </div>
            { renderTrendingSearches(primary1Color) }
        </div>
    </div>
);

export default muiThemeable()(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchSuggestions));