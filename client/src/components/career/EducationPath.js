import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';
import School from 'material-ui/svg-icons/social/school';
import Build from 'material-ui/svg-icons/action/build';
import Help from 'material-ui/svg-icons/action/help';
import { Row, Col } from 'react-flexbox-grid';
import Business from 'material-ui/svg-icons/communication/business';

import {
    ListItem,
} from 'material-ui';

import './EducationPath.css'

const getIcon = (type, color) => {
    switch (type) {
        case 'University Degree':
            return <School color={ color } />;
        case 'Apprenticeship':
            return <Build color={ color } />;
        default:
            return <Help color={ color } />;
    }
}

const renderInstitutions = ({
    title,
    institutions,
    onInstitutionClick,
    backgroundColor,
    descriptionColor,
    color,
}) => (
    <div>
        { institutions.map(({
            imageUrl,
            name,
            description,
            admissionAverage,
            location,
            courses,
        }, idx) => (
            <ListItem
                key={ idx }
                innerDivStyle={{
                    padding: '8px',
                }}
                onClick={ onInstitutionClick.bind(null, {
                    name,
                    imageUrl,
                    admissionAverage,
                    location,
                    courses,
                }) }>
                <Row>
                    <Col xs={3}>
                        <div className="education-path-institution-image" style={{
                                backgroundImage: `url(${ imageUrl })`,
                                backgroundColor,
                            }}>
                            { !imageUrl ? <div className="education-path-institution-icon">
                                <Business color={ color } />
                            </div> : null }
                        </div>
                    </Col>
                    <Col xs={9}>
                        <div>
                            <div className="education-path-institution-title">
                                { name }
                            </div>
                            <div className="education-path-institution-description" style={{
                                    color: descriptionColor,
                                }}>
                                { description }
                            </div>
                        </div>
                    </Col>
                </Row>
            </ListItem>
        )) }
    </div>
);

const EducationPath = ({
    type,
    title,
    institutions,
    onInstitutionClick,

    muiTheme: {
        palette: {
            primary1Color,
            accent3Color,
            alternateTextColor,
        },
    },
}) => (
    <Card>
        <CardHeader
            title={ <div>
                { getIcon(type, primary1Color) }
                <span className="education-path-title">{ title }</span>
            </div> }
            actAsExpander={ true }
            showExpandableButton={ true }
        />
        <CardMedia expandable={ true }>
            { renderInstitutions({
                title,
                institutions,
                onInstitutionClick,
                backgroundColor: primary1Color,
                descriptionColor: accent3Color,
                color: alternateTextColor,
            }) }
        </CardMedia>
    </Card>
);

EducationPath.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

    institutions: PropTypes.arrayOf(PropTypes.shape({
        imageUrl: PropTypes.string,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })).isRequired,
};

export default muiThemeable()(EducationPath);