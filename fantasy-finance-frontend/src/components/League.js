import React from 'react';
import {connect} from 'react-redux'

const League = ({league,userId}) => {
  return (
    <div>
      <h1>League Name: {league.name}</h1>
      <h2>League Start Balance: {league.start_balance}</h2>
      <h2>Your Balance: {league.portfolios.find((portfolio)=>{return portfolio.user_id===userId}).current_balance}</h2>
    </div>
  )
};
function mapStateToProps(state) {
  return {
    userId: state.user.userId,
  }
}
export default connect(mapStateToProps)(League)
//
