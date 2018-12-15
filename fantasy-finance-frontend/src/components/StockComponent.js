import React, { Component } from 'react'
import {connect} from "react-redux"
import StockAdapter from "../store/adapters/stockAdapter"
import Chart from "./Chart.js"
import Purchase from "./Purchase.js"
import {withRouter} from "react-router-dom"

class StockComponent extends Component{

 render(){
   return(
     <div>
      <div>
        <Chart stock={this.props.stock}/>
      </div>
        <Purchase stock={this.props.stock}/>
     </div>
   )
 }
}

export default StockComponent
