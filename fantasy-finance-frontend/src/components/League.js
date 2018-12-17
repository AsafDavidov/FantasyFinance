import React from 'react';
import {connect} from 'react-redux'

const League = ({league,portfolios}) => {
  return (
    <div>
      <h1>League Name: {league.name}</h1>
      <h2>League Start Balance: {league.start_balance}</h2>
      <h2>Your Balance: {portfolios.find((portfolio)=>{return portfolio.league_id==league.id}).current_balance}</h2>
    </div>
  )
};
function mapStateToProps({portfolios}) {
  return {
    portfolios: portfolios.portfolios
  }
}
export default connect(mapStateToProps)(League)
