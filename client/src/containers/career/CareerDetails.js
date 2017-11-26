import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';
import GpsFixed from 'material-ui/svg-icons/device/gps-fixed';
import GpsNotFixed from 'material-ui/svg-icons/device/gps-not-fixed';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Share from 'material-ui/svg-icons/social/share';

import {
    Checkbox,
    IconButton,
} from 'material-ui';

import {
    red500,
    blue500,
    cyan500,
} from 'material-ui/styles/colors'

import PointOfContact from '../../components/career/PointOfContact';
import AnyChart from '../../components/common/AnyChart';
import Advertisement from '../../components/common/Advertisement';
import { getPublicUrl } from '../../utils/common';
import { getCareerDetails, resetCareerDetails } from '../../actions/career-actions';
import './CareerDetails.css';

const mapStateToProps = (state) => {
    const { details } = state.career;

    return {
        details,
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
                href='http://localhost:3000/search'
                imageUrl={ getPublicUrl('/images/career6.jpg') }
                description={ 'Relevant Advertisement' }
            />
        </div>
    );
};

const renderCharts = (charts, chartsPerRow) => {
    const len = charts.length;
    const ret = [];

    for (let i = 0; i < len; i += chartsPerRow) {
        ret.push((
            <Row key={ i } className="career-details-charts">
                { charts.slice(i, i + chartsPerRow).map((chart, idx) => {
                    return (
                        <Col key={ idx } xs={4}>
                            <AnyChart { ...chart } />
                        </Col>
                    );
                }) }
            </Row>
        ));
    }

    return ret;
};

class CareerDetails extends Component {
    componentDidMount() {
        const { careerId, getCareerDetails } = this.props;

        getCareerDetails(careerId);
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
                        <PointOfContact title={ title } name={ 'John' } />
                        { renderAdvertisements() }
                    </Col>
                </Row>
                <div>
                    { renderCharts(charts, 3) }
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        this.props.resetCareerDetails();
    }
}

export default muiThemeable()(connect(
    mapStateToProps,
    mapDispatchToProps
)(CareerDetails));