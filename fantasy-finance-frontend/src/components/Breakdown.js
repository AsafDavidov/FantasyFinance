import React from 'react';

const Breakdown = ({totalGames,wins,rival}) => {
  return (
    <div>
      <h1>Your biggest rival: {rival}</h1>
      <h1>Total Number of Wins:{wins}</h1>
      <h1>Percentage of wins: {parseFloat((wins/totalGames)*100).toFixed(2)}%, ({wins}/{totalGames})</h1>
    </div>
  )
};

export default Breakdown
