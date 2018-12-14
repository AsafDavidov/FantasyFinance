import React, { Component } from 'react'
import {connect} from "react-redux"

class StockComponent extends Component{

 render(){
   return(
     <div>
      {this.props.stock}
     </div>
   )
 }
}
function mapStateToProps(state) {
  return {
    token: state.user.jwt
  }
}
export default connect(mapStateToProps)(StockComponent)
