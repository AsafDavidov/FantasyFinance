import React, {Fragment} from 'react';
import {Button} from "semantic-ui-react"
import {Link} from "react-router-dom"

const Breakdown = ({totalGames,wins,rival}) => {
  const handleRender = ()=>{
    if (totalGames<1){
      return(
          <Fragment>
            <h1>No Games Completed Yet...</h1>
            <h1>Go Join the fun</h1>
            <Button size="huge" as={Link} to="/leagues">Explore Leagues</Button>
          </Fragment>
        )
    }else{
      return(
        <Fragment>
          <h1>Your biggest rival: {rival}</h1>
          <h1>Total Number of Wins:{wins}</h1>
          <h1>Percentage of wins: {parseFloat((wins/totalGames)*100).toFixed(2)}%, ({wins}/{totalGames})</h1>
        </Fragment>
      )
    }
  }
  return (
    <div style={{marginTop:"10px"}}>
      {handleRender()}
    </div>
  )
};

export default Breakdown
