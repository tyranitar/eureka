import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Home from './containers/home/Home';
import Login from './containers/login/Login';
import Questionnaire from './containers/questionnaire/Questionnaire';
import Search from './containers/search/Search';
import reducers from './reducers';
import './App.css';

const history = createHistory();

const loggerMiddleware = createLogger();
const myRouterMiddleware = routerMiddleware(history);

const store = createStore(
    reducers,

    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        myRouterMiddleware,
    ),
);

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Provider store={ store }>
                    <ConnectedRouter history={ history }>
                        <div className="container">
                            <Route exact path="/" component={ Home } />
                            <Route path="/login" component={ Login } />
                            <Route path="/questionnaire" component={ Questionnaire } />
                            <Route path="/search" component={ Search } />
                        </div>
                    </ConnectedRouter>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
