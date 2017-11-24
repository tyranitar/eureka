import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import muiThemeable from 'material-ui/styles/muiThemeable';

import AnyChart from '../../components/common/AnyChart';
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

const renderCharts = (charts, chartsPerRow) => {
    const len = charts.length;
    const ret = [];

    for (let i = 0; i < len; i += chartsPerRow) {
        ret.push((
            <Row key={ i } className="career-details-row">
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
            // description,
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
                    <Col xs={6}>
                        <div className="career-details-title" style={{
                                color: primary1Color,
                            }}>
                            { title }
                        </div>
                    </Col>
                </Row>
                <Row className="career-details-row">
                    <Col xs={8} xl={6}>
                        <div className="career-details-description">
                            { /* description */ }
                        </div>
                    </Col>
                </Row>
                { renderCharts(charts, 3) }
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