import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { getNews } from '../../actions/news-actions';
import NewsItem from '../../components/news/NewsItem';
import Advertisement from '../../components/common/Advertisement';
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
        getNews: () => dispatch(getNews()),
    };
};

const renderNewsItems = (newsItems) => {
    return newsItems.map((newsItem, idx) => (
        <Col xs={4} key={ idx }>
            <NewsItem { ...newsItem } />
        </Col>
    ));
};

const renderAdvertisements = (advertisements) => {
    return advertisements.map((advertisement, idx) => (
        <Col xs={3} key={ idx }>
            <Advertisement { ...advertisement } />
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
            muiTheme: {
                palette: {
                    primary1Color,
                },
            },
        } = this.props;
        return (
            <div className="news-container">
                <div className="news-row-title" style={{ color: primary1Color }}>
                    { 'Articles and Videos You Might Like' }
                </div>
                <Row center="xs" className="news-row">
                    { renderNewsItems(articles.slice(0, 3)) }
                </Row>
                <div className="news-row-title" style={{ color: primary1Color }}>
                    { 'Careers Picked for You' }
                </div>
                <Row center="xs" className="news-row">
                    { renderNewsItems(careers.slice(0, 3)) }
                </Row>
                <div className="news-row-title" style={{ color: primary1Color }}>
                    { 'Things You Might Find Interesting' }
                </div>
                <Row center="xs" className="news-row">
                    { renderAdvertisements(advertisements) }
                </Row>
            </div>
        );
    }

    componentWillUnmount() {
        //
    }
}

export default muiThemeable()(connect(
    mapStateToProps,
    mapDispatchToProps
)(News));