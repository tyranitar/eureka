import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Row, Col } from 'react-flexbox-grid';

import NoFavoritedCareers from '../../components/favorites/NoFavoritedCareers';
import { getFavorites } from '../../actions/favorites-actions';
import './Favorites.css'

const mapStateToProps = (state) => {
    const { careers } = state.favorites;
    return { careers };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFavorites: () => dispatch(getFavorites()),
        navigateToSearchView: () => dispatch(push('/search')),
    };
};

const renderNoFavoritedCareers = (navigateToSearchView) => (
    <NoFavoritedCareers onClick={ navigateToSearchView } />
);

const renderFavoritedCareers = (careers, navigateToSearchView) => {
    if (!careers.length) return renderNoFavoritedCareers(navigateToSearchView);
    // TODO: Implement this.
};

class Favorites extends Component {
    componentDidMount() {
        const {
            getFavorites,
        } = this.props;
        getFavorites();
    }

    render() {
        const {
            careers,
            navigateToSearchView,
        } = this.props;
        return (
            <div className="favorites-container">
                <Row center="xs">
                    <Col xs={8}>
                        { renderFavoritedCareers(careers, navigateToSearchView) }
                    </Col>
                </Row>
            </div>
        );
    }

    componentWillUnmount() {
        //
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);