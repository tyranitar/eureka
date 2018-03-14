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
import Login from './views/login/Login';
import Questionnaire from './views/questionnaire/Questionnaire';
import reducers from './reducers';
import './App.css';

const history = createHistory();

const middleware = [
    thunkMiddleware,
    routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger());
}

const store = createStore(
    reducers,
    applyMiddleware(...middleware),
);

class App extends Component {
    componentDidMount() {
        // TODO: Get login information here.
    }

    render() {
        return (
            <MuiThemeProvider>
                <Provider store={ store }>
                    <ConnectedRouter history={ history }>
                        <div className="router">
                            <Route exact path="/" component={ Home } />
                            <Route exact path="/search" component={ Search } />
                            <Route exact path="/career/:careerId?" component={ Career } />
                            <Route exact path="/login" component={ Login } />
                            <Route exact path="/signup" component={ Login } />
                            <Route exact path="/questionnaire" component={ Questionnaire } />
                        </div>
                    </ConnectedRouter>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
