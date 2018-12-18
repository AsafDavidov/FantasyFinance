import React from 'react';
import League from './League'
const Leagues = (props) => {
  return (
    <div>
      {props.leagues ? props.leagues.map(league=><League key={league.id} balance={league.start_balance} name={league.name} id={league.id} />):<h1>not</h1>}
    </div>
  )
};

export default Leagues
