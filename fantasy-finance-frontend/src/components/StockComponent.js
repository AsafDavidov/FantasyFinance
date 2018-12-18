import React, { Component, Fragment } from 'react'
import {connect} from "react-redux"
import StockAdapter from "../store/adapters/stockAdapter"
import StockChart from "./StockChart.js"
import Purchase from "./Purchase.js"


class StockComponent extends Component{

 render(){
   return(
     <div>
          <div style={{float:"left"}}>
            <StockChart key = {this.props.stock} stock={this.props.stock}/>
          </div>
          <div style={{float:"right", marginRight:"20%"}}>
            <Purchase stock={this.props.stock}/>
          </div>
     </div>
   )
 }
}

export default StockComponent
