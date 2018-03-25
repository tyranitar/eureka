import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Paper } from 'material-ui';

import Layout from '../../containers/layout/Layout';
import './Report.css';

const Report = () => (
    <Layout>
        <Grid fluid>
            <Row className="report-row" center="xs">
                <Col xs={12} xl={6}>
                    <Paper className="report-paper">
                    </Paper>
                </Col>
            </Row>
        </Grid>
    </Layout>
);

export default Report;