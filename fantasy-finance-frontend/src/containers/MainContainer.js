import React, { Component } from 'react';
import NewsContainer from "./NewsContainer"
import ProfileContainer from "./ProfileContainer"
import StockContainer from "./StockContainer"
import LeaguesContainer from "./LeaguesContainer"
import LeagueShow from "../components/LeagueShow"
import PortfolioShow from "../components/PortfolioShow"
import AboutPage from "../components/AboutPage"

import '../App.css';
import { Router, Route, Switch, withRouter} from 'react-router-dom'
import {history} from "../index"
import withAuth from '../components/withAuth'

class MainContainer extends Component{
 render(){
   return(
       <div id="main-container">
       <Router history={history}>
          <Switch>
            <Route path="/home" component={NewsContainer}/>
            <Route path="/profile" component={ProfileContainer}/>
            <Route exact path="/stocks" component={StockContainer}/>
            <Route path="/stocks/:id" component={StockContainer}/>
            <Route exact path="/leagues" component={LeaguesContainer}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route path="/league/:id" component={LeagueShow}/>
            <Route path="/portfolios/:id" component={PortfolioShow}/>
          </Switch>
        </Router>
       </div>
   )
 }
}
export default withAuth(withRouter(MainContainer))
//render = {(routerProps)=><StockComponent stock={routerProps.match.params.id}/>}
