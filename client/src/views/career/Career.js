import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import {
    Paper,
} from 'material-ui';

import CareerDetails from '../../containers/career/CareerDetails';
import CareerComments from '../../containers/career/CareerComments';
import Layout from '../../containers/layout/Layout';
import './Career.css';

const getCareerId = (pathname) => {
    return pathname.split('/').pop();
};

const Career = ({
    location,
}) => (
    <Layout>
        <Grid fluid>
            <Row className="career-row" center="xs">
                <Col xs={12} xl={6}>
                    <Paper className="career-paper">
                        <CareerDetails careerId={ getCareerId(location.pathname) } />
                    </Paper>
                </Col>
            </Row>
            <Row className="career-row" center="xs">
                <Col xs={12} xl={6}>
                    <Paper className="career-paper">
                        <CareerComments careerId={ getCareerId(location.pathname) } />
                    </Paper>
                </Col>
            </Row>
        </Grid>
    </Layout>
);

export default Career;