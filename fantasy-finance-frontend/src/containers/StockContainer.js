import React, { Component } from 'react';
import StockAdapter from "../store/adapters/stockAdapter"
import SearchComponent from "../components/SearchComponent"
import StockComponent from "../components/StockComponent"
import GainersLosers from "../components/GainersLosers"
import PropTypes from 'prop-types'
import {Switch, Route, Redirect} from "react-router-dom"
import { Label } from 'semantic-ui-react'

const resultRenderer = ({ id, title }) => <Label content={title} />
resultRenderer.propTypes = {
  title: PropTypes.string
}

class StockContainer extends Component{
  state = {
    stocks: [],
    chosenStock: null
  }
  componentDidMount(){
    this.fetchTickers()
  }
  fetchTickers = () =>{
    StockAdapter.getSearchTickers()
    .then(data=>this.setState({stocks:data}))
  }
  handleChosenStock = (result) =>{
    this.setState({chosenStock:result.symbol})
  }
  wasStockChosen = () => {
    if(this.state.chosenStock){
      return(
        <Switch>
          <Route exact path={`${this.props.match.path}/${this.state.chosenStock}`} render = {()=><StockComponent stock={this.state.chosenStock}/>}/>
          <Redirect to={`${this.props.match.path}/${this.state.chosenStock}`}/>
        </Switch>
      )
    }else{
      return <GainersLosers />
    }
  }
 render(){
   return(
     <div>
        <div className={!!this.state.chosenStock ? "stock-chosen": null}>
          <SearchComponent handleChosenStock={this.handleChosenStock} resultRenderer={resultRenderer} stocks={this.state.stocks}/>
        </div>
        <div>
        {this.wasStockChosen()}
        </div>
     </div>
   )
 }
}

export default StockContainer
