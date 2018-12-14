import React, { Component } from 'react';
import NewsStrip from "../components/NewsStrip"
import StockAdapter from "../store/adapters/stockAdapter"
import {connect} from "react-redux"

class NewsContainer extends Component{
  state = {
    recentNews: [],
    yourNews: []
  }
  componentDidMount(){
    this.fetchRecentNews()

  }
  fetchRecentNews = () =>{
    StockAdapter.getRecentNews(this.props.token)
    .then(data=>this.setState({recentNews:data}))

  }
  fetchYourNews = () =>{

  }
 render(){
   return(
     <div>
        <NewsStrip class = "strip" news = {this.state.recentNews} />
        <NewsStrip class = "strip" news = {this.state.recentNews} />
     </div>
   )
 }
}
function mapStateToProps(state) {
  return {
    token: state.user.jwt
  }
}
export default connect(mapStateToProps)(NewsContainer)
