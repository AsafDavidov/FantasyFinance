import React, { Component } from 'react'
import {connect} from "react-redux"
import StockAdapter from "../store/adapters/stockAdapter"
import StockChart from "./StockChart.js"
import Purchase from "./Purchase.js"


class StockComponent extends Component{

 render(){
   return(
     <div>
      <div>
        <StockChart key = {this.props.stock} stock={this.props.stock}/>
      </div>
        <Purchase stock={this.props.stock}/>
     </div>
   )
 }
}

export default StockComponent
