import React, {Component} from "react"
import {withRouter} from "react-router"
import LeagueAdapter from "../store/adapters/leagueAdapter"
import {Loader, Table} from "semantic-ui-react"
import PortfolioRow from './PortfolioRow'
import _ from "lodash"

class LeagueShow extends Component{
  state = {
    league: null,
    portfolios: [],
    finished: null
  }
  componentDidMount(){
    this.timer = setInterval(()=>this.fetchLeagueInfo()
    .then(data=>{
      let sortedPortfolios = _.sortBy(data.portfolios,'value')
      let leagueEndDate = new Date(data.league.end_date)
      let today = new Date()
      if (today>leagueEndDate){
        this.setState({league:data.league, portfolios:sortedPortfolios,finished:true})
      }else{
        this.setState({league:data.league, portfolios:sortedPortfolios,finished:false})
      }
    }),1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  fetchLeagueInfo = ()=>{
    return LeagueAdapter.getOneLeague(parseInt(this.props.match.params.id))
  }
  calculateDaysLeft = ()=>{
    const leagueEndDate = new Date(this.state.league.end_date)
    const today = new Date()
    const diffTime = leagueEndDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24))
    return diffDays
  }
  render(){
    console.log(this.state.league);
    if (!!this.state.league){
      return(
        <div>
        <h1>{this.state.league.name}</h1>
        {this.state.league.finished ? <h2>This League has ended</h2> : <h2>Days left to invest: {this.calculateDaysLeft()}</h2>}
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
