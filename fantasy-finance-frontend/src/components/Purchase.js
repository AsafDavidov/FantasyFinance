import React, {Component} from 'react';
import { Loader, Image,Message,Form, Input, Button, Select } from 'semantic-ui-react'
import {connect} from "react-redux"
import StockAdapter from "../store/adapters/stockAdapter"
import * as actions from "../store/actions/holding"

class Purchase extends Component{
  state = {
    companyName:null,
    currentPrice: null,
    currentBalance:null,
    numShares:null,
    imgSource:null,
    chosenPortfolio: "",
    startPrice:null,
    color:"black"
  }
  componentDidMount(){
    this.stockTimer = setInterval(()=>this.fetchPricing(), 3000)
    this.props.resetPurchaseError()
    this.fetchLogo()
  }
  componentWillUnmount(){
    clearInterval(this.stockTimer)
  }
  componentDidUpdate(prevProps,prevState){
    if(this.state.currentPrice && this.state.startPrice){
      if(this.state.currentPrice<this.state.startPrice && this.state.color !=="red"){
        this.setState({color:"red"})
      }else if (this.state.currentPrice>this.state.startPrice&& this.state.color !=="green"){
        this.setState({color:"green"})
      }
    }
  }
  fetchPricing = ()=>{
    StockAdapter.getPricing(this.props.stock)
    .then(data=>{
      this.setState({currentPrice:parseFloat(data.price),startPrice:parseFloat(data.start)})
    })
  }
  fetchLogo = ()=>{
    StockAdapter.getLogo(this.props.stock)
    .then(data=>{
      this.setState({imgSource:data.url,companyName:data.companyName})
    })
  }
  buyStocks = ()=>{
    let data = {holding:{ticker:this.props.stock,price_bought: this.state.currentPrice, num_shares: this.state.numShares, portfolio_id:this.state.chosenPortfolio.id}}
    this.props.postHolding(data)
    this.setState({numShares:null,chosenPortfolio: null})
  }
  handlePredictedCashLeft = () => {
    if(!!this.state.chosenPortfolio && this.state.currentPrice && this.state.numShares && this.state.numShares>0){
      return <h1>Cash Left After Purchase: {(this.state.chosenPortfolio.current_balance - this.state.currentPrice*this.state.numShares).toFixed(2)}</h1>
    }else{
      return null
    }

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
    if (this.state.currentPrice) {
      return(<div>
        <div>
          <Image alt="" src={this.state.imgSource} size='small' centered />
        </div>
          <h1 style={{fontSize:"36px",color:"black"}}>{this.state.companyName}</h1>
          <div>
            <h1 style={{fontSize:"32px",color:"black"}}>Price:{this.state.currentPrice}  <span style={this.state.currentPrice>this.state.startPrice ? {fontSize:"20px",color:"green"}: {fontSize:"20px",color:"red"}}>{parseFloat(this.state.currentPrice-this.state.startPrice).toFixed(2)} ({parseFloat(((this.state.currentPrice-this.state.startPrice)/this.state.startPrice)*100).toFixed(2)}%) </span></h1>
          </div>
          <h1>Current Cash Left: {this.state.chosenPortfolio ? this.state.chosenPortfolio.current_balance : "Select a portfolio"}</h1>
          {this.handlePredictedCashLeft()}
          {this.props.failedPurchase ? <Message error header={this.props.message}/> : null}
          {this.props.successfulPurchase ? <Message positive header={this.props.message}/> : null}
          <Form size={"small"} onSubmit={this.buyStocks}>
            <Form.Field >
              <label>Number of Shares to Purchase:</label>
              <Input value={this.state.numShares ? this.state.numShares : ""} style={{width:"400px"}}name={"numShares"} onChange={this.changeNumShares} type='number' />
              <label>Choose a portfolio:</label>
              <Select value={this.state.chosenPortfolio ? this.state.chosenPortfolio.name : null} style={{width:"400px"}} onChange={this.changePortfolio} options={this.formatPortfoliosForDropdown()} placeholder='Portfolio' />
            </Form.Field>
            <Button type='submit'>Buy Shares</Button>
          </Form>
      </div>
    )
    }else {
       return <Loader active size="large">Getting Price Data...</Loader>
    }
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
