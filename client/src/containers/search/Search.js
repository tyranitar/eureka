import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';

import Layout from '../layout/Layout';
import SearchBox from './SearchBox';
import './Search.css'

// TODO: Consider moving this under `views` (dumb > smart > dumb).
class Search extends Component {
    render() {
        return (
            <Layout>
                <Grid fluid>
                    <Row className="search-row" center="xs">
                        <Col xs={6} xl={4}>
                            <Paper className="search-paper">
                                <SearchBox />
                            </Paper>
                        </Col>
                    </Row>

                    <Row className="search-row" center="xs">
                        <Col xs={3}>
                            <Paper className="search-paper">
                                Hi
                            </Paper>
                        </Col>
                        <Col xs={6} xl={4}>
                            <Paper className="search-paper">
                                Hi
                            </Paper>
                        </Col>
                        <Col xs={3}>
                            <Paper className="search-paper">
                                Hi
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </Layout>
        );
    }
}

export default Search;