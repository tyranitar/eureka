import React from 'react';
import PropTypes from 'prop-types';

import {
    Card,
    CardMedia,
    CardTitle,
    // CardText,
} from 'material-ui/Card';

import './NewsItem.css';

const NewsItem = ({
    href,
    type,
    title,
    content,
    imageUrl,
}) => (
    <a className="news-item" href={ href }>
        <Card >
            <CardMedia>
                <img src={ imageUrl } alt="" />
            </CardMedia>
            <div>
                <CardTitle title={ title } subtitle={ type } />
            </div>
        </Card>
    </a>
);

NewsItem.propTypes = {
    href: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default NewsItem;