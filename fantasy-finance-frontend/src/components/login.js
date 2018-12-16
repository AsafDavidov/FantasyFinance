import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react'
import {connect} from "react-redux";
import * as actions from '../store/actions/user';


 class Login extends Component{
  state = {
    login:{
      username:"",
      password:""
    },
    signUp:{
      first_name:"",
      last_name:"",
      username:"",
      password:"",
      avatar:null
    }
  }
  handleLoginUser = (event) => {
    event.preventDefault()
    this.props.fetchUser(this.state.login)
  }
  handleNewUser = (event)=> {
    event.preventDefault()
    this.props.createUser(this.state.signUp)
  }
  handleChange = ({name,value})=>{
    switch (name) {
      case "lUsername":
        this.setState(()=>({...this.state,login:{...this.state.login,username:value}}))
        break;
      case "lPassword":
        this.setState(()=>({...this.state,login:{...this.state.login,password:value}}))
        break;
      case "sFirstName":
        this.setState(()=>({...this.state,signUp:{...this.state.signUp,first_name:value}}))
        break;
      case "sLastName":
        this.setState(()=>({...this.state,signUp:{...this.state.signUp,last_name:value}}))
        break;
      case "sUsername":
        this.setState(()=>({...this.state,signUp:{...this.state.signUp,username:value}}))
        break;
      case "sPassword":
        this.setState(()=>({...this.state,signUp:{...this.state.signUp,password:value}}))
        break;
      case "Avatar":
        this.setState(()=>({...this.state,signUp:{...this.state.signUp,avatar:value}}))
        break;
    }
  }
  render(){
    return(
      <div>
        <center>
          <h1>Login</h1>
          <Form size={"massive"} onSubmit={this.handleLoginUser}>
          <Form.Field required>
            <label>Username</label>
            <Input name={"lUsername"} placeholder='Username' onChange={(e)=>this.handleChange(e.target)}/>
            <label>Password</label>
            <Input name={"lPassword"} placeholder='Password' onChange={(e)=>this.handleChange(e.target)}/>
          </Form.Field >
            <Button type='submit'>Submit</Button>
          </Form>
        </center>
        <center>
          <br></br>
          <h1>Sign-Up</h1>
          <Form size={"large"} onSubmit={this.handleNewUser}>
          <Form.Field >
            <label>First Name</label>
            <Input name={"sFirstName"} placeholder='First Name' onChange={(e)=>this.handleChange(e.target)}/>
            <label>Last Name</label>
            <Input name={"sLastName"} placeholder='Last Name' onChange={(e)=>this.handleChange(e.target)}/>
            <label>Username</label>
            <Input name={"sUsername"} placeholder='Username must be unique!' onChange={(e)=>this.handleChange(e.target)}/>
            <label>Password</label>
            <Input name={"sPassword"} placeholder='Password' onChange={(e)=>this.handleChange(e.target)}/>
            <label>Profile Picture</label>
            <Input name={"Avatar"} type="file" placeholder='Get link' onChange={(e)=>this.handleChange(e.target)}/>
          </Form.Field>
          <Button type='submit'>Sign Up</Button>
          </Form>
        </center>
      </div>
    )
  }
}

export default connect(null,actions)(Login)
