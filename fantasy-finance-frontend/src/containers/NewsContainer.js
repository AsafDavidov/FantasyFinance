import React, { Component, Fragment } from 'react';
import NewsStrip from "../components/NewsStrip"

class NewsContainer extends Component{
 render(){
   return(
     <Fragment>
      <NewsStrip />
      <NewsStrip />
     </Fragment>
   )
 }
}
export default NewsContainer
