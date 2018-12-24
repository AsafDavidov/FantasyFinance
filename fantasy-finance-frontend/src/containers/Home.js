import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar'
import MainContainer from './MainContainer'
import withAuth from '../components/withAuth'
import {withRouter} from 'react-router-dom'
class Home extends Component{
 render(){
   return(
     <Fragment>
      <NavBar activePath={this.props.history.location.pathname}/>
      <MainContainer />
     </Fragment>
   )
 }
}
export default withAuth(withRouter(Home))
