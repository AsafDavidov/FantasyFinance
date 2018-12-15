import React, { Component } from 'react'
import {connect} from "react-redux"
import StockAdapter from "../store/adapters/stockAdapter"

class StockComponent extends Component{
  state ={

  }
 componentDidMount(){

 }

 render(){
   return(
     <div>
      <div>
        <h1>Company Name & Image</h1>
      </div>
     </div>
   )
 }
}
function mapStateToProps(state) {
  return {
    token: state.user.jwt
  }
}
export default connect(mapStateToProps)(StockComponent)
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
