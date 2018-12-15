import React, { Component } from 'react';
import './App.css';
import {Redirect,withRouter} from "react-router-dom";
import Login from './components/Login'
import Home from './containers/Home'
import {connect} from 'react-redux'

class App extends Component {

  handleUser = ()=>{
    if (this.props.userId){
      return <Redirect to="/home" component={Home}/>
    }else{
      return <Redirect to="/login" component={Login}/>
    }
  }
  render() {
    return (
        <div>
          {this.handleUser()}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.userId,
    username: state.user.username
  }
}
export default withRouter(connect(mapStateToProps)(App));
