import React, { Component } from 'react';
import './App.css';
import {Route,Redirect,withRouter} from "react-router-dom";
import Login from './components/Login'
import Home from './containers/Home'
import {connect} from 'react-redux'

class App extends Component {

  handleUser = ()=>{
    
    if (this.props.user.id){
      console.log("here2");
      return <Route to="/home" component={Home}/>
    }else{
      return <Route to="/login" component={Login}/>
    }
  }
  render() {
    console.log(this.props);
    return (
        <div>
          {this.handleUser()}
        </div>
    );
  }
}

const mapStateToProps = state=>{
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App);

//
// <Route path='/home' component={Login}/>
// <Route path='/login' component={Login}/>
//===========================================BASIC STOCK POLLING =======================================
/*  state = {
    stocks:[],
    intervalID:null
  }
  componentDidMount(){
    let i = setInterval(()=>{
      this.fetchStocks()
      .then(data=>this.setState({stocks:data})
      )
    },1000)
    this.setState({intervalID:i})
  }
  fetchStocks = ()=>{
    return fetch("http://localhost:4000/api/v1/stocks")
    .then(r=>r.json())
  }
  handleStop = ()=>{
    clearInterval(this.state.intervalID)
    this.setState({intervalID:null})
  }
  handleStocks = ()=>{
    if (this.state.stocks.length>0){
      return this.state.stocks.map(s=>{
        return <p key={s.symbol}> Stock:{s.symbol} Price:{s.price}</p>
      })
    }else{
      return null
    }
  }*/
