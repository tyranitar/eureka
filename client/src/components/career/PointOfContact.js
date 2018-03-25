import React from 'react';
import PropTypes from 'prop-types';
import Person from 'material-ui/svg-icons/social/person';
import {
    Paper,
    ListItem,
    Avatar,
} from 'material-ui';
import {
    cyan500,
    grey500,
} from 'material-ui/styles/colors';

import './PointOfContact.css';

const renderAvatar = (imageUrl) => (
    <Avatar
        src={ imageUrl }
        icon={ <Person /> }
        backgroundColor={ cyan500 }
    />
);

const PointOfContact = ({
    title,
    name,
    imageUrl,
    onClick,
}) => (
    <Paper>
        <div className="point-of-contact-text" style={{
                color: grey500,
            }}>
            { `Got questions? Talk to a real ${ title }!` }
        </div>
        <ListItem
            leftAvatar={ renderAvatar(imageUrl) }
            onClick={ onClick }>
            { name }
        </ListItem>
    </Paper>
);

PointOfContact.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    onClick: PropTypes.func,
};

export default PointOfContact;