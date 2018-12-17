import React from 'react';
import League from './League'
import {connect} from 'react-redux'
const Leagues = (props) => {
  return (
    <div>
      {props.leagues.length>0 ? props.leagues.map(league=><League key={league.id} league={league}/>):<h1>not</h1>}
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
