import React, { Component } from 'react'
import StockChart from "./StockChart.js"
import Purchase from "./Purchase.js"

class StockComponent extends Component{
 render(){
   return(
     <div>
          <div style={{marginLeft: "-15%",float:"left"}}>
            <StockChart key = {this.props.stock} stock={this.props.stock}/>
          </div>
          <div style={{float:"right",marginRight:"15%"}}>
            <Purchase stock={this.props.stock}/>
          </div>
     </div>
   )
 }
}

export default StockComponent
