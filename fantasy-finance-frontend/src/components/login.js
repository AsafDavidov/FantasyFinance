import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux"

 class Login extends Component{
  state = {
    username:"",
    password:""
  }
  handleLoginUser = (event) => {
    event.preventDefault()
    console.log("woop");
  }
  render(){
    return(
      <center>
        <Form size={"massive"} onSubmit={this.handleLoginUser}>
        <Form.Field required>
          <label>Username</label>
          <Input placeholder='Username' />
          <label>Password</label>
          <Input placeholder='Password' />
        </Form.Field >
          <Button type='submit'>Submit</Button>
        </Form>
      </center>
    )
  }
}

export default Login
//===========SIGN UP FORM
// <Form size={"massive"}>
// <Form.Field required>
//   <label>First Name</label>
//   <Input placeholder='First name' />
//   <label>Last Name</label>
//   <Input placeholder='Last name' />
//   <label>Username</label>
//   <Input placeholder='Username must be unique!' />
//   <label>Password</label>
//   <Input placeholder='Password' />
//   <label>Password Confirmation</label>
//   <Input placeholder='Password Confirmation' />
// </Form.Field>
// <Form.Field>
//   <label>Profile Picture</label>
//   <Input placeholder='Get link' />
// </Form.Field>
// <Button type='submit'>Submit</Button>
// </Form>
