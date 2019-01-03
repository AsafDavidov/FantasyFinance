import React from 'react';
import League from './League'
import {Card} from "semantic-ui-react"
const Leagues = (props) => {
  return (
    <div>
      <div style={{marginTop:"10px"}}>
        <h1>Active Leagues</h1>

        {props.leagues.length>0 ? <Card.Group centered itemsPerRow={5}>{props.leagues.filter(league=>new Date(league.end_date)<=new Date).map(league=>(<Card key={league.id} color='blue'><League endDate={league.end_date}balance={league.start_balance} name={league.name} id={league.id}/></Card>))}</Card.Group>:<h1>Go Join a League!</h1>}
      </div>
      <div style={{marginTop:"20px"}}>
        <h1>Inactive Leagues</h1>
        {props.leagues.length>0 ? <Card.Group centered itemsPerRow={5}>{props.leagues.filter(league=>new Date(league.end_date)>new Date).map(league=>(<Card key={league.id} color='blue'><League endDate={league.end_date}balance={league.start_balance} name={league.name} id={league.id}/></Card>))}</Card.Group>:<h1>Go Join a League!</h1>}
      </div>
    </div>
  )
};

export default Leagues
