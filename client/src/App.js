import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Home from './views/home/Home';
import Search from './views/search/Search';
import Career from './views/career/Career';
import Login from './containers/login/Login';
import Questionnaire from './containers/questionnaire/Questionnaire';
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
                        <div className="router">
                            <Route exact path="/" component={ Home } />
                            <Route path="/search" component={ Search } />
                            <Route path="/career/:careerId?" component={ Career } />
                            <Route path="/login" component={ Login } />
                            <Route path="/questionnaire" component={ Questionnaire } />
                        </div>
                    </ConnectedRouter>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
