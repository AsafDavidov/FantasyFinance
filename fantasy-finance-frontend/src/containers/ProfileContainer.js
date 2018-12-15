import React, { Component } from 'react';
import Leagues from "../components/Leagues"
import EditForm from "../components/EditForm"
import {Route, Switch, Redirect } from "react-router-dom"
import { RoutedTabs, NavTab } from 'react-router-tabs';
import '../Profile.css'
import {connect} from "react-redux"
import UserAdapter from "../store/adapters/userAdapter"
//import 'styles/react-router-tabs.css';

class ProfileContainer extends Component{
  state = {
    leagues:[]
  }

  componentDidMount(){
    this.fetchUserLeagues()
    .then(data=>this.setState({leagues:data}))
  }

  fetchUserLeagues = ()=>{
    return UserAdapter.getUserLeagues(this.props.token)
  }
  fetchUserHoldings = ()=>{

  }
  render(){
  return (
    <div>
      <NavTab to="/profile/leagues">Admins</NavTab>
      <NavTab to="/profile/edit">Moderators</NavTab>

      <Switch>
        <Route exact path={`${this.props.match.path}`} render={() => <Redirect replace to={`${this.props.match.path}/leagues`} />} />
        <Route path={`${this.props.match.path}/leagues`} render={() => <Leagues leagues={this.state.leagues}/>} />
        <Route path={`${this.props.match.path}/edit`} component={EditForm} />
      </Switch>
    </div>
  );
};
}
function mapStateToProps(state) {
  return {
    token: state.user.jwt
  }
}
export default connect(mapStateToProps)(ProfileContainer)
