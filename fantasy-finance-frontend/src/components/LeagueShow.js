import React, {Component} from "react"
import {withRouter} from "react-router"
import LeagueAdapter from "../store/adapters/leagueAdapter"
import {Loader} from "semantic-ui-react"
import PortfolioCard from './PortfolioCard'
class LeagueShow extends Component{
  state = {
    league: null,
    portfolios: []
  }
  componentDidMount(){
    this.fetchLeagueInfo()
    .then(data=>{
      this.setState({league:data.league, portfolios:data.portfolios})
    })
  }
  fetchLeagueInfo = ()=>{
    return LeagueAdapter.getOneLeague(parseInt(this.props.match.params.id))
  }
  render(){
    return (
      <div>
        {this.state.league ? <h1>{this.state.league.name}</h1> : <Loader active/> }
        {this.state.portfolios ? this.state.portfolios.map(p=><PortfolioCard key={p.name} portfolio={p} />):null}
      </div>
    )
  }
};

export default withRouter(LeagueShow)
