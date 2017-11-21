import React from 'react';
import { connect } from 'react-redux';

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

const SearchSuggestions = ({
    //
}) => (
    <div className="search-suggestions">
        Search Suggestions
    </div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchSuggestions);