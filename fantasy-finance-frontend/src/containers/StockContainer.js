import React, { Component } from 'react';
import StockAdapter from "../store/adapters/stockAdapter"
import {connect} from "react-redux"
import SearchComponent from "../components/SearchComponent"
import StockComponent from "../components/StockComponent"
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
    StockAdapter.getSearchTickers(this.props.token)
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
      return null
    }
  }
 render(){
   return(
     <div>
        <SearchComponent handleChosenStock={this.handleChosenStock} resultRenderer={resultRenderer} stocks={this.state.stocks}/>
        {this.wasStockChosen()}
     </div>
   )
 }
}
function mapStateToProps(state) {
  return {
    token: state.user.jwt
  }
}
export default connect(mapStateToProps)(StockContainer)
