import React, {Component} from "react"
import {connect} from 'react-redux'

const LeagueShow = ({league}) => {
  return (
    
  )
};
function mapStateToProps({portfolio}) {
  return {
    portfolios: portfolio.portfolios
  }
}
export default connect(mapStateToProps)(LeagueShow)
