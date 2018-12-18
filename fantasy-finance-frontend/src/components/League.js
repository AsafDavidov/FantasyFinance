import React from 'react';
import {connect} from 'react-redux'

const League = ({name,id,portfolios,balance}) => {
  const handleBalance = () => {
    let foundPortfolio = portfolios.find((portfolio)=>{return portfolio.league_id==id})
    if(foundPortfolio){
      return <h2>Your Balance: foundPortfolio.current_balance</h2>
    }else{
      return <h2>JOIN!</h2>
    }
  }
  return (
    <div>
      <h1>League Name: {name}</h1>
      <h2>League Start Balance: {balance}</h2>
      {handleBalance()}
    </div>
  )
};
function mapStateToProps({portfolio}) {
  return {
    portfolios: portfolio.portfolios
  }
}
export default connect(mapStateToProps)(League)
