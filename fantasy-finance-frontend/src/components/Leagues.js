import React from 'react';
import League from './League'
import {Card,Loader} from "semantic-ui-react"
const Leagues = (props) => {
  return (
    <div style={{marginTop:"10px"}}>
      {props.leagues ? <Card.Group centered itemsPerRow={5}>{props.leagues.map(league=>(<Card key={league.id} color='blue'><League balance={league.start_balance} name={league.name} id={league.id}/></Card>))}</Card.Group>:<Loader active/>}
    </div>
  )
};

export default Leagues
