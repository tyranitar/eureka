import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/home/Home';
import Login from './containers/login/Login';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Router>
                        <div>
                            <Route exact path="/" component={ Home } />
                            <Route path="/login" component={ Login } />
                        </div>
                    </Router>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
