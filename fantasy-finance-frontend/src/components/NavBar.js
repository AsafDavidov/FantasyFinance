import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from "react-redux"
import {logoutUser} from '../store/actions/user'
import '../Profile.css'
import withAuth from './withAuth'
const NavBar = (props) => {

  return (
  <div className="navbar">
      <h1 style={{textAlign:"center",fontFamily:"Alike Angular"}}>FantasyFinance</h1>

      <ul className="navlinks">
        <li><NavLink to={"/home"} exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to={"/profile"} activeClassName="active">Profile</NavLink></li>
        <li><NavLink to={"/leagues"} activeClassName="active">Explore Leagues</NavLink></li>
        <li><NavLink to={"/stocks"} activeClassName="active">Search Stocks</NavLink></li>
        <li style={{float:"right"}}><NavLink onClick={()=>props.logoutUser()}to={"/login"} exact activeClassName="active">Logout</NavLink></li>
      </ul>
  </div>
  )
}
function mapDispatchToProps(dispatch){
  return {
    logoutUser: ()=> {dispatch(logoutUser())}
  }
}
export default withAuth(withRouter(connect(null,mapDispatchToProps)(NavBar)))
