import React, { Component, Fragment } from 'react';
import Leagues from "../components/Leagues"
import LeagueAdapter from "../store/adapters/leagueAdapter"
import {Loader} from 'semantic-ui-react'

class LeaguesContainer extends Component{
  state = {
    leagues:null
  }
  componentDidMount(){
    LeagueAdapter.getAllLeagues()
    .then(data=>this.setState({leagues:data}))
  }
  render(){
    return (
      <Fragment>
        {this.state.leagues ? <Leagues leagues={this.state.leagues}/> : <Loader size='medium'>Loading</Loader>}
      </Fragment>
    )
  }
};

export default LeaguesContainer
