import React from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

import { updateSearchQuery, getSearchResults } from '../../actions/search-actions';
import suggestions from '../../mocks/search-suggestions';
import './SearchSuggestions.css';

const mapStateToProps = (state) => {
    return {
        //
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (search) => {
            dispatch(updateSearchQuery('searchString', search));
            dispatch(getSearchResults());
        },
    };
};

const mapToSearchSuggestion = ({
    search,
    idx,
    onClick,
    color,
}) => (
    <div
        key={ idx }
        className="search-suggestion"
        style={{
            color,
        }}
        onClick={ onClick.bind(null, search) }>
        <ChevronRight color={ color } />
        { search }
    </div>
);

const renderRecommendedSearches = (onClick, color) => {
    return suggestions.recommendedSearches.map((search, idx) => (mapToSearchSuggestion({ search, idx, onClick, color })));
};

const renderRecentSearches = (onClick, color) => {
    return suggestions.recentSearches.map((search, idx) => (mapToSearchSuggestion({ search, idx, onClick, color })));
};

const renderTrendingSearches = (onClick, color) => {
    return suggestions.trendingSearches.map((search, idx) => (mapToSearchSuggestion({ search, idx, onClick, color })));
};

const SearchSuggestions = ({
    muiTheme: {
        palette: {
            primary1Color,
            alternateTextColor,
        },
    },

    onClick,
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
            { renderRecommendedSearches(onClick, primary1Color) }

            <div className="search-suggestions-section-title">
                Your Recent Searches
            </div>
            { renderRecentSearches(onClick, primary1Color) }

            <div className="search-suggestions-section-title">
                Trending Searches
            </div>
            { renderTrendingSearches(onClick, primary1Color) }
        </div>
    </div>
);

export default muiThemeable()(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchSuggestions));