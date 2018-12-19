import React, { Component } from 'react';
import NewsStrip from "../components/NewsStrip"
import StockAdapter from "../store/adapters/stockAdapter"

class NewsContainer extends Component{
  state = {
    recentNews: [],
    yourNews: []
  }
  componentDidMount(){
    this.fetchRecentNews()
  }
  fetchRecentNews = () =>{
    StockAdapter.getRecentNews()
    .then(data=>this.setState({recentNews:data}))
  }
  fetchYourNews = () =>{}
 render(){
   return(
     <div>
        <NewsStrip class = "strip" news = {this.state.recentNews} />
        <NewsStrip class = "strip" news = {this.state.recentNews} />
     </div>
   )
 }
}

export default NewsContainer
