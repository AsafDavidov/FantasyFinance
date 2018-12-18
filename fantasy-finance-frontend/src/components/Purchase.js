import React, {Component} from 'react';
import { Message,Form, Input, Button, Select } from 'semantic-ui-react'
import {connect} from "react-redux"
import StockAdapter from "../store/adapters/stockAdapter"
import UserAdapter from "../store/adapters/userAdapter"
import * as actions from "../store/actions/holding"

class Purchase extends Component{
  state = {
    currentPrice: null,
    currentBalance:null,
    numShares:null,
    chosenPortfolio: null
  }
  componentDidMount(){
    this.stockTimer = setInterval(()=>this.fetchPricing(), 1000)
  }
  componentWillUnmount(){
    clearInterval(this.stockTimer)
    //clearInterval(this.balanceTimer)
  }
  fetchPricing = ()=>{
    StockAdapter.getPricing(this.props.stock)
    .then(data=>{
      this.setState({currentPrice:parseFloat(data.price)})
    })
  }
  buyStocks = ()=>{
    let data = {holding:{ticker:this.props.stock,price_bought: this.state.currentPrice, num_shares: this.state.numShares, portfolio_id:this.state.chosenPortfolio.id}}
    this.props.postHolding(data)
  }

  formatPortfoliosForDropdown = () =>{
    return this.props.portfolios.map(portfolio=>{
      return {key: portfolio.name, text:portfolio.name, value:portfolio.name}
    })
  }
  changePortfolio = (event)=>{
    // if (this.balanceTimer){
    //   clearInterval(this.balanceTimer)
    // }
    let chosenPortfolio = this.props.portfolios.find(p=>p.name===event.target.querySelector(".text").innerText)
    //this.balanceTimer = setInterval(()=>this.fetchBalance(), 1000)
    this.setState({chosenPortfolio:chosenPortfolio})
  }
  changeNumShares = (event)=>{
    this.setState({numShares:event.target.value})
  }
  render(){
    return (
      <div >
        <h1>Current Price: {this.state.currentPrice ? this.state.currentPrice : null}</h1>
        <h1>Current Balance: {this.state.chosenPortfolio ? this.state.chosenPortfolio.name : "Select a portfolio"}</h1>
        {this.props.failedPurchase ? <Message error header={this.props.message}/> : null}
        {this.props.successfulPurchase ? <Message positive header={this.props.message}/> : null}
        <Form size={"small"} onSubmit={this.buyStocks}>
        <Form.Field >
          <label>Number of Shares to Purchase:</label>
          <Input style={{width:"400px"}}name={"numShares"} onChange={this.changeNumShares} type='number' />
          <label>Choose a portfolio:</label>
          <Select style={{width:"400px"}} onChange={this.changePortfolio}options={this.formatPortfoliosForDropdown()} placeholder='Portfolio' />
        </Form.Field>
        <Button type='submit'>Buy Shares</Button>
        </Form>
      </div>
    )
  }
};

function mapStateToProps({portfolios}) {
  return {
    failedPurchase: portfolios.failedPurchase,
    message: portfolios.message,
    portfolios: portfolios.portfolios
  }
}
export default connect(mapStateToProps,actions)(Purchase)
