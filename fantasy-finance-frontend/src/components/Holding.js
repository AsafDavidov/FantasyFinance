import React from 'react';
import {connect} from 'react-redux'
import {Table, Button} from "semantic-ui-react"

const Holding = ({loggedInUser, value,ticker,priceBought,numShares,name,id,changes}) => {
  const handleSellHolding = (givenId) => {
    console.log(givenId);
    console.log("hello");
  }
  return (
    <Table.Row>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{ticker}</Table.Cell>
        <Table.Cell>{numShares}</Table.Cell>
        <Table.Cell>{priceBought}</Table.Cell>
        <Table.Cell>{changes}</Table.Cell>
        <Table.Cell>{value}</Table.Cell>
        {loggedInUser ? <Table.Cell><Button basic color='red' onClick={()=>handleSellHolding(id)}>Sell holding</Button></Table.Cell> : null}
    </Table.Row>
  )
};

export default Holding
