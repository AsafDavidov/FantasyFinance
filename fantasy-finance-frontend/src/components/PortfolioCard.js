import React, {Component} from 'react'
import StockChart from "./StockChart.js"
import Purchase from "./Purchase.js"
import portfolioAdapter from "../store/adapters/portfolioAdapter"
import {Loader} from "semantic-ui-react"

class PortfolioCard extends Component{
  state = {
    currentPortfolioValue: null
  }
  componentDidMount(){
    this.timer = setInterval(()=>portfolioAdapter.getPortfolioValue(this.props.portfolio.id).then(data=>this.setState({currentPortfolioValue:data.total_value})),1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
   render(){
     return(
       <div>
        <p>Portfolio Name: {this.props.portfolio.name}</p>
        <p>Portfolio Cash: {this.props.portfolio.current_balance}</p>
        <p>Portfolio Value: </p> {this.state.currentPortfolioValue ? <p>{this.state.currentPortfolioValue}</p>:<Loader active />}
       </div>
   )
  }
 }

export default PortfolioCard
