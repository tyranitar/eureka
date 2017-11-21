import React from 'react';
import { connect } from 'react-redux';
import SearchResult from '../../components/search/SearchResult';

const mapStateToProps = (state) => {
    const { firstSearchPerformed, searching, results } = state.search;

    return {
        firstSearchPerformed,
        searching,
        results,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //
    };
};

const mapResultsToSearchResults = (results) => {
    return results.map((result, idx) => {
        return (
            <SearchResult
                result={ result }
                key={ idx }
            />
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

const renderSpinner = () => {
    return (
        <div>
            Searching...
        </div>
    );
};

const renderResults = ({ firstSearchPerformed, searching, results }) => {
    if (searching) {
        return renderSpinner();
    }

    if (firstSearchPerformed) {
        return results.length ? mapResultsToSearchResults(results) : renderNoResults();
    }

    return renderBanner();
};

const SearchResults = ({
    firstSearchPerformed,
    searching,
    results,
}) => (
    <div>
        { renderResults({ firstSearchPerformed, searching, results }) }
    </div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResults);