import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import App from "./App"
import PageNotFound from './components/PageNotFound'
import Login from './components/Login'
import MainContainer from './containers/MainContainer'
import * as serviceWorker from './serviceWorker';
import store from "./store"
import createBrowserHistory from 'history/createBrowserHistory'


export const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
