import React from 'react';
import League from './League'
import {connect} from 'react-redux'
const Leagues = (props) => {
  console.log(props.leagues);
  console.log(props.leagues[0])
  return (
    <div>
      {props.leagues.length>0 ? props.leagues.map(league=><League key={league.id} balance={league.start_balance} name={league.name} id={league.id} />):<h1>not</h1>}
    </div>
  )
};
function mapStateToProps({leagues}){
  console.log(leagues);
  return {
    leagues: leagues.leagues
  }
}
export default connect(mapStateToProps)(Leagues)
