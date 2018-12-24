import React, {Component} from 'react'
import StockChart from "./StockChart.js"
import Purchase from "./Purchase.js"
import portfolioAdapter from "../store/adapters/portfolioAdapter"
import {Loader, Table} from "semantic-ui-react"
import {withRouter} from "react-router-dom"
import Holding from "./Holding.js"
import {connect} from "react-redux"

class PortfolioShow extends Component{
  state = {
    currentPortfolioValue: null,
    holdings: [],
    loggedInUsersPortfolio:false
  }
  componentDidMount(){
    this.timer = setInterval(()=>portfolioAdapter.getPortfolioValue(parseInt(this.props.location.pathname.split("/").slice(-1)[0]))
    .then(data=> {
      if(this.props.portfolios.find(portfolio=>portfolio.id == parseInt(this.props.location.pathname.split("/").slice(-1)[0]))){
        this.setState({loggedInUsersPortfolio:true,currentPortfolioValue:data.total_value,holdings:data.holdings_with_changes})
      }else{
        this.setState({loggedInUsersPortfolio:false,currentPortfolioValue:data.total_value,holdings:data.holdings_with_changes})
      }
    }),3000)

  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
   render(){
     if (!!this.state.currentPortfolioValue && this.state.holdings.length==0){
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
                <Table.Row>
                  <Table.HeaderCell>Company Name</Table.HeaderCell>
                  <Table.HeaderCell>Symbol</Table.HeaderCell>
                  <Table.HeaderCell>Number of Shares</Table.HeaderCell>
                  <Table.HeaderCell>Price Bought</Table.HeaderCell>
                  <Table.HeaderCell>Gain/Loss (%)</Table.HeaderCell>
                  <Table.HeaderCell>Total Value</Table.HeaderCell>
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
