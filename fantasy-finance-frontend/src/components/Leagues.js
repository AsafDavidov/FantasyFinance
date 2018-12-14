import React from 'react';
import League from './League'
const Leagues = (props) => {
  return (
    <div>
      {props.leagues.length>0 ? props.leagues.map(league=><League key={league.id} league={league}/>):<h1>not</h1>}
    </div>
  )
};
export default Leagues
