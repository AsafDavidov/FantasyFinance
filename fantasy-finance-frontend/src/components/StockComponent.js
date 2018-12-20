import React from 'react'
import StockChart from "./StockChart.js"
import Purchase from "./Purchase.js"

const StockComponent = (props)=> {
   return(
     <div>
          <div style={{marginLeft: "-15%",float:"left"}}>
            <StockChart key = {props.stock} stock={props.stock}/>
          </div>
          <div style={{float:"right",marginRight:"15%"}}>
            <Purchase stock={props.stock}/>
          </div>
     </div>
   )
 }

export default StockComponent
