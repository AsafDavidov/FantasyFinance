import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";
import * as actions from '../store/actions/user';

const NavBar = () => {

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
        <NavLink to={"/"}>Logout</NavLink>
      </center>
  </div>
  )
}

export default NavBar