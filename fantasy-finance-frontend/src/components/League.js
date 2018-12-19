import React, {Component} from 'react';
import { Form,Modal,Input,Button } from 'semantic-ui-react'
import {withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import * as actions from "../store/actions/league"


class League extends Component{
  state = {
    portfolioNameJoin:null
  }
  handleJoin=()=>{
    console.log(this.props.attemptJoinLeague);
  }

  handleViewLeague=()=>{
    this.props.history.push(`/leagues/${this.props.id}`)
  }
  handleChange=()=>{
    console.log("chocho");
  }

  triggerModal=()=>{
    console.log("modal trigger");
  }
  renderModal=()=>{
    if (!this.props.history.location.pathname.includes("profile")){
      return (
      <Modal>
        <Modal.Header>Create A New Portfolio for {this.props.name}</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleJoin}>
              <Form.Field>
                <label>Your Portfolio Name</label>
                <Input name="portfolioName" placeholder='Your Portfolio Name' onChange={this.handleChange}/>
              </Form.Field>
              <Button type='submit'>Create a New League</Button>
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
        {this.renderModal}
        <h1>League Name: {this.props.name}</h1>
        <h2>League Start Balance: {this.props.balance}</h2>
        {this.handleBalance}
        <Button onClick={this.handleViewLeague}>View League</Button>
      </div>
    )
  }
};
function mapStateToProps({portfolio}) {
  return {
    portfolios: portfolio.portfolios
  }
}
export default withRouter(connect(mapStateToProps,actions)(League))
//{this.props.failedCreateLeague ? <Message error header={this.props.message}/> : null}
