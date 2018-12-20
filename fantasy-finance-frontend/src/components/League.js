import React, {Component} from 'react';
import { Message, Form,Modal,Input,Button } from 'semantic-ui-react'
import {withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import * as actions from "../store/actions/league"


class League extends Component{
  state = {
    portfolioNameJoin:null,
    modalOpen:false
  }
  handleJoin=()=>{
    let data = {portfolio: {league_id:this.props.id,name:this.state.portfolioNameJoin,current_balance:this.props.balance}}
    this.props.attemptJoinLeague(data)
  }

  handleViewLeague=()=>{
    this.props.history.push(`/leagues/${this.props.id}`)
  }
  handleChange=(e, semanticInputData)=>{
    this.setState({[semanticInputData.name]:e.target.value})
  }
  handleClose=()=>{
    this.setState({ modalOpen: false })
    this.props.resetJoinLeagueError()
  }
  triggerModal=()=>{
    this.setState({ modalOpen: true })
  }
  renderModal=()=>{
    if (!this.props.history.location.pathname.includes("profile")){
      return (
      <Modal open={this.state.modalOpen} onClose={this.handleClose}>
        <Modal.Header>Create A New Portfolio for {this.props.name}</Modal.Header>
          <Modal.Content>
            {this.props.failedJoinLeague ? <Message error header={this.props.message}/> : null}
            <Form onSubmit={this.handleJoin}>
              <Form.Field>
                <label>Your Portfolio Name</label>
                <Input name="portfolioNameJoin" placeholder='Your Portfolio Name' onChange={this.handleChange}/>
              </Form.Field>
              <Button type='submit'>Create Portfolio</Button>
            </Form>
        </Modal.Content>
      </Modal>)
    }else{
      return null
    }
  }
  handleBalance = () => {
    let foundPortfolio = this.props.portfolios.find((portfolio)=>{return portfolio.league_id==this.props.id})
    if(foundPortfolio){
      return <h2>Your Balance: {foundPortfolio.current_balance}</h2>
    }else{
      return <Button onClick={this.triggerModal}>Sign Up</Button>
    }
  }
  render(){
    return (
      <div>
        {this.renderModal()}
        <h1>League Name: {this.props.name}</h1>
        <h2>League Start Balance: {this.props.balance}</h2>
        {this.handleBalance()}
        <Button onClick={this.handleViewLeague}>View League</Button>
      </div>
    )
  }
};
function mapStateToProps({portfolio,league}) {
  return {
    portfolios: portfolio.portfolios,
    failedJoinLeague: league.failedJoinLeague,
    message: league.message
  }
}
export default withRouter(connect(mapStateToProps,actions)(League))
