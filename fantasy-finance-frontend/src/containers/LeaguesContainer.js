import React, { Component, Fragment } from 'react';
import Leagues from "../components/Leagues"
import LeagueAdapter from "../store/adapters/leagueAdapter"
import {Loader, Button, Modal,Message, Form, Input} from 'semantic-ui-react'
import {DateInput,TimeInput,DateTimeInput,DatesRangeInput} from 'semantic-ui-calendar-react';
import * as actions from "../store/actions/league"
import {connect} from "react-redux"
class LeaguesContainer extends Component{
  state = {
    leagues:null,
    selectLeague:null,
    leagueName:null,
    leagueBalance:null,
    portfolioName:null,
    date:""
  }
  componentDidMount(){
    LeagueAdapter.getAllLeagues()
    .then(data=>this.setState({leagues:data}))
  }
  handleNewLeague=()=>{
    let data = {league:{name:this.state.leagueName, start_balance:this.state.leagueBalance, end_date:this.state.date},portfolio:{name:this.state.portfolioName}}
    this.props.attemptPostLeague(data)
    this.setState({...this.state, selectLeague:null,leagueName:null,leagueBalance:null, date:""})
  }
  handleChange= (e, semanticInputData)=>{
    if (semanticInputData.name === "date"){
      this.setState({[semanticInputData.name]:semanticInputData.value})
    }else{
      this.setState({[semanticInputData.name]:e.target.value})
    }
  }
  render(){
    return (
      <Fragment>
        <Modal trigger={<Button>Create a new League</Button>}>
          <Modal.Header>Create A New League</Modal.Header>
            <Modal.Content>
              {this.props.failedCreateLeague ? <Message error header={this.props.message}/> : null}
              <Form onSubmit={this.handleNewLeague}>
                <Form.Field>
                  <label>League Name</label>
                  <Input name="leagueName" placeholder='League Name' onChange={this.handleChange}/>
                  <label>League Balance</label>
                  <Input type="number" name="leagueBalance" placeholder='Starting Balance' onChange={this.handleChange}/>
                  <label>End date for the League</label>
                  <DateInput name="date" value={this.state.date} placeholder="Date" iconPosition="left" onChange={this.handleChange} />
                  <label>Your Portfolio Name</label>
                  <Input name="portfolioName" placeholder='Your Portfolio Name' onChange={this.handleChange}/>
                </Form.Field>
                <Button type='submit'>Create a New League</Button>
              </Form>
          </Modal.Content>
        </Modal>
        {this.state.leagues ? <Leagues leagues={this.state.leagues}/> : <Loader size='medium'>Loading</Loader>}
        {this.state.selectedLeague ? <h1>You chose a league </h1> : null}
      </Fragment>
    )
  }
};
function mapStateToProps({league}){
  return {
    failedCreateLeague: league.failedCreateLeague,
    message: league.message
  }
}
export default connect(mapStateToProps,actions)(LeaguesContainer)
