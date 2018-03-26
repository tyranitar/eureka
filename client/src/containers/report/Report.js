import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { getReport } from '../../actions/report-actions';
import AnyChart from '../../components/common/AnyChart';
import './Report.css';

const mapStateToProps = (state) => {
    const {
        title,
        careerTitle,
        createdAt,
        charts,
        insights,
        educationPlans,
    } = state.report;
    return {
        title,
        careerTitle,
        createdAt,
        charts,
        insights,
        educationPlans,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getReport: (reportId) => dispatch(getReport(reportId)),
    };
};

class Report extends Component {
    componentDidMount() {
        const {
            reportId,
            getReport,
        } = this.props;
        getReport(reportId);
    }

    render() {
        const {
            title,
            careerTitle,
            createdAt,
            charts,
            // insights,
            // educationPlans,
            muiTheme: {
                palette: {
                    primary1Color,
                    accent3Color,
                },
            },
        } = this.props;
        return (
            <div>
                <div className="report-title" style={{ color: primary1Color }}>
                    { title }
                </div>
                <div className="report-career-title" style={{ color: accent3Color }}>
                    { careerTitle }
                </div>
                <div className="report-charts">
                    <Row>
                        { charts.map((chart, idx) => (
                            <Col key={ idx } xs={4}>
                                <AnyChart { ...chart.chart } />
                                <div className="report-chart-title" style={{ color: primary1Color }}>
                                    { chart.title }
                                </div>
                            </Col>
                        )) }
                    </Row>
                </div>
                <div className="report-created-at" style={{ color: accent3Color }}>
                    { `Created on ${ createdAt && createdAt.toLocaleDateString() }` }
                </div>
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
)(Report));