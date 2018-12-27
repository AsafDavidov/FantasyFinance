import React from 'react'
import StockChart from "./StockChart.js"
import Purchase from "./Purchase.js"

const StockComponent = (props)=> {
   return(
     <div style={{marginTop:"20px"}}>
          <div style={{float:"left", marginLeft:"1%",marginRight:"8%"}}>
            <StockChart key = {props.stock} stock={props.stock}/>
          </div>
          <div style={{width:"25%",float:"right",marginRight:"12%"}}>
            <Purchase stock={props.stock}/>
          </div>
     </div>
   )
 }

export default StockComponent
