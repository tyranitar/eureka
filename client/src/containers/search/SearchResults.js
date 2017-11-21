import React from 'react';
import { connect } from 'react-redux';
import SearchResult from '../../components/search/SearchResult';

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

const SearchResults = ({
    //
}) => (
    <div>
        <SearchResult />
    </div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResults);