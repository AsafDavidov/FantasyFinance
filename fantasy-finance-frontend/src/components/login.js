import React, { Component } from 'react';
import { Header,
         Message,
         Form,
         Input,
         Button,
         Grid,
         Segment,
         Divider } from 'semantic-ui-react'
import {connect} from "react-redux";
import * as actions from '../store/actions/user';
import "../Profile.css"

 class Login extends Component{
  state = {
    loginUsername:"",
    loginPassword:"",
    first_name:"",
    last_name:"",
    username:"",
    password:"",
    passwordConfirmation:""
  }
  handleLoginUser = (event) => {
    event.preventDefault()
    this.props.loginUser({username:this.state.loginUsername, password:this.state.loginPassword})
    this.setState({loginUsername:"",loginPassword:"",first_name:"",last_name:"",username:"",password:""})
  }
  handleNewUser = (event)=> {
    event.preventDefault()
    this.props.createUser({first_name:this.state.first_name, last_name:this.state.last_name, username:this.state.username, password:this.state.password})
    this.setState({loginUsername:"",loginPassword:"",first_name:"",last_name:"",username:"",password:"",passwordConfirmation:""})
  }
  handleChange = (e, semanticInputData)=>{
    this.setState({[semanticInputData.name]:e.target.value})
  }
  checkPasswords = () => {
    if (this.state.password !== ""){
      if (this.state.password === this.state.passwordConfirmation){
        return null
      }else{
        return <Message warning style={{width:"60%",marginLeft:"20%"}} header={"Passwords must equal each other"}/>
      }
    }
  }
  render(){
    return(
      <div style={{marginLeft:"10%",marginTop:"5%",width:"80%"}}>
        <h1 style={{textAlign:'center'}}>Welcome to FantasyTrader</h1>
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
              <Header style={{textAlign:"center"}} as="h1">Login</Header>
              {this.props.failedLogin ? <Message error style={{width:"60%",marginLeft:"20%"}} header={this.props.message}/> : null}
              <Form size={"huge"} onSubmit={this.handleLoginUser}>
              <Form.Field style={{minWidth:"60%"}}>
                <label style={{color:"blue"}}>Username</label>
                <Input name={"loginUsername"} placeholder='Username' value={this.state.loginUsername}onChange={this.handleChange}/>
                <label style={{color:"blue"}}>Password</label>
                <Input type="password" name={"loginPassword"} placeholder='Password' value={this.state.loginPassword}onChange={this.handleChange}/>
              </Form.Field >
                <Button type='submit'>Submit</Button>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Header style={{textAlign:"center"}} as="h1">Sign-Up</Header>
              {this.checkPasswords()}
              {this.props.failedSignup ? <Message error style={{width:"60%",marginLeft:"20%"}} header={this.props.message}/> : null}
              <Form size={"huge"} onSubmit={this.handleNewUser}>
              <Form.Field style={{minWidth:"60%"}}>
                <label style={{color:"blue"}}>First Name</label>
                <Input name={"first_name"} placeholder='First Name' value={this.state.first_name}onChange={this.handleChange}/>
                <label style={{color:"blue"}}>Last Name</label>
                <Input name={"last_name"} placeholder='Last Name' value={this.state.last_name}onChange={this.handleChange}/>
                <label style={{color:"blue"}}>Username</label>
                <Input name={"username"} placeholder='Username must be unique!' value={this.state.username}onChange={this.handleChange}/>
                <label style={{color:"blue"}}>Password</label>
                <Input type="password" name={"password"} placeholder='Password' value={this.state.password}onChange={this.handleChange}/>
                <label style={{color:"blue"}}>Password Confirmation</label>
                <Input type="password" name={"passwordConfirmation"} placeholder='Password Confirmation' value={this.state.passwordConfirmation}onChange={this.handleChange}/>
              </Form.Field>
              <Button type='submit'>Sign Up</Button>
              </Form>
            </Grid.Column>
          </Grid>
          <Divider vertical>Or</Divider>
        </Segment>
      </div>
    )
  }
}
function mapStateToProps({user}){
  return {
    failedLogin: user.failedLogin,
    message: user.message,
    failedSignup: user.failedSignup
  }
}
export default connect(mapStateToProps,actions)(Login)
