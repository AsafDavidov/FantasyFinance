import React from 'react';
import {connect} from 'react-redux'
import {Table, Button} from "semantic-ui-react"
import * as actions from "../store/actions/holding"

const Holding = ({sellHolding,loggedInUser, value,ticker,priceBought,numShares,name,id,changes}) => {
  const handleSellHolding = (givenId) => {
    sellHolding(givenId)
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

export default connect(null,actions)(Holding)
