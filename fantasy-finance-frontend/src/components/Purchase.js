import React, {Component} from 'react';
import { Loader, Image,Message,Form, Input, Button, Select } from 'semantic-ui-react'
import {connect} from "react-redux"
import StockAdapter from "../store/adapters/stockAdapter"
import UserAdapter from "../store/adapters/userAdapter"
import * as actions from "../store/actions/holding"

class Purchase extends Component{
  state = {
    currentPrice: null,
    currentBalance:null,
    numShares:null,
    imgSource:null,
    chosenPortfolio: null,
    color:""
  }
  componentDidMount(){
    this.stockTimer = setInterval(()=>this.fetchPricing(), 1000)
    this.props.resetPurchaseError()
    this.fetchLogo()
  }
  componentWillUnmount(){
    clearInterval(this.stockTimer)
  }
  componentDidUpdate(prevProps,prevState){
    //PRICE STYLING
    //if(this.state.currentPrice<prevState.currentPrice) console.log("lol");
  }
  fetchPricing = ()=>{
    StockAdapter.getPricing(this.props.stock)
    .then(data=>{
      this.setState({currentPrice:parseFloat(data.price)})
    })
  }
  fetchLogo = ()=>{
    StockAdapter.getLogo(this.props.stock)
    .then(data=>{
      this.setState({imgSource:data.url})
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
  changePortfolio = (event, {value})=>{
    this.props.resetPurchaseError()
    let chosenPortfolio = this.props.portfolios.find(p=>p.name===value)
    this.setState({chosenPortfolio:chosenPortfolio})
  }
  changeNumShares = (event)=>{
    this.setState({numShares:event.target.value})
  }
  render(){
    return (
      <div >
        {this.state.imgSource ? <Image alt="" src={this.state.imgSource} size='small' centered /> : <Loader size="small"/>}
        <h1>Current Price: {this.state.currentPrice ? this.state.currentPrice : null}</h1>
        <h1>Current Cash Left: {this.state.chosenPortfolio ? this.state.chosenPortfolio.current_balance : "Select a portfolio"}</h1>
        {this.props.failedPurchase ? <Message error header={this.props.message}/> : null}
        {this.props.successfulPurchase ? <Message positive header={"Shares Acquired!"}/> : null}
        <Form size={"small"} onSubmit={this.buyStocks}>
        <Form.Field >
          <label>Number of Shares to Purchase:</label>
          <Input style={{width:"400px"}}name={"numShares"} onChange={this.changeNumShares} type='number' />
          <label>Choose a portfolio:</label>
          <Select style={{width:"400px"}} onChange={this.changePortfolio} options={this.formatPortfoliosForDropdown()} placeholder='Portfolio' />
        </Form.Field>
        <Button type='submit'>Buy Shares</Button>
        </Form>
      </div>
    )
  }
};

function mapStateToProps({portfolio}) {
  return {
    failedPurchase: portfolio.failedPurchase,
    successfulPurchase: portfolio.successfulPurchase,
    message: portfolio.message,
    portfolios: portfolio.portfolios
  }
}
export default connect(mapStateToProps,actions)(Purchase)
