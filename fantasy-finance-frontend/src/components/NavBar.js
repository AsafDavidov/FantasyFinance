import React from 'react';
import {NavLink,Link, withRouter} from 'react-router-dom'
import {connect} from "react-redux"
import {logoutUser} from '../store/actions/user'
import '../Profile.css'
import withAuth from './withAuth'
const NavBar = (props) => {
  return (
  <div className="navbar">
      <h1 style={{ color: "#FF5722",fontSize: "38px",textAlign:"center",fontFamily:"Alike Angular"}}>FantasyTrader</h1>

      <ul className="navlinks">
        <li><NavLink to={"/home"} exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to={"/profile"} activeClassName="active">Profile</NavLink></li>
        <li><NavLink to={"/leagues"} activeClassName="active">Explore New Leagues</NavLink></li>
        <li><NavLink to={"/stocks"} activeClassName="active">Search Stocks</NavLink></li>
        <li><NavLink to={"/about"} activeClassName="active">About</NavLink></li>
        <li style={{float:"right"}}><NavLink onClick={()=>props.logoutUser()}to={"/login"} exact activeClassName="active">Logout</NavLink></li>
        <li style={{float:"right"}}><Link to={"/profile"}>Hi, {props.username}!</Link></li>
      </ul>
  </div>
  )
}
function mapStateToProps({user}){
  return {
    username: user.username
  }
}
function mapDispatchToProps(dispatch){
  return {
    logoutUser: ()=> {dispatch(logoutUser())}
  }
}
export default withAuth(withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar)))
