import React, { Component } from 'react';
import NewsContainer from "./NewsContainer"
import ProfileContainer from "./ProfileContainer"
import StockContainer from "./StockContainer"
import LeaguesContainer from "./LeaguesContainer"

import '../App.css';
import { Router, Route, Switch, withRouter} from 'react-router-dom'
import {history} from "../index"
import withAuth from '../components/withAuth'
class MainContainer extends Component{
 render(){
   return(
       <div style={{position:"relative",overflow:"auto"}}id="main-container">
       <Router history={history}>
          <Switch>
            <Route path="/home" component={NewsContainer}/>
            <Route path="/profile" component={ProfileContainer}/>
            <Route path="/stocks" component={StockContainer}/>
            <Route path="/leagues" component={LeaguesContainer}/>
          </Switch>
        </Router>
       </div>
   )
 }
}
export default withAuth(withRouter(MainContainer))
