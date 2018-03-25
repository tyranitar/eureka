import React from 'react';
import PropTypes from 'prop-types';
import { grey200, grey500 } from 'material-ui/styles/colors'

import './Advertisement.css';

const Advertisement = ({
    href,
    imageUrl,
    description,
    onClick,
}) => (
    <a className="advertisement"
        href={ href }
        target="_blank"
        style={{ backgroundColor: grey200 }}
        onClick={ onClick }>
        <div className="advertisement-image" style={{
            backgroundImage: `url('${ imageUrl }')`,
            borderColor: grey200,
        }}>
        </div>
        <div className="advertisement-description">
            { description }
        </div>
        <div className="advertisement-footer" style={{ color: grey500 }}>
            Advertisement
        </div>
    </a>
);

Advertisement.propTypes = {
    href: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Advertisement;