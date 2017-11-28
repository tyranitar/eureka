import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';
import GpsFixed from 'material-ui/svg-icons/device/gps-fixed';
import GpsNotFixed from 'material-ui/svg-icons/device/gps-not-fixed';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Share from 'material-ui/svg-icons/social/share';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';

import {
    Checkbox,
    IconButton,
} from 'material-ui';

import {
    red500,
    blue500,
    cyan500,
} from 'material-ui/styles/colors'

import {
    getCareerDetails,
    resetCareerDetails,
    getCareerEducationPaths,
    getCareerPointOfContact,
} from '../../actions/career-actions';

import EducationPath from '../../components/career/EducationPath';
import PointOfContact from '../../components/career/PointOfContact';
import AnyChart from '../../components/common/AnyChart';
import Advertisement from '../../components/common/Advertisement';
import { getPublicUrl } from '../../utils/common';
import './CareerDetails.css';

const mapStateToProps = (state) => {
    const {
        details,
        educationPaths,
        pointOfContact,
    } = state.career;

    return {
        details,
        educationPaths,
        pointOfContact,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCareerDetails: (careerId) => {
            dispatch(getCareerDetails(careerId));
        },

        resetCareerDetails: () => {
            dispatch(resetCareerDetails());
        },

        getCareerEducationPaths: (careerId) => {
            dispatch(getCareerEducationPaths(careerId));
        },

        getCareerPointOfContact: (careerId) => {
            dispatch(getCareerPointOfContact(careerId));
        },
    };
};

const renderActions = () => {
    return (
        <div className="career-details-actions">
            <Checkbox
                className="career-details-action"
                checkedIcon={ <Favorite /> }
                uncheckedIcon={ <FavoriteBorder /> }
                iconStyle={{ fill: red500 }}
            />
            <Checkbox
                className="career-details-action"
                checkedIcon={ <GpsFixed /> }
                uncheckedIcon={ <GpsNotFixed /> }
                iconStyle={{ fill: blue500 }}
            />
            <IconButton style={{
                marginLeft: '-12px',
            }}>
                <Share color={ cyan500 } />
            </IconButton>
        </div>
    );
};

const renderAdvertisements = () => {
    return (
        <div className="career-details-advertisement">
            <Advertisement
                href='/search'
                imageUrl={ getPublicUrl('/images/career6.jpg') }
                description={ 'Relevant Advertisement' }
            />
        </div>
    );
};

const renderCharts = ({ title, charts, icon }) => {
    return (
        <Card className="career-details-charts-card">
            <CardHeader
                title={ <div>
                    { icon }
                    <span className="career-details-charts-title">{ title }</span>
                </div> }
                actAsExpander={ true }
                showExpandableButton={ true }
            />
            <CardMedia expandable={ true } className="career-details-charts">
                <Row>
                    { charts.map((chart, idx) => {
                        return (
                            <Col key={ idx } xs={4}>
                                <AnyChart { ...chart } />
                            </Col>
                        );
                    }) }
                </Row>
            </CardMedia>
        </Card>
    );
};

const renderEducationPaths = (educationPaths) => {
    const evenEducationPaths = educationPaths.filter((educationPath, idx) => (idx % 2 === 0));
    const oddEducationPaths = educationPaths.filter((educationPath, idx) => (idx % 2 === 1));

    const educationPathMapper = (educationPath, idx) => (
        <div key={ idx } className="career-details-education-path">
            <EducationPath { ...educationPath } />
        </div>
    );

    return (
        <div className="career-details-education">
            <div className="career-details-education-title">
                Suggested Education Paths
            </div>
            <div>
                <Row>
                    <Col xs={6}>
                        { evenEducationPaths.map(educationPathMapper) }
                    </Col>
                    <Col xs={6}>
                        { oddEducationPaths.map(educationPathMapper) }
                    </Col>
                </Row>
            </div>
        </div>
    );
};

class CareerDetails extends Component {
    componentDidMount() {
        const {
            careerId,
            getCareerDetails,
            getCareerEducationPaths,
            getCareerPointOfContact,
        } = this.props;

        getCareerDetails(careerId);
        getCareerEducationPaths(careerId);
        getCareerPointOfContact(careerId);
    }

    render() {
        const {
            title,
            description,
            charts,
            // favorited,
            // featured,
            // id,
        } = this.props.details;

        const {
            palette: {
                primary1Color,
            },
        } = this.props.muiTheme;

        return (
            <div>
                <Row className="career-details-row">
                    <Col xs={8}>
                        <div className="career-details-title" style={{
                                color: primary1Color,
                            }}>
                            { title }
                        </div>
                    </Col>
                    <Col xsOffset={1} xs={3}>
                        { renderActions() }
                    </Col>
                </Row>
                <Row className="career-details-row">
                    <Col xs={8}>
                        <div className="career-details-description">
                            { description }
                        </div>
                    </Col>
                    <Col xsOffset={1} xs={3}>
                        <PointOfContact title={ title } { ...this.props.pointOfContact } />
                        { renderAdvertisements() }
                    </Col>
                </Row>
                <div className="career-details-charts-container">
                    { renderCharts({
                        title: 'Career Information',
                        charts: charts.slice(0, 3),
                        icon: <Equalizer color={ primary1Color } />,
                    }) }
                    { renderCharts({
                        title: 'Alignment with Your Profile',
                        charts: charts.slice(3, 5),
                        icon: <AccountCircle color={ primary1Color } />,
                    }) }
                </div>
                { renderEducationPaths(this.props.educationPaths) }
            </div>
        );
    }

    componentWillUnmount() {
        this.props.resetCareerDetails();
        // TODO: Also reset education paths.
    }
}

export default muiThemeable()(connect(
    mapStateToProps,
    mapDispatchToProps
)(CareerDetails));