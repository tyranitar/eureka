import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import {
    Paper,
} from 'material-ui';

import Layout from '../../containers/layout/Layout';
import './Career.css';

const Career = ({
    //
}) => (
    <Layout>
        <Grid fluid>
            <Row className="career-row" center="xs">
                <Col xs={12} xl={8}>
                    <Paper className="career-paper">
                        Career
                    </Paper>
                </Col>
            </Row>
            <Row className="career-row" center="xs">
                <Col xs={12} xl={8}>
                    <Paper className="career-paper">
                        Comments
                    </Paper>
                </Col>
            </Row>
        </Grid>
    </Layout>
);

Career.propTypes = {
    //
};

export default Career;