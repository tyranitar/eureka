import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Place from 'material-ui/svg-icons/maps/place';
import AttachMoney from 'material-ui/svg-icons/editor/attach-money';
import School from 'material-ui/svg-icons/social/school';
import {
    grey500,
    orange500,
    green500,
} from 'material-ui/styles/colors';
import _ from 'lodash';

import { getReport } from '../../actions/report-actions';
import AnyChart from '../../components/common/AnyChart';
import { getPublicUrl, formatMoney } from '../../utils/common';
import './Report.css';

const mapStateToProps = (state) => {
    const {
        studentName,
        careerTitle,
        createdAt,
        charts,
        insights,
        educationPlans,
    } = state.report;
    return {
        studentName,
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

    calculateStudentLoans(expectedCosts, expectedBenefits) {
        const totalExpectedCosts = _.values(expectedCosts).reduce((a, b) => (a + b));
        const totalExpectedBenefits = _.values(expectedBenefits).reduce((a, b) => (a + b));
        const totalStudentLoans = totalExpectedCosts - totalExpectedBenefits;
        return totalStudentLoans > 0 ? totalStudentLoans : 0;
    }

    render() {
        const {
            studentName,
            careerTitle,
            createdAt,
            charts,
            // insights,
            educationPlans,
            muiTheme: {
                palette: {
                    primary1Color,
                },
            },
        } = this.props;
        return (
            <div style={{ color: grey500 }}>
                <div className="report-title" style={{ color: primary1Color }}>
                    { `${ studentName }'s Career Plan` }
                </div>
                <div className="report-career-title">
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
                <div className="report-education-plans">
                    <div className="report-education-plans-title" style={{ color: primary1Color }}>
                        { `Possible Education Paths` }
                    </div>
                    { educationPlans.map(({
                        title,
                        institution,
                        expectedCosts,
                        expectedBenefits,
                        courses,
                    }, idx) => (
                        <div className="report-education-plan" key={ idx }>
                            <div className="report-education-plan-title">
                                { `${ title } at ${ institution.name }` }
                            </div>
                            <Row>
                                <Col xs={4}>
                                    <div className="report-education-plan-data">
                                        <Place color={ primary1Color } />
                                        <div className="report-education-plan-datum">
                                            { 'Location: ' }
                                        </div>
                                        <span className="report-education-plan-datum" style={{ color: primary1Color }}>
                                            { institution.location }
                                        </span>
                                    </div>
                                    <div
                                        className="report-education-plan-image"
                                        style={{
                                            backgroundImage: `url(${ getPublicUrl(institution.imageUrl) })`
                                        }}>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div className="report-education-plan-data">
                                        <AttachMoney color={ primary1Color } />
                                        <div className="report-education-plan-datum">
                                            { 'Financial Plan' }
                                        </div>
                                    </div>
                                    <div className="report-education-plan-moneys">
                                        { Object.keys(expectedCosts).map((key, idx) => (
                                            <div className="report-education-plan-money" key={ idx }>
                                                { `${ key }: ` }
                                                <span className="report-education-plan-money-amount" style={{ color: orange500 }}>
                                                    { `${ formatMoney(expectedCosts[key]) }` }
                                                </span>
                                            </div>
                                        )) }
                                        { Object.keys(expectedBenefits).map((key, idx) => (
                                            <div className="report-education-plan-money" key={ idx }>
                                                { `${ key }: ` }
                                                <span className="report-education-plan-money-amount" style={{ color: green500 }}>
                                                    { `${ formatMoney(expectedBenefits[key]) }` }
                                                </span>
                                            </div>
                                        )) }
                                        <div className="report-education-plan-money" key={ idx } style={{ color: primary1Color }}>
                                            { `Total Student Loans: ` }
                                            <span className="report-education-plan-money-amount">
                                                { `${ formatMoney(this.calculateStudentLoans(expectedCosts, expectedBenefits)) }` }
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div className="report-education-plan-data">
                                        <School color={ primary1Color } />
                                        <div className="report-education-plan-datum">
                                            { 'Academic Plan' }
                                        </div>
                                    </div>
                                    <div className="report-education-plan-courses">
                                        { courses.map((course, idx) => (
                                            <div className="report-education-plan-course" key={ idx }>
                                                { course.name }
                                                <span className="report-education-plan-course-status" style={{ color: green500 }}>
                                                    { course.status }
                                                </span>
                                            </div>
                                        )) }
                                        <div className="report-education-plan-course" key={ idx } style={{ color: primary1Color }}>
                                            { 'Required Average: ' }
                                            <span className="report-education-plan-course-status">
                                                { `${ institution.admissionAverage }%` }
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )) }
                </div>
                <div className="report-created-at">
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