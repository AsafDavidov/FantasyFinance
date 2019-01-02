import React, {Component} from 'react'
import portfolioAdapter from "../store/adapters/portfolioAdapter"
import {Button, Loader, Table} from "semantic-ui-react"
import {withRouter} from "react-router-dom"
import Holding from "./Holding.js"
import {connect} from "react-redux"
import _ from 'lodash'

class PortfolioShow extends Component{
  state = {
    currentPortfolioValue: null,
    holdings: [],
    loggedInUsersPortfolio:false,
    sortedBy:"",
    reversed:false,
    name:null
  }
  componentDidMount(){
    this.timer = setInterval(()=>portfolioAdapter.getPortfolioValue(parseInt(this.props.location.pathname.split("/").slice(-1)[0]))
    .then(data=> {
      let formattedHoldings = data.holdings_with_changes
      if (this.state.sortedBy !== "") formattedHoldings = _.sortBy(formattedHoldings,this.state.sortedBy)
      if (this.state.reversed) formattedHoldings = formattedHoldings.reverse()
      if(this.props.portfolios.find(portfolio=>portfolio.id === parseInt(this.props.location.pathname.split("/").slice(-1)[0]))){
        this.setState({name:data.name,loggedInUsersPortfolio:true,currentPortfolioValue:data.total_value,holdings:formattedHoldings})
      }else{
        this.setState({name:data.name,loggedInUsersPortfolio:false,currentPortfolioValue:data.total_value,holdings:formattedHoldings})
      }
    }),3000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }

  handleClick = (e)=>{
    let sortedArray = _.sortBy(this.state.holdings,e.id)
    let reverse=false
    if (this.state.sortedBy===e.id){
         sortedArray.reverse()
         reverse=true
     }
    this.setState({holdings:sortedArray,sortedBy:e.id,reversed:reverse})

  }
  handleBuyStocks = ()=>{
    this.props.history.push("/stocks")
  }
   render(){
     if (!!this.state.currentPortfolioValue && this.state.holdings.length===0){
       return(
         <div>
            <h1>{this.state.name} only has cash</h1>
            <Button color={"blue"} size={"huge"} onClick={this.handleBuyStocks}> Go buy some stocks! </Button>
         </div>
       )
     }else if (!!this.state.currentPortfolioValue && this.state.holdings.length>0){
       return(
         <div>
          <h1>{this.state.name}</h1>
            <Table celled sortable>
              <Table.Header>
                <Table.Row onClick={(event)=>this.handleClick(event.target)}>
                  <Table.HeaderCell id="name">Company Name</Table.HeaderCell>
                  <Table.HeaderCell id="ticker">Symbol</Table.HeaderCell>
                  <Table.HeaderCell id="num_shares">Number of Shares</Table.HeaderCell>
                  <Table.HeaderCell id="price_bought">Price Bought</Table.HeaderCell>
                  <Table.HeaderCell id="changes">Gain/Loss (%)</Table.HeaderCell>
                  <Table.HeaderCell id="value">Total Value</Table.HeaderCell>
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
        return <Loader active size="large">Loading Portfolio</Loader>
      }

  }
 }
 function mapStateToProps({portfolio}) {
   return {
     portfolios: portfolio.portfolios
   }
 }
export default withRouter(connect(mapStateToProps)(PortfolioShow))
