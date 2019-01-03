import React, {Component} from 'react';
import { Modal,Loader, Image,Message,Form, Input, Button, Dropdown } from 'semantic-ui-react'
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
    color:"black",
    modalOpen:false
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
    this.setState({numShares:null,chosenPortfolio: null,modalOpen:false})
  }
  handlePredictedCashLeft = () => {
    if(!!this.state.chosenPortfolio && this.state.currentPrice && this.state.numShares && this.state.numShares>0){
      return <h1>Cash Left After Purchase: {parseFloat((this.state.chosenPortfolio.current_balance - this.state.currentPrice*this.state.numShares).toFixed(2)).toLocaleString()}</h1>
    }else{
      return null
    }

  }
  formatPortfoliosForDropdown = () =>{
    return this.props.portfolios.map(portfolio=>{
      let associatedLeague = this.props.leagues.find(league=>portfolio.league_id===league.id)
      return {key: portfolio.name, text:`${portfolio.name} - ${associatedLeague.name}`, value:portfolio.name}
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
  triggerModal=()=>{
    if (this.state.numShares && this.state.chosenPortfolio!==""){
      this.setState({ modalOpen: true })
    }else{

    }
  }
  handleClose=()=>{
    this.setState({ modalOpen: false })
  }
  render(){
    if (this.state.currentPrice) {
      return(
        <div>
          <Modal open={this.state.modalOpen} onClose={this.handleClose}>
            <Modal.Header>Are you sure?</Modal.Header>
              <Modal.Content>
                  <p style={{color:"black", fontSize:"20px"}}>Are you sure you want to purchase {this.state.numShares} of {this.state.companyName} for total value of {parseFloat(this.state.numShares*this.state.currentPrice).toFixed(2)}?</p>
              </Modal.Content>
              <Modal.Actions>
                <Button negative onClick={this.handleClose}>No</Button>
                <Button positive onClick={this.buyStocks}>Yes</Button>
              </Modal.Actions>
          </Modal>
          <div>
            <Image alt="" src={this.state.imgSource} size='small' centered />
          </div>
            <h1 style={{fontSize:"36px",color:"black"}}>{this.state.companyName}</h1>
            <div>
              <h1 style={{fontSize:"32px",color:this.state.color}}>Price:  {this.state.currentPrice}  <span style={this.state.currentPrice>this.state.startPrice ? {fontSize:"20px",color:"green"}: {fontSize:"20px",color:"red"}}>{parseFloat(this.state.currentPrice-this.state.startPrice).toFixed(2)} ({parseFloat(((this.state.currentPrice-this.state.startPrice)/this.state.startPrice)*100).toFixed(2)}%) </span></h1>
            </div>
            <h1>Current Cash Left: {this.state.chosenPortfolio ? parseFloat(this.state.chosenPortfolio.current_balance.toFixed(2)).toLocaleString() : "Select a portfolio"}</h1>
            {this.handlePredictedCashLeft()}
            {this.props.failedPurchase ? <Message error header={this.props.message}/> : null}
            {this.props.successfulPurchase ? <Message positive header={this.props.message}/> : null}
            <Form size={"large"} onSubmit={this.triggerModal}>
              <Form.Field style={{marginLeft:"20%",width:"60%"}}>
               <label style={{color:"black",fontSize:"22px"}}>Choose a portfolio:</label>
               <Dropdown onChange={this.changePortfolio} value={this.state.chosenPortfolio ? this.state.chosenPortfolio.name : null} placeholder='Select A Portfolio' fluid search selection options={this.formatPortfoliosForDropdown()} />
                <label style={{marginTop:"50px", color:"black",fontSize:"22px"}}>Number of Shares to Purchase:</label>
                <Input value={this.state.numShares ? this.state.numShares : ""} name={"numShares"} onChange={this.changeNumShares} type='number' />
              </Form.Field>
              <Button  disabled={(this.state.chosenPortfolio === "" || !this.state.numShares) ? true : false} active={(this.state.chosenPortfolio !== "" && this.state.numShares) ? true : false} inverted size="large" color="green" type='submit'>Buy Shares</Button>
            </Form>
      </div>
    )
    }else {
       return <Loader active size="large">Getting Price Data...</Loader>
    }
  }
};

function mapStateToProps({portfolio,league}) {
  return {
    failedPurchase: portfolio.failedPurchase,
    successfulPurchase: portfolio.successfulPurchase,
    message: portfolio.message,
    portfolios: portfolio.portfolios,
    leagues: league.leagues
  }
}
export default connect(mapStateToProps,actions)(Purchase)
