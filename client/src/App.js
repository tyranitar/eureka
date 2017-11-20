import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import Home from './containers/home/Home';
import Login from './containers/login/Login';
import Questionnaire from './containers/questionnaire/Questionnaire';
import reducers from './reducers';
import './App.css';

const loggerMiddleware = createLogger();

const store = createStore(
    reducers,

    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    ),
);

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <MuiThemeProvider>
                    <Router>
                        <div>
                            <Route exact path="/" component={ Home } />
                            <Route path="/login" component={ Login } />
                            <Route path="/questionnaire" component={ Questionnaire } />
                            <div className="background"></div>
                        </div>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
