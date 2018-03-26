import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Paper } from 'material-ui';

import Layout from '../../containers/layout/Layout';
import Report from '../../containers/report/Report';
import './ReportView.css';

const getReportId = (pathname) => {
    return pathname.split('/').pop();
};

const ReportView = ({
    location,
}) => (
    <Layout>
        <Grid fluid>
            <Row className="report-row" center="xs">
                <Col xs={12} xl={6}>
                    <Paper className="report-paper">
                        <Report reportId={ getReportId(location.pathname) }/>
                    </Paper>
                </Col>
            </Row>
        </Grid>
    </Layout>
);

export default ReportView;