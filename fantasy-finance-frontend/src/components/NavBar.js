import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from "react-redux"
import {logoutUser} from '../store/actions/user'
import '../Profile.css'

const NavBar = (props) => {
  return (
  <div className="navbar">
      <h1 style={{textAlign:"center"}}>FantasyFinance</h1>

      <ul className="navlinks">
        <li><NavLink to={"/home"} exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to={"/profile"} activeClassName="active">Profile</NavLink></li>
        <li><NavLink to={"/leagues"} exact activeClassName="active">Explore Leagues</NavLink></li>
        <li><NavLink to={"/stocks"} activeClassName="active">Search Stocks</NavLink></li>
        <li style={{float:"right"}}><NavLink exact onClick={()=>props.logoutUser()}to={"/"} exact activeClassName="active">Logout</NavLink></li>
      </ul>
  </div>
  )
}
function mapDispatchToProps(dispatch){
  return {
    logoutUser: ()=> {dispatch(logoutUser())}
  }
}
export default withRouter(connect(null,mapDispatchToProps)(NavBar))
