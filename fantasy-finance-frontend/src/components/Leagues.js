import React from 'react';
import League from './League'
import {Card} from "semantic-ui-react"
const Leagues = (props) => {
  if (props.leagues.length>0){
    return (
      <div>
        <div style={{marginTop:"10px"}}>
          <h1>Active Leagues</h1>
          <Card.Group centered itemsPerRow={5}>{props.leagues.filter(league=>new Date(league.end_date)>=new Date).map(league=>(<Card key={league.id} color='blue'><League endDate={league.end_date}balance={league.start_balance} name={league.name} id={league.id}/></Card>))}</Card.Group>
        </div>
        <div style={{marginTop:"20px"}}>
          <h1>Inactive Leagues</h1>
          <Card.Group centered itemsPerRow={5}>{props.leagues.filter(league=>new Date(league.end_date)<new Date).map(league=>(<Card key={league.id} color='blue'><League endDate={league.end_date}balance={league.start_balance} name={league.name} id={league.id}/></Card>))}</Card.Group>
        </div>
      </div>
    )
  }else{
    return (
      <h1>Join or Create a League!</h1>
    )
  }
};

export default Leagues
