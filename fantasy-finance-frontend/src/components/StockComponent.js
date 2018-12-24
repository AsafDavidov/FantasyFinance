import React from 'react'
import StockChart from "./StockChart.js"
import Purchase from "./Purchase.js"

const StockComponent = (props)=> {
   return(
     <div>
          <div style={{float:"left", marginRight:"10%"}}>
            <StockChart key = {props.stock} stock={props.stock}/>
          </div>
          <div style={{float:"right",marginRight:"14%"}}>
            <Purchase stock={props.stock}/>
          </div>
     </div>
   )
 }

export default StockComponent
//<div style={{float:"left", width:"60%"}}>
// <div style={{float:"right",marginRight:"18%"}}>
