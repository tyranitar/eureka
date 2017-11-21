import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';

import Layout from '../../containers/layout/Layout';
import SearchBox from '../../containers/search/SearchBox';
import SearchFilters from '../../containers/search/SearchFilters';
import SearchResults from '../../containers/search/SearchResults';
import SearchPreview from '../../containers/search/SearchPreview';
import './Search.css'

class Search extends Component {
    render() {
        return (
            <Layout>
                <Grid fluid>
                    <Row className="search-row" center="xs">
                        <Col xs={6} xl={4}>
                            <Paper>
                                <SearchBox />
                            </Paper>
                        </Col>
                    </Row>

                    <Row className="search-row" center="xs">
                        <Col xs={3}>
                            <Paper>
                                <SearchFilters />
                            </Paper>
                        </Col>
                        <Col xs={6} xl={4}>
                            <SearchResults />
                        </Col>
                        <Col xs={3}>
                            <Paper>
                                <SearchPreview />
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </Layout>
        );
    }
}

export default Search;