import React, { Component } from 'react';
import Leagues from "../components/Leagues"
import EditForm from "../components/EditForm"
import {Route, Switch, Redirect } from "react-router-dom"
import { NavTab } from 'react-router-tabs';
import {connect} from 'react-redux'
import '../Profile.css'
//import UserAdapter from "../store/adapters/userAdapter"


class ProfileContainer extends Component{

  render(){
  return (
    <div>
      <NavTab to="/profile/leagues">Leagues</NavTab>
      <NavTab to="/profile/breakdown">Breakdown</NavTab>

      <Switch>
        <Route exact path={`${this.props.match.path}`} render={() => <Redirect replace to={`${this.props.match.path}/leagues`} />} />
        <Route path={`${this.props.match.path}/leagues`} render={() => <Leagues leagues={this.props.leagues}/>}/>
        <Route path={`${this.props.match.path}/edit`} component={EditForm} />
      </Switch>
    </div>
  );
};
}
function mapStateToProps({league}){
  return {
    leagues: league.leagues
  }
}
export default connect(mapStateToProps)(ProfileContainer)
