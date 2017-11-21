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
        onClick: () => {
            console.log("clicked!");
        },
    };
};

const mapResultsToSearchResults = (results, onClick) => {
    return results.map((result, idx) => {
        return (
            <SearchResult
                result={ result }
                key={ idx }
                onClick={ onClick }
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

const renderResults = ({ firstSearchPerformed, searching, results, onClick }) => {
    // TODO: Remove this.
    return mapResultsToSearchResults([{
        title: 'Software developers',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada pretium dolor, vestibulum dictum sem ornare nec. Nunc egestas fermentum ex quis sagittis. Aliquam ultrices est hendrerit malesuada pulvinar. Nullam mattis felis ut nisl commodo, quis aliquam est placerat. Aenean luctus iaculis congue. Nam iaculis ac erat et luctus. Integer feugiat lacus ipsum, quis faucibus neque eleifend laoreet. Donec posuere nisl in lacus placerat, id vehicula leo ornare. Vivamus nec libero et sapien semper dapibus sed vel erat. Aliquam erat volutpat. Integer suscipit, nisl non pulvinar commodo, enim tellus tristique lacus, luctus dapibus ligula turpis eu magna. Etiam lobortis tristique congue. Ut sem risus, commodo sed purus a, interdum tincidunt elit. Integer vulputate sagittis quam, vitae tempor nulla pretium tincidunt.",
        salary: 100000,
        outlook: 'Good Outlook',
        education: 'Bachelor\'s',
        favorited: true,
    }], onClick);

    if (searching) {
        return renderSpinner();
    }

    if (firstSearchPerformed) {
        return results.length ? mapResultsToSearchResults(results, onClick) : renderNoResults();
    }

    return renderBanner();
};

const SearchResults = ({
    firstSearchPerformed,
    searching,
    results,
    onClick,
}) => (
    <div>
        { renderResults({ firstSearchPerformed, searching, results, onClick }) }
    </div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResults);