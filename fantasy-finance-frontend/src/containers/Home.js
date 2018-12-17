import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar'
import MainContainer from './MainContainer'
import withAuth from '../components/withAuth'
class Home extends Component{
 render(){
   return(
     <Fragment>
      <NavBar />
      <MainContainer />
     </Fragment>
   )
 }
}
export default withAuth(Home)
