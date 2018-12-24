import React, {Component} from 'react'
import portfolioAdapter from "../store/adapters/portfolioAdapter"
import {Loader,Button} from "semantic-ui-react"
import {withRouter} from "react-router-dom"

class PortfolioCard extends Component{
  state = {
    currentPortfolioValue: null,
    holdings: []
  }
  componentDidMount(){
    this.timer = setInterval(()=>portfolioAdapter.getPortfolioValue(this.props.portfolio.id)
    .then(data=> {
      this.setState({currentPortfolioValue:data.total_value,holdings:data.holdings_with_changes})}
    ),1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  handleViewPortfolio=()=>{
    this.props.history.push(`/portfolios/${this.props.portfolio.id}`)
  }

   render(){
     if (!!this.state.currentPortfolioValue){
       return(
         <div>
         <p>Portfolio Name: {this.props.portfolio.name}</p>
         <p>Portfolio Cash: {this.props.portfolio.current_balance}</p>
         <p>Portfolio Value: {this.state.currentPortfolioValue} </p>
         <Button onClick={this.handleViewPortfolio}>Show portfolio</Button>
         </div>
       )
     }else{
       return(<Loader active size="Large">Loading portfolios</Loader>)
     }
  }
 }

export default withRouter(PortfolioCard)
