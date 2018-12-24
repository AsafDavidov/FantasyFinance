import React, { Component } from 'react';
import { Message, Form, Input, Button } from 'semantic-ui-react'
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
  }
  handleChange = (e, semanticInputData)=>{
    this.setState({[semanticInputData.name]:e.target.value})
  }
  checkPasswords = () => {
    if (this.state.password != ""){
      if (this.state.password === this.state.passwordConfirmation){
        return null
      }else{
        return <Message warning style={{width:"70%"}} header={"Passwords must equal each other"}/>
      }
    }
  }
  render(){
    return(
      <div style={{marginLeft:"2%",marginTop:"2%",width:"40%"}}>
        <h1>Login</h1>
        {this.props.failedLogin ? <Message error style={{width:"70%"}} header={this.props.message}/> : null}
        <Form size={"huge"} onSubmit={this.handleLoginUser}>
        <Form.Field style={{width:"70%"}}required>
          <label>Username</label>
          <Input name={"loginUsername"} placeholder='Username' value={this.state.loginUsername}onChange={this.handleChange}/>
          <label>Password</label>
          <Input type="password" name={"loginPassword"} placeholder='Password' value={this.state.loginPassword}onChange={this.handleChange}/>
        </Form.Field >
          <Button type='submit'>Submit</Button>
        </Form>
        <br></br>
        <h1>Sign-Up</h1>
        {this.checkPasswords()}
        <Form size={"huge"} onSubmit={this.handleNewUser}>
        <Form.Field style={{width:"70%"}}>
          <label>First Name</label>
          <Input name={"first_name"} placeholder='First Name' value={this.state.first_name}onChange={this.handleChange}/>
          <label>Last Name</label>
          <Input name={"last_name"} placeholder='Last Name' value={this.state.last_name}onChange={this.handleChange}/>
          <label>Username</label>
          <Input name={"username"} placeholder='Username must be unique!' value={this.state.username}onChange={this.handleChange}/>
          <label>Password</label>
          <Input type="password" name={"password"} placeholder='Password' value={this.state.password}onChange={this.handleChange}/>
          <label>Password Confirmation</label>
          <Input type="password" name={"passwordConfirmation"} placeholder='Password Confirmation' value={this.state.passwordConfirmation}onChange={this.handleChange}/>

        </Form.Field>
        <Button type='submit'>Sign Up</Button>
        </Form>
      </div>
    )
  }
}
function mapStateToProps({user}){
  return {
    failedLogin: user.failedLogin,
    message: user.message
  }
}
export default connect(mapStateToProps,actions)(Login)
