import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'
import Leagues from "../components/Leagues"
import '../Profile.css'
import {connect} from "react-redux"
import UserAdapter from "../store/adapters/userAdapter"

class ProfileContainer extends Component{
  state = {
    leagues:[]
  }

  componentDidMount(){
    this.fetchUserLeagues()
    .then(data=>this.setState({leagues:data}))
  }

  fetchUserLeagues = ()=>{
    return UserAdapter.getUserLeagues(this.props.token)
  }
  fetchUserHoldings = ()=>{

  }
  panes = [
    { menuItem: 'Your Leagues', render: () => <Tab.Pane><Leagues leagues={this.state.leagues}/></Tab.Pane> },
    { menuItem: 'Edit Profile', render: () => <Tab.Pane>Edit Profile Options</Tab.Pane> },
  ]
 render(){
   return(
     <div>
       <Tab panes={this.panes} />
     </div>
   )
 }
}
function mapStateToProps(state) {
  return {
    token: state.user.jwt
  }
}
export default connect(mapStateToProps)(ProfileContainer)
