import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

import './IconTag.css';

const IconTag = ({
    icon,
    label,
}) => (
    <div className="icon-tag">
        <div className="icon-tag-icon">
            { cloneElement(icon, { viewBox: '0 0 32 32' }) }
        </div>
        <div className="icon-tag-label">
            { label }
        </div>
    </div>
);

IconTag.propTypes = {
    icon: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
};

export default IconTag;