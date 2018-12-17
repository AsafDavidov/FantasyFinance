import React from 'react';
import {connect} from 'react-redux'

const League = ({name,id,portfolios,balance}) => {
  // console.log(id);
  //console.log(portfolios.find((portfolio)=>{return portfolio.league_id==league.id}));
  return (
    <div>
      <h1>League Name: {name}</h1>
      <h2>League Start Balance: {balance}</h2>
      <h2>Your Balance: {portfolios.find((portfolio)=>{return portfolio.league_id==id}).current_balance}</h2>
    </div>
  )
};
function mapStateToProps({portfolios}) {
  return {
    portfolios: portfolios.portfolios
  }
}
export default connect(mapStateToProps)(League)
