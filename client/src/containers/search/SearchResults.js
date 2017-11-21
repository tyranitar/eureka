import React from 'react';
import { connect } from 'react-redux';
import SearchResult from '../../components/search/SearchResult';

const mapStateToProps = (state) => {
    const { firstSearchPerformed, results } = state.search;

    return {
        firstSearchPerformed,
        results,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //
    };
};

const mapResultsToSearchResults = (results) => {
    return results.map((result) => {
        return (
            <SearchResult />
        );
    });
};

const renderBanner = () => {
    return (
        <div>
            Check out our featured careers!
        </div>
    );
};

const renderNoResults = () => {
    return (
        <div>
            No results...
        </div>
    );
};

const renderResults = (results, firstSearchPerformed) => {
    if (firstSearchPerformed) {
        return results.length ? mapResultsToSearchResults(results) : renderNoResults();
    }

    return renderBanner();
};

const SearchResults = ({
    firstSearchPerformed,
    results,
}) => (
    <div>
        { renderResults(results, firstSearchPerformed) }
    </div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResults);