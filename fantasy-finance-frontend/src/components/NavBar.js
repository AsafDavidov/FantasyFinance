import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux"
import {logoutUser} from '../store/actions/user'

const NavBar = (props) => {
  return (
  <div>
      <center>
        <h1>Logo</h1>
      </center>
      <center>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/leagues"}>Explore Leagues</NavLink>
        <NavLink to={"/stocks"}>Search Stocks</NavLink>
        <NavLink onClick={()=>props.logoutUser()}to={"/"}>Logout</NavLink>
      </center>
  </div>
  )
}
function mapDispatchToProps(dispatch){
  return {
    logoutUser: ()=> {dispatch(logoutUser())}
  }
}
export default connect(null,mapDispatchToProps)(NavBar)
