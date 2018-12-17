import React, { Component } from 'react';
import Leagues from "../components/Leagues"
import EditForm from "../components/EditForm"
import {Route, Switch, Redirect } from "react-router-dom"
import { NavTab } from 'react-router-tabs';
import '../Profile.css'
import {connect} from "react-redux"
import UserAdapter from "../store/adapters/userAdapter"


class ProfileContainer extends Component{

  render(){
  return (
    <div>
      <NavTab to="/profile/leagues">Leagues</NavTab>
      <NavTab to="/profile/edit">Edit Profile</NavTab>

      <Switch>
        <Route exact path={`${this.props.match.path}`} render={() => <Redirect replace to={`${this.props.match.path}/leagues`} />} />
        <Route path={`${this.props.match.path}/leagues`} render={() => <Leagues />}/>
        <Route path={`${this.props.match.path}/edit`} component={EditForm} />
      </Switch>
    </div>
  );
};
}
function mapStateToProps({user}) {
  return {
    token: user.jwt
  }
}
export default connect(mapStateToProps)(ProfileContainer)
