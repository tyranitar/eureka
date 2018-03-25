import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardMedia,
    CardTitle,
} from 'material-ui/Card';

import './NewsItem.css';

const NewsItem = ({
    href,
    title,
    subtitle,
    imageUrl,
}) => (
    <a className="news-item" href={ href } target="_blank">
        <Card >
            <CardMedia>
                <div
                    className="news-item-image"
                    style={{ backgroundImage: `url('${ imageUrl }')` }}>
                </div>
            </CardMedia>
            <div>
                <CardTitle title={ title } subtitle={ subtitle } />
            </div>
        </Card>
    </a>
);

NewsItem.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default NewsItem;