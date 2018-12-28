import React, { Component } from 'react';
import StockAdapter from "../store/adapters/stockAdapter"
import SearchComponent from "../components/SearchComponent"
import StockComponent from "../components/StockComponent"
import GainersLosers from "../components/GainersLosers"
import PropTypes from 'prop-types'
import {withRouter,Switch, Route} from "react-router-dom"
import {Label} from 'semantic-ui-react'


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
    if(this.props.match.params.id) this.setState({chosenStock:this.props.match.params.id})
  }
  componentDidUpdate(prevProps,prevState){
    if(this.props.match.params.id && this.state.chosenStock !== this.props.match.params.id){
      this.setState({chosenStock:this.props.match.params.id})
    }
  }
  fetchTickers = () =>{
    StockAdapter.getSearchTickers()
    .then(data=>this.setState({stocks:data}))
  }
  handleChosenStock = (result) =>{
    this.setState({chosenStock:result.symbol},this.props.history.push(`/stocks/${result.symbol}`));
  }
 render(){
   return(
     <div>
        <div className={this.props.match.params.id ? "stock-chosen": null}>
          <SearchComponent handleChosenStock={this.handleChosenStock} resultRenderer={resultRenderer} stocks={this.state.stocks}/>
        </div>
        <div>
          <Switch>
            <Route path={`/stocks/:id`} render={()=><StockComponent key={this.state.chosenStock} stock={this.state.chosenStock}/>}/>
            <Route exact path="/stocks" component={GainersLosers}/>
          </Switch>
        </div>
     </div>
   )
 }
}

export default withRouter(StockContainer)
