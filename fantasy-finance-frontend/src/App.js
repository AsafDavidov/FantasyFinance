import React, { Component } from 'react';
import './App.css';
import {Redirect,withRouter,Route,Switch} from "react-router-dom";
import Login from './components/Login'
import Home from './containers/Home'
import {connect} from 'react-redux'
import PageNotFound from './components/PageNotFound'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={()=><Redirect to="/home"/>}/>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/profile" component={Home}/>
        <Route path="/stocks" component={Home}/>
        <Route path="/leagues" component={Home}/>
        <Route path="/league" component={Home}/>
        <Route path="/about" component={Home}/>
        <Route path="/portfolios" component={Home}/>
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

function mapStateToProps({user}) {
  return {
    username: user.username
  }
}
export default withRouter(connect(mapStateToProps)(App));
