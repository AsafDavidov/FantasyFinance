import React, {Component} from 'react'
import portfolioAdapter from "../store/adapters/portfolioAdapter"
import {Loader, Table} from "semantic-ui-react"
import {withRouter} from "react-router-dom"
import Holding from "./Holding.js"
import {connect} from "react-redux"
import _ from 'lodash'

class PortfolioShow extends Component{
  state = {
    currentPortfolioValue: null,
    holdings: [],
    loggedInUsersPortfolio:false,
    sortedBy:""
  }
  componentDidMount(){
    this.timer = setInterval(()=>portfolioAdapter.getPortfolioValue(parseInt(this.props.location.pathname.split("/").slice(-1)[0]))
    .then(data=> {
      let formattedHoldings = data.holdings_with_changes
      if (this.state.sortedBy !== ""){
        formattedHoldings = _.sortBy(formattedHoldings,this.state.sortedBy)
      }
      if(this.props.portfolios.find(portfolio=>portfolio.id === parseInt(this.props.location.pathname.split("/").slice(-1)[0]))){
        this.setState({loggedInUsersPortfolio:true,currentPortfolioValue:data.total_value,holdings:formattedHoldings})
      }else{
        this.setState({loggedInUsersPortfolio:false,currentPortfolioValue:data.total_value,holdings:formattedHoldings})
      }
    }),3000)

  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }

  handleClick = (e)=>{
    let sortedArray = this.state.holdings;
    switch (e.id) {
      case "name":
        sortedArray = _.sortBy(this.state.holdings,"name")
        this.setState({holdings:sortedArray,sortedBy:"name"})
        break;
      case "symbol":
        sortedArray = _.sortBy(this.state.holdings,"ticker")
        this.setState({holdings:sortedArray,sortedBy:"ticker"})
        break;
      case "numshares":
        sortedArray = _.sortBy(this.state.holdings,"num_shares")
        this.setState({holdings:sortedArray,sortedBy:"num_shares"})
        break;
      case "pricebought":
        sortedArray = _.sortBy(this.state.holdings,"price_bought")
        this.setState({holdings:sortedArray,sortedBy:"price_bought"})
        break;
      case "gainloss":
        sortedArray = _.sortBy(this.state.holdings,"changes")
        this.setState({holdings:sortedArray,sortedBy:"changes"})
        break;
      case "totalvalue":
        sortedArray = _.sortBy(this.state.holdings,"value")
        this.setState({holdings:sortedArray,sortedBy:"value"})
        break;
    }
  }
   render(){
     if (!!this.state.currentPortfolioValue && this.state.holdings.length===0){
       return(
         <div>
            <h1>Current portfolio has only cash</h1>
         </div>
       )
     }else if (!!this.state.currentPortfolioValue && this.state.holdings.length>0){
       return(
         <div>
            <Table celled>
              <Table.Header>
                <Table.Row onClick={(event)=>this.handleClick(event.target)}>
                  <Table.HeaderCell id="name">Company Name</Table.HeaderCell>
                  <Table.HeaderCell id="symbol">Symbol</Table.HeaderCell>
                  <Table.HeaderCell id="numshares">Number of Shares</Table.HeaderCell>
                  <Table.HeaderCell id="pricebought">Price Bought</Table.HeaderCell>
                  <Table.HeaderCell id="gainloss">Gain/Loss (%)</Table.HeaderCell>
                  <Table.HeaderCell id="totalvalue">Total Value</Table.HeaderCell>
                  {this.state.loggedInUsersPortfolio ? <Table.HeaderCell>Sell Holding</Table.HeaderCell> : null}
                </Table.Row>
             </Table.Header>
              <Table.Body>
              {this.state.holdings.map(holding=>{
                return <Holding key={holding.id} loggedInUser={this.state.loggedInUsersPortfolio} value={holding.value} ticker={holding.ticker} priceBought={holding.price_bought}numShares={holding.num_shares} name={holding.name} id={holding.id} changes={holding.changes}/>
              })}
              </Table.Body>
            </Table>
         </div>
        )
      }else{
        return <Loader active size="large"/>
      }

  }
 }
 function mapStateToProps({portfolio}) {
   return {
     portfolios: portfolio.portfolios
   }
 }
export default withRouter(connect(mapStateToProps)(PortfolioShow))
