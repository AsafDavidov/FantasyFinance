import React, { Component, Fragment } from 'react';
import NewsContainer from "./NewsContainer"
import ProfileContainer from "./ProfileContainer"
import StockContainer from "./StockContainer"
import NavBar from "../components/NavBar"
import '../App.css';
import { Router, Route, Switch, withRouter} from 'react-router-dom'
import {history} from "../index"
import withAuth from '../components/withAuth'
class MainContainer extends Component{
 render(){
   return(
     <Fragment>
       <NavBar />
       <div id="main-container">
       <Router history={history}>
          <Switch>
            <Route path="/home" component={NewsContainer}/>
            <Route path="/profile" component={ProfileContainer}/>
            <Route path="/stocks" component={StockContainer}/>
          </Switch>
        </Router>
       </div>
    </Fragment>
   )
 }
}
export default withAuth(withRouter(MainContainer))
