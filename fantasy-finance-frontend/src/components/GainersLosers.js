import React, { Component } from 'react';
import StockAdapter from "../store/adapters/stockAdapter"
import {Loader} from "semantic-ui-react"

class GainersLosers extends Component{
  state = {
    gainers: [],
    losers: []
  }
  componentDidMount(){
    this.fetchGainersLosers()
    .then(data=>{
      console.log(data);
    })
  }
  componentWillUnmount(){
    //clearInterval(this.performanceTimer)
  }
  fetchGainersLosers = ()=>{
    return StockAdapter.getGainersLosers()
  }
  render(){
     return(
       <div>
          the gainers and losers
       </div>
     )
  }
 }

export default GainersLosers
