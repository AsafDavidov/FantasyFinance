import React from 'react';
import League from './League'
import {connect} from 'react-redux'
const Leagues = (props) => {
  return (
    <div>
      {props.leagues.length>0 ? props.leagues.map(league=><League key={league.id} balance={league.start_balance} name={league.name} id={league.id} />):<h1>not</h1>}
    </div>
  )
};
function mapStateToProps({league}){
  return {
    leagues: league.leagues
  }
}
export default connect(mapStateToProps)(Leagues)
