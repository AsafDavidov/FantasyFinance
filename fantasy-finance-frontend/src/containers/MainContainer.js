import React, { Component, Fragment } from 'react';
import NewsContainer from "./NewsContainer"
import '../App.css';

class MainContainer extends Component{
 render(){
   return(
     <div id="main-container">
      <NewsContainer />
     </div>
   )
 }
}
export default MainContainer
