import React, { Component } from 'react';
import Leagues from "../components/Leagues"
import Breakdown from "../components/Breakdown"
import UserAdapter from "../store/adapters/userAdapter"
import {Route, Switch, Redirect } from "react-router-dom"
import { NavTab } from 'react-router-tabs';
import {connect} from 'react-redux'
import '../Profile.css'

class ProfileContainer extends Component{
  state = {
    rival:null
  }
  componentDidMount(){
    this.fetchUserInformation()
    .then(data=>this.setState({rival:data.rival}))
  }
  fetchUserInformation = ()=>{
    return UserAdapter.getUserProfileInformation()
  }

  render(){
  return (
    <div style={{marginTop:"10px"}}>
      <NavTab className="profile-nav-tabs" to="/profile/leagues">Leagues</NavTab>
      <NavTab className="profile-nav-tabs" to="/profile/breakdown">Breakdown</NavTab>

      <Switch>
        <Route exact path={`${this.props.match.path}`} render={() => <Redirect replace to={`${this.props.match.path}/leagues`} />} />
        <Route path={`${this.props.match.path}/leagues`} render={() => <Leagues leagues={this.props.leagues}/>}/>
        <Route path={`${this.props.match.path}/breakdown`} render={()=><Breakdown rival={this.state.rival}/>} />
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
