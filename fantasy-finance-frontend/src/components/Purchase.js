import React, {Component} from 'react';
import { Form, Input, Button, Select } from 'semantic-ui-react'
import {connect} from "react-redux"

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class Purchase extends Component{
  state = {
    currentPrice: null
  }
  render(){
    return (
      <div>
        <h1>Current Price: {this.state.currentPrice ? this.state.currentPrice : null}</h1>
        <Form size={"medium"} onSubmit={this.handleNewUser}>
        <Form.Field >
          <label>Number of Shares to Purchase:</label>
          <Input name={"numShares"} place onChange={(e)=>this.handleChange(e.target)}/>
          <label>Choose a portfolio:</label>
          <Form.Select options={options} placeholder='Portfolio' />
        </Form.Field>
        <Button type='submit'>Buy Shares</Button>
        </Form>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    token: state.user.jwt
  }
}
export default connect(mapStateToProps)(Purchase)
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
