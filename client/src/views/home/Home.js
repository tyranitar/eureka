import React, { Component } from 'react';
import { Paper } from 'material-ui';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Layout from '../../containers/layout/Layout';
import News from '../../containers/home/News';
import Favorites from '../../containers/home/Favorites';
import Roadmap from '../../containers/home/Roadmap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Layout>
                <Grid fluid>
                    <Row className="home-row" center="xs">
                        <Col xs={12} xl={8}>
                            <Paper>
                                <Tabs>
                                    <Tab label="News">
                                        <News />
                                    </Tab>
                                    <Tab label="Favorites">
                                        <Favorites />
                                    </Tab>
                                    <Tab label="Roadmap">
                                        <Roadmap />
                                    </Tab>
                                </Tabs>
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </Layout>
        );
    }
}

export default Home;