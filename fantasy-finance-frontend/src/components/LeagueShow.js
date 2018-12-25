import React, {Component} from "react"
import {withRouter} from "react-router"
import LeagueAdapter from "../store/adapters/leagueAdapter"
import {Loader, Table} from "semantic-ui-react"
import PortfolioRow from './PortfolioRow'
import _ from "lodash"

class LeagueShow extends Component{
  state = {
    league: null,
    portfolios: []
  }
  componentDidMount(){
    this.timer = setInterval(()=>this.fetchLeagueInfo()
    .then(data=>{
      let sortedPortfolios = _.sortBy(data.portfolios,'value')
      this.setState({league:data.league, portfolios:sortedPortfolios})
    }),1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  fetchLeagueInfo = ()=>{
    return LeagueAdapter.getOneLeague(parseInt(this.props.match.params.id))
  }
  render(){
    if (!!this.state.league){
      return(
        <div>
        <h1>{this.state.league.name}</h1>
          <Table celled>
            <Table.Header>
              <Table.Row onClick={(event)=>this.handleClick(event.target)}>
                <Table.HeaderCell id="ranking">Rank</Table.HeaderCell>
                <Table.HeaderCell id="name">Name</Table.HeaderCell>
                <Table.HeaderCell id="username">Username</Table.HeaderCell>
                <Table.HeaderCell id="value">Value</Table.HeaderCell>
                <Table.HeaderCell id="gainloss">Gain/Loss (%)</Table.HeaderCell>
                <Table.HeaderCell id="gainloss">Details</Table.HeaderCell>
              </Table.Row>
           </Table.Header>
            <Table.Body>
              {this.state.portfolios.map((p,index)=><PortfolioRow key={p.name} id={p.id} number={index} name={p.name} user={p.username} value={p.value} change={p.total_change}/>)}
            </Table.Body>
            </Table>
        </div>
      )
    }else{
      return <Loader active size="large">Finding League Details</Loader>
    }
  }
};

export default withRouter(LeagueShow)
