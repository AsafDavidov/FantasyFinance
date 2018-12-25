import React, { Component } from 'react';
import NewsStrip from "../components/NewsStrip"
import StockAdapter from "../store/adapters/stockAdapter"
import {Loader} from "semantic-ui-react"

class NewsContainer extends Component{
  state = {
    sectorPerformance: [],
    indexes: []
  }
  componentDidMount(){
    this.fetchRecentNews()
    .then(data=>{
      let indexArray = Object.keys(data.index).map(k=>({symbol: k, percentChange:data.index[k].quote.changePercent}))
      this.setState({sectorPerformance:data.sector,indexes:indexArray})
    })
  }
  fetchRecentNews = () =>{
    return StockAdapter.getSectorPerformance()
  }
 render(){
   if (this.state.sectorPerformance.length>0&&this.state.indexes.length>0){
     return(
       <div>
       <h1>Loaded</h1>
       </div>
     )

   }else{
     return(
       <Loader size="large" active>Loading</Loader>
     )
   }
 }
}

export default NewsContainer
