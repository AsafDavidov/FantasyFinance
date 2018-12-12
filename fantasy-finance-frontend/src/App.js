import React, { Component } from 'react';
import './App.css';
import {Route,Redirect,withRouter} from "react-router-dom";
import Login from './components/Login'
import Home from './containers/Home'
import {connect} from 'react-redux'

class App extends Component {

  handleUser = ()=>{
    console.log("Handling user");
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
    userId: state.user.userId
  }
}
export default withRouter(connect(mapStateToProps)(App));


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
