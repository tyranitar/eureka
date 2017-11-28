import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';

import { getNews } from '../../actions/news-actions';
import NewsItem from '../../components/news/NewsItem';
import './News.css';

const mapStateToProps = (state) => {
    const {
        careers,
        articles,
        advertisements,
    } = state.news;

    return {
        careers,
        articles,
        advertisements,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNews: () => {
            dispatch(getNews());
        }
    };
};

const renderNewsItems = (newsItems) => {
    return newsItems.map((newsItem, idx) => (
        <Col xs={4} key={ idx }>
            <NewsItem { ...newsItem } />
        </Col>
    ));
};

class News extends Component {
    componentDidMount() {
        this.props.getNews();
    }

    render() {
        const {
            careers,
            articles,
            advertisements,
        } = this.props;

        return (
            <div className="news-container">
                <Row center="xs" className="news-row">
                    { renderNewsItems(careers.slice(0, 3)) }
                </Row>
                <Row center="xs" className="news-row">
                    { renderNewsItems(articles.slice(0, 3)) }
                </Row>
                <Row center="xs" className="news-row">
                    { renderNewsItems(advertisements.slice(0, 3)) }
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
)(News);