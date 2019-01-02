import React, { Component } from 'react';
import Leagues from "../components/Leagues"
import Breakdown from "../components/Breakdown"
import UserAdapter from "../store/adapters/userAdapter"
import {Route, Switch, Redirect } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import '../Profile.css'

class ProfileContainer extends Component{
  state = {
    rival:null,
    totalCompletedGames:null,
    totalWonGames:null,
    fullName:null
  }
  componentDidMount(){
    this.fetchUserInformation()
    .then(data=>{
      this.setState({fullName:data.fullName,rival:data.rival,totalWonGames:data.wins_stats.wins,totalCompletedGames:data.wins_stats.total_leagues})
    })
  }
  fetchUserInformation = ()=>{
    return UserAdapter.getUserProfileInformation()
  }

  render(){
  return (
    <div style={{marginTop:"10px"}}>
      <h1>{this.state.fullName}'s Profile</h1>
      <div>
        <ul className="profile-nav-links">
          <li><NavLink activeClassName="active" to="/profile/leagues">Leagues/Portfolio</NavLink></li>
          <li><NavLink activeClassName="active" to="/profile/breakdown">Breakdown</NavLink></li>
        </ul>
      </div>
      <br></br>
      <Switch>
        <Route exact path={`${this.props.match.path}`} render={() => <Redirect replace to={`${this.props.match.path}/leagues`} />} />
        <Route path={`${this.props.match.path}/leagues`} render={() => <Leagues leagues={this.props.leagues}/>}/>
        <Route path={`${this.props.match.path}/breakdown`} render={()=><Breakdown totalGames={this.state.totalCompletedGames}wins={this.state.totalWonGames} rival={this.state.rival}/>} />
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
