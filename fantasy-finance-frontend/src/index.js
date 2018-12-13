import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import App from "./App"
import PageNotFound from './components/PageNotFound'
import Login from './components/Login'
import Home from './containers/Home'
import ProfileContainer from './containers/ProfileContainer'
import MainContainer from './containers/MainContainer'
import * as serviceWorker from './serviceWorker';
import store from "./store"
import createBrowserHistory from 'history/createBrowserHistory'


export const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={MainContainer}/>
        <Route path="/profile" component={MainContainer}/>
        <Route path="/*" component={PageNotFound} />
        </Switch>
      </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
